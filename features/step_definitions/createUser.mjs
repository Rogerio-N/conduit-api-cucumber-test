import { Given, Then, When } from "@cucumber/cucumber";
import { defaultUser } from "../fixture/user.mjs";
import { createUserRequest } from "../requests/createUserRequest.mjs";
import { expect } from "chai";

Given("a valid user to create", function () {
	(this.email = defaultUser.email),
		(this.password = defaultUser.password),
		(this.username = defaultUser.username);
});

Given("the new user has the username {string}", function (username) {
	this.username = username
});

Given("the new user has the email {string}", function (email) {
	this.email = email
});

Given("the new user has the password {string}", function (password) {
	this.password = password
});

When("create a new user", async function () {
	this.apiResponse = await createUserRequest(
		this.username,
		this.email,
		this.password
	);
});

Then("a token should be generated for the new user", function () {
	expect(this.apiResponse.status).to.be.eq(201);
	expect(this.apiResponse.data.user.token).to.exist.and.not.be.empty;
});
