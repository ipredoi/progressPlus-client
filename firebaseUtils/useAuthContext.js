// Create the authContext to pass the user properties between pages as long as an user is authenticated

import { useEffect, useState, createContext, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import nookies from 'nookies';

// import firebase initialisation function
import firebaseInit from './firebaseInit';

// import useRouter hook from nextjs
import { useRouter } from 'next/router';

// call the function to initialise firebase
firebaseInit();

//useUser custom hook

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	//set the initial state of the user to null
	const [user, setUser] = useState();
	//state for navbar
	const [open, setOpen] = useState(false);

	//save the useRouter hook in a const named router
	const router = useRouter();

	function login() {
		var provider = new firebase.auth.GithubAuthProvider();
		firebase.auth().signInWithRedirect(provider);
		provider.addScope('repo');
		// [END auth_github_provider_scopes]

		// [START auth_github_provider_params]
		provider.setCustomParameters({
			allow_signup: 'false',
		});
		// [END auth_github_provider_params]
	}

	useEffect(() => {
		firebase
			.auth()
			.getRedirectResult()
			.then(function (result) {
				if (result.credential) {
					// This gives you a GitHub Access Token. You can use it to access the GitHub API.
					var gitHubApiToken = result.credential.accessToken;
					nookies.set(null, 'gitHubApiToken', gitHubApiToken, { path: '/' });
					window.location = '/register';
				}
			})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				console.log(email);
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
	}, []);

	// logOut function

	function logOut() {
		// after user logs out, he will be redirected to the login page using next useRouter hook
		return firebase
			.auth()
			.signOut()
			.then(() => {
				router.push('/');
			})
			.catch((e) => {
				console.log(error(e));
			});
	}

	useEffect(() => {
		return firebase.auth().onAuthStateChanged(async (user) => {
			//console.log("auth changed");
			//console.log(user ? user : "Nothing");
			if (!user) {
				// console.log('no user found');
				setUser(null);
				// nookies.destroy(null, 'token');
				nookies.set(null, 'token', '', { path: '/' });
				nookies.set(null, 'gitHubApiToken', '', { path: '/' });
				return;
			}

			const token = await user.getIdToken();
			//	console.log(token);
			setUser(user);
			nookies.set(null, 'token', token, { path: '/' });
		});
	}, []);

	//return the Auth context provider
	return (
		<AuthContext.Provider
			value={{
				login,
				user,
				logOut,
				setOpen,
				open,
				router,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	return useContext(AuthContext);
}
