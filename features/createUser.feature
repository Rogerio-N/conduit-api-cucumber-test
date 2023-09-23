Feature: Create user

	Scenario: Success to create new user
		Given a valid user to create
		When create a new user
		Then a token should be generated for the new user

	Scenario: Error to create user, baddly formated email
		Given the new user has the username "user1"
		And the new user has the email "user.email"
		And the new user has the password "123"
		When create a new user
		Then an error should exist

	Scenario: Error to create user, email aready in use
		Given the new user has the username "user1"
		And the new user has the email "root@mock.com"
		And the new user has the password "123"
		When create a new user
		Then an error should exist