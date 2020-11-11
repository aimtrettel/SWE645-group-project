import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stuBean } from '../studentBean';
import { StudentDAOService } from '../student-dao.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {
  student: stuBean;
  sub: any;

  constructor(private stu: StudentDAOService,
        private route: ActivatedRoute,
        private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['sid']);
      this.stu.get(id).subscribe(p => this.student = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
