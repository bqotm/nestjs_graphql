import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";


@InputType()
export class AssignStudentsToLessonInput {

     @IsUUID()
     @Field(type => ID)
     lessonId: string;

     @IsUUID("4", { each: true })// v4 of uuid 
     @Field(type => [ID])
     studentIds: string[];
}