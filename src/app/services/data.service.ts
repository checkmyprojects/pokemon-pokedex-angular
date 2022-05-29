import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
    ) { }
}
