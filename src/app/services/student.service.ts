import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHttpResponse } from '../http.response';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl = 'http://localhost:3300';

  constructor(private http: HttpClient) { }

  /**
   * To insert the new student data
   * @param  {Student} student
   * @return {Observable}
   */
  createStudent(student: Student): Observable<IHttpResponse<any>> {
    return this.http.post<IHttpResponse<any>>(
      this.apiUrl + '/student',
      student
    );
  }

  /**
   * To get all the student details
   * @return {Observable}
   */
  getStudents(): Observable<IHttpResponse<Student[] | Student>> {
    return this.http.get<IHttpResponse<Student[] | Student>>(
      this.apiUrl + '/students'
    );
  }

  getStudent(id: string): Observable<IHttpResponse<Student>> {
    return this.http.get<IHttpResponse<Student>>(
      this.apiUrl + '/student/' + id
    );
  }

  /**
   * To update a student data
   * @param  {Student} student
   * @return {Observable}
   */
  updateStudent(student: Student): Observable<IHttpResponse<any>> {
    return this.http.put<IHttpResponse<any>>(
      this.apiUrl + '/student/' + student._id,
      student
    );
  }

  /**
   * To delete student
   * @param  {number} id
   * @return {Observable}
   */
  deleteStudent(id: number) {
    return this.http.delete<IHttpResponse<any>>(
      this.apiUrl + '/student/' + id
    );
  }
}
