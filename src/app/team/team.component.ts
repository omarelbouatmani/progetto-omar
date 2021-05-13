import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
card =[
  {titolo:"Team Sviluppatori",descrizione:"informatica",immagini:"assets/john_doe.jpg",attivo:true},
  {titolo:"Team Sviluppatori",descrizione:"informatica",immagini:"assets/mary_jane.jpg",attivo:true},
  {titolo:"Team Sviluppatori",descrizione:"informatica",immagini:"assets/josh_clark.jpg",attivo:false}

]
  constructor() { }

  ngOnInit(): void {
  }

}
