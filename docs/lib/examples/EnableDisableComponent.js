import React from 'react';
import { Player, ControlBar, NextFrameControl,
  PreviousFrameControl, CurrentTimeDisplay, ProgressControl,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';

export default (props) => {
  return (
    <Player
      poster="/assets/poster.png"
    >
      <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
      <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

      <ControlBar>
        <PreviousFrameControl fps={30} order={1.1} />
        <NextFrameControl fps={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton
          rates={[5, 2, 1, 0.5, 0.1]}
          order={7.1}
        />
        <ProgressControl
          timeSelections={[100, 200]}
          order={8}
        />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
  );
};
