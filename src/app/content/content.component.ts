import { Component, OnInit } from '@angular/core';
import { BienService } from '../service/bien.service';
import { Bien } from '../interface/bien';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private myservice: BienService) { }

  BIENS: Bien[];
  
 
  public localites
  public types
 
  
  ngOnInit() {
 
     this.allBien()
 
}
allBien(){
  this.myservice.listBiens().subscribe (donnees => {
    this.BIENS=donnees.result as Bien[] ;
    console.log(this.BIENS)

  
  })

}
    
 
}
