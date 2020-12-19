export class PokemonBrief {
    static dashExceptions = ["nidoran-f", "nidoran-m", "ho-oh", "meowstic-m", "basculin-red-striped", "unown-a", "porygon-z" ];
    dbid:number;
    dexno:number;
    name:string;
    nickname:string;
    displayName:string;
    gender:string;
    type1:string;
    type2:string;
    box:boolean;
    uft:boolean;
    job:boolean;
    fullyEvolved:boolean;

    constructor(prototype:PokemonBrief) {
        this.dbid = prototype.dbid;
        this.dexno = prototype.dexno;
        this.name = prototype.name;
        this.nickname = prototype.nickname;
        this.displayName = prototype.displayName;
        this.gender = prototype.gender;
        this.type1 = prototype.type1;
        this.type2 = prototype.type2;
        this.box = prototype.box;
        this.uft = prototype.uft;
        this.job = prototype.job;
        this.fullyEvolved = prototype.fullyEvolved;
    }
    suffix() {
        if (this.name !== undefined) {
            if (this.name.toLowerCase().indexOf("ultra") != -1)
            {
                return "-ultra";
            }

            let displayName = this.displayName.toLowerCase();
            let name = this.name.toLowerCase();

            displayName = displayName.replace("\\", "");
            name = name.replace("\\", "");

            if (PokemonBrief.dashExceptions.indexOf(name) == -1)
            {
                return name.replace(displayName, "");
            }
        }
        return "";
    }
}