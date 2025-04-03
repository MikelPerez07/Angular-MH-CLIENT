export interface Monster {

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
    crafting?: Crafting;
    icon?: string;
    image?: string;

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