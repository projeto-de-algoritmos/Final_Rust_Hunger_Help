import { BestDistribution } from "../interfaces/bestDistrubution.interface";
import { BestRoute } from "../interfaces/bestRoute.interface";

const relationKmHunger = (distance: number, hunger: number) => {

    // 1 de fome equivale a 5km, então precisamos encontrar a maior real_km.
    const possible_km = 5 * hunger;
    const real_km = possible_km - distance;

    return real_km;
}

const findBestRoute = (minorDistances: number[], bestFoodsPerRegion: BestDistribution[]) => {
    let bestRelation = -1000;
    let bestChoice = {} as BestRoute;

    for (let i = 0; i < minorDistances.length; i++) {

        const relation = relationKmHunger(minorDistances[i], bestFoodsPerRegion[i]?.totalHunger);


        if (relation > bestRelation) {
            bestRelation = relation;
            bestChoice = {
                bestRelation,
                totalWeight: bestFoodsPerRegion[i].totalWeight,
                totalHunger: bestFoodsPerRegion[i].totalHunger,
                selectedFoods: bestFoodsPerRegion[i].selectedFoods,
                distance: minorDistances[i],
                region: i + 1,
            }
        }
    }
    return bestChoice;

}

export default { findBestRoute };

/*
Função final, pega as distancias e as melhores comidas por região.
Faz um relativo da vida e distancia e retorna a melhor opção para o jogador
É a resposta final do problema :)
*/