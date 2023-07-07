import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
constructor(private api:ApiService,private activatedroute:ActivatedRoute){}
  ngOnInit():void{
    let productid = this.activatedroute.snapshot.paramMap.get('prductid')
  }
}
