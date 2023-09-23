import { Given, Then, When } from "@cucumber/cucumber";
import { defaultUser } from "../fixture/user.mjs";
import { createUserRequest } from "../requests/createUserRequest.mjs";
import { expect } from "chai";

Given("a valid user to create", function () {
	this.email = defaultUser.email,
	this.password = defaultUser.password,
	this.username = defaultUser.username
});

When("create a new user", async function () {
	this.apiResponse = await createUserRequest(this.username, this.email, this.password);
});

Then("a token should be generated for the new user", function() {
	expect(this.apiResponse.status).to.be.eq(201)
	expect(this.apiResponse.data.user.token).to.exist.and.not.be.empty
})