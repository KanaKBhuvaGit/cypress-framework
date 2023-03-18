Feature: Login Action

    Scenario: Login with valid Credentials

        Given User is on the Login Page
        When User enters username "student"
        When User enters password "Password123"
        When User clicks on the submit button
        Then User should see a message "Congratulations student. You successfully logged in!" on the dashboard page

    Scenario: Login with Invalid username

        Given User is on the Login Page
        When User enters username "incorrectUser"
        When User enters password "Password123"
        When User clicks on the submit button
        Then User should see an error message like "Your username is invalid!"

    Scenario: Login with Invalid password

        Given User is on the Login Page
        When User enters username "student"
        When User enters password "incorrectPassword"
        When User clicks on the submit button
        Then User should see an error message like "Your password is invalid!"
