import { Component, OnInit } from '@angular/core';
import { Place } from "../../Models/Place";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent implements OnInit {

  datos:Array<Place>;

  constructor(private dataService:DataService,
              private router:Router) { 
    this.datos = new Array<Place>();
  }

  ngOnInit(): void {
    this.showDatos();
  }

  showDatos(){
    this.datos = this.dataService.getAllData();
  }
  
  // showObject(){
  //   this.router.navigate(['/objeto',this.objeto.id]);
  //   //this.objetoSelected.emit(this.objeto.id);
  // }

}
