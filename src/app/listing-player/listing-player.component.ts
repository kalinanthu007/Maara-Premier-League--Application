import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../service/player.service'
@Component({
  selector: 'app-listing-player',
  templateUrl: './listing-player.component.html',
  styleUrls: ['./listing-player.component.css']
})
export class ListingPlayerComponent implements OnInit {
  constructor(private service: PlayerService) {
    this.listPlayer()
  }
    newData: any;
    playerData: any;

  ngOnInit(): void {
  }

  // Read Player
  listPlayer() {
    this.service.listPlayer().subscribe(data => {
      this.newData = data;
      this.playerData = this.newData.data;
    })
  }

  // Delete Player
  delete(Id: any) {
    if (confirm("Do you want to delete?")) {
      this.service.removePlayer(Id).subscribe(data => {
        this.listPlayer();
      })
    }

  }
}
