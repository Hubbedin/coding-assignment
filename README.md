# Introduction
Congrats in passing the first round of interview! 
Kindly find the project assignment. 
You have 12 hours to complete your assignment. 
Do remember to consistently commit your progress throughout your development. 

# Getting Started
You will need to use the **following technologies** for the project: 
- nodeJS for backend 
- mongoDB for database 
- NextJS for frontend
- auth0 API for user authentication
- agora.io for video recording and capturing. Please visit https://www.agora.io/en/developer-resources/ for more information.

# Project Details <br />
We are automating the interview process by allowing candidates to submit their video interviews online! 

**For the user flow:** <br />
1. When the candidate goes into the page, they see a registration form for them to input important details. Please use the Auth0 api to implement user authentication. 
2. After the candidate signs up, they are directed to a page to take the video interview test
3. The video interview uses the agora.io API to record and capture and store the video. 
4. The video interview question will be shown, and the user will be able to record the video, and confirm the video they want to submit. 
5. Please note that the maximum length of the recorded video should be 1 minute. 
6. Candidate should be able to see a list of video recordings that they have submitted for the video interviews.

**FOR BACKEND** <br />
Create the backend service using nodeJS and mongoDB.<br />
You will need the following models: 
1. Candidate (talent that takes the test)
2. Video Interview
3. Video Interview Questions
4. Maximum video length for the candidate to answer questions (you can hardcode it to be 1 minute)
5. Please ensure APIs to the backend are secure. 
Feel free to add other models that you think you may require. 

**FOR FRONTEND**<br />
The front-end does not need to be fancy. 
Please use NextJS template for the frontend. 

**METRICS**<br />
You will be assessed based on:
- clean code
- good design of databases etc. 
- error handling 
- threading safety
- coding best practices / design patterns

**Breakdown of Metrics:**<br />
Features completed - 30% <br />
Time - 20%<br />
Code Quality 50% <br />
______________________________


# Submission <br />
Kindly submit your production ready code by **creating a pull request to github, and deploying the final product through heroku**. 
