import { Img } from "remotion"
import ArtistImg from "./../assets/artist.jpg"

export const ArtistLogo = () => {
  return (
	<div className="artist">
		<Img className="artist__img" src={ArtistImg}/>
	</div>
)
}