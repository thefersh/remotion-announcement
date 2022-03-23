import { Img, Audio, useVideoConfig, useCurrentFrame, interpolate } from 'remotion'
import { getAudioDuration } from "@remotion/media-utils"
import AlbumImg from "./../assets/album.jpg"
import AudioMp3 from "./../assets/audio.mp3"
import { useCallback, useEffect, useState } from 'react'

export const Player = (): JSX.Element => {
	const [data, setData] = useState(0)
	const { fps } = useVideoConfig()
	const frame = useCurrentFrame()

	const getDuration = useCallback(async () => {
    const duration = await getAudioDuration(AudioMp3);
		setData((duration * fps))
  }, []);
 
  useEffect(() => {
    getDuration();
  }, []);

  return (
	<>
		<Audio src={AudioMp3} volume={interpolate(frame, [0, 90], [0, 1], {
          extrapolateLeft: "clamp",
        })} />
		<div className="player">
			<div className="player-sing">
				<div className="player-sing__container">
					<h1 className="player-sing__name">Only those who forget die</h1>
					<p className="player-sing__album">Hola Beats · Pizza Stellar</p>
				</div>
				<Img className="player-sing__img" src={AlbumImg} />
			</div>
			<div className="player-progress">
				<div className="player-progress__bar" style={{ width: (frame/data) * 100 + "%" }} />
			</div>
		</div>
	</>
)
} 