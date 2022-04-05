import { Component, Input, OnInit } from '@angular/core';
import { MissionlistComponent } from '../missionlist/missionlist.component';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  constructor(private listComp: MissionlistComponent) {}

  @Input() mission: any;

  ngOnInit() {
    console.log(this.mission);
  }

  loadDetails() {
    this.listComp.showList();
  }
}
