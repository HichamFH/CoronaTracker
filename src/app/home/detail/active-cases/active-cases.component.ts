import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-active-cases",
  templateUrl: "./active-cases.component.html",
  styleUrls: ["./active-cases.component.css"],
})
export class ActiveCasesComponent implements OnInit {
  @Input() pays: any;
  @Input() mildCondition: any;
  @Input() formatted_date: any;
  @Input() inMildConditionPercentage: number;
  @Input() criticalPercentage: number;

  constructor() {}

  ngOnInit(): void {}
}
