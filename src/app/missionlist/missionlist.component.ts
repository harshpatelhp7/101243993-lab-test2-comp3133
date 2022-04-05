import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  constructor(private api: SpacexapiService) {}

  loading = true;
  missions = null;
  mission: any;
  loadDetails = false;
  loadList = true;

  ngOnInit(): void {
    this.api.getMissionApi().subscribe((res: null) => {
      this.missions = res;
      this.loading = false;
      console.log(res);
    });
  }

  showDetails(res: any) {
    this.loadDetails = true;
    this.loadList = false;
    this.mission = res;
  }

  showList() {
    this.loadDetails = false;
    this.loadList = true;
  }
}
