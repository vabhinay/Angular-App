import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usr-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  userList = [];
  constructor() {    
    for(let i=0;i<10;i++){
    let user = {
      'id': i,
      'name': 'user-'+i
    }

    this.userList.push(user);
  } 
}

  ngOnInit() {
  }

}
