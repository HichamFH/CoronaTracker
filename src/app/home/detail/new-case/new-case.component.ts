import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.component.html',
  styleUrls: ['./new-case.component.css']
})
export class NewCaseComponent implements OnInit {

  constructor() { }

  @Input() pays : any;
  @Input() formatted_date : any ;

  ngOnInit(): void {
  }

}
