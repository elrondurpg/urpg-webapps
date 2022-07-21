import { Component, Input, OnInit } from '@angular/core';
import { Gym } from 'src/app/models/v1/gym/Gym';
import { GymVictory } from 'src/app/models/v1/stats/GymVictory';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'stats-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class StatsBadgesComponent implements OnInit {
  @Input() gymVictories:GymVictory[];
  leagues:string[] = new Array();
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  imageBase = environment.imageBase;

  constructor() { }

  ngOnInit() {
    this.collectLeagues();
  }

  collectLeagues() {
    for(let victory of this.gymVictories) {
      let league = victory.league.name;
      if (this.leagues.indexOf(league) == -1) {
        this.leagues.push(league);
      }
    }
  }

  getFilteredVictories(league:string) {
    let victories = this.gymVictories.filter(victory => {
      return victory.league.name == league;
    });
    
    return victories;
  }

  getBadgeText(victory:GymVictory) {
    /*if (badge.gym.name.startsWith("Champion")) {
      return `Defeated ${badge.gym.owner.username} on ${this.formatDate(badge)} to become URPG Champion!`;
    }
    else if (badge.gym.name.startsWith("Elite Four")) {
      return `Defeated ${badge.gym.name} on ${this.formatDate(badge)}`;
    }
    else {*/
      return `Defeated ${victory.defender} in ${victory.gym.name} to win the ${victory.gym.badge.name} on ${this.formatDate(victory)}`;
    //}
  }

  getBadgeImageUrl(victory:GymVictory) {
    /*if (victory.gym.name.startsWith("Elite Four")) {
      return `${this.imageBase}/badges/elite-medal-4.png`;
    }
    else */
    return `${this.imageBase}/badges/${victory.gym.badge.name.toLowerCase().replace(" ", "-")}.png`;
  }

  formatDate(victory:GymVictory) {
    let date = victory.date;
    return `${this.monthNames[date.getUTCMonth()]} ${date.getUTCDate()}${this.getDateOrdinal(date.getUTCDate())}, ${date.getUTCFullYear()}`;
  }

  getDateOrdinal(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
}
