import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  constructor(private api:ApiService){}
  ngOnInit(): void {
    
  }

  gothrought(){
    
  }
}
