import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course'; 

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})

export class CourseCardComponent implements OnInit {
  @Input()
  course:Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {

  }

  ngOnInit() {
    
  }

  onCourseViewed(){
    console.log("card component - button clicked...");
    this.courseSelected.emit(this.course);
  }
}
