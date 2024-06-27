import { Resolver, Query, Args, Int, Parent, ResolveField, Mutation } from "@nestjs/graphql";
import { User } from "../models/user";
import { DummyUser as DummyUsers } from "../../__dummy__/dummy.user";
import { UserSetting } from "../models/usersetting";
import { dummyUserSetting } from "../../__dummy__/usersetting";
import { createUserInput } from "../utils/createuserinput";


@Resolver(of => User)
export class UserResolver {


    @Query(returns => User)
    getUsers() {
        return { id: 1, username: 'john', email: 'jhon@gmail.com', rating: 4.5 }
    }

    @Query(returns => User, { nullable: true, name: 'UserById' })
    getUser(@Args('id', { type: () => Int }) id: number) {
        return DummyUsers.find(user => user.id === id)
    }

    @Query(returns => [User])
    getAllUsers() {
        return DummyUsers
    }

    @ResolveField(returns => UserSetting, { name: 'settings', nullable: true })
    getUserSetting(@Parent() user: User) {
        console.log(user);
        return dummyUserSetting.find(setting => setting.userId === user.id)
    }

    @Mutation(returns => User)
    createUser(
        @Args('data') data: createUserInput


    ) {
        const { username, displayName } = data;
        const user = new User({
            email: username + '@gmail.com',
            id: DummyUsers.length,
            username: username,
            displayName: displayName
        })
        DummyUsers.push(user);
        return user;
    }
}