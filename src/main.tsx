import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import "./index.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#e65f2e',
		},
		secondary: {
			light: '#0066ff',
			main: '#0044ff',
			contrastText: '#ffcc00',
		},
	},
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box bgcolor="#6b6868">
				<App />
			</Box>
		</ThemeProvider>
	</React.StrictMode>
);
