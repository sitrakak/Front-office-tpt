import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-membre',
  templateUrl: './modifier-membre.component.html',
  styleUrls: ['./modifier-membre.component.css']
})
export class ModifierMembreComponent implements OnInit{
id!:string;
public constructor(private route:ActivatedRoute){}

ngOnInit(){
  this.route.params.subscribe(params => {
    this.id = params['id'];
  });
}
}
