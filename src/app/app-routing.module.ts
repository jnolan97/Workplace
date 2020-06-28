import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: 'shared', component: ShellComponent
  },
  {
    path: 'tasks', component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
