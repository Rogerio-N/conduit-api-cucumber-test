import { v4 as uuidV4} from "uuid"

const uuid = uuidV4()

export const defaultUser = {
	username: uuid,
	email: `${uuid}@mock.com`,
	password: 'supersecretpassword123'
}
