import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableCoronaComponent } from './home/table-corona/table-corona.component';
import { CardStateComponent } from './home/card-state/card-state.component';
import { HttpClientModule } from '@angular/common/http'
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatDialogModule} from '@angular/material/dialog';
import { DetailCountryComponent } from './home/table-corona/detail-country/detail-country.component';

import { FooterComponent } from './home/footer/footer.component';
import { DetailComponent } from './home/detail/detail.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ClosedCaseCardComponent } from './home/detail/closed-case-card/closed-case-card.component';
import { ActiveCasesComponent } from './home/detail/active-cases/active-cases.component';
import { NewCaseComponent } from './home/detail/new-case/new-case.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableCoronaComponent,
    CardStateComponent,
    DetailCountryComponent,
    FooterComponent,
    DetailComponent,
    ClosedCaseCardComponent,
    ActiveCasesComponent,
    NewCaseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    NgxSpinnerModule

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
