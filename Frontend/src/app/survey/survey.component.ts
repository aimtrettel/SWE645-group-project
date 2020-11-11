import { Component, OnInit } from '@angular/core';

import { stuBean } from '../studentBean';
import { StudentDAOService } from '../student-dao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  student: stuBean;
  sub: any;
  errorMessage: string = '';
  response: any;

  options = [
    {name: 'students', value:'students', checked:false},
    {name: 'location', value:'location', checked:false},
    {name: 'campus', value:'campus', checked:false},
    {name: 'atmosphere', value:'atmosphere', checked:false},
    {name: 'dorms', value:'dorm rooms', checked:false},
    {name: 'sports', value:'sports', checked:false}
  ]

  constructor(private stu: StudentDAOService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  get selectedOptions() {
    return this.options.filter(opt => opt.checked).map(opt => opt.value);
  }

  onClickSubmit(data) {
    this.stu.save(data, this.selectedOptions).subscribe(p => this.response = p,
                                                        e => this.errorMessage = e._body,
                                                        () => this.router.navigateByUrl('/simple'));
  }

}
