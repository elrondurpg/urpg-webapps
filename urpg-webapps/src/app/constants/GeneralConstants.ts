export class GeneralConstants {
    static readonly LEVEL_UP_ATTACK_METHOD          :string = "LEVEL-UP";

    static readonly GENDER_ATTRIBUTE_TITLE          :string = "Gender";
    static readonly OWNED_EXTRA_MOVES_TITLE         :string = "Extra Moves";
    static readonly OWNED_HIDDEN_ABILITIES_TITLE    :string = "Hidden Abilities";

    static readonly MOVE_METHODS                        :string[]   = [ "LEVEL-UP", "TM", "HM", "BREEDING", "MOVE TUTOR", "SPECIAL" ];
    static readonly CURRENT_GENERATION                  :number     = 9;

    static readonly CHAMPION_NAME_INSTRUCTIONS      :string = "This field represents the name of the champion SLOT. It is not the name of the current reigning champion. Therefore, a name like 'URPG Champion' is appropriate.";
    static readonly ELITE_FOUR_NAME_INSTRUCTIONS    :string = "This field represents the name of the Elite Four SLOT. It is not the name of the current elite four member. Therefore, a name like 'Elite Four Seat 1' is appropriate.";
    static readonly SPECIES_NAME_INSTRUCTIONS       :string = "This field represents the Pokemon's technical name as it would appear in the URPG Reffing Calculator. Ex: Charizard, Charizard-Mega-X, Grimer-Alola";
    static readonly SPECIES_DISPLAY_NAME_INSTRUCTIONS   :string = "This field represents the Pokemon's 'prettified' name as it would appear in the Pokedex. Ex: Grimer-Alola's display name is Grimer. Houndoom-Mega's display name is Mega Houndoom.";
    static readonly SPECIES_FORM_NAME_INSTRUCTIONS      :string = "This field represents the title for a Pokemon's alternate form, displayed in addition to its display name in the Ultradex. Ex: Grimer-Alola's form name is 'Alola Form'.";
    static readonly SPECIES_CLASSIFICATION_INSTRUCTIONS :string = "This field represents the class of 'animal' into which a Pokemon is classified by the Pokedex. Ex: Pikachu's classification is the \"Mouse\" Pokemon."
    static readonly SPECIES_ALTERED_FORM_INSTRUCTIONS   :string = "This field represents the method of selecting or changing this Pokemon's form. Ex: 'Point of capture / evolution', 'Form changes when using this Pokemon's special items', 'Form changes in battle with X ability.'";
    static readonly SPECIES_MEGA_SUFFIX_INSTRUCTIONS    :string = "This field must be set ONLY on a Mega-evolved Pokemon (e.g. Mega Houndoom) and represents the part of that Pokemon's technical name that is added upon Mega Evolution. Ex: 'mega', 'mega-x'";
    static readonly SPECIES_BATTLE_ONLY_INSTRUCTIONS    :string = "This field is true only for altered forms that do not appear outside of battle. Ex: Greninja-Ash";

}