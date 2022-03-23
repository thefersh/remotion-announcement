import { Player } from './components/player'
import { ArtistLogo } from './components/artist'
import { Spotify } from './components/spotify'
import "./styles.css"

export const MainScene = () => {
	return (
		<div className="main">
			<ArtistLogo />
			<Spotify />
			<Player />
		</div>
	);
};
