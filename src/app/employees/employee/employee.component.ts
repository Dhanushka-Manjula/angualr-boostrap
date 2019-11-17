import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    let data = form.value;
    this.service.saveEmployee(data);
    form.resetForm();
    this.toastr.success('Submitted Successfully', 'Emp. R');
  }
}
