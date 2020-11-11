import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimpleAckComponent } from './simple-ack/simple-ack.component';
import { StudentComponent } from './student/student.component';
import { SurveyComponent } from './survey/survey.component';
import { IdsComponent } from './ids/ids.component';

const routes: Routes = [
  { path: 'simple', component: SimpleAckComponent },
  { path: 'student/:sid', component: StudentComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'students', component: IdsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
