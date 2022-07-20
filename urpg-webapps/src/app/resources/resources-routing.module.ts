import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttackCategoryComponent } from './attack/attack-category/attack-category.component';
import { AttackTargetTypeComponent } from './attack/attack-target-type/attack-target-type.component';
import { AttackComponent } from './attack/attack/attack.component';
import { BadgeComponent } from './badge/badge.component';
import { BotComponent } from './bot/bot.component';
import { ChampionOwnershipComponent } from './champion-ownership/champion-ownership.component';
import { ChampionComponent } from './champion/champion.component';
import { ContestAttributeComponent } from './contest-attribute/contest-attribute.component';
import { ContestRankComponent } from './contest-rank/contest-rank.component';
import { ContestTypeComponent } from './contest-type/contest-type.component';
import { ArtRankComponent } from './creative/art-rank/art-rank.component';
import { EliteFourMembershipComponent } from './elite-four-membership/elite-four-membership.component';
import { EliteFourSlotsComponent } from './elite-four-slots/elite-four-slots.component';
import { FlagComponent } from './flag/flag.component';
import { GymLeadershipComponent } from './gym-leadership/gym-leadership.component';
import { GymLeagueComponent } from './gym-league/gym-league.component';
import { GymComponent } from './gym/gym.component';
import { ImageFolderComponent } from './image-folder/image-folder.component';
import { ImageComponent } from './image/image.component';
import { ItemComponent } from './item/item.component';
import { KnownChampionComponent } from './known-champion/known-champion.component';
import { KnownEliteFourMemberComponent } from './known-elite-four-member/known-elite-four-member.component';
import { KnownGymLeaderComponent } from './known-gym-leader/known-gym-leader.component';
import { MemberComponent } from './member/member.component';
import { NatureComponent } from './pokemon/nature/nature.component';
import { ObtainedComponent } from './obtained/obtained.component';
import { OrasContestMoveTypeComponent } from './oras-contest-move-type/oras-contest-move-type.component';
import { OwnedPokemonComponent } from './owned-pokemon/owned-pokemon.component';
import { ParkLocationComponent } from './park-location/park-location.component';
import { ParkRankComponent } from './park-rank/park-rank.component';
import { PermissionComponent } from './permission/permission.component';
import { AbilityComponent } from './pokemon/ability/ability.component';
import { ResourcesComponent } from './resources.component';
import { RoleComponent } from './role/role.component';
import { RseContestMoveTypeComponent } from './rse-contest-move-type/rse-contest-move-type.component';
import { SectionComponent } from './section/section.component';
import { SpeciesComponent } from './pokemon/species/species.component';
import { StoryRankComponent } from './story-rank/story-rank.component';
import { TypeComponent } from './type/type.component';


const routes: Routes = [
  {path: 'abilities', redirectTo: 'abilities/', pathMatch: 'full'},
  {path: 'abilities/:name', component: AbilityComponent},
  {path: 'art-ranks', redirectTo: 'art-ranks/', pathMatch: 'full'},
  {path: 'art-ranks/:name', component: ArtRankComponent},
  {path: 'attacks', redirectTo: 'attacks/', pathMatch: 'full'},
  {path: 'attacks/:name', component: AttackComponent},
  {path: 'attack-categories', redirectTo: 'attack-categories/', pathMatch: 'full'},
  {path: 'attack-categories/:name', component: AttackCategoryComponent},
  {path: 'attack-target-types', redirectTo: 'attack-target-types/', pathMatch: 'full'},
  {path: 'attack-target-types/:name', component: AttackTargetTypeComponent},
  {path: 'badges', redirectTo: 'badges/', pathMatch: 'full'},
  {path: 'badges/:name', component: BadgeComponent},
  {path: 'bots', redirectTo: 'bots/', pathMatch: 'full'},
  {path: 'bots/:name', component: BotComponent},
  {path: 'capture-methods', redirectTo: 'capture-methods/', pathMatch: 'full'},
  {path: 'capture-methods/:name', component: ObtainedComponent},
  {path: 'champion-slots', redirectTo: 'champion-slots/', pathMatch: 'full'},
  {path: 'champion-slots/:name', component: ChampionComponent},
  {path: 'champions', component: ChampionOwnershipComponent },
  {path: 'contest-attributes', redirectTo: 'contest-attributes/', pathMatch: 'full'},
  {path: 'contest-attributes/:name', component: ContestAttributeComponent},
  {path: 'contest-ranks', redirectTo: 'contest-ranks/', pathMatch: 'full'},
  {path: 'contest-ranks/:name', component: ContestRankComponent},
  {path: 'contest-types', redirectTo: 'contest-types/', pathMatch: 'full'},
  {path: 'contest-types/:name', component: ContestTypeComponent},
  {path: 'elite-four-slots', redirectTo: 'elite-four-slots/', pathMatch: 'full'},
  {path: 'elite-four-slots/:name', component: EliteFourSlotsComponent},
  {path: 'elite-four-members', component: EliteFourMembershipComponent },
  {path: 'flags', redirectTo: 'flags/', pathMatch: 'full'},
  {path: 'flags/:name', component: FlagComponent},
  {path: 'gyms', redirectTo: 'gyms/', pathMatch: 'full'},
  {path: 'gyms/:name', component: GymComponent},
  {path: 'gym-leaders', redirectTo: 'gym-leaders/', pathMatch: 'full'},
  {path: 'gym-leaders/:name', component: GymLeadershipComponent},
  {path: 'gym-leagues', redirectTo: 'gym-leagues/', pathMatch: 'full'},
  {path: 'gym-leagues/:name', component: GymLeagueComponent},
  {path: 'images', redirectTo: 'images/', pathMatch: 'full'},
  {path: 'images/:name', component: ImageComponent},
  {path: 'image-folders', redirectTo: 'image-folders/', pathMatch: 'full'},
  {path: 'image-folders/:name', component: ImageFolderComponent},
  {path: 'items', redirectTo: 'items/', pathMatch: 'full'},
  {path: 'items/:name', component: ItemComponent},
  {path: 'known-champions', redirectTo: 'known-champions/', pathMatch: 'full'},
  {path: 'known-champions/:name', component: KnownChampionComponent },
  {path: 'known-elite-four-members', redirectTo: 'known-elite-four-members/', pathMatch: 'full'},
  {path: 'known-elite-four-members/:name', component: KnownEliteFourMemberComponent },
  {path: 'known-gym-leaders', redirectTo: 'known-gym-leaders/', pathMatch: 'full'},
  {path: 'known-gym-leaders/:name', component: KnownGymLeaderComponent },
  {path: 'members', redirectTo: 'members/', pathMatch: 'full'},
  {path: 'members/:name', component: MemberComponent},
  {path: 'natures', redirectTo: 'natures/', pathMatch: 'full'},
  {path: 'natures/:name', component: NatureComponent},
  {path: 'oras-contest-move-types', redirectTo: 'oras-contest-move-types/', pathMatch: 'full'},
  {path: 'oras-contest-move-types/:name', component: OrasContestMoveTypeComponent},
  {path: 'owned-pokemon', redirectTo: 'owned-pokemon/', pathMatch: 'full'},
  {path: 'owned-pokemon/:dbid', component: OwnedPokemonComponent},
  {path: 'park-locations', redirectTo: 'park-locations/', pathMatch: 'full'},
  {path: 'park-locations/:name', component: ParkLocationComponent},
  {path: 'park-ranks', redirectTo: 'park-ranks/', pathMatch: 'full'},
  {path: 'park-ranks/:name', component: ParkRankComponent},
  {path: 'permissions', redirectTo: 'permissions/', pathMatch: 'full'},
  {path: 'permissions/:name', component: PermissionComponent},
  {path: 'roles', redirectTo: 'roles/', pathMatch: 'full'},
  {path: 'roles/:name', component: RoleComponent},
  {path: 'rse-contest-move-types', redirectTo: 'rse-contest-move-types/', pathMatch: 'full'},
  {path: 'rse-contest-move-types/:name', component: RseContestMoveTypeComponent},
  {path: 'sections', redirectTo: 'sections/', pathMatch: 'full'},
  {path: 'sections/:name', component: SectionComponent},
  {path: 'species', redirectTo: 'species/', pathMatch: 'full'},
  {path: 'species/:name', component: SpeciesComponent},
  {path: 'pokemon', redirectTo: 'pokemon/', pathMatch: 'full'},
  {path: 'pokemon/:name', component: SpeciesComponent},
  {path: 'story-ranks', redirectTo: 'story-ranks/', pathMatch: 'full'},
  {path: 'story-ranks/:name', component: StoryRankComponent},
  {path: 'types', redirectTo: 'types/', pathMatch: 'full'},
  {path: 'types/:name', component: TypeComponent},
  {
    path: '**',
    component: ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }