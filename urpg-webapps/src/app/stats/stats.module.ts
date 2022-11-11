import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencyPipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AchievementsComponent } from './achievements/achievements.component';
import { StatsBadgesComponent } from './achievements/badges/badges.component';
import { StatsLegendariesComponent } from './achievements/legendaries/legendaries.component';
import { ChangeLogPaneComponent } from './change-log/change-log-pane/change-log-pane.component';
import { CharactersPaneComponent } from './characters/characters-pane/characters-pane.component';
import { CreationsPaneComponent } from './creations/creations-pane/creations-pane.component';
import { GymsFilterComponent } from './gyms/filter/filter.component';
import { GymsComponent } from './gyms/gyms.component';
import { ProfileInfoPaneComponent } from './header/profile-info-pane/profile-info-pane.component';
import { ProfileInfoWidgetComponent } from './header/profile-info-widget/profile-info-widget.component';
import { StatsHeaderComponent } from './header/stats-header/stats-header.component';
import { InventoryFilterComponent } from './inventory/filter/filter.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MatchHistoryPaneComponent } from './match-history/match-history-pane/match-history-pane.component';
import { StatsMenuBarComponent } from './menu/stats-menu-bar/stats-menu-bar.component';
import { StatsMenuTabComponent } from './menu/stats-menu-tab/stats-menu-tab.component';
import { PokemonFilterPipe } from './pokemon/pipe/pokemon-filter-pipe';
import { PokemonPaneComponent } from './pokemon/pokemon-pane/pokemon-pane.component';
import { PokemonSearchBarComponent } from './pokemon/pokemon-search-bar/pokemon-search-bar.component';
import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import { SidebarComponent } from './v1/sidebar/sidebar.component';
import { WishlistPaneComponent } from './wishlist/wishlist-pane/wishlist-pane.component';
import { PokemonFullPaneComponent } from './v1/pokemon-full-pane/pokemon-full-pane.component';
import { PokemonEditPaneComponent } from './v1/pokemon-edit-pane/pokemon-edit-pane.component';
import { ZydecoTs } from 'zydeco-ts';
import { HomeComponent } from './v1/home/home.component';


@NgModule({
  declarations: [
    SidebarComponent, StatsComponent, StatsMenuBarComponent, StatsMenuTabComponent, ProfileInfoWidgetComponent, ProfileInfoPaneComponent, PokemonPaneComponent, InventoryComponent, MatchHistoryPaneComponent, CreationsPaneComponent, CharactersPaneComponent, WishlistPaneComponent, ChangeLogPaneComponent, StatsHeaderComponent, PokemonSearchBarComponent, PokemonFilterPipe, InventoryFilterComponent, InventoryComponent, GymsComponent, GymsFilterComponent, AchievementsComponent, StatsBadgesComponent, StatsLegendariesComponent, PokemonFullPaneComponent, PokemonEditPaneComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StatsRoutingModule,
    ZydecoTs
  ],
  providers: [CurrencyPipe]
})
export class StatsModule { }
