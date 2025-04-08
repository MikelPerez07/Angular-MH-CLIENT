export interface Monster {
    id?: number;
    name: string;
    type: MonsterType;
    species: MonsterSpecies;
    elements: Element[];
    ailments: Ailment[];
    locations: Location[];
    icon: MonsterIcon;

}

export interface Ailment {
    id?: number;
    name: string;
    description: string;

}

export interface MonsterSpecies {
    id?: number;
    species: string;

}

export interface MonsterType {
    id?: number;
    type: string;

}

export interface MonsterIcon {
    id?: number;
    name: string;
}

export interface Weapon {
    id?: number;
    name: string;
    type: WeaponType;
    rarity: number;
    rawAttack: number;
    displayAttack: number;
    sharpnesses: WeaponSharpness[];
    craftable: number;
    upgradeMaterials: Material[];
    craftingMaterials: Material[];
    elementData?: WeaponElement;
    crafting?: Crafting;
    icon?: string;
    image?: string;

}

export interface WeaponElement {
    id?: number;
    damage: number;
    hidden: number;
    element: Element;
}

export interface Element {
    id?: number;
    name: string;
}

export interface WeaponType {
    id?: number;
    damageType: DamageType;
    type: string;
    motionValue: MotionValue;

}

export interface WeaponSharpness {
    id?: number;
    sharpnessLevel: number;
    red: number;
    orange: number;
    green: number;
    blue: number;
    white: number;
    purple: number;
}

export interface MotionValue {
    id?: number;
    name: string;
    stun: number;
    exhaust: number;
    hits: string;
}

export interface DamageType {
    id?: number;
    damageType: string;
}

export interface Crafting {

}

export interface Material {
    id?: number;
    quantity: number;
    item: Item;

}

export interface Item {
    id?: number;
    name: string;
    description: string;
    rarity: number;
    value: number;
    icon?: string;

}

export interface Armor {

}

export interface Charm {

}

export interface Skill {

}

export interface Location {

}

export interface Quest {
    id?: number;
    name: string;
    type: QuestType;
    description: string;
    questRank: number;
    successCondition: string;
    location: Location;
    monsters: Monster[];

}

export interface QuestType {
    id?:number;
    type:string;

}