import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  list: Observable<Employee[]>;
  constructor(private service: EmployeeService) {

  }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.list = this.service.getEmployee();
    console.log(this.list);
  }
}
