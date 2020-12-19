import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokedexComponent } from './pokedex.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { EvolutionComponent } from './evolution/evolution.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MiscComponent } from './misc/misc.component';
import { CaptureComponent } from './capture/capture.component';
import { MovesComponent } from './moves/moves.component';
import { FormsComponent } from './forms/forms.component';
import { NametagComponent } from './main/nametag/nametag.component';
import { AbilitiesComponent } from './main/abilities/abilities.component';
import { StatsComponent } from './main/stats/stats.component';
import { NametagSpriteComponent } from './main/nametag/sprite/sprite.component';
import { NametagInfoComponent } from './main/nametag/info/info.component';
import { NametagFormsComponent } from './main/nametag/forms/forms.component';
import { StatsBarComponent } from './main/stats/bar/bar.component';
import { TypeMatchupsComponent } from './misc/type-matchups/type-matchups.component';
import { MiscInfoComponent } from './misc/misc-info/misc-info.component';
import { LearnsetComponent } from './moves/learnset/learnset.component';
import { MoveHintsComponent } from './moves/move-hints/move-hints.component';
import { LearnsetCategoryComponent } from './moves/learnset/category/category.component';
import { BattleComponent } from './moves/move-hints/battle/battle.component';
import { ContestRseComponent } from './moves/move-hints/contest-rse/contest-rse.component';
import { ContestDppComponent } from './moves/move-hints/contest-dpp/contest-dpp.component';
import { ContestOrasComponent } from './moves/move-hints/contest-oras/contest-oras.component';



@NgModule({
  declarations: [PokedexComponent, EvolutionComponent, HeaderComponent, MainComponent, MiscComponent, CaptureComponent, MovesComponent, FormsComponent, NametagComponent, AbilitiesComponent, StatsComponent, NametagSpriteComponent, NametagInfoComponent, NametagFormsComponent, StatsBarComponent, TypeMatchupsComponent, MiscInfoComponent, LearnsetComponent, MoveHintsComponent, LearnsetCategoryComponent, BattleComponent, ContestRseComponent, ContestDppComponent, ContestOrasComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule
  ]
})
export class PokedexModule { }
