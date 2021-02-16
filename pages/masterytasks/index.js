import React, { useReducer } from 'react';
import AppHeader from '../../components/AppHeader';
import serverSideProps from '../../libs/functions/serverSideProps';
import ScoreGraph from '../../components/ScoreGraph';
import FeedbackTable from '../../components/bootcamper/FeedbackTable';
import styles from './masterytasks.module.css';
import useGraphSelect from '../../libs/customHooks/useGraphSelect';
import { sortMasteryData } from '../../libs/functions/sortFeedbackData';
import getTaskData from '../../libs/functions/getTaskData';

export default function MasteryTasks({ session }) {
	const initialState = {
		bootcamperName: session.name,
		masteryFeedbackData: [...sortMasteryData(session.name, session)],
		selectedData: {},
	};
	const [state, dispatch] = useReducer(useGraphSelect, initialState);

//	console.log(session.githubData);

	return (
		<>
			<AppHeader session={session} />
			<div className={styles.container}>
				<h1 className={styles.title}>{session.name}'s Mastery Task Score</h1>
				<div className={styles.graph}>
					<ScoreGraph
						feedbackData={state.masteryFeedbackData}
						bootcamperName={state.bootcamperName}
						taskType={'Mastery'}
						setSelectedData={(object) =>
							dispatch({
								type: 'week selected',
								payload: object,
							})
						}
					/>
					<br></br>
				</div>
				<div className={styles.table}>
					<FeedbackTable selectedData={state.selectedData} />
				</div>
				<br></br>
				<br></br>
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	async function fetchFeedbackData(url, uid, token) {
		const res = await fetch(`${url}feedback?uid=${uid}&type=mastery`, {
			headers: { authorization: `Bearer ${token}` },
		}); // mastery task score
		const { data } = await res.json();
		return data;
	}

	return serverSideProps(context, fetchFeedbackData, (githubToken) => {
		// deals with searching the repos for mastery tasks and looks for pulls requests and returns the comments
		return getTaskData(githubToken, 'mastery');
	});
}
