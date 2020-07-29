import { Component, OnInit, Inject } from '@angular/core';
import { CoronaService } from 'src/app/shared/corona.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public dialogRef : MatDialogRef<DetailCountryComponent>,
              private service : CoronaService ,

             ) { }

  countryData;

  selectedCountry;



  ngOnInit(): void {

    if(this.data.code == null ) {
      this.countryData = {}
      }
     else {
     this.service.getByCode(this.data.code).subscribe(
        res => {
          this.countryData = res;
          this.selectedCountry = this.countryData.countrydata[0]
          console.log(this.selectedCountry)
        },
        err => {
          console.log(err)
        }
      )
    }
  }

}
