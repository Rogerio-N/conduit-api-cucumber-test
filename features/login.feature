Feature: Login

	Scenario: Success to login with valid user
		When login with a valid user
		Then a token should be generated

	Scenario: Error to login with not registered user
		When login with "test@mock.com" and "secretpassword"
		Then an error should exist

	Scenario: Error to login given email is blank
		When login with "" and "secretpassword"
		Then an error should exist

	Scenario: Error to login given password is blank
		When login with "test@mock.com" and ""
		Then an error should exist