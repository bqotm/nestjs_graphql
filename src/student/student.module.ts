import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({

  imports: [
    TypeOrmModule.forFeature([Student]),
  ],
  providers: [StudentService, StudentResolver],
  exports: [StudentService]
})
export class StudentModule { }
