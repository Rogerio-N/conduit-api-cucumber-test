import axios from "axios";

export async function loginRequest(email, password) {
	return axios.post('/users/login', {
		user: {
			email,
			password
		}
	},
	{
		validateStatus: function(status) {
			return status < 500
		}
	})
}