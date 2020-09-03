import { Component, OnInit, Input } from "@angular/core";
import { Pays } from "src/app/shared/model/pays.model";

@Component({
  selector: "app-closed-case-card",
  templateUrl: "./closed-case-card.component.html",
  styleUrls: ["./closed-case-card.component.css"],
})
export class ClosedCaseCardComponent implements OnInit {
  @Input() pays: any;
  @Input() closedCase: number;
  @Input() formatted_date: any;

  @Input() recoveredPercentage: number;
  @Input() deathsPercentage: number;

  constructor() {}

  ngOnInit(): void {}
}
