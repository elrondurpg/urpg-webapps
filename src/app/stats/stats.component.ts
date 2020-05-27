import { Component, OnInit } from '@angular/core';
import { Trainer } from '../models/Trainer';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'urpg-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public tab:string;
  public trainer:Trainer;

  constructor(private trainerService : TrainerService) { }

  ngOnInit() {
    this.tab = "pokemon";
    this.trainerService.getTrainer("Elrond").subscribe((data : {status:number, data:Trainer}) => {
      if (data.status == 200) {
        this.trainer = new Trainer(data.data);
        console.log(this.trainer);
      }
    });
  }

  showTab(tab: string) {
    this.tab = tab;
  }

}
