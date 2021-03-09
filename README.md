## Progress Plus+
Sign in page

<img src="https://user-images.githubusercontent.com/70764046/106362773-8a922600-631c-11eb-8ab2-a0615cce1a92.png" width="800px"/>

Bootcamper register page

<img src="https://user-images.githubusercontent.com/70764046/110474835-0d568f80-80d8-11eb-9ab6-3dedc879e06b.png" width="800px"/>

Bootcamper section

<img src="https://user-images.githubusercontent.com/70764046/110474903-1fd0c900-80d8-11eb-8205-e2cb68052416.png" width="800px"/>

<img src="https://user-images.githubusercontent.com/70764046/110475128-6292a100-80d8-11eb-8a49-0f1b43bfb267.png" width="800px"/>

<img src="https://user-images.githubusercontent.com/70764046/110475233-881faa80-80d8-11eb-92ba-5eda18227088.png" width="800px"/>

Coach register page

<img src="https://user-images.githubusercontent.com/70764046/110476099-860a1b80-80d9-11eb-8b79-280f965a4d10.png" width="800px"/>

Coach section
<img src="https://user-images.githubusercontent.com/70764046/110476142-902c1a00-80d9-11eb-93ef-f22ac952cde3.png" width="800px"/>

<img src="https://user-images.githubusercontent.com/70764046/110476513-f6b13800-80d9-11eb-9753-157381543fef.png" width="800px"/>

<img src="https://user-images.githubusercontent.com/70764046/110476656-1f393200-80da-11eb-80fc-e4beae2bcefb.png" width="800px"/>





## Description



This is a [platform](http://52.214.103.49:3000/ ) to allow School of Code bootcampers and coaches to track the technical progress of bootcampers.  Coaches can register, submit written feedback, and compare the progress of bootcampers and the bootcamp as a whole.  Bootcampers can register and view their scores and written feedback for the various mastery and recap tasks they complete.

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


