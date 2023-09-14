import { Given, Then } from "@cucumber/cucumber";
import { loginRequest } from "../requests/loginRequest.mjs";
import { expect } from "chai";

Given("login successfully", async function () {
	const loginResponse = await loginRequest(
		process.env.USER_EMAIL,
		process.env.USER_PASSWORD
	);
	this.authToken = loginResponse.data.user.token
});

Then('an error should exist', function() {
	expect(this.apiResponse.data.errors).to.exist.and.not.be.empty
})
