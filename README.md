## Project Name

Progress Plus+
![image](https://user-images.githubusercontent.com/70764046/106362773-8a922600-631c-11eb-8ab2-a0615cce1a92.png)


## Description



This is a [platform](http://3.250.192.68:3000/) to allow School of Code bootcampers and coaches to track the technical progress of bootcampers.  Coaches can register, submit written feedback, and compare the progress of bootcampers and the bootcamp as a whole.  Bootcampers can register and view their scores and written feedback for the various mastery and recap tasks they complete.

You can find the server code [here](https://github.com/ipredoi/Progress-plus-server.git).


## Stack

- `Next.js`
- `JSX`
- `Firebase`
- `Docker`
- `CSS`
- `Semantic UI` 
- `ChartJs`


## Getting started

1. Clone the repo: `git clone https://github.com/ipredoi/progressPlus-client.git`

2. Download the required npm modules: `npm i`

3. Set up Firebase:	

- Create a project at the [Firebase console](https://console.firebase.google.com/).	
- Copy the contents of `.env.local.example` into a new file called `.env.local`	
- Get your account credentials from the Firebase console at _Project settings > Service accounts_, where you can click on _Generate new private key_ and download the credentials as a json file. It will contain keys such as `project_id`, `client_email` and `private_key`. Set them as environment variables in the `.env.local` file at the root of this project.	
- Get your authentication credentials from the Firebase console under _Project settings > General> Your apps_ Add a new web app if you don't already have one. Under _Firebase SDK snippet_ choose _Config_ to get the configuration as JSON. It will include keys like `apiKey` and `authDomain`. Set the appropriate environment variables in the `.env.local` file at the root of this project.

4. Link the Backend Server to the Client

- Add the backend server URL in the `.env.local` file (NEXT_PUBLIC_APP_BACKEND_URL=). 

## Useful commands

- `npm run dev` - run the development server.
- `npm run build` - create a production build.
- `npm run start` - start the app in production mode.


