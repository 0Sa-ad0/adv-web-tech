import { IsString, IsInt, IsEmail, Matches, IsDateString, IsNumber } from "class-validator";

export class AdminDTO {
        @IsString()
        name: string;

        @IsInt()
        id: number;

        @IsString()
        @IsEmail()
        email: string;

        @IsString()
        @Matches(/[!@#$&]/, { message: "Password must contain one of the special characters (@, #, $, &)." })
        password: string;

        @IsDateString()
        date: string;

        @IsString()
        @Matches(/^(https?:\/\/)?(www\.)?twitter\.com\/[a-zA-Z0-9_]+$/, { message: "Invalid Social Media Link." })
        socialMedia: string;

        @IsNumber()
        phoneNumber: number;
}

export class AdminUpdateDTO {
}
