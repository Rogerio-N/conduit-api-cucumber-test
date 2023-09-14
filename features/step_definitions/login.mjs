import { Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { loginRequest } from "../requests/loginRequest.mjs";

When('login with {string} and {string}', async function (email, password) {
	const loginResponse = await loginRequest(email, password)
	this.apiResponse = loginResponse
})

When("login with a valid user", async function () {
	const loginResponse = await loginRequest(
		process.env.USER_EMAIL,
		process.env.USER_PASSWORD
	);
	this.authToken = loginResponse.data.user.token
});


Then('a token should be generated', function() {
	expect(this.authToken).to.exist.and.not.be.empty
})