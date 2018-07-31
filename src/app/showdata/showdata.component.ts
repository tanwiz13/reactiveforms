import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  storedData;
  constructor() {
    this.storedData = JSON.parse(localStorage.getItem("data"));
   }

  ngOnInit() {
  }

}
