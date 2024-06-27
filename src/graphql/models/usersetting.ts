import { Field, Int, ObjectType, Parent } from "@nestjs/graphql";

@ObjectType()
export class UserSetting {

    constructor(id: number, attribute?: { receiveEmails: boolean }) {
        this.userId = id

        if (attribute)
            this.receiveEmails = attribute.receiveEmails || false
    }

    @Field(type => Int)
    userId: number;

    @Field({ defaultValue: false })
    receiveEmails: boolean;


}