import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { CoronaService } from "src/app/shared/corona.service";
import { Subscription } from "rxjs";
import { Pays } from "src/app/shared/model/pays.model";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-table-corona",
  templateUrl: "./table-corona.component.html",
  styleUrls: ["./table-corona.component.css"],
})
export class TableCoronaComponent implements OnInit {
  data: Pays[];
  test: [];
  selectedCountry;
  subscription: Subscription;
  filteredCountry: Pays[];
  ELEMENT_DATA: Pays[];
  displayedColumns: string[] = [
    "country",
    "cases",
    "todayCases",
    "deaths",
    "todayDeaths",
    "recovered",
    "active",
  ];

  datasource = new MatTableDataSource<Pays>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public service: CoronaService,
    private router: Router
  ) {
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
      (res: any) => {
        this.data = res;

        const test = this.data.filter((x) => x.countryInfo._id !== 732);

        this.datasource.data = test as Pays[];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /**
   *
   * Navigate To Details Page
   */

  detail(code) {
    this.router.navigateByUrl("/detail/" + code);
  }

  /**
   *
   * Filter The Table
   */

  applyFilter(filterValue: string) {
    this.data.forEach((element) => {
      if (element.countryInfo._id === 732) {
        console.log("Sahara Maghribiya");
      }
    });
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
}
