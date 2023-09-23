Feature: Create user

	Scenario: Success to create new user
		Given a valid user to create
		When create a new user
		Then a token should be generated for the new user