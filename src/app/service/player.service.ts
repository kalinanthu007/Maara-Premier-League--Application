import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  apiurl = "http://localhost:1337/api/players";
  // api = "https://reqres.in/api/users?page=2";
  posturl = "https://reqres.in/api/users";
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
  constructor(private http: HttpClient) {

  }
  listPlayer() {
    return this.http.get(this.apiurl);
  }
  loadPlayerByCode(id:any) {
    return this.http.get(this.apiurl+'/'+id);
  }
  savePlayer(playerData: any) {
    return this.http.post(this.apiurl,{data:playerData});
  }
  removePlayer(id:any) {
    return this.http.delete(this.apiurl+'/'+id);
  }
}
