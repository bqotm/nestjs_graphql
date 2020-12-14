import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { StudentService } from "src/student/student.service";
import { AssignStudentsToLessonInput } from "./assignStds-to-Lesson.input";
import { Lesson } from "./lesson.entity";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {

     constructor(
          private lessonService: LessonService,
          private studentService: StudentService,
     ) { }


     @Query(returns => [LessonType])
     lessons() {
          return this.lessonService.getLessons();
     }


     @Query(returns => LessonType)
     lesson(
          @Args('id') id: string
     ) {
          return this.lessonService.getLessonById(id);
     }

     @Mutation(returns => LessonType)
     createLesson(
          @Args('createLessonInput') createLessonInput: CreateLessonInput,
     ) {
          return this.lessonService.createLesson(createLessonInput);
     }

     @Mutation(returns => LessonType)
     assignStudentsToLesson(
          @Args('assignStudentsToLesson') assignStudentsToLessonInput: AssignStudentsToLessonInput
     ) {
          const { lessonId, studentIds } = assignStudentsToLessonInput;

          return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
     }

     @ResolveField()
     async students(@Parent() lesson: Lesson) {

          return this.studentService.getManyStudents(lesson.students)
     }

}