import { Injectable } from '@angular/core';
import { Employee } from './employee.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firestore: AngularFirestore) { }

  saveEmployee(employee: Employee) {
    this.firestore.collection('employee').add(employee);
  }
  getEmployee(): Observable<any[]> {

    return this.firestore.collection('employee').valueChanges();
  }
}
