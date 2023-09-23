import axios from "axios";

export async function createUserRequest(username, email, password) {
	return axios.post('/users', {
		user: {
			email,
			password,
			username 
		}
	},
	{
		validateStatus: function(status) {
			return status < 500
		}
	})
}
