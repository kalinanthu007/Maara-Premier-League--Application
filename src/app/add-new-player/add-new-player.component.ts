import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {PlayerService} from '../service/player.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-add-new-player',
  templateUrl: './add-new-player.component.html',
  styleUrls: ['./add-new-player.component.css']
})
export class AddNewPlayerComponent implements OnInit {
  messageClass = '';
  message = '';
  playerId: any;
  editData: any;

  constructor(private service: PlayerService, private route: ActivatedRoute) {
    // Get id from web url
    this.playerId = this.route.snapshot.paramMap.get('id');
    if (this.playerId !== null) {
      this.updatePlayer(this.playerId);
    }
   }

  ngOnInit(): void {
  }

  // Create obj for player form
  register = new FormGroup({
    id: new FormControl({value:'',disabled:true}),
    name: new FormControl("",Validators.required),
    email: new FormControl("", Validators.compose([Validators.required, Validators.required]))
  })

  // Create New Player
  savePlayer() {
    if (this.register.valid) {
      this.service.savePlayer(this.register.value).subscribe(data => {
        if (data != null) {
          this.message = 'Machi open the bottle..'
          this.messageClass = 'success'
          this.clearPlayer()
        }
      })
    }
    else {
      this.message = 'Dei Valid info kudu da...'
      this.messageClass='error'
    }
  }

  clearPlayer() {
    this.register = new FormGroup({
      id: new FormControl({value:'',disabled:true}),
      name: new FormControl(""),
      email: new FormControl("")
    })
  }

  // Edit Player info
  updatePlayer(Id:any) {
    this.service.loadPlayerByCode(Id).subscribe(data => {
      this.editData = data;
      this.register = new FormGroup({
        id: new FormControl({value:this.editData.data.id,disabled:true}),
        name: new FormControl(this.editData.data.attributes.name),
        email: new FormControl(this.editData.data.attributes.email),
      })

    })
  }
}
