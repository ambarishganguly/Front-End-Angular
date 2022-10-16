import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crop } from 'Models/crop.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  constructor(private http:HttpClient) { }

  formData: Crop = new Crop();
  readonly baseUrl ='https://localhost:7214/api/Crop';

  postCrop(){
    return this.http.post<Crop>(this.baseUrl,this.formData)
  }

  getCrop(CropId:number){
    return this.http.get<Crop>(this.baseUrl+'/'+CropId)
  }

  getAllCrop():Observable<Crop[]>{
    return this.http.get<Crop[]>(this.baseUrl)
  }

  updateCrop(CropId:number){
    return this.http.put<Crop>(this.baseUrl+'/',CropId)
  }

  deleteCrop(CropId:number){
    return this.http.delete<Crop>(this.baseUrl+'/'+CropId)
  }



}
