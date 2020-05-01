import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './stats.component';
import { StatsMenuBarComponent } from './stats-menu-bar/stats-menu-bar.component';
import { StatsMenuTabComponent } from './stats-menu-tab/stats-menu-tab.component';
import { ProfileInfoWidgetComponent } from './profile-info-widget/profile-info-widget.component';
import { ProfileInfoPaneComponent } from './profile-info-pane/profile-info-pane.component';
import { PokemonPaneComponent } from './pokemon-pane/pokemon-pane.component';
import { InventoryPaneComponent } from './inventory-pane/inventory-pane.component';
import { MatchHistoryPaneComponent } from './match-history-pane/match-history-pane.component';
import { GymsPaneComponent } from './gyms-pane/gyms-pane.component';
import { CreationsPaneComponent } from './creations-pane/creations-pane.component';
import { CharactersPaneComponent } from './characters-pane/characters-pane.component';
import { AchievementsPaneComponent } from './achievements-pane/achievements-pane.component';
import { WishlistPaneComponent } from './wishlist-pane/wishlist-pane.component';
import { ChangeLogPaneComponent } from './change-log-pane/change-log-pane.component';


@NgModule({
  declarations: [StatsComponent, StatsMenuBarComponent, StatsMenuTabComponent, ProfileInfoWidgetComponent, ProfileInfoPaneComponent, PokemonPaneComponent, InventoryPaneComponent, MatchHistoryPaneComponent, GymsPaneComponent, CreationsPaneComponent, CharactersPaneComponent, AchievementsPaneComponent, WishlistPaneComponent, ChangeLogPaneComponent],
  imports: [
    CommonModule,
    StatsRoutingModule
  ]
})
export class StatsModule { }
