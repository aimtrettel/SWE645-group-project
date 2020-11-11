import { Component, OnInit, Input, Output } from '@angular/core';
import { StudentDAOService } from '../student-dao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private stu: StudentDAOService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loadSurvey() {
    this.router.navigateByUrl('/survey');
  }

  loadList() {
    this.router.navigateByUrl('/students');
  }

}
