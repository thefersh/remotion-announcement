import { Player } from './components/player'
import { ArtistLogo } from './components/artist'
import { Spotify } from './components/spotify'
import "./styles.css"
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const MainScene = () => {
	const { fps, durationInFrames } = useVideoConfig()
	const frame = useCurrentFrame()

	const startTransition = durationInFrames - (7 * fps)
	const endTransition = durationInFrames - (6 * fps)

	const flex = interpolate(frame, [startTransition + fps, endTransition + fps], [0, 1], { easing: x => x > 0 ? 1 : 0 })
	const margin = interpolate(frame, [startTransition, endTransition], [125, 0], { "extrapolateLeft": "clamp" })
	const layout = interpolate(frame, [startTransition - fps, endTransition], [1, 0], { "extrapolateLeft": "clamp" })
	return (
		<>
			<div style={{     background: "#1ed760",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "10",
    marginLeft: layout !== 1 ? "-100%": "100%",
    transition: "margin 2s ease-in-out" }} />
			<div className="main">
				<div className="main-container" style={{ flex, marginLeft: margin < 0 ? 0 : margin + "%", display: margin !== 125 ? "flex" : "none" }}>
					<ArtistLogo />
					<Spotify />
				</div>
				<Player />
			</div>
		</>
	);
};
