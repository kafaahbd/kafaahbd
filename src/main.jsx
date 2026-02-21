import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import 'katex/dist/katex.min.css';

// ===== যোগ করুন: GitHub Pages redirect handling =====
(function handleRedirect() {
	const redirect = sessionStorage.getItem("redirect");
	if (redirect) {
		sessionStorage.removeItem("redirect");
		// replace the current url with the stored path
		const fullPath = window.location.origin + redirect;
		window.history.replaceState(null, null, fullPath);
	}
})();
// ===== শেষ =====

const basename = "/kafaahbd";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter basename={basename}>
			<HelmetProvider>
				<ThemeProvider>
					<LanguageProvider>
						<App />
					</LanguageProvider>
				</ThemeProvider>
			</HelmetProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
