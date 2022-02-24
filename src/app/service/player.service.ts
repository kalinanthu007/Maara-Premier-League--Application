import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerApiURL = "http://localhost:1337/api/players";
  // api = "https://reqres.in/api/users?page=2";
  createUserURL = "https://reqres.in/api/users";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {

  }
  // Read Player
  listPlayer() {
    return this.http.get(this.playerApiURL);
  }

  // Read Player with params
  loadPlayerByCode(id:any) {
    return this.http.get(this.playerApiURL+'/'+id);
  }

  // Create Player
  savePlayer(playerData: any) {
    return this.http.post(this.playerApiURL,{data:playerData});
  }

  // Remove Player
  removePlayer(id:any) {
    return this.http.delete(this.playerApiURL+'/'+id);
  }
}
