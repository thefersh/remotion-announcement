import { Img } from 'remotion'
import AlbumImg from "./../assets/album.jpg"

export const Player = (): JSX.Element => {
  return (
	<div className="player">
		<div className="player-sing">
			<div className="player-sing__container">
				<h1 className="player-sing__name">Only those who forget die</h1>
				<p className="player-sing__album">Hola Beats · Pizza Stellar</p>
			</div>
			<Img className="player-sing__img" src={AlbumImg} />
		</div>
		<div className="player-progress">
			<div className="player-progress__bar" style={{ width: "50%" }} />
		</div>
	</div>
)
} 