import {useEffect, useState} from "react";
import "./App.css";
import map from "./assets/mapa.png";
import rust from "./assets/rust.png";
import {food} from "./data/food";
import {Food} from "./interfaces/food.interface";
import {Graph, link} from "./interfaces/graph.interface";
import {BestDistribution} from "./interfaces/bestDistrubution.interface";
import {BestRoute} from "./interfaces/bestRoute.interface";
import graphGenerator from "./components/Graph/graph";
import foodGenerator from "./components/Knapsack/foodGenerator";
import distanceGenerator from "./components/Graph/distanceGenerator";
import knapsack from "./components/Knapsack/knapSack";
import bestRouteGenerator from "./components/bestRoute";

function App() {
	const [selectedNode, setSelectedNode] = useState<Number>(-1);
	const [nodes, setNodes] = useState<{id: number}[]>([]);
	const [foods, setFoods] = useState<Food[][]>([]);
	const [showMap, setShowMap] = useState<boolean>(false);
	const [graph, setGraph] = useState<Graph>(new Map<number, link[]>());
	const [distances, setDistances] = useState<any>([]);
	const [bestDistribution, setBestDistribution] = useState<
		BestDistribution[]
	>([]);
	const [bestRoute, setBestRoute] = useState({} as BestRoute);

	return (
		<div className="App">
			<header className="App-header">
				<a className="header-title" href=".">
					<img src={rust} alt="RUST" width="20%" />
				</a>
			</header>
			<body>
				{foods.length == 0 && !showMap ? (
					<div>
						<div className="action">
							<button
								type="button"
								onClick={() => {
									setShowMap(true);
									setNodes(
										graphGenerator.generateNodes(graph)
									);
									graphGenerator.staticMap(graph);
									setFoods(
										foodGenerator.generateFoodsPerRegion(
											food
										)
									);
									setDistances(
										distanceGenerator.generateDistances(
											graph,
											13
										)
									);
								}}
							>
								Iniciar
							</button>
						</div>
					</div>
				) : null}
				{showMap ? (
					<div>
						<div className="action mrg-top-50 mrg-btm-20">
							<span className="result">
								Para visualizar itens e distância de cada
								região, clique em um nó no mapa abaixo:
							</span>
						</div>
						<div>
							<img
								src={map}
								useMap="#image-map"
								width={500}
								height={500}
							/>
							<map name="image-map">
								<area
									target=""
									alt="Nó 1"
									title="Nó 1"
									href="#"
									onClick={() => {
										setSelectedNode(0);
									}}
									coords="260,84, 25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 2"
									title="Nó 2"
									href="#"
									onClick={() => {
										setSelectedNode(1);
									}}
									coords="309,51, 25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 3"
									title="Nó 3"
									href="#"
									onClick={() => {
										setSelectedNode(2);
									}}
									coords="225,168, 25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 4"
									title="Nó 4"
									href="#"
									onClick={() => {
										setSelectedNode(3);
									}}
									coords="115,128,25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 5"
									title="Nó 5"
									href="#"
									onClick={() => {
										setSelectedNode(4);
									}}
									coords="96,228, 25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 6"
									title="Nó 6"
									href="#"
									onClick={() => {
										setSelectedNode(5);
									}}
									coords="231,263, 25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 7"
									title="Nó 7"
									href="#"
									onClick={() => {
										setSelectedNode(6);
									}}
									coords="475,274, 25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 8"
									title="Nó 8"
									href="#"
									onClick={() => {
										setSelectedNode(7);
									}}
									coords="401,374, 25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 9"
									title="Nó 9"
									href="#"
									onClick={() => {
										setSelectedNode(8);
									}}
									coords="267, 369, 25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 10"
									title="Nó 10"
									href="#"
									onClick={() => {
										setSelectedNode(9);
									}}
									coords="144,335, 25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 11"
									title="Nó 11"
									href="#"
									onClick={() => {
										setSelectedNode(10);
									}}
									coords="135, 417, 25"
									shape="circle"
								/>
								<area
									target=""
									alt="Nó 12"
									title="Nó 12"
									href="#"
									onClick={() => {
										setSelectedNode(11);
									}}
									coords="69, 289, 25"
									shape="circle"
								/>
							</map>
						</div>
						<div>
							<button
								type="button"
								onClick={() => {
									setBestDistribution(
										knapsack.generateKnapSack(foods, 100)
									);
								}}
							>
								Setar mochila
							</button>
							<button
								type="button"
								onClick={() => {
									setBestRoute(
										bestRouteGenerator.findBestRoute(
											distances,
											bestDistribution
										)
									);
								}}
							>
								Encontrar melhor Região
							</button>
						</div>
					</div>
				) : null}
				{selectedNode !== -1 &&
				Object.keys(bestDistribution).length === 0 ? (
					<div>
						<div className="NO-SELECIONADO">
							<div className="CARD">
								<div className="TITLE">
									<span>
										Nó {Number(selectedNode) + 1}{" "}
										selecionado
									</span>
									<div>
										Distância até o Nó 1:{" "}
										{distances[Number(selectedNode) - 1]}km
									</div>
								</div>
							</div>
						</div>
						<div className="ITEMS">
							{foods[Number(selectedNode)]?.map(
								(food: Food, index: number) => {
									return (
										<div className="ITEM" key={index}>
											<div className="CARD">
												{/* <img src={food.image} /> */}
												<div className="CARD-TITLE">
													<div className="ITEM-NAME">
														{food.name}
													</div>
												</div>
												<div className="ITEM-PRICE">
													{food.weight} Kg
												</div>
												<div className="ITEM-PRICE">
													{food.hunger} Fome
												</div>
											</div>
										</div>
									);
								}
							)}
						</div>
					</div>
				) : null}
				{Object.keys(bestDistribution).length !== 0 &&
				Object.keys(bestRoute).length === 0 ? (
					<div>
						<div>
							<span>
								Usando uma mochila de 100Kg, os itens possiveis
								de levar por região sao:
							</span>
							<div className="ITENS">
								{bestDistribution.map(
									(node: BestDistribution, index) => {
										return (
											<div className="ITEM" key={index}>
												<div className="CARD">
													<div className="CARD-TITLE">
														{node.totalHunger} Fome
													</div>
													<div className="ITEM-PRICE">
														{node.totalWeight} Kg
													</div>
													<div className="ITEMS_CARRY">
														{node.selectedFoods.map(
															(
																food: Food,
																index
															) => {
																return (
																	<div
																		className="ITEM"
																		key={
																			index
																		}
																	>
																		<div className="CARD">
																			{/* <img
																				src={
																					food.image
																				}
																			/> */}
																			<div className="CARD-TITLE">
																				<div className="ITEM-NAME">
																					{
																						food.name
																					}
																				</div>
																			</div>
																			<div className="ITEM-PRICE">
																				{
																					food.weight
																				}{" "}
																				Kg
																			</div>
																			<div className="ITEM-PRICE">
																				{
																					food.hunger
																				}{" "}
																				Fome
																			</div>
																		</div>
																	</div>
																);
															}
														)}
													</div>
												</div>
											</div>
										);
									}
								)}
							</div>
						</div>
					</div>
				) : null}
				{Object.keys(bestRoute).length !== 0 ? (
					<div>
						<div>
							<span>
								A melhor região é: {bestRoute.region} com{" "}
								{bestRoute.distance} de distancia
							</span>
						</div>
						<div>
							<span>
								Total de fome: {bestRoute.totalHunger} e Peso na
								mochila: {bestRoute.totalWeight}
							</span>
						</div>
						<div className="ITENS">
							{bestRoute.selectedFoods.map(
								(food: Food, index) => {
									return (
										<div className="ITEM" key={index}>
											<div className="CARD">
												{/* <img
                      src={
                        food.image
                      }
                    /> */}
												<div className="CARD-TITLE">
													<div className="ITEM-NAME">
														{food.name}
													</div>
												</div>
												<div className="ITEM-PRICE">
													{food.weight} Kg
												</div>
												<div className="ITEM-PRICE">
													{food.hunger} Fome
												</div>
											</div>
										</div>
									);
								}
							)}
						</div>
					</div>
				) : null}
			</body>
		</div>
	);
}

export default App;
