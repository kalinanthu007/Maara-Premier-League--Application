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
    this.playerId = this.route.snapshot.paramMap.get('id');
    // alert('test'+this.playerId)
    if (this.playerId !== null) {
      // alert('player id is not null')
      this.updatePlayer(this.playerId);
    }
   }

  ngOnInit(): void {
  }
  register = new FormGroup({
    id: new FormControl({value:'',disabled:true}),
    name: new FormControl("",Validators.required),
    email: new FormControl("", Validators.compose([Validators.required, Validators.required])),
    // matchCount: new FormControl("", Validators.required),
    // highestRun: new FormControl("",Validators.required),
  })
  savePlayer() {
    // alert(this.playerId)
    if (this.register.valid) {
      console.log(this.register)
      console.log(this.register.value)
      this.service.savePlayer(this.register.value).subscribe(data => {
        if (data != null) {
          this.message = 'Super da...'
          this.messageClass = 'success'
          this.clearPlayer()
        }
        console.log(data)
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
      email: new FormControl(""),
      // matchCount: new FormControl("", Validators.required),
      // highestRun: new FormControl("",Validators.required),
    })
  }
  updatePlayer(Id:any) {
    this.service.loadPlayerByCode(Id).subscribe(data => {
      this.editData = data;
      // alert(this.editData.data.id)
      this.register = new FormGroup({
        id: new FormControl({value:this.editData.data.id,disabled:true}),
        name: new FormControl(this.editData.data.attributes.name),
        email: new FormControl(this.editData.data.attributes.email),
      })

    })

    // alert(this.editData.data.attributes.name)



  }
}
