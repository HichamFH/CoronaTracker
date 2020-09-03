import { Component, OnInit } from "@angular/core";
import { CoronaService } from "src/app/shared/corona.service";

@Component({
  selector: "app-card-state",
  templateUrl: "./card-state.component.html",
  styleUrls: ["./card-state.component.css"],
})
export class CardStateComponent implements OnInit {
  constructor(public service: CoronaService) {}

  state;

  ngOnInit(): void {
    this.stateAll();
  }

  //========= Statistique ===========//

  stateAll() {
    this.service.stateAll().subscribe(
      (res) => {
        this.state = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
