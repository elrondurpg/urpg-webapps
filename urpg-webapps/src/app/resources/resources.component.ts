import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'zydeco-ts';

@Component({
  selector: 'urpg-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  public breadcrumbs:Breadcrumb[] = [new Breadcrumb("test", "Dashboard"), new Breadcrumb("urpg-webapps/resources/", "Configuration")];

  routes = [
    { category: "Pokemon", title: "Abilities", url: "abilities" },
    { category: "Creative", title: "Art Ranks", url: "art-ranks" },
    { category: "Attack", title: "Attacks", url: "attacks" },
    { category: "Attack", title: "Attack Categories", url: "attack-categories" },
    { category: "Attack", title: "Attack Target Types", url: "attack-target-types" },
    { category: "Gym", title: "Badges", url: "badges" },
    { category: "Member", title: "Bots", url: "bots" },
    { category: "General", title: "Capture Methods", url: "capture-methods" },
    { category: "Gym", title: "Champion Seats", url: "champion-seats" },
    { category: "Gym", title: "Champion Records", url: "champion-records" },
    { category: "Contest", title: "Contest Attributes", url: "contest-attributes" },
    { category: "Contest", title: "Contest Ranks", url: "contest-ranks" },
    { category: "Contest", title: "Contest Types", url: "contest-types" },
    { category: "Gym", title: "Elite Four Seats", url: "elite-four-seats" },
    { category: "Gym", title: "Elite Four Records", url: "elite-four-records" },
    { category: "General", title: "Flags", url: "flags" },
    { category: "Gym", title: "Gyms", url: "gyms" },
    { category: "Gym", title: "Gym Leader Records", url: "gym-leader-records" },
    { category: "Gym", title: "Gym Leagues", url: "gym-leagues" },
    { category: "General", title: "Images", url: "images" },
    { category: "General", title: "Image Folders", url: "image-folders" },
    { category: "Item", title: "Items", url: "items" },
    { category: "Gym", title: "Known Champions", url: "known-champions" },
    { category: "Gym", title: "Known Elite Four Members", url: "known-elite-four-members" },
    { category: "Gym", title: "Known Gym Leaders", url: "known-gym-leaders" },
    { category: "Member", title: "Members", url: "members" },
    { category: "Pokemon", title: "Natures", url: "natures" },
    { category: "Contest", title: "ORAS Contest Move Types", url: "oras-contest-move-types" },
    { category: "Member", title: "Owned Pokemon", url: "owned-pokemon" },
    { category: "Creative", title: "Park Locations", url: "park-locations" },
    { category: "Creative", title: "Park Ranks", url: "park-ranks" },
    { category: "Member", title: "Permissions", url: "permissions" },
    { category: "Member", title: "Roles", url: "roles" },
    { category: "Contest", title: "RSE Contest Move Types", url: "rse-contest-move-types" },
    { category: "General", title: "Sections", url: "sections" },
    { category: "Pokemon", title: "Species", url: "species" },
    { category: "Creative", title: "Story Ranks", url: "story-ranks" },
    { category: "Pokemon", title: "Types", url: "types" }
  ];

  constructor() { }

  ngOnInit() {
    
  }

  getRouteCategories() {
    return [...new Set(this.routes.map(route => route.category))].sort();
  }

  getRoutesByCategory(category:string) {
    return this.routes.filter(route => route.category == category);
  }
}
