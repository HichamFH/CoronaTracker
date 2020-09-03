import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http : HttpClient) { }

  //======== Get All =======//

  getAll() {
    return this.http.get('https://corona.lmao.ninja/v2/countries');
  }

    //========== Total Cases ========//

    stateAll() {
      return this.http.get("https://corona.lmao.ninja/v2/all");
    }

    //====== Get Data By Code =======//

    getByCode(code) {
      return this.http.get("https://corona.lmao.ninja/v2/countries/"+code)
    }



}
