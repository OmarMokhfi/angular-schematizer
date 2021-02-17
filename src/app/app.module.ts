import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { GuideComponent } from './guide/guide.component';
import { GeneratorComponent } from './generator/generator.component';
import { GojsAngularModule } from 'gojs-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    GuideComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GojsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
