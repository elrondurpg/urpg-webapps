import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbilityComponent } from './ability/ability.component';
import { ResourcesComponent } from './resources.component';
import { AdvContestMoveTypeComponent } from './adv-contest-move-type/adv-contest-move-type.component';
import { ArtRankComponent } from './art-rank/art-rank.component';
import { AttackCategoryComponent } from './attack-category/attack-category.component';
import { AttackTargetTypeComponent } from './attack-target-type/attack-target-type.component';
import { AttackComponent } from './attack/attack.component';
import { BadgeComponent } from './badge/badge.component';
import { BotComponent } from './bot/bot.component';
import { ChampionComponent } from './champion/champion.component';
import { ContestAttributeComponent } from './contest-attribute/contest-attribute.component';
import { ContestRankComponent } from './contest-rank/contest-rank.component';
import { GymLeagueComponent } from './gym-league/gym-league.component';
import { GymComponent } from './gym/gym.component';
import { ImageFolderComponent } from './image-folder/image-folder.component';
import { ImageComponent } from './image/image.component';
import { ItemComponent } from './item/item.component';
import { KnownChampionComponent } from './known-champion/known-champion.component';
import { KnownEliteFourMemberComponent } from './known-elite-four-member/known-elite-four-member.component';
import { KnownGymLeaderComponent } from './known-gym-leader/known-gym-leader.component';
import { MemberComponent } from './member/member.component';
import { NatureComponent } from './nature/nature.component';
import { ObtainedComponent } from './obtained/obtained.component';
import { OrasContestMoveTypeComponent } from './oras-contest-move-type/oras-contest-move-type.component';
import { ParkLocationComponent } from './park-location/park-location.component';
import { ParkRankComponent } from './park-rank/park-rank.component';
import { PermissionComponent } from './permission/permission.component';
import { RoleComponent } from './role/role.component';
import { RseContestMoveTypeComponent } from './rse-contest-move-type/rse-contest-move-type.component';
import { SectionComponent } from './section/section.component';
import { SpeciesComponent } from './species/species.component';
import { StoryRankComponent } from './story-rank/story-rank.component';
import { TypeComponent } from './type/type.component';
import { FlagComponent } from './flag/flag.component';


const routes: Routes = [
  {path: 'abilities', redirectTo: 'abilities/', pathMatch: 'full'},
  {path: 'abilities/:name', component: AbilityComponent},
  {path: 'adv-contest-move-types', redirectTo: 'adv-contest-move-types/', pathMatch: 'full'},
  {path: 'adv-contest-move-types/:name', component: AdvContestMoveTypeComponent},
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
  {path: 'champions', redirectTo: 'champions/', pathMatch: 'full'},
  {path: 'champions/:name', component: ChampionComponent},
  {path: 'contest-attributes', redirectTo: 'contest-attributes/', pathMatch: 'full'},
  {path: 'contest-attributes/:name', component: ContestAttributeComponent},
  {path: 'contest-ranks', redirectTo: 'contest-ranks/', pathMatch: 'full'},
  {path: 'contest-ranks/:name', component: ContestRankComponent},
  {path: 'flags', redirectTo: 'flags/', pathMatch: 'full'},
  {path: 'flags/:name', component: FlagComponent},
  {path: 'gyms', redirectTo: 'gyms/', pathMatch: 'full'},
  {path: 'gyms/:name', component: GymComponent},
  {path: 'gym-leagues', redirectTo: 'gym-leagues/', pathMatch: 'full'},
  {path: 'gym-leagues/:name', component: GymLeagueComponent},
  {path: 'images', redirectTo: 'images/', pathMatch: 'full'},
  {path: 'images/:name', component: ImageComponent},
  {path: 'image-folders', redirectTo: 'image-folders/', pathMatch: 'full'},
  {path: 'image-folders/:name', component: ImageFolderComponent},
  {path: 'items', redirectTo: 'items/', pathMatch: 'full'},
  {path: 'items/:name', component: ItemComponent},
  {path: 'knownChampions', redirectTo: 'knownChampions/', pathMatch: 'full'},
  {path: 'knownChampions/:name', component: KnownChampionComponent },
  {path: 'knownEliteFourMembers', redirectTo: 'knownEliteFourMembers/', pathMatch: 'full'},
  {path: 'knownEliteFourMembers/:name', component: KnownEliteFourMemberComponent },
  {path: 'knownGymLeaders', redirectTo: 'knownGymLeaders/', pathMatch: 'full'},
  {path: 'knownGymLeaders/:name', component: KnownGymLeaderComponent },
  {path: 'members', redirectTo: 'members/', pathMatch: 'full'},
  {path: 'members/:name', component: MemberComponent},
  {path: 'natures', redirectTo: 'natures/', pathMatch: 'full'},
  {path: 'natures/:name', component: NatureComponent},
  {path: 'oras-contest-move-types', redirectTo: 'oras-contest-move-types/', pathMatch: 'full'},
  {path: 'oras-contest-move-types/:name', component: OrasContestMoveTypeComponent},
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