import { BienService } from './../service/bien.service';
import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {ContentComponent} from '../content/content.component'
@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  @Output()
recherche:EventEmitter<any>=new EventEmitter<any>();
localites;types
constructor(private myservice: BienService) { }
  
  ngOnInit() {


  this.myservice.localite().subscribe(
  localite => {
    this.localites=localite.result
    console.log(this.localites)
     });

  this.myservice.types().subscribe(
    types => {
  this.types=types.result
   console.log(this.types)});


   
  }

  submiSearch(data)
  { 
  this.recherche.emit(data)

  }

}
