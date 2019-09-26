import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  formData: Item;
  data: Item[];
  readonly rootUrl = "http://localhost:38185/api";
  constructor(private http: HttpClient) { 
  }

  postItem() {
    return this.http
    .post(this.rootUrl + '/todo', this.formData)
    
  }

  refreshItems() {
    this.http.get(this.rootUrl + '/todo')
    .subscribe( data => this.data = data as Item[])
  }
}
