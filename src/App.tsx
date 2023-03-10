import { useEffect, useState } from "react";
import map from "./assets/mapa.png";
import rust from "./assets/rust.png";
import { food } from "./data/food";
import { Food } from "./interfaces/food.interface";
import { Graph, link } from "./interfaces/graph.interface";
import { BestDistribution } from "./interfaces/bestDistrubution.interface";
import { BestRoute } from "./interfaces/bestRoute.interface";
import graphGenerator from "./components/Graph/graph";
import foodGenerator from "./components/Knapsack/foodGenerator";
import distanceGenerator from "./components/Graph/distanceGenerator";
import knapsack from "./components/Knapsack/knapSack";
import bestRouteGenerator from "./components/bestRoute";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { TabPanelProps } from "./interfaces/tabPanel.interface";


function App() {
	const [selectedNode, setSelectedNode] = useState<Number>(-1);
	const [nodes, setNodes] = useState<{ id: number }[]>([]);
	const [foods, setFoods] = useState<Food[][]>([]);
	const [showMap, setShowMap] = useState<boolean>(false);
	const [graph, setGraph] = useState<Graph>(new Map<number, link[]>());
	const [distances, setDistances] = useState<any>([]);
	const [bestDistribution, setBestDistribution] = useState<
		BestDistribution[]
	>([]);
	const [bestRoute, setBestRoute] = useState({} as BestRoute);
	const [bagSize, setBagSize] = useState<Number>(0)
	const [value, setValue] = useState(0);


	const handleChange = (event: SelectChangeEvent) => {
		setBagSize(Number(event.target.value));
		setBestDistribution(
			knapsack.generateKnapSack(
				foods,
				Number(event.target.value)
			)
		);
	};

	const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	function TabPanel(props: TabPanelProps) {
		const { children, value, index, ...other } = props;


		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box sx={{ p: 3 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}

	function a11yProps(index: any) {
		return {
			id: `scrollable-force-tab-${index}`,
			"aria-controls": `scrollable-force-tabpanel-${index}`
		};
	}

	return (
		<Container>
			<Box textAlign="center" padding={2}>
				<Box
					flexGrow={1}
					textAlign="center"
					marginBottom={3}
				>
					<Link href=".">
						<img src={rust} alt="RUST" width="20%" />
					</Link>
					<Typography variant="h4">
						Rust Hunger Help
					</Typography>
				</Box>
				<Box>
					{foods.length == 0 && !showMap ? (
						<Box>
							<Box textAlign="initial">
								<Stack spacing={1}>
									<Typography variant="h6">Siga os passos a seguir para usar a aplica????o:</Typography>
									<Typography variant="body1">1: Gerar mapa com itens em cada regi??o</Typography>
									<Typography variant="body1">2: Selecionar tamanho da mochila</Typography>
									<Typography variant="body1">3: Visualizar itens possiveis de serem levados de acordo com  o peso da mochila e regi??o</Typography>
									<Typography variant="body1">4: Encontrar melhor regi??o para ir de acordo com a rela????o de distancia com a quantidade de fome que voce conseguir?? na regi??o</Typography>
								</Stack>
							</Box>
							<Box marginTop={2}>
								<Button
									variant="contained"
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
								</Button>
							</Box>
						</Box>
					) : null}
					{showMap ? (
						<Box>
							<Box marginBottom={2}>
								<Typography variant="body2">
									Para visualizar itens e dist??ncia de cada
									regi??o, clique em um n?? no mapa abaixo:
								</Typography>
							</Box>
							<Box>
								<img
									src={map} useMap="#image-map" width={500} height={500} />
								<map name="image-map">
									<area target="" alt="N?? 1" title="N?? 1" onClick={() => { setSelectedNode(0); }} coords="260,84, 25" shape="circle" />
									<area target="" alt="N?? 2" title="N?? 2" onClick={() => { setSelectedNode(1); }} coords="309,51, 25" shape="circle" />
									<area target="" alt="N?? 3" title="N?? 3" onClick={() => { setSelectedNode(2); }} coords="225,168, 25" shape="circle" />
									<area target="" alt="N?? 4" title="N?? 4" onClick={() => { setSelectedNode(3); }} coords="115,128,25" shape="circle" />
									<area target="" alt="N?? 5" title="N?? 5" onClick={() => { setSelectedNode(4); }} coords="96,228, 25" shape="circle" />
									<area target="" alt="N?? 6" title="N?? 6" onClick={() => { setSelectedNode(5); }} coords="231,263, 25" shape="circle" />
									<area target="" alt="N?? 7" title="N?? 7" onClick={() => { setSelectedNode(6); }} coords="475,274, 25" shape="circle" />
									<area target="" alt="N?? 8" title="N?? 8" onClick={() => { setSelectedNode(7); }} coords="401,374, 25" shape="circle" />
									<area target="" alt="N?? 9" title="N?? 9" onClick={() => { setSelectedNode(8); }} coords="267, 369, 25" shape="circle" />
									<area target="" alt="N?? 10" title="N?? 10" onClick={() => { setSelectedNode(9); }} coords="144,335, 25" shape="circle" />
									<area target="" alt="N?? 11" title="N?? 11" onClick={() => { setSelectedNode(10); }} coords="135, 417, 25" shape="circle" />
									<area target="" alt="N?? 12" title="N?? 12" onClick={() => { setSelectedNode(11); }} coords="69, 289, 25" shape="circle" />
								</map>
							</Box>
							<Box>
								<Stack spacing={2}>

									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">Mochila</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={String(bagSize)}
											label="Peso da Mochila"
											onChange={handleChange}
										>
											<MenuItem value={10}>10 Kg</MenuItem>
											<MenuItem value={20}>20 Kg</MenuItem>
											<MenuItem value={30}>30 Kg</MenuItem>
											<MenuItem value={50}>50 Kg</MenuItem>
											<MenuItem value={75}>75 Kg</MenuItem>
											<MenuItem value={100}>100 Kg</MenuItem>
										</Select>
									</FormControl>
								</Stack>

							</Box>
						</Box>
					) : null}
					{selectedNode !== -1 &&
						Object.keys(bestDistribution).length === 0 ? (
						<Box>
							<Box>
								<Box>
									<Box>
										<Typography variant="h6">
											N?? {Number(selectedNode) + 1}{" "}
											selecionado
										</Typography>
										<Typography variant="overline">
											Dist??ncia at?? o N?? 1:{" "}
											{
												distances[
												Number(selectedNode) - 1
												]
											}
											km
										</Typography>
									</Box>
								</Box>
							</Box>
							<Box marginBottom={5} justifyContent="center">
								<Stack spacing={3} direction="row" >

									{foods[Number(selectedNode)]?.map(
										(food: Food, index: number) => {
											return (
												<Box key={index}>
													<img src={food.image} width="100%" />
													<Box>
														<Typography>
															Nome: {food.name}
														</Typography>
													</Box>
													<Typography>
														Peso: {food.weight} Kg
													</Typography>
													<Typography>
														Fome: {food.hunger}
													</Typography>
												</Box>
											);
										}
									)}
								</Stack>
							</Box>
						</Box>
					) : null}
					{Object.keys(bestDistribution).length !== 0 &&
						Object.keys(bestRoute).length === 0 ? (
						<Box>
							<Box>
								<Typography variant="h6">
									Usando uma mochila de {String(bagSize)}{" "}, os itens possiveis de levar por regi??o sao:
								</Typography>
								<Box>
									<Tabs value={value} onChange={handleChangeTab}>

										{bestDistribution.map(
											(node: BestDistribution, index) => {

												return (

													<Tab key={index} label={index + 1}  {...a11yProps(0)} />


												);
											}
										)}
									</Tabs>

									<Box>

										{
											bestDistribution.map((node: BestDistribution, index3) => {
												return (
													<TabPanel key={index3} value={value} index={index3}>
														<Typography>
															{node.totalHunger}{" "}
															Fome
														</Typography>
														<Typography>
															{node.totalWeight}{" "}
															Kg
														</Typography>
														<Box>
															<Stack spacing={2} direction="row">
																{node.selectedFoods.map(
																	(
																		food: Food,
																		index2
																	) => {

																		return (

																			<Box key={index2}>
																				<Box>
																					<img src={food.image} />
																					<Box>
																						<Box>
																							{
																								food.name
																							}
																						</Box>
																					</Box>
																					<Box>
																						{
																							food.weight
																						}{" "}
																						Kg
																					</Box>
																					<Box>
																						{
																							food.hunger
																						}{" "}
																						Fome
																					</Box>
																				</Box>
																			</Box>

																		);
																	}
																)}
															</Stack>
														</Box>

													</TabPanel>
												)
											})
										}
									</Box>


								</Box>
							</Box>
							<Button
								variant="contained"
								onClick={() => {
									setBestRoute(
										bestRouteGenerator.findBestRoute(
											distances,
											bestDistribution
										)
									);
								}}
							>
								Encontrar melhor Regi??o
							</Button>
						</Box>
					) : null}
					{Object.keys(bestRoute).length !== 0 ? (
						<Box>
							<Box>
								<Typography>
									A melhor regi??o ?? a {bestRoute.region} com{" "}
									{bestRoute.distance} Km de distancia
								</Typography>
							</Box>
							<Box>
								<Typography>
									Total de fome: {bestRoute.totalHunger} e
									Peso na mochila: {bestRoute.totalWeight}
								</Typography>
							</Box>
							<Box padding={3}>
								<Box padding={2}>
									<Stack spacing={2} direction="row">

										{bestRoute.selectedFoods.map(
											(food: Food, index) => {
												return (
													<Box>
														<Box>
															<img src={food.image} />
															<Box >
																<Typography>
																	{food.name}
																</Typography>
															</Box>
															<Typography>
																{food.weight} Kg
															</Typography>
															<Typography>
																{food.hunger} Fome
															</Typography>
														</Box>
													</Box>
												);
											}
										)}
									</Stack>
								</Box>
								<Box padding={2}>
									<Typography variant="body1">
										Foi realizada uma rela????o entre a dist??ncia e quantidade de fome que ?? possivel recuperar na regi??o. Para cada 5 km andado gasta-se de 1 de fome. Considerando quantidade de fome adquirida na regi??o e a distancia percorrida, ser?? possivel chegar ao destino e percorrer mais {bestRoute.bestRelation} Km.
									</Typography>
								</Box>
							</Box>
						</Box>
					) : null}
				</Box>
				<Box>
					<Typography variant="caption">
						Baseado no jogo <Link href="https://rust.fandom.com/wiki/Rust">Rust</Link> que tem como objetivo sobreviver num cen??rio p??s-apocaliptico, e para isso ?? necessario procurar por recursos como comida;
					</Typography>
				</Box>
			</Box>
		</Container >
	);
}

export default App;
