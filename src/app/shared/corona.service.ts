import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http : HttpClient) { }

  //======== Get All =======//

  getAll() {
    return this.http.get('https://api.thevirustracker.com/free-api?countryTotals=ALL');
  }

    //========== Total Cases ========//

    stateAll() {
      return this.http.get("https://api.thevirustracker.com/free-api?global=stats");
    }

    //====== Get Data By Code =======//

    getByCode(code) {
      return this.http.get("https://api.thevirustracker.com/free-api?countryTotal="+code)
    }



}
