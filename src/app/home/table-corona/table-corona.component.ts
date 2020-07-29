import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CoronaService } from 'src/app/shared/corona.service';
import { Subscription } from 'rxjs';
import { Pays } from 'src/app/shared/model/pays.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailCountryComponent } from './detail-country/detail-country.component';

@Component({
  selector: 'app-table-corona',
  templateUrl: './table-corona.component.html',
  styleUrls: ['./table-corona.component.css']
})
export class TableCoronaComponent implements OnInit {

  data;
  country : Pays[];
  selectedCountry;
  subscription : Subscription;
  filteredCountry : Pays[];
  ELEMENT_DATA : Pays[];
  displayedColumns : string[] = ['title' , 'total_cases' , 'total_new_cases_today' , 'total_deaths' , 'total_new_deaths_today' , 'total_recovered' , 'total_active_cases'  ];

  datasource = new MatTableDataSource<Pays>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(public service : CoronaService , public dialog: MatDialog) {
        // console.log(this.country);
        }




  ngOnInit(): void {
    this.getAllData();
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }



  /*======== Start Get All Data Function =======*/

  getAllData() {
    this.subscription = this.service.getAll().subscribe(
      (res :any) => {
         // console.table(res)
          this.data = res
         // console.log(this.data)

         for(var i = 0 ; i < this.data.countryitems.length ; i++){
          // console.log(this.data.countryitems[i])
            this.country = Object.values( this.data.countryitems[i])

         }

         this.datasource.data = this.country as Pays[]
        // console.log(this.country);


      },
      err => {
        console.log(err);
      }
    )
  }

  detail(code) {
      this.service.getByCode(code).subscribe(
        res => {

            this.selectedCountry = res;

            const config = new MatDialogConfig();
            config.width = "50%";
            config.height = "560px";
            config.autoFocus = true;
            config.disableClose = true;
            config.data = {code}

           this.dialog.open(DetailCountryComponent , config);

          console.log(this.selectedCountry.countrydata[0].info.title)



         // console.log(res)
        },
        err =>{
          console.log(err)
        }
      )


  }


  /*======== End Get All Data Function =======*/

  /*======= Start Filter Function */
/*
  filter(query: string) {
   this.filteredCountry = (query) ?
            this.country.filter(c => c.title.includes("a")) :
            this.country;
  }
*/
  /*======= End Filter Function */



  /*=======On Destroy ==== */
/*
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
*/
}
