import { Pqueue } from "../../interfaces/pqueue.interface";
import { Graph } from "../../interfaces/graph.interface";
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

    const vertices = graph.keys();
    for (let vert of vertices) {
        if (vert !== startNode) prices[vert] = Infinity;
        prevNode[vert] = null;
    }

    while (queue.length) {
        let minNode = dequeue(queue);
        let currNode = minNode ? minNode.element : 0;

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

const tableDistances = (graph: Graph) => {
    const distances = [];
    for (let i = 2; i <= 12; i++) {
        const distance = djikstraAlgorithm(graph, 0, i);
        distances.push(distance);
    }
    return distances;
}

export default { tableDistances };

/* 
Aqui é só para gerar a tabela de distâncias entre os pontos de acordo com o ponto inicial 0
depois de gerar as distancias com o distanceGenerator

Passo Único
TableDistances(graph)
*/