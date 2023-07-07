import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../component/product-view/productmodule';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get<product[]>("")
  }

  getproductbyid(id:string){
    return this.http.get(""+id)
  }


  gothrought(){
  return this.http.get("https://www.flipkart.com/computers/storage/pen-drives/hp~brand/pr?sid=6bo%2Cjdy%2Cuar")
  }
}
