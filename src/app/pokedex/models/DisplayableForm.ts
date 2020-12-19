import { AlteredForm } from 'src/app/models/pokedex/AlteredForm';
import { CosmeticForm } from 'src/app/models/species/CosmeticForm';
import { Species } from 'src/app/models/species/Species';

export interface DisplayableForm {
    getSpeciesName();
    getFormName();
    getDisplayName();
    getSuffix():string;
    getSpecies();
    getAttacksThatDifferByForm();
}