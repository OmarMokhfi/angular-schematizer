import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GeneratorComponent } from './generator/generator.component';
import { GuideComponent } from './guide/guide.component';

const routes: Routes = [
  {
    path: "",
    component: GeneratorComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "guide",
    component: GuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
