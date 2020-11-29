import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicalServiceService {

  url = 'http://127.0.0.1:8000/';
  signup = 'signUpDoctor/';
  login = 'logInDoctor/';
  updateDoc = 'updateDoctor/';
  insertPatient = 'insertPatient/';
  updatePatient = 'updatePatient/';
  deletePatient = 'deletePatient/';
  selectPatient = 'selectPatient/';
  selectPatientsName = 'selectPatientsName';
  insertConsult = 'insertConsult/';
  updateConsult = 'updateConsult/';
  deleteConsult = 'deleteConsult/';
  selectConsult = 'selectConsult/';
  consultsByDate = 'consultsByDate/';
  zodiacal = 'zodiacal/';
  consultsQuantity = 'consultsQuantity/';
  doctor = 'doctor/';
  patient = 'patient/';
  consult = 'consult/';
  logOut = 'logOut/';


  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */

  constructor(private http: HttpClient) { }

  /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */

  
}
