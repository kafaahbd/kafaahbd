import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // <-- use HashRouter
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HashRouter>
			<ThemeProvider>
				<LanguageProvider>
					<App />
				</LanguageProvider>
			</ThemeProvider>
		</HashRouter>
	</React.StrictMode>,
);
