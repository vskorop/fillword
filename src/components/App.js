import styled, { createGlobalStyle, css } from "styled-components";
import GameProvider from "../providers/GameProvider";
import Button from "./Buttons";
import GameArea from "./GameArea";
import { Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
	/* colors */
	:root {
		${props => props.darkMode ? css`
			--clr-background: #111;
			--clr-primary: #59a9ff;
			--clr-square: #303030;
			--clr-square-active: #1f2e40;
			--clr-border: #4a4a4a;
			--clr-text: white;
			--clr-highlight: #222;
		` : css`
			--clr-primary: #007bff;
			--clr-square: white;
			--clr-square-active: #e0efff;
			--clr-border: #ddd;
			--clr-text: #444;
			--clr-overlay: rgba(0, 0, 0, 0.5);
		`}
	}
	/* misc */
	body {
		margin: 0;
		background-color: var(--clr-background);
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		font-family: 'Source Serif 4', sans-serif;
		color: const(--clr-text);
	}

	/* set everything to be the height of the screen */
	html, body, #root {
		height: 100%;
	}

	/* set global font size based on screen size */
	html {
		font-size: 16px;
	}

	@media screen and (min-width: 401px) and (min-height: 667px) {
		html {
			font-size: 20px;
		}
	}

	@media screen and (min-width: 481px) and (min-height: 801px) {
		html {
			font-size: 24px;
		}
	}

	@media screen and (min-width: 661px) and (min-height: 1101px) {
		html {
			font-size: 32px;
		}
	}
`
const StyledApp = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const App = () => {
	return (
		<>
       	<GlobalStyle/>
			<StyledApp>
				<GameProvider>
					<GameArea/>
				</GameProvider>	
			</StyledApp>
		</>
	);
}

export default App;
