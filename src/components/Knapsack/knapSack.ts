import { Food } from "../../interfaces/food.interface";

const knapSack = (foods: Food[], bag_weight: number) => {
    const qtdItens = foods.length;

    // Tabela usada na DP
    let M = new Array(qtdItens);

    // Tabela de seleção de itens
    let selection = new Array(qtdItens);;

    for (let i = 0; i < qtdItens; i++) {
        M[i] = new Array(bag_weight + 1).fill(0);
        selection[i] = new Array(bag_weight + 1).fill(0);
    }

    for (let i = 1; i < qtdItens; i++) {
        for (let j = 1; j <= bag_weight; j++) {
            // Inicialmente não pegamos esse objeto
            const VALUE_WITHOUT_THIS_ITEM = M[i - 1][j];

            M[i][j] = VALUE_WITHOUT_THIS_ITEM;
            selection[i][j] = 0;

            const hunger = foods[i].hunger;
            const weight = foods[i].weight;

            const VALUE_WITH_THIS_ITEM = hunger + M[i - 1][j - weight];

            if (weight <= j && VALUE_WITH_THIS_ITEM > VALUE_WITHOUT_THIS_ITEM) {
                M[i][j] = VALUE_WITH_THIS_ITEM;
                selection[i][j] = 1;
            }
        }
    }

    const selectedFoods = [];
    let m = bag_weight;
    let totalWeight = 0;

    for (let i = qtdItens - 1; i >= 1; i--) {
        if (selection[i][m] === 1) {
            selectedFoods.push(foods[i]);
            totalWeight += foods[i].weight;
            m = m - foods[i].weight;
        }
    }

    const totalHunger = M[qtdItens - 1][bag_weight];
    return { totalHunger, totalWeight, selectedFoods };
}


const generateKnapSack = (foodsPerRegion: Food[][], bag_weight: number) => {
    const bestKnapsacks = [];
    for (let i = 0; i < foodsPerRegion.length; i++) {
        const knapsack = knapSack(foodsPerRegion[i], bag_weight);
        bestKnapsacks.push(knapsack);
    }
    return bestKnapsacks;
}
export default { generateKnapSack };


/*
Função para saber os melhores alimentos a serem escolhidos de acordo com o tamanho da mochila escolhido

Retorna um array com os melhores alimentos de cada regiao (121arrays dos melhores alimentos)

generateKnapSack(foodsPerRegion, bag_weight)
*/
