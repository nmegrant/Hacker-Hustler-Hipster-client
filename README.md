# Hacker Hipster Hustler
[![Netlify Status](https://api.netlify.com/api/v1/badges/7b51bad9-7f9c-4176-b3ca-25394a9f32c5/deploy-status)](https://app.netlify.com/sites/compassionate-babbage-d1f10e/deploys)
[![Codeship Status for nmegrant/Hacker-Hustler-Hipster-client](https://app.codeship.com/projects/fdd316b0-97a2-0138-ed4e-363720613500/status?branch=master)](https://app.codeship.com/projects/400809)

[See the deployed site here](https://compassionate-babbage-d1f10e.netlify.app/)

## Table of contents
* [About](#about)
* [Goals](#goals)
* [Technologies](#technologies)
* [Demo](#demo)
* [Project User Stories and Wireframe](#project-user-stories-and-wireframe)
* [Server Repository](#server-repository)
* [Available Scripts](#available-scripts)

### About

Hacker Hustler Hipster is an app to help brilliant people find brilliant teams. Have a start up idea but need brain power? Looking for devs and artistic types to make your idea a reality? Or do you want to put your skills to use but don't know what to work on? Find someone who needs your help and get started on the next big success story. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Goals

My goal for this project was to build a full stack app using the technologies learned in the bootcamp. I also wanted to expand on these skills, and implement a few new ones. I focused on testing, writing over 90 unit tests and e2e tests. I used Code Ship to set up Continuous Integration. Any push to master for the server or client triggers the tests to run. In addition, any deployment of the backend on Heroku triggers the tests to run. 

I plan to continue working on this app, using it as a platform to explore new technologies and expand my current knowledge of web app development. 

### Technologies

##### Front End
Node.js
React
Redux
Axios
Geocode - Geolocation
React Bootstrap
React Draggable
React Bootstrap Typeahead
Jest

##### Back End
Express
Sequelize
Postgres
Jest
Supertest

### Demo

### Project User Stories and Wireframe

The [user stories](https://github.com/users/nmegrant/projects/3) and [wireframe](https://github.com/nmegrant/Hacker-Hustler-Hipster-client/blob/master/wire_frames_1.png) I used to plan my project. 

### Server Repository 
[![Codeship Status for nmegrant/Hacker-Hustler-Hipster-server](https://app.codeship.com/projects/4cd98ac0-97a5-0138-34ac-7a5d77a8b96c/status?branch=master)](https://app.codeship.com/projects/400815)

The repository for the backend can be found [here](https://github.com/nmegrant/Hacker-Hustler-Hipster-server). This is a RESTful API using Express.js. The database is built using Postgres.[Here](https://github.com/nmegrant/Hacker-Hustler-Hipster-client/blob/master/data_model1.png) is the data model. Object-relational mapping is done using Sequelize. It is tested using Jest and Supertest. 

##### Available Scripts

In the project directory, you can run:

###### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

###### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

##### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

##### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

##### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

##### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

###### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
