// Gera os alimentos aleatórios para cada região

import { Food } from "../../interfaces/food.interface";

const getRandomFoods = (foods: Food[]) => {
    const randomFoods = [];
    for (let i = 0; i < 5; i++) {
        const random = foods[(Math.random() * foods.length) | 0];
        randomFoods.push(random);
    }
    return randomFoods;
}

const generateFoodsPerRegion = (foods: Food[]) => {
    const foodsPerRegion = [];

    for (let i=1; i<=12; i++) {
        const regionFoods = getRandomFoods(foods);
        foodsPerRegion.push(regionFoods);
    }
    console.log(foodsPerRegion)
    return foodsPerRegion;
}

export default { generateFoodsPerRegion, getRandomFoods };

/*
Passo unico

função para gerar os 15 itens aleatorios para cada regiao
ela retorna um array com 15 elementos em cada posição, simbolizando o id da regiao
*/