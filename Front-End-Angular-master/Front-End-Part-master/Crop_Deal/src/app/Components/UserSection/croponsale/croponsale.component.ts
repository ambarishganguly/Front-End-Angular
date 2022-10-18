import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CropOnSale } from 'Models/croponsale.model';
import { Crop } from 'Models/crop.model';
import { CroponsaleService } from 'Service/croponsale.service';
import { CropService } from 'Service/crop.service';


@Component({
  selector: 'app-croponsale',
  templateUrl: './croponsale.component.html',
  styleUrls: ['./croponsale.component.css']
})
export class CroponsaleComponent implements OnInit {

  croponsalelist : CropOnSale[]=[];
  croplist:Crop[]=[];
  

  constructor(private service:CroponsaleService) {
    this.getAll();
   }

  ngOnInit(): void {
  }

  getAll(){
    this.service.getAllCropOnSale().subscribe(result => {
      this.croponsalelist = result;
    });
  }
  delete(cropId: any) {
    if (confirm("Do you want remove?")) {
      this.service.deleteCropOnSale(cropId).subscribe(result => {
        this.getAll();
      });
}
}
}
