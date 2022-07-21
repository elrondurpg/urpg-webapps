import { Species } from '../species/Species';
import { Type } from 'class-transformer';
import { DisplayableForm } from 'src/app/models/v1/pokedex/DisplayableForm';

export class AlteredForm implements DisplayableForm {
    @Type(() => Species)
    species:Species;

    @Type(() => Map)
    attacksThatDifferByForm:Map<string,string>;

    getSpeciesName() {
        return this.species.name;
    }

    getFormName() {
        return this.species.formName;
    }

    getSuffix():string {
        return this.species.getSuffix();
    }

    getDisplayName() {
        return this.species.displayName;
    }

    getSpecies() {
        return this.species;
    }

    getAttacksThatDifferByForm() {
        return this.attacksThatDifferByForm;
    }
}
