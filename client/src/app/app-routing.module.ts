import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaiComponent } from './components/pai/pai.component';
import { AboutComponent } from './components/about/about.component';
import {InvestmentsGraphComponent} from "./components/investments-graph/investments-graph.component";

const routes: Routes = [
  { path: '', redirectTo: 'pai', pathMatch: 'full' },
  { path: 'pai', component: PaiComponent },
  { path: 'about', component: AboutComponent },
  { path: 'investments-graph', component: InvestmentsGraphComponent },
  { path: 'blog', loadChildren: 'app/modules/blog/blog.module#BlogModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
