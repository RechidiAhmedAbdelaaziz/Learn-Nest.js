import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserSetting } from "../models/usersetting";
import { createUserSettingInput } from "../utils/usersetting.input";
import { dummyUserSetting } from "src/__dummy__/usersetting";


@Resolver('UserSetting')
export class UserSettingResolver {

    @Mutation(returns => UserSetting)
    createUserSetting(
        @Args('data') data: createUserSettingInput
    ) {
        const { userId, receiveEmail } = data;
        if (dummyUserSetting.find(setting => setting.userId === userId)) {
            throw new Error('User setting already exists');
        }

        const setting = new UserSetting(userId, {
            receiveEmails: receiveEmail
        })

        dummyUserSetting.push(setting);

        return setting;

    }


}
