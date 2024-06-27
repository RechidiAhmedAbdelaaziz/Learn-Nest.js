import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class createUserSettingInput {


    @Field(type => Int)
    userId: number;

    @Field({ defaultValue: false })
    receiveEmail: boolean;
}