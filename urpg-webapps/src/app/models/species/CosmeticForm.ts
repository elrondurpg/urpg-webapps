import { DisplayableForm } from 'src/app/pokedex/models/DisplayableForm';
import { Species } from './Species';

export class CosmeticForm implements DisplayableForm {
    name:string;
    formName:string;
    species:Species;
    attacksThatDifferByForm:Map<string,string>;

    getSpeciesName() {
        return this.species.name;
    }

    getFormName() {
        return this.formName;
    }

    getDisplayName() {
        return this.species.displayName;
    }

    getSuffix() {
        return this.name.replace(this.species.name, "");
    }

    getSpecies() {
        return this.species;
    }

    getAttacksThatDifferByForm() {
        return this.attacksThatDifferByForm;
    }
}