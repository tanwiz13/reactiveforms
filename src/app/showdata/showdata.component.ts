import { Component, OnInit } from '@angular/core';
import {Router,RouterModule,Routes} from '@angular/router';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  storedData;
  constructor(private route:Router) {
    this.storedData = JSON.parse(localStorage.getItem("data"));
  }
  editData(){
    this.route.navigate(['/edit']);
  }

  ngOnInit() {

  }

}
