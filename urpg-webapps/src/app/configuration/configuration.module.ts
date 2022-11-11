import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZydecoTs } from 'zydeco-ts';
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
import { ConfigurationComponent } from './v1/lib/configuration/configuration.component';
import { BotComponent } from './v1/member/bot/bot.component';
import { MemberComponent } from './v1/member/member/member.component';
import { OwnedPokemonComponent } from './v1/member/owned-pokemon/owned-pokemon.component';
import { PermissionComponent } from './v1/member/permission/permission.component';
import { RoleComponent } from './v1/member/role/role.component';
import { AbilityComponent } from './v1/pokemon/ability/ability.component';
import { NatureComponent } from './v1/pokemon/nature/nature.component';
import { SpeciesComponent } from './v1/pokemon/species/species.component';
import { TypeComponent } from './v1/pokemon/type/type.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationHomeComponent } from './configuration-home.component';
import { ItemBundleComponent } from './v1/item/item-bundle/item-bundle.component';
import { SharedModule } from '../shared/shared.module';
import { ParkRankComponent } from './v1/creative/park-rank/park-rank.component';

@NgModule({
  declarations: [
    ConfigurationHomeComponent, 
    AbilityComponent, 
    AttackComponent, AttackCategoryComponent, AttackTargetTypeComponent, ContestAttributeComponent, ContestRankComponent, 
    OrasContestMoveTypeComponent, RseContestMoveTypeComponent, ArtRankComponent, ParkLocationComponent, 
    StoryRankComponent, NatureComponent, SectionComponent, BadgeComponent, GymComponent, GymLeagueComponent, 
    ImageComponent, ImageFolderComponent, ItemComponent, MemberComponent, BotComponent, PermissionComponent, RoleComponent, 
    SpeciesComponent, TypeComponent, 
    FlagComponent, KnownGymLeaderComponent, KnownChampionComponent, KnownEliteFourMemberComponent, 
    ChampionComponent, ConfigurationComponent,
    EliteFourSlotComponent, EliteFourMemberRecordComponent, GymLeaderRecordComponent, 
    OwnedPokemonComponent, ContestTypeComponent, ChampionRecordComponent, EliteFourSlotComponent, EliteFourMemberRecordComponent, 
    GymLeaderRecordComponent, CaptureMethodComponent, ItemBundleComponent, ParkRankComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigurationRoutingModule,
    SharedModule,
    ZydecoTs
  ]
})
export class ConfigurationModule { }
