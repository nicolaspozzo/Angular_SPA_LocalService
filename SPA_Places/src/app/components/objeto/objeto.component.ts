import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";
import { Place } from "../../Models/Place";

@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {

  objeto: any = {};

  constructor(private router: Router,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute) {


  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.objeto = this.dataService.getData(params['id']);
    })    
  }

  backTo() {
    this.router.navigate(['/objetos']);
  }

}
