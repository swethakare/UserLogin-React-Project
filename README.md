# UserLogin-React-Project
This project has been created as a part of my interview process at crocodile solutions

Access this login page directly using the following link:
https://mason.gmu.edu/~skare/build/index.html

UserID, Password and registered email address has been hardcoded in the utils.js file the harcoded values are:
username corresponds to user1, user2, user3
their corresponding passwords are pass1, pass2, pass3
 userCredentials = {
    user1: ["swetha@gmu.edu", "pass1"],
    user2: ["preku@gmu.edu", "pass2"],
    user3: ["uday@gmu.edu", "pass3"]
  };
  
Functional implementation:
First screen is a Sign in screen 

Used a mocked userid and password (hardcoded the values)
Sign in screen should has: 
Textbox: User Name, password 
Button: login + On Click implementation as follows

  o OnClick verify the following: 

  o Userid and/or Password is not blank otherwise an alert message stating issue.

  o Userid and/or Password does not match to then mocked Userid/password an alert message "Invalid userid/password"

  o Userid and Password is match to the mock Userid/password pop up a Confirm message - "login is authenticated"

Clickable link : Forgot password
On clicking Forgot password direct us to Second screen
Second screen: Forgot password.

  ·  Forgot password screen should have 

  ·  Text box: email address (Valid email validation)

  ·  password (validate strong password)

  ·  Button: Change 

On clicking the "Change" button, pop up the third screen 
Third Pop 

  ·  Pop should have 2 elements 

  ·  Icon indication success

  ·  Text: "Password was changed!!" 

