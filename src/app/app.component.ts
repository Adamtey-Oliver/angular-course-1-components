import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  // standalone:  true,
  // imports: [CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // coreCourse = COURSES[0];

  // rxjsCourse = COURSES[1];

  // ngrxCourse = COURSES[2]

  courses = COURSES;
first: any;

  onCourseSelected(course:Course){
    console.log("App componet - click event bubbled..", course);
  }

   trackCourse(index:number, course:Course){
    return course.id
   }
}
