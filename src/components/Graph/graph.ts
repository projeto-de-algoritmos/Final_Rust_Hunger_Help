import { Graph } from "../../interfaces/graph.interface";

const generateNodes = (graph: Graph) => {
    const qtd = 11;
    const nodes: { id: number; }[] = [];
    for (let i = 0; i <= qtd; i++) {
        graph.set(i, []);
        nodes.push({ id: i });
    }
    return nodes;
}

const addLink = (graph: Graph, source: number, node: number, distance: number) => {
    let g = graph.get(source)
    if (g) {
        g.push({ link: node, distance });
    }
    let g2 = graph.get(node)
    if (g2) {
        g2.push({ link: source, distance });
    }
}

const staticMap = (graph: Graph) => {
    // constroe o mapa estático com seus nós já conectados, com distância nula
    addLink(graph, 0, 1, 0);
    addLink(graph, 0, 2, 0);
    addLink(graph, 0, 3, 0);
    addLink(graph, 2, 4, 0);
    addLink(graph, 2, 6, 0);
    addLink(graph, 4, 9, 0);
    addLink(graph, 9, 10, 0);
    addLink(graph, 9, 8, 0);
    addLink(graph, 10, 11, 0);
    addLink(graph, 6, 5, 0);
    addLink(graph, 5, 7, 0);
    addLink(graph, 5, 8, 0);
}

export default {
    generateNodes,
    staticMap
}