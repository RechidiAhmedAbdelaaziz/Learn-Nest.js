import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { UserSetting } from "./usersetting";

@ObjectType()
export class User {

    constructor(attributes: {
        id: number,
        username: string,
        email: string,
        rating?: number,
        displayName?: string,
        setting?: UserSetting
    }) {
        this.id = attributes.id;
        this.username = attributes.username;
        this.email = attributes.email;
        this.rating = attributes.rating || 0;
        this.displayName = attributes.displayName;

    }

    @Field(type => Int, { defaultValue: 0 })
    id: number;

    @Field()
    username: string;

    @Field({ nullable: true })
    displayName?: string;

    @Field()
    email: string;

    @Field(type => Float)
    rating: number;

}