import { ArtRank } from '../creative/ArtRank';
import { ParkRank } from '../creative/ParkRank';
import { SpeciesAbility } from './SpeciesAbility';
import { StoryRank } from '../creative/StoryRank';
import { Type } from './Type';
import { SpeciesAttack } from './SpeciesAttack';
import { CosmeticForm } from './CosmeticForm';
import { Type as Clazz } from 'class-transformer';
import { DisplayableForm } from 'src/app/pokedex/models/DisplayableForm';
import { UrpgObjectModel } from '../ObjectModel';

export class Species extends UrpgObjectModel implements DisplayableForm {
    static dashExceptions = ["nidoran-f", "nidoran-m", "ho-oh", "meowstic-m", "basculin-red-striped", "unown-a", "porygon-z" ];
    
    dexno:number;
    classification:string;
    hp:number;
    attack:number;
    defense:number;
    specialAttack:number;
    specialDefense:number;
    speed:number;
    height:number;
    weight:number;
    maleAllowed:boolean;
    femaleAllowed:boolean;
    pokemart:number;
    contestCredits:number;
    displayName:string;
    formName:string;
    legendaryTier:number;
    alteredFormMethod:string;
    evolutionMethod:string;
    evolutionExpRequirement:number;
    megaStone:string;
    megaSuffix:string;

    @Clazz(() => Type)
    type1:Type;

    @Clazz(() => Type)
    type2:Type;

    @Clazz(() => StoryRank)
    storyRank:StoryRank;

    @Clazz(() => ArtRank)
    artRank:ArtRank;

    @Clazz(() => ParkRank)
    parkRank:ParkRank;

    @Clazz(() => UrpgObjectModel)
    parkLocation:UrpgObjectModel;

    @Clazz(() => SpeciesAttack)
    attacks:SpeciesAttack[];

    @Clazz(() => SpeciesAbility)
    abilities:SpeciesAbility[];

    @Clazz(() => CosmeticForm)
    cosmeticForms:CosmeticForm[];

    @Clazz(() => Species)
    preEvolution:Species;

    @Clazz(() => Species)
    preMega:Species;

    getSpeciesName() {
        return this.name;
    }

    getFormName() {
        return this.formName;
    }

    getName() {
        return this.name;
    }

    getDisplayName() {
        return this.displayName;
    }

    getSpecies() {
        return this;
    }

    getAttacksThatDifferByForm() {
        return null;
    }
    
    getSuffix():string {
        if (this.name !== undefined) {
            if (this.name.toLowerCase().indexOf("ultra") != -1)
            {
                return "-ultra";
            }

            let displayName = this.preMega == null ? this.displayName.toLowerCase() : this.preMega.displayName.toLowerCase();
            let name = this.name.toLowerCase();

            displayName = displayName.replace("\\", "");
            name = name.replace("\\", "");

            if (Species.dashExceptions.indexOf(name) == -1)
            {
                return name.replace(displayName, "");
            }
        }
        return "";
    }
  
    threeDigitDexno() : string {
        if (this.dexno < 10)
        {
            return "00" + this.dexno;
        }
        else if (this.dexno < 100)
        {
            return "0" + this.dexno;
        }
        else return "" + this.dexno;
    };
}