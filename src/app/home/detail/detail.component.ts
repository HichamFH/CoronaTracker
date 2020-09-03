import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CoronaService } from "src/app/shared/corona.service";
import { Pays } from "src/app/shared/model/pays.model";
import { environment } from "src/environments/environment";
import { NgxSpinnerService } from "ngx-spinner";

import * as Mapboxgl from "mapbox-gl";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: CoronaService,
    private spinner: NgxSpinnerService
  ) {}

  country;
  data: Pays;
  mapa: Mapboxgl.Map;
  lat: any;
  long: any;
  closedCase: number;
  mildCondition: number;
  formatted_date: any;
  recoveredPercentage: number;
  deathsPercentage: number;
  inMildConditionPercentage: number;
  criticalPercentage: number;
  ngOnInit(): void {
    /**
     *  Get Country By Name ( Get The Params URL )
     */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 3 seconds */
      this.spinner.hide();
    }, 3000);

    this.route.paramMap.subscribe((params) => {
      this.country = params.get("country");
      this.service.getByCode(this.country).subscribe(
        (res) => {
          this.data = res as Pays;

          this.lat = this.data.countryInfo.lat;
          this.long = this.data.countryInfo.long;

          /**
           *  Load Maps
           */

          Mapboxgl.accessToken = environment.mapboxKey;
          this.mapa = new Mapboxgl.Map({
            container: "mapa-mapbox", // container id
            style: "mapbox://styles/mapbox/streets-v11",
            center: [this.long, this.lat], // starting position
            zoom: 3, // starting zoom
          });
          var marker = new Mapboxgl.Marker()
            .setLngLat([this.long, this.lat])
            .addTo(this.mapa);

          /**
           *  Closed Case Number
           */
          this.closedCase = this.data.recovered + this.data.deaths;
          this.mildCondition = this.data.active - this.data.critical;

          /**
           *  Get Percentage Of Recovered , Deaths , In Mild Condition And Serious Case
           */

          /**-------- Get Percentage Of Recovered -------- */
          this.recoveredPercentage =
            (this.data.recovered / this.closedCase) * 100;
          /**-------- Get Percentage Of Deaths -------- */
          this.deathsPercentage = (this.data.deaths / this.closedCase) * 100;
          /**-------- Get Percentage Of In Mild Condition -------- */
          this.inMildConditionPercentage =
            (this.mildCondition / this.data.active) * 100;
          /**-------- Get Percentage Of Critical Cases -------- */
          this.criticalPercentage =
            (this.data.critical / this.data.active) * 100;

          /**
           *   Date Time Now
           */
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "Jun",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          let current_datetime = new Date();
          this.formatted_date =
            months[current_datetime.getMonth()] +
            " " +
            current_datetime.getDate() +
            ", " +
            current_datetime.getFullYear() +
            " / " +
            current_datetime.getHours() +
            ":" +
            current_datetime.getMinutes() +
            ":" +
            current_datetime.getSeconds();
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
