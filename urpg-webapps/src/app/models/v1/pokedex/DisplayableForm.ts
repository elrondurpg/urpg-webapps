import { AlteredForm } from 'src/app/models/v1/pokedex/AlteredForm';
import { CosmeticForm } from 'src/app/models/v1/species/CosmeticForm';
import { Species } from 'src/app/models/v1/species/Species';

export interface DisplayableForm {
    getSpeciesName();
    getFormName();
    getDisplayName();
    getSuffix():string;
    getSpecies();
    getAttacksThatDifferByForm();
}