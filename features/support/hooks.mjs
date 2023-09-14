import { Before } from "@cucumber/cucumber";
import axios from "axios";
import "dotenv/config";

Before(() => {
	axios.defaults.baseURL = "https://api.realworld.io/api";
});
