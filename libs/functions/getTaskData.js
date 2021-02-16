import { Octokit } from '@octokit/core';

export default async function getTaskData(githubToken, taskType) {
	const octokit = new Octokit({
		auth: `token ${githubToken}`,
	});

	// This section gets all the repositories that the user has access to by looping over until it has every repo.
	let i = 1;
	let response = [];
	let nextPage;
	do {
		nextPage = await octokit.request('GET /user/repos', {
			per_page: 100,
			page: i,
		});
		response = [...response, ...nextPage.data];
		i++;
	} while (nextPage.data.length > 1);

	// Here we filter out all of the unneccesary reops and leave only the ones with mastery in their name.
	const repos = response.filter((repo) => {
		return repo.name.toLowerCase().includes(taskType);
	});

	let pullComments = [];

	repos.forEach(async (repo) => {
		// pullUrl looks like this "/repos/{organisation}/{repository}/pulls"
		//console.log(repo);
		let pullUrl = repo.pulls_url.slice(22, -9);
	console.log(pullUrl);

		//This is to access code blocks and specific comments in feedback
		let response = await octokit.request(`GET ${pullUrl}/comments`, {
			per_page: 100,
		});

		pullComments.push(response.data);
		// Commented out as it is erroring out for me, dont know why
		// This is to access overall pull req comment
		// response = await octokit.request(`GET ${pullUrl}/1/reviews`, {
		//   per_page: 100,
		// });

		// pullComments.push(response.data);
	});

	return pullComments;
}
