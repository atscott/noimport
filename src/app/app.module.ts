import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {AppComponent} from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'x-home',
  template: 'Home',
})
export class Home { }


@Component({
  selector: 'x-other',

  // !!! If `<md-checkbox>` is removed from this template, the route
  //     works even though `OtherModule` is never imported.
  template: 'Other page <mat-checkbox>Check</mat-checkbox>'
})
export class Other { }


@NgModule({
  imports: [MatCheckboxModule, NoopAnimationsModule],
  declarations: [Other]
})
export class OtherModule { }


export const routeConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},

  // !!! This route is routed to without its NgModule being imported.
  {path: 'other', component: Other},
];



@NgModule({
  declarations: [
    AppComponent,
    Home,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    // Intentionally not including OtherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
