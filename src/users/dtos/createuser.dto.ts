import { IsAlpha, IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsAlpha()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;




}