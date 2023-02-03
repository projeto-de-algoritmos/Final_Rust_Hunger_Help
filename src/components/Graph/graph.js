const generateNodes = (graph) => {
    const qtd = 12;
    const nodes = [];
    for (let i = 0; i <= qtd; i++) {
        graph.set(i, []);
        nodes.push({ id: i });
    }
    return nodes;
}

const addLink = (graph, source, node, distance) => {
    graph.get(source).push({ link: node, distance });
    graph.get(node).push({ link: source, distance });
}

const staticMap = (graph) => {
    // Constroe o mapa estático com seus nós já conectados, com distância nula
    addLink(graph, 1, 2, 1);
    addLink(graph, 1, 3, 2);
    addLink(graph, 1, 4, 3);
    addLink(graph, 3, 5, 4);
    addLink(graph, 3, 7, 9);
    addLink(graph, 5, 10, 3);
    addLink(graph, 10, 11, 2);
    addLink(graph, 10, 9, 3);
    addLink(graph, 11, 12, 3);
    addLink(graph, 7, 6, 6);
    addLink(graph, 6, 8, 7);
    addLink(graph, 6, 9, 3);
}

export default {
    generateNodes, staticMap
}