import { ingredient } from "./ingredient";

export interface Recipe {
    _id: string;
    name: string;
    preparationTimeInMinutes: number;
    description: string;
    ingredient: ingredient[];
}
