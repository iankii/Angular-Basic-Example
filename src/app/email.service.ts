import { Injectable } from '@angular/core';

// Injectable : need only if this service has dependency in its contructor
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
