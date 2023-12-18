import { IsNotEmpty, Length } from "class-validator";

export class addUser {
    @IsNotEmpty({ message: "Name is required." })
    @Length(3, 90)
    name: string;

    @IsNotEmpty({ message: "Title is required." })
    @Length(3, 90)
    title: string;
}