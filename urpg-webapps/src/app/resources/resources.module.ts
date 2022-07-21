import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZydecoTs } from 'zydeco-ts';
import { AttackCategoryComponent } from './attack/attack-category/attack-category.component';
import { AttackTargetTypeComponent } from './attack/attack-target-type/attack-target-type.component';
import { AttackComponent } from './attack/attack/attack.component';
import { BotComponent } from './bot/bot.component';
import { ContestAttributeComponent } from './contest/contest-attribute/contest-attribute.component';
import { ContestRankComponent } from './contest/contest-rank/contest-rank.component';
import { ContestTypeComponent } from './contest/contest-type/contest-type.component';
import { OrasContestMoveTypeComponent } from './contest/oras-contest-move-type/oras-contest-move-type.component';
import { RseContestMoveTypeComponent } from './contest/rse-contest-move-type/rse-contest-move-type.component';
import { ArtRankComponent } from './creative/art-rank/art-rank.component';
import { ParkLocationComponent } from './creative/park-location/park-location.component';
import { ParkRankComponent } from './creative/park-rank/park-rank.component';
import { StoryRankComponent } from './creative/story-rank/story-rank.component';
import { AccordionAttributeBooleanComponent } from './edit-attribute-accordion/accordion-attribute-boolean/accordion-attribute-boolean.component';
import { AccordionAttributeNumberComponent } from './edit-attribute-accordion/accordion-attribute-number/accordion-attribute-number.component';
import { AccordionAttributeSelectComponent } from './edit-attribute-accordion/accordion-attribute-select/accordion-attribute-select.component';
import { AccordionAttributeTextComponent } from './edit-attribute-accordion/accordion-attribute-text/accordion-attribute-text.component';
import { EditAttributeAccordionComponent } from './edit-attribute-accordion/edit-attribute-accordion.component';
import { NewItemModalComponent } from './edit-attribute-accordion/new-item-modal/new-item-modal.component';
import { EditAttributeBooleanComponent } from './edit-attribute-boolean/edit-attribute-boolean.component';
import { EditAttributeDateComponent } from './edit-attribute-date/edit-attribute-date.component';
import { EditAttributeHeaderComponent } from './edit-attribute-header/edit-attribute-header.component';
import { EditAttributeNumberComponent } from './edit-attribute-number/edit-attribute-number.component';
import { EditAttributeSelectComponent } from './edit-attribute-select/edit-attribute-select.component';
import { EditAttributeComponent } from './edit-attribute/edit-attribute.component';
import { EditLongAttributeComponent } from './edit-long-attribute/edit-long-attribute.component';
import { EditPaneComponent } from './edit-pane/edit-pane.component';
import { FlagComponent } from './flag/flag.component';
import { GymLeagueComponent } from './gym-league/gym-league.component';
import { BadgeComponent } from './gym/badge/badge.component';
import { ChampionRecordComponent } from './gym/champion-record/champion-record.component';
import { ChampionComponent } from './gym/champion/champion.component';
import { EliteFourMemberRecordComponent } from './gym/elite-four-member-record/elite-four-member-record.component';
import { EliteFourSlotComponent } from './gym/elite-four-slot/elite-four-slot.component';
import { GymLeaderRecordComponent } from './gym/gym-leader-record/gym-leader-record.component';
import { GymComponent } from './gym/gym/gym.component';
import { HeaderComponent } from './header/header.component';
import { ImageFolderComponent } from './image-folder/image-folder.component';
import { ImageComponent } from './image/image.component';
import { ItemComponent } from './item/item.component';
import { KnownChampionComponent } from './known-champion/known-champion.component';
import { KnownEliteFourMemberComponent } from './known-elite-four-member/known-elite-four-member.component';
import { KnownGymLeaderComponent } from './known-gym-leader/known-gym-leader.component';
import { MemberComponent } from './member/member.component';
import { MessageComponent } from './message/message.component';
import { ObtainedComponent } from './obtained/obtained.component';
import { OwnedPokemonComponent } from './owned-pokemon/owned-pokemon.component';
import { PermissionComponent } from './permission/permission.component';
import { AbilityComponent } from './pokemon/ability/ability.component';
import { NatureComponent } from './pokemon/nature/nature.component';
import { SpeciesComponent } from './pokemon/species/species.component';
import { TypeComponent } from './pokemon/type/type.component';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { RoleComponent } from './role/role.component';
import { SearchComponent } from './search/search.component';
import { SectionComponent } from './section/section.component';
import { EditAttributeBooleanComponent as ResourcesV2EditAttributeBooleanComponent } from './v2/partials/edit-attribute-boolean/edit-attribute-boolean.component';
import { EditAttributeDateComponent as ResourcesV2EditAttributeDateComponent } from './v2/partials/edit-attribute-date/edit-attribute-date.component';
import { EditAttributeNumberComponent as ResourcesV2EditAttributeNumberComponent } from './v2/partials/edit-attribute-number/edit-attribute-number.component';
import { EditAttributeSelectComponent as ResourcesV2EditAttributeSelectComponent } from './v2/partials/edit-attribute-select/edit-attribute-select.component';
import { ResourceComponent as ResourcesV2ResourceComponent } from './v2/resource/resource.component';

@NgModule({
  declarations: [
    ResourcesComponent, 
    AbilityComponent, 
    AttackComponent, AttackCategoryComponent, AttackTargetTypeComponent, ContestAttributeComponent, ContestRankComponent, 
    OrasContestMoveTypeComponent, RseContestMoveTypeComponent, ArtRankComponent, ParkRankComponent, ParkLocationComponent, 
    StoryRankComponent, NatureComponent, ObtainedComponent, SectionComponent, BadgeComponent, GymComponent, GymLeagueComponent, 
    ImageComponent, ImageFolderComponent, ItemComponent, MemberComponent, BotComponent, PermissionComponent, RoleComponent, 
    SpeciesComponent, TypeComponent, SearchComponent, EditAttributeComponent, EditLongAttributeComponent, MessageComponent, 
    EditAttributeHeaderComponent, EditAttributeSelectComponent, EditAttributeNumberComponent, EditAttributeBooleanComponent, 
    EditAttributeAccordionComponent, AccordionAttributeNumberComponent, AccordionAttributeSelectComponent, 
    AccordionAttributeBooleanComponent, AccordionAttributeTextComponent, NewItemModalComponent, EditAttributeDateComponent, 
    FlagComponent, KnownGymLeaderComponent, KnownChampionComponent, KnownEliteFourMemberComponent, HeaderComponent, 
    EditPaneComponent, ChampionComponent, 
    ResourcesV2EditAttributeSelectComponent, ResourcesV2EditAttributeNumberComponent, ResourcesV2EditAttributeDateComponent, 
    ResourcesV2EditAttributeBooleanComponent, EliteFourSlotComponent, EliteFourMemberRecordComponent, GymLeaderRecordComponent, 
    ResourcesV2ResourceComponent, OwnedPokemonComponent, ContestTypeComponent, ChampionRecordComponent, EliteFourSlotComponent, EliteFourMemberRecordComponent, GymLeaderRecordComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ResourcesRoutingModule,
    ZydecoTs
  ]
})
export class ResourcesModule { }
