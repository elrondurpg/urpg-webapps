import { DisplayableForm } from 'src/app/pokedex/models/DisplayableForm';
import { UrpgObjectModel } from '../ObjectModel';
import { Species } from './Species';

export class CosmeticForm extends UrpgObjectModel implements DisplayableForm {
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