// Gerador de Distâncias Aleatórias

const randomDistance = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const setDistance = (graph, source, node, distance) => {
    graph.get(source).find(x => x.link === node).distance = distance;
    graph.get(node).find(x => x.link === source).distance = distance;
}

// Djikstra para gerar tabela de distâncias para o ponto inicial

const createPriorityQueue = () => {
    return [];
}

const enqueue = (pqueue, element, price) => {
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

const dequeue = (pqueue) => {
    if (!pqueue.length) throw "Is Empty!"

    return pqueue.shift()
}

const djikstraAlgorithm = (graph, startNode, endNode) => {
    let prices = {};
    let prevNode = {};
    const queue = createPriorityQueue();
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
        let currNode = minNode.element;

        const nodes = graph.get(currNode);

        if (!startNodes.length) return "Sem caminho utilizando esse nó inicial";

        for (let node of nodes) {
            const sumPrice = prices[currNode] + node.distance;

            if (sumPrice < prices[node.link]) {
                prevNode[node.link] = currNode;
                prices[node.link] = sumPrice;
                enqueue(queue, node.link, prices[node.link])
            }
        }

    }
    if (prices[endNode] === Infinity) return "Não é possível formar caminho até o nó final"
    else {
        return prices[endNode];
    }

}


const generateDistances = (graph, qtd) => {
    // gera as distâncias aleatórias para os nós já pré definidos
    addLink(graph, 1, 2, randomDistance(1, qtd));
    addLink(graph, 1, 3, randomDistance(1, qtd));
    addLink(graph, 1, 4, randomDistance(1, qtd));
    addLink(graph, 3, 5, randomDistance(1, qtd));
    addLink(graph, 3, 7, randomDistance(1, qtd));
    addLink(graph, 5, 10, randomDistance(1, qtd));
    addLink(graph, 10, 11, randomDistance(1, qtd));
    addLink(graph, 10, 9, randomDistance(1, qtd));
    addLink(graph, 11, 12, randomDistance(1, qtd));
    addLink(graph, 7, 6, randomDistance(1, qtd));
    addLink(graph, 6, 8, randomDistance(1, qtd));
    addLink(graph, 6, 9, randomDistance(1, qtd));

    const distances = [];
    for (let i = 1; i <= 12; i++) {
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
