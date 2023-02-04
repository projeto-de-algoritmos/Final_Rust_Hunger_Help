import {useState} from "react";
import "./App.css";
import map from "./assets/mapa.png";
import rust from "./assets/rust.png";

function App() {
	const [selectedNode, setSelectedNode] = useState<Number>(-1);

	return (
		<div className="App">
			<header className="App-header">
				<a className="header-title">
					<img src={rust} alt="RUST" width="40%" />
				</a>
			</header>
			<body>
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
								setSelectedNode(1);
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
								setSelectedNode(2);
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
								setSelectedNode(3);
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
								setSelectedNode(4);
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
								setSelectedNode(5);
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
								setSelectedNode(6);
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
								setSelectedNode(7);
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
								setSelectedNode(8);
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
								setSelectedNode(9);
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
								setSelectedNode(10);
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
								setSelectedNode(11);
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
								setSelectedNode(12);
							}}
							coords="69, 289, 25"
							shape="circle"
						/>
					</map>
				</div>
			</body>
		</div>
	);
}

export default App;
