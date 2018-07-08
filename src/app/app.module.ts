import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SoftwarepageComponent } from './softwarepage/softwarepage.component';


import { LanpackService } from "./lanpack.service";
import { AssetsColumnComponent } from './assets-column/assets-column.component';
import { ProfitcolumnComponent } from './profitcolumn/profitcolumn.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'fi', component: SoftwarepageComponent },
  { path: 'se', component: SoftwarepageComponent },
  { path: 'en', component: SoftwarepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SoftwarepageComponent,
    AssetsColumnComponent,
    ProfitcolumnComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LanpackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
