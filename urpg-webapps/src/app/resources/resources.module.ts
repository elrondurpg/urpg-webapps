import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ResourcesComponent } from './resources.component';
import { ResourcesRoutingModule } from './resources-routing.module';
import { AbilityComponent } from './ability/ability.component';
import { AttackComponent } from './attack/attack.component';
import { AttackCategoryComponent } from './attack-category/attack-category.component';
import { AttackTargetTypeComponent } from './attack-target-type/attack-target-type.component';
import { AdvContestMoveTypeComponent } from './adv-contest-move-type/adv-contest-move-type.component';
import { ContestAttributeComponent } from './contest-attribute/contest-attribute.component';
import { ContestRankComponent } from './contest-rank/contest-rank.component';
import { OrasContestMoveTypeComponent } from './oras-contest-move-type/oras-contest-move-type.component';
import { RseContestMoveTypeComponent } from './rse-contest-move-type/rse-contest-move-type.component';
import { ArtRankComponent } from './art-rank/art-rank.component';
import { ParkRankComponent } from './park-rank/park-rank.component';
import { ParkLocationComponent } from './park-location/park-location.component';
import { StoryRankComponent } from './story-rank/story-rank.component';
import { NatureComponent } from './nature/nature.component';
import { ObtainedComponent } from './obtained/obtained.component';
import { SectionComponent } from './section/section.component';
import { BadgeComponent } from './badge/badge.component';
import { GymComponent } from './gym/gym.component';
import { GymLeagueComponent } from './gym-league/gym-league.component';
import { ImageComponent } from './image/image.component';
import { ImageFolderComponent } from './image-folder/image-folder.component';
import { ItemComponent } from './item/item.component';
import { MemberComponent } from './member/member.component';
import { BotComponent } from './bot/bot.component';
import { PermissionComponent } from './permission/permission.component';
import { RoleComponent } from './role/role.component';
import { SpeciesComponent } from './species/species.component';
import { TypeComponent } from './type/type.component';
import { SearchComponent } from './search/search.component';
import { EditAttributeComponent } from './edit-attribute/edit-attribute.component';
import { EditLongAttributeComponent } from './edit-long-attribute/edit-long-attribute.component';
import { MessageComponent } from './message/message.component';
import { EditAttributeHeaderComponent } from './edit-attribute-header/edit-attribute-header.component';
import { EditAttributeSelectComponent } from './edit-attribute-select/edit-attribute-select.component';
import { EditAttributeNumberComponent } from './edit-attribute-number/edit-attribute-number.component';
import { EditAttributeBooleanComponent } from './edit-attribute-boolean/edit-attribute-boolean.component';
import { EditAttributeAccordionComponent } from './edit-attribute-accordion/edit-attribute-accordion.component';
import { AccordionAttributeNumberComponent } from './edit-attribute-accordion/accordion-attribute-number/accordion-attribute-number.component';
import { AccordionAttributeSelectComponent } from './edit-attribute-accordion/accordion-attribute-select/accordion-attribute-select.component';
import { AccordionAttributeBooleanComponent } from './edit-attribute-accordion/accordion-attribute-boolean/accordion-attribute-boolean.component';
import { AccordionAttributeTextComponent } from './edit-attribute-accordion/accordion-attribute-text/accordion-attribute-text.component';
import { NewItemModalComponent } from './edit-attribute-accordion/new-item-modal/new-item-modal.component';
import { EditAttributeDateComponent } from './edit-attribute-date/edit-attribute-date.component';
import { FlagComponent } from './flag/flag.component';
import { KnownGymLeaderComponent } from './known-gym-leader/known-gym-leader.component';
import { KnownChampionComponent } from './known-champion/known-champion.component';
import { KnownEliteFourMemberComponent } from './known-elite-four-member/known-elite-four-member.component';
import { HeaderComponent } from './header/header.component';
import { EditPaneComponent } from './edit-pane/edit-pane.component';
import { ChampionComponent } from './champion/champion.component';
import { ChampionOwnershipComponent } from './champion-ownership/champion-ownership.component';
import { EditAttributeSelectComponent as ResourcesV2EditAttributeSelectComponent } from './v2/partials/edit-attribute-select/edit-attribute-select.component';
import { EditAttributeNumberComponent as ResourcesV2EditAttributeNumberComponent } from './v2/partials/edit-attribute-number/edit-attribute-number.component';
import { EditAttributeDateComponent as ResourcesV2EditAttributeDateComponent } from './v2/partials/edit-attribute-date/edit-attribute-date.component';
import { EditAttributeBooleanComponent as ResourcesV2EditAttributeBooleanComponent } from './v2/partials/edit-attribute-boolean/edit-attribute-boolean.component';
import { EliteFourSlotsComponent } from './elite-four-slots/elite-four-slots.component';
import { EliteFourMembershipComponent } from './elite-four-membership/elite-four-membership.component';
import { GymLeadershipComponent } from './gym-leadership/gym-leadership.component';
import { ResourceComponent as ResourcesV2ResourceComponent } from './v2/resource/resource.component';
import { ZydecoTs } from 'zydeco-ts';
import { OwnedPokemonComponent } from './owned-pokemon/owned-pokemon.component';
import { ContestTypeComponent } from './contest-type/contest-type.component';

@NgModule({
  declarations: [ResourcesComponent, AbilityComponent, AttackComponent, AttackCategoryComponent, AttackTargetTypeComponent, AdvContestMoveTypeComponent, ContestAttributeComponent, ContestRankComponent, OrasContestMoveTypeComponent, RseContestMoveTypeComponent, ArtRankComponent, ParkRankComponent, ParkLocationComponent, StoryRankComponent, NatureComponent, ObtainedComponent, SectionComponent, BadgeComponent, GymComponent, GymLeagueComponent, ImageComponent, ImageFolderComponent, ItemComponent, MemberComponent, BotComponent, PermissionComponent, RoleComponent, SpeciesComponent, TypeComponent, SearchComponent, EditAttributeComponent, EditLongAttributeComponent, MessageComponent, EditAttributeHeaderComponent, EditAttributeSelectComponent, EditAttributeNumberComponent, EditAttributeBooleanComponent, EditAttributeAccordionComponent, AccordionAttributeNumberComponent, AccordionAttributeSelectComponent, AccordionAttributeBooleanComponent, AccordionAttributeTextComponent, NewItemModalComponent, EditAttributeDateComponent, FlagComponent, KnownGymLeaderComponent, KnownChampionComponent, KnownEliteFourMemberComponent, HeaderComponent, EditPaneComponent, ChampionComponent, ChampionOwnershipComponent,
    ResourcesV2EditAttributeSelectComponent, ResourcesV2EditAttributeNumberComponent, ResourcesV2EditAttributeDateComponent, ResourcesV2EditAttributeBooleanComponent, EliteFourSlotsComponent, EliteFourMembershipComponent, GymLeadershipComponent, ResourcesV2ResourceComponent, OwnedPokemonComponent, ContestTypeComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ResourcesRoutingModule,
    ZydecoTs
  ]
})
export class ResourcesModule { }
