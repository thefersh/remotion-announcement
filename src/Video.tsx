import {Composition} from 'remotion';
import {MainScene} from './Composition';

const fps = 30
const durationInSeconds = 15

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="main"
				component={MainScene}
				durationInFrames={durationInSeconds * fps}
				fps={fps}
				width={1020}
				height={1200}
			/>
		</>
	);
};
