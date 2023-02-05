import { Food } from './food.interface';

export type BestRoute = {
    bestRelation: number;
    totalWeight: number;
    totalHunger: number;
    selectedFoods: Food[];
    distance: number;
    region: number;
}