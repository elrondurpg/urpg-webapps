import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import { StatsMenuBarComponent } from './menu/stats-menu-bar/stats-menu-bar.component';
import { StatsMenuTabComponent } from './menu/stats-menu-tab/stats-menu-tab.component';
import { ProfileInfoWidgetComponent } from './header/profile-info-widget/profile-info-widget.component';
import { ProfileInfoPaneComponent } from './header/profile-info-pane/profile-info-pane.component';
import { PokemonPaneComponent } from './pokemon/pokemon-pane/pokemon-pane.component';
import { MatchHistoryPaneComponent } from './match-history/match-history-pane/match-history-pane.component';
import { CreationsPaneComponent } from './creations/creations-pane/creations-pane.component';
import { CharactersPaneComponent } from './characters/characters-pane/characters-pane.component';
import { WishlistPaneComponent } from './wishlist/wishlist-pane/wishlist-pane.component';
import { ChangeLogPaneComponent } from './change-log/change-log-pane/change-log-pane.component';
import { StatsHeaderComponent } from './header/stats-header/stats-header.component';
import { PokemonSearchBarComponent } from './pokemon/pokemon-search-bar/pokemon-search-bar.component';
import { PokemonFilterPipe } from './pokemon/pipe/pokemon-filter-pipe';
import { InventoryFilterComponent } from './inventory/filter/filter.component';
import { InventoryComponent } from './inventory/inventory.component';
import { GymsComponent } from './gyms/gyms.component';
import { GymsFilterComponent } from './gyms/filter/filter.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { StatsBadgesComponent } from './achievements/badges/badges.component';
import { StatsLegendariesComponent } from './achievements/legendaries/legendaries.component';
import {CurrencyPipe} from '@angular/common'


@NgModule({
  declarations: [StatsComponent, StatsMenuBarComponent, StatsMenuTabComponent, ProfileInfoWidgetComponent, ProfileInfoPaneComponent, PokemonPaneComponent, InventoryComponent, MatchHistoryPaneComponent, CreationsPaneComponent, CharactersPaneComponent, WishlistPaneComponent, ChangeLogPaneComponent, StatsHeaderComponent, PokemonSearchBarComponent, PokemonFilterPipe, InventoryFilterComponent, InventoryComponent, GymsComponent, GymsFilterComponent, AchievementsComponent, StatsBadgesComponent, StatsLegendariesComponent],
  imports: [
    CommonModule,
    FormsModule,
    StatsRoutingModule
  ],
  providers: [CurrencyPipe]
})
export class StatsModule { }
