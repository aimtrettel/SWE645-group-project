import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-ack',
  templateUrl: './simple-ack.component.html',
  styleUrls: ['./simple-ack.component.css']
})
export class SimpleAckComponent implements OnInit {

  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  loadMenu() {
    this.router.navigateByUrl('');
  }

}
