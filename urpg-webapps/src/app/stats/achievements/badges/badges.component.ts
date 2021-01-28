import { Component, Input, OnInit } from '@angular/core';
import { Gym } from 'src/app/models/gym/Gym';
import { EarnedBadge } from 'src/app/models/stats/EarnedBadge';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'stats-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class StatsBadgesComponent implements OnInit {
  @Input() badges:EarnedBadge[];
  leagues:string[] = new Array();
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  imageBase = environment.imageBase;

  constructor() { }

  ngOnInit() {
    this.collectLeagues();
  }

  collectLeagues() {
    for(let badge of this.badges) {
      let league = badge.gym.league.name;
      if (this.leagues.indexOf(league) == -1) {
        this.leagues.push(league);
      }
    }
  }

  getFilteredBadges(league:string) {
    let badges = this.badges.filter(badge => {
      return badge.gym.league.name == league;
    });

    badges.sort((a, b) => {
      if (this.getGymRank(a.gym) < this.getGymRank(b.gym))
        return -1;
      else if (this.getGymRank(b.gym) < this.getGymRank(a.gym))
        return 1;
      else return 0;
    });
    
    return badges;
  }

  getGymRank(gym:Gym) {
    if (gym.name.startsWith("Elite Four")) return 2;
    if (gym.name.startsWith("Champion")) return 3;
    else return 1;
  }

  getBadgeText(badge:EarnedBadge) {
    if (badge.gym.name.startsWith("Champion")) {
      return `Defeated ${badge.gym.owner.username} on ${this.formatDate(badge)} to become URPG Champion!`;
    }
    else if (badge.gym.name.startsWith("Elite Four")) {
      return `Defeated ${badge.gym.name} on ${this.formatDate(badge)}`;
    }
    else {
      return `Defeated ${badge.gym.owner.username} in the ${badge.gym.name} gym to win the ${badge.gym.badge.name} on ${this.formatDate(badge)}`;
    }
  }

  getBadgeImageUrl(badge:EarnedBadge) {
    if (badge.gym.name.startsWith("Elite Four")) {
      return `${this.imageBase}/badges/elite-medal-4.png`;
    }
    else return `${this.imageBase}/badges/${badge.gym.badge.name.toLowerCase().replace(" ", "-")}.png`;
  }

  formatDate(badge:EarnedBadge) {
    let date = badge.date;
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
