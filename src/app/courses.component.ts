import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'courses', 
  template: `
              <h2>{{title}}</h2>
              <ul>
                <li *ngFor="let course of courses">
                  {{course}}
                </li>
              </ul>
            `
})

export class CoursesComponent  {
  title= "List of Courses";
  courses;

  constructor(service: CoursesService) {
  // constructor() {
    // let service = new CoursesService(); // not the best way. We can add param in constructor
    this.courses = service.getCourses();
  }
}