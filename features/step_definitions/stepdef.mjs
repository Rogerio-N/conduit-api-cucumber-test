import { Given, When } from "@cucumber/cucumber";

Given("a test", function () {
	this.today = "Friday";
	return true;
});

When("get today", function () {
	return 'pending';
});
