import { Component, Input, OnInit } from '@angular/core';
import { Header } from '../../models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() header: Header = {
    title: '',
    items: []
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
