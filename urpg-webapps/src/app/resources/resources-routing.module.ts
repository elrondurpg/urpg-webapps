import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttackCategoryComponent } from './v1/attack/attack-category/attack-category.component';
import { AttackTargetTypeComponent } from './v1/attack/attack-target-type/attack-target-type.component';
import { AttackComponent } from './v1/attack/attack/attack.component';
import { ContestAttributeComponent } from './v1/contest/contest-attribute/contest-attribute.component';
import { ContestRankComponent } from './v1/contest/contest-rank/contest-rank.component';
import { ContestTypeComponent } from './v1/contest/contest-type/contest-type.component';
import { OrasContestMoveTypeComponent } from './v1/contest/oras-contest-move-type/oras-contest-move-type.component';
import { RseContestMoveTypeComponent } from './v1/contest/rse-contest-move-type/rse-contest-move-type.component';
import { ArtRankComponent } from './v1/creative/art-rank/art-rank.component';
import { ParkLocationComponent } from './v1/creative/park-location/park-location.component';
import { ParkRankComponent } from './v1/creative/park-rank/park-rank.component';
import { StoryRankComponent } from './v1/creative/story-rank/story-rank.component';
import { CaptureMethodComponent } from './v1/general/capture-method/capture-method.component';
import { FlagComponent } from './v1/general/flag/flag.component';
import { ImageFolderComponent } from './v1/general/image-folder/image-folder.component';
import { ImageComponent } from './v1/general/image/image.component';
import { SectionComponent } from './v1/general/section/section.component';
import { BadgeComponent } from './v1/gym/badge/badge.component';
import { ChampionRecordComponent } from './v1/gym/champion-record/champion-record.component';
import { ChampionComponent } from './v1/gym/champion/champion.component';
import { EliteFourMemberRecordComponent } from './v1/gym/elite-four-member-record/elite-four-member-record.component';
import { EliteFourSlotComponent } from './v1/gym/elite-four-slot/elite-four-slot.component';
import { GymLeaderRecordComponent } from './v1/gym/gym-leader-record/gym-leader-record.component';
import { GymLeagueComponent } from './v1/gym/gym-league/gym-league.component';
import { GymComponent } from './v1/gym/gym/gym.component';
import { KnownChampionComponent } from './v1/gym/known-champion/known-champion.component';
import { KnownEliteFourMemberComponent } from './v1/gym/known-elite-four-member/known-elite-four-member.component';
import { KnownGymLeaderComponent } from './v1/gym/known-gym-leader/known-gym-leader.component';
import { ItemComponent } from './v1/item/item/item.component';
import { BotComponent } from './v1/member/bot/bot.component';
import { MemberComponent } from './v1/member/member/member.component';
import { OwnedPokemonComponent } from './v1/member/owned-pokemon/owned-pokemon.component';
import { PermissionComponent } from './v1/member/permission/permission.component';
import { RoleComponent } from './v1/member/role/role.component';
import { AbilityComponent } from './v1/pokemon/ability/ability.component';
import { NatureComponent } from './v1/pokemon/nature/nature.component';
import { SpeciesComponent } from './v1/pokemon/species/species.component';
import { TypeComponent } from './v1/pokemon/type/type.component';
import { ResourcesComponent } from './resources.component';
import { ItemBundleComponent } from './v1/item/item-bundle/item-bundle.component';


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
  {path: 'capture-methods/:name', component: CaptureMethodComponent},
  {path: 'champion-seats', redirectTo: 'champion-slots/', pathMatch: 'full'},
  {path: 'champion-seats/:name', component: ChampionComponent},
  {path: 'champion-records', component: ChampionRecordComponent },
  {path: 'contest-attributes', redirectTo: 'contest-attributes/', pathMatch: 'full'},
  {path: 'contest-attributes/:name', component: ContestAttributeComponent},
  {path: 'contest-ranks', redirectTo: 'contest-ranks/', pathMatch: 'full'},
  {path: 'contest-ranks/:name', component: ContestRankComponent},
  {path: 'contest-types', redirectTo: 'contest-types/', pathMatch: 'full'},
  {path: 'contest-types/:name', component: ContestTypeComponent},
  {path: 'elite-four-seats', redirectTo: 'elite-four-seats/', pathMatch: 'full'},
  {path: 'elite-four-seats/:name', component: EliteFourSlotComponent},
  {path: 'elite-four-records', component: EliteFourMemberRecordComponent },
  {path: 'flags', redirectTo: 'flags/', pathMatch: 'full'},
  {path: 'flags/:name', component: FlagComponent},
  {path: 'gyms', redirectTo: 'gyms/', pathMatch: 'full'},
  {path: 'gyms/:name', component: GymComponent},
  {path: 'gym-leader-records', component: GymLeaderRecordComponent},
  {path: 'gym-leagues', redirectTo: 'gym-leagues/', pathMatch: 'full'},
  {path: 'gym-leagues/:name', component: GymLeagueComponent},
  {path: 'images', redirectTo: 'images/', pathMatch: 'full'},
  {path: 'images/:name', component: ImageComponent},
  {path: 'image-folders', redirectTo: 'image-folders/', pathMatch: 'full'},
  {path: 'image-folders/:name', component: ImageFolderComponent},
  {path: 'items', redirectTo: 'items/', pathMatch: 'full'},
  {path: 'items/:name', component: ItemComponent},
  {path: 'itemBundles', redirectTo: 'itemBundles/', pathMatch: 'full'},
  {path: 'itemBundles/:name', component: ItemBundleComponent},
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
export class ResourcesRoutingModule { 
}