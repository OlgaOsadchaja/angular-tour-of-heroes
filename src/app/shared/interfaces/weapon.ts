// import { translate } from "../translate";

export interface Weapon {
    name: string;
}

export const weapons: Weapon[] = [
      {name: 'sword'},
      {name: 'claymore'},
      {name: 'polearm'},
      {name: 'catalyst'},
      {name: 'bow'},
];

export const weaponsRu: Weapon[] = [
    {name: 'меч'},
    {name: 'двуручный меч'},
    {name: 'копьё'},
    {name: 'магия'},
    {name: 'лук'},
];

//translate.translateName('sword')
  