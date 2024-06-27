import { UserSetting } from "src/graphql/models/usersetting";

export const dummyUserSetting = [
    new UserSetting(1, { receiveEmails: true }),
    new UserSetting(3),
]