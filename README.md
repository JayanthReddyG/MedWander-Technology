# Objective:
Develop a web application using the SQL, Express, React, and Node.js stack that features dynamic forms based on user interaction. The application should demonstrate proficiency in frontend and backend development, including database operations and external data synchronisation.
Requirements:
# Interface:
Create a simple user interface with two buttons labelled "Form A" and "Form B".
Each button, when clicked, should lead to a form. The heading of the form should dynamically display "Form A" or "Form B" depending on which button was clicked.
# Form Details:
Both forms should have the same input fields:
Name (text input)
Country Code (dropdown selection)
Phone Number (text input)
# Include form validation to ensure that:
The name field is not empty and contains only alphabetic characters.
The country code is selected from a predefined list of codes.
The phone number is numeric and conforms to the format specified by the selected country code.
# Database:
Use SQL to store the form data.
Each entry should capture the form type (A or B), name, country code, and phone number.
# Data Synchronisation:
Implement functionality to connect to an online Excel sheet.
Include a "Refresh" button on the interface that updates the Excel sheet with new data from the SQL database whenever clicked.
# Version Control and Code Review:
Use Git for version control. Provide a link to a GitHub repository that you have set up for this assignment.
# Additional Features (Optional for further challenge):
You can use any UI or Library of your choice , but the UI should  look attractive.
This should be responsive for both mobile and desktop views .



# Brownie Points:
Make sure to use local storage for saving data locally like name, country Code, phone number.  Make it so a user doesn't have to input this data again and again every time he / she comes back to the application. Make sure to load the data back from the local storage and show the listing screen directly instead of the form screen to the user.
You can share the live hosted link of your application along with your details .
# Deliverables:
Create a Public repository in your github and push that source code to your repository.
A README file in the repository detailing:
Installation steps.
How to run the application.
A brief description of the functionality implemented.
# Evaluation Criteria:
Code quality and organisation.
Correct implementation of dynamic forms.
Proper use of the SQL database and synchronisation with the Excel sheet.
Successful creation of PR and use of Git features (e.g., commit messages, branching).


# Installation steps

``` cd backend ``` 

1. Change directory to  backend to install all backend dependencies

``` npm i ```

2. Use this command to download dependencies from package.json file

``` cd frontend ```

3. Change directory to frontend to install all frontend dependencies

``` npm i ```

4. Use this command to download dependencies from package.json

Now you have frontend hosted locally on port ``` 3000  ```

and backend server up and running on port ``` 5100 ```

## Demo

After following installation steps

1. Change directory to backend and run the command ```npm start``` 
2. Now backend is running in background on port ```5100```
3. Change directory to frontend and run the command ```npm start```
4. Now frontend is running in background on port ```3000```



https://github.com/JayanthReddyG/MedWander-Technology/assets/117906963/5d16cdce-a5fa-4120-b16b-e81506ef2c41



# Author

[G Jayanth Reddy ](https://github.com/JayanthReddyG)
