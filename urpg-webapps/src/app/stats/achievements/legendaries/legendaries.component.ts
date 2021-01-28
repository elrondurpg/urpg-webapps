import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/models/general/Section';
import { Member } from 'src/app/models/member/Member';
import { LegendaryProgress } from 'src/app/models/stats/LegendaryProgress';
import { OwnedPokemon } from 'src/app/models/stats/OwnedPokemon';
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'stats-legendaries',
  templateUrl: './legendaries.component.html',
  styleUrls: ['./legendaries.component.css']
})
export class StatsLegendariesComponent implements OnInit {
  @Input() member:Member;
  @Input() sections:Section[] = new Array();
  legendsBySection = {};
  progressBySection = {};

  constructor(private currencyPipe : CurrencyPipe) { }

  ngOnInit() {
    this.sections.sort((a,b) => 
    {
      if (a.name < b.name) return -1;
      else if (b.name < a.name) return 1;
      else return 0;
    });
  }

  getSectionsWithProgress() {
    return this.sections.filter(section => {
      return this.getLegendaryProgressBySection(section).length > 0;
    });
  }

  getEarnedLegendsBySection(section:Section) : OwnedPokemon[] {
    if (this.legendsBySection[section.name] === undefined) {
      this.legendsBySection[section.name] = this.member.pokemon.filter(pokemon => {
        return pokemon.obtained.name.indexOf(section.name) != -1 && pokemon.obtained.name.indexOf("Legend") != -1;
      });
    }
    return this.legendsBySection[section.name];
  }

  getLegendaryProgressBySection(section:Section) : LegendaryProgress[] {
    if (this.progressBySection[section.name] === undefined) {
      this.progressBySection[section.name] = this.member.legendaryProgress.filter(progress => {
        return progress.section.name == section.name;
      });
    }
    return this.progressBySection[section.name];
  }

  getProgressBySection(section:Section) {
    let progress = this.getLegendaryProgressBySection(section);
    let total = 0;
    progress.forEach(entry => {
      total += entry.value;
    });
    return total;
  }

  getRequirementText(section:Section, tier:number) {
    let progress = this.getProgressBySection(section);
    let requirement = tier == 1 ? this.getNextTierOneTotalValue(section) : this.getNextTierTwoTotalValue(section);

    if (section.name == "Reffing" || section.name == "Judging" ||
        section.name == "Art" || section.name == "Curating" ||
        section.name == "Writing" || section.name == "Grading" || section.name == "Ranger") {
        return `${this.currencyPipe.transform(progress, 'USD', "symbol", '1.0-0')} / ${this.currencyPipe.transform(requirement, 'USD', "symbol", '1.0-0')}`;
    }
    else if (section.name == "Contests") {
        return `${progress} \ ${requirement} Master ribbons`;
    }
    else if (section.name == "National Park") {
        return `${progress} \ ${requirement} characters`;
    }
    else if (section.name == "Legend Defender") {
        return `${progress} \ ${requirement} wins`;
    }
    else if (section.name == "Morphic") {
        return `${progress} \ ${requirement} posts`;
    }
  }

  getNextTierOneValue(section:Section) {
    let earnedLegends = this.getEarnedLegendsBySection(section);

    let earnedTier1s = 0;
    for (let pokemon of earnedLegends) {
      if (pokemon.species.legendaryTier == 1) 
        earnedTier1s++;
    }

    let req = section.tier1LegendaryRequirement;
    if (earnedTier1s == 0) return req;
    else if (earnedTier1s == 1) return Math.floor(req * 1.5);
    else return req * 2;
  }

  getNextTierOneTotalValue(section:Section) {
    let progress = this.getLegendaryProgressBySection(section);
    return this.getValueOfEarnedLegends(section) + this.getNextTierOneValue(section);
  }

  getNextTierTwoValue(section:Section) {
    let earnedLegends = this.getEarnedLegendsBySection(section);

    let earnedTier2s = 0;
    for (let pokemon of earnedLegends) {
      if (pokemon.species.legendaryTier == 2) 
      earnedTier2s++;
    }

    let req = section.tier2LegendaryRequirement;
    if (earnedTier2s == 0) return req;
    else if (earnedTier2s == 1) return Math.floor(req * 1.5);
    else return req * 2;
  }

  getNextTierTwoTotalValue(section:Section) {
    return this.getValueOfEarnedLegends(section) + this.getNextTierTwoValue(section);
  }

  getValueOfEarnedLegends(section:Section) {
    let earnedLegends = this.getEarnedLegendsBySection(section);

    let earnedTier1s = 0;
    let earnedTier2s = 0;
    for (let pokemon of earnedLegends) {
      if (pokemon.species.legendaryTier == 1) 
        earnedTier1s++;
      else earnedTier2s++;
    }

    let valueOfEarnedTierOnes = this.getValueOfEarnedLegendsByTier(section, 1, earnedTier1s);
    let valueOfEarnedTierTwos = this.getValueOfEarnedLegendsByTier(section, 2, earnedTier2s);
    return valueOfEarnedTierOnes + valueOfEarnedTierTwos;
  }

  getValueOfEarnedLegendsByTier(section:Section, tier:number, numEarned:number) {
    let baseValue = tier == 1 ? section.tier1LegendaryRequirement : section.tier2LegendaryRequirement;
    let totalValue = 0;
    for (let i = 1; i <= numEarned; i++) {
      let thisLegendsMultiplier = i == 1 ? 1 : 
                                    i == 2 ? 1.5 : 2;
      let thisLegendsValue = Math.floor(baseValue * thisLegendsMultiplier);
      totalValue += thisLegendsValue;
    }
    return totalValue;
  }
}
