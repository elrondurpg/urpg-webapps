import { PokemonBrief } from './PokemonBrief';

export class Trainer {
    name:string;
    roles:string[];
    joinDate:string;
    pokemon:PokemonBrief[];

    constructor(prototype:Trainer) {
        this.name = prototype.name;
        this.roles = prototype.roles;
        this.joinDate = prototype.joinDate;
        this.pokemon = [];
        for (let pokemon of prototype.pokemon) {
            this.pokemon.push(new PokemonBrief(pokemon));
        }
        
        this.pokemon.sort((a, b) => {
            if(a.displayName < b.displayName){
                return -1;
            }
            else if(a.displayName > b.displayName){
                return 1;
            }
            else{
                if(a.nickname < b.nickname){
                    return -1;
                }
                else if(a.nickname > b.nickname){
                    return 1;
                }
                return 0;
            }
        });
    }
}