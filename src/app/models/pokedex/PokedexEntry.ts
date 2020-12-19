import { Species } from '../species/Species';
import { AlteredForm } from './AlteredForm';
import { TypeMatchup } from './TypeMatchup';
import { Type } from 'class-transformer';
import { DisplayableForm } from 'src/app/pokedex/models/DisplayableForm';
export class PokedexEntry {

    @Type(() => Species)
    species:Species;

    @Type(() => Species)
    prevDex:Species;

    @Type(() => Species)
    nextDex:Species;

    @Type(() => AlteredForm)
    alteredForms:AlteredForm[] = new Array();

    @Type(() => Species)
    evolutionFamily:Species[][];

    @Type(() => PokedexEntry)
    megaEvolutions:PokedexEntry[];

    @Type(() => TypeMatchup)
    typeMatchups:TypeMatchup[];

    attacksThatDifferByForm:string[];

    allForms:DisplayableForm[] = new Array();

    currentDisplayedForm = 0;

    collectAllForms() {
        let forms = new Array();
        if ((this.alteredForms === undefined || this.alteredForms.length == 0) && this.species.cosmeticForms !== undefined && this.species.cosmeticForms.length > 0) {
            forms.push(this.species);
            for (let cosmeticForm of this.species.cosmeticForms) {
                cosmeticForm.species = this.species;
                forms.push(cosmeticForm);
            }
        }
        for(let alteredForm of this.alteredForms) {
            forms.push(alteredForm);
            for (let cosmeticForm of alteredForm.species.cosmeticForms) {
                cosmeticForm.species = alteredForm.species;
                forms.push(cosmeticForm);
            }
        }
        this.allForms = forms;
    }

    getCurrentDisplayedFormSuffix() {
        if (this.allForms === undefined || this.allForms[0] === undefined) return this.species.getSuffix().toLowerCase();
        return this.allForms[this.currentDisplayedForm].getSuffix().toLowerCase();
    }
}