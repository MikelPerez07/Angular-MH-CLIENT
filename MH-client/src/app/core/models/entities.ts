export interface Monster {
    id?: number;
    name: string;
    type: MonsterType;
    species: MonsterSpecies;
    elements: Element[];
    weaknesses: MonsterWeakness[];
    ailments: Ailment[];
    locations: Location[];
    icon: MonsterIcon;

}

export interface MonsterWeakness {
    id?: number;
    element: Element;
    stars: number;
    weaknessCondition: string;
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
    previous?: Weapon;
    weaponUpgrades?: Weapon[];
    upgradeMaterials: Material[];
    craftingMaterials: Material[];
    elementalDamage?: number;
    element: Element;
    elementHidden: number;
    crafting?: Crafting;
    icon?: string;
    image?: string;
    skills: Rank[];
    slots: WeaponSlot;


}
export interface WeaponSlot {
    id?: number;
    slot1: number;
    slot2: number;
    slot3: number;
}
export interface WeaponElement {
    id?: number;
    damage: number;
    hidden: number;
    elementalDamage: Element;
}

export interface Element {
    id?: number;
    name: string;
}

export interface WeaponType {
    id?: number;
    damageType: DamageType;
    type: string;
    motionValue: MotionValue[];

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
    id?: number;
    name: string;
    description: string;

}

export interface Rank {
    id?: number;
    description: string;
    level: number;
    skill: Skill;

}

export interface Location {
    id?: number;
    name: string;
    zoneCount: number;
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
    id?: number;
    type: string;

}