import { Food } from "./food.interface";

export type BestDistribution = {
    totalHunger: number;
    totalWeight: number;
    selectedFoods: Food[];
};