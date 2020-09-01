import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-objeto-card',
  templateUrl: './objeto-card.component.html',
  styleUrls: ['./objeto-card.component.css']
})
export class ObjetoCardComponent implements OnInit {

  @Input() objeto: any = {};
  //@Output() objetoSelected:EventEmitter<number>;
  

  constructor(private router:Router) {
    //this.objetoSelected = new EventEmitter();
   }

  ngOnInit(): void {
  }

  showObject(){
    this.router.navigate(['/objeto',this.objeto.id]);
    //this.objetoSelected.emit(this.objeto.id);
  }

}
