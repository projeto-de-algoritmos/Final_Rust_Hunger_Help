import { Graph } from './../../interfaces/graph.interface';
import { Pqueue } from '../../interfaces/pqueue.interface';
// Gerador de Distâncias Aleatórias

const randomDistance = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const setDistance = (graph: Graph, source: number, node: number, distance: number) => {
    let g = graph.get(source)
    if (g) {
        let gg = g.find(x => x.link === node)
        if (gg) {
            gg.distance = distance;
        }
    }
    let g2 = graph.get(node)
    if (g2) {
        let gg2 = g2.find(x => x.link === source)
        if (gg2) {
            gg2.distance = distance;
        }
    }
}

// Djikstra para gerar tabela de distâncias para o ponto inicial

const createPriorityQueue = () => {
    return [];
}

const enqueue = (pqueue: Pqueue[], element: number, price: number) => {
    let exists = false;

    for (let i = 0; i < pqueue.length; i++) {
        if (pqueue[i].price > price) {
            pqueue.splice(i, 0, { element, price })
            exists = true;
            break;
        }
    }

    if (!exists) pqueue.push({ element, price })

}

const dequeue = (pqueue: Pqueue[]) => {
    if (!pqueue.length) throw "Is Empty!"

    return pqueue.shift()
}

const djikstraAlgorithm = (graph: Graph, startNode: number, endNode: number) => {
    let prices: any = {};
    let prevNode: any = {};
    const queue: Pqueue[] = createPriorityQueue();
    const startNodes = graph.get(startNode);

    prices[startNode] = 0;
    enqueue(queue, startNode, 0);

    const vertices: any = graph.keys();
    for (let vert of vertices) {
        if (vert !== startNode) prices[vert] = Infinity;
        prevNode[vert] = null;
    }

    while (queue.length) {
        let minNode: any = dequeue(queue);
        let currNode: any = minNode.element;

        const nodes = graph.get(currNode);

        if (startNodes) {
            if (!startNodes.length) return "Sem caminho utilizando esse nó inicial";
        }


        if (nodes) {
            for (let node of nodes) {
                const sumPrice = prices[currNode] + node.distance;

                if (sumPrice < prices[node.link]) {
                    prevNode[node.link] = currNode;
                    prices[node.link] = sumPrice;
                    enqueue(queue, node.link, prices[node.link])
                }
            }
        }

    }
    if (prices[endNode] === Infinity) return "Não é possível formar caminho até o nó final"
    else {
        return prices[endNode];
    }

}


const generateDistances = (graph: Graph, qtd: number) => {
    // gera as distâncias aleatórias para os nós já pré definidos
    setDistance(graph, 0, 1, randomDistance(1, qtd));
    setDistance(graph, 0, 2, randomDistance(1, qtd));
    setDistance(graph, 0, 3, randomDistance(1, qtd));
    setDistance(graph, 2, 4, randomDistance(1, qtd));
    setDistance(graph, 2, 6, randomDistance(1, qtd));
    setDistance(graph, 4, 9, randomDistance(1, qtd));
    setDistance(graph, 9, 10, randomDistance(1, qtd));
    setDistance(graph, 9, 8, randomDistance(1, qtd));
    setDistance(graph, 10, 11, randomDistance(1, qtd));
    setDistance(graph, 6, 5, randomDistance(1, qtd));
    setDistance(graph, 5, 7, randomDistance(1, qtd));
    setDistance(graph, 5, 8, randomDistance(1, qtd));

    const distances = [];
    for (let i = 1; i <= 11; i++) {
        const distance = djikstraAlgorithm(graph, 0, i);
        distances.push(distance);
    }
    return distances;
}

export default { generateDistances };

/*
Passo único
depois de gerar o grafo estático, essa é a função para gerar as distancias aleatorias
generateDistances(graph, qtd);
-> essa quantidade é o valor máximo que as distâncias podem ser
*/
