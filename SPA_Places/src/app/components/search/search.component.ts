import { Component, OnInit } from '@angular/core';
import { Place } from "../../Models/Place";
import { DataService } from "../../services/data.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  objetos:Array<Place>;
  text:string;

  constructor(private dataService:DataService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { 

    this.objetos = new Array<Place>();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.objetos = this.dataService.searchPlaces(params['text']);
      this.text = params['text'];
    }) 
    } 

    showObject(id:number){
      this.router.navigate(['/objeto',id]);
    }
  }



