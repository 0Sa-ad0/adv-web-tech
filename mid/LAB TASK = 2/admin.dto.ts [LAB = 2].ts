//LAB TASK = 2

//ADMIN.DTO.TS

import { IsString, IsUrl, Length, Matches } from "class-validator";

export class AdminDTO {
        @IsString()
        @Matches(/^[A-Za-z]+$/, { message: "Name should not contain numbers" })
        name: string;

        @IsString()
        @Matches(/^.+@.+[.].{1,29}$/, { message: "Invalid email format. Must contain @ and . and be at most 30 characters long" })
        mail: string;

        @IsString()
        @Matches(/^(?=.*[@#$&]).+$/, { message: "Password must contain at least one of the special characters: @, #, $, or &" })
        password: string;

        @IsString()
        @Length(11, 11, { message: "Phone Number must be 11 digits" })
        phone: string;

        @IsString()
        date: string;

        @IsString()
        @IsUrl()
        socialMediaLink: string;
}