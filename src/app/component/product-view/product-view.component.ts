import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from './productmodule';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  data !:product[]
  constructor(private api:ApiService) {}
  ngOnInit(): void {
    
  }
  displayproduct(){
    this.api.getproduct().subscribe(res=>{
      this.data = res;
    })
  }
}
