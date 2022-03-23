import { Player } from './components/player'
import { ArtistLogo } from './components/artist'
import "./styles.css"

export const MainScene = () => {
	return (
		<div className="main">
			<ArtistLogo />
			<Player />
		</div>
	);
};
