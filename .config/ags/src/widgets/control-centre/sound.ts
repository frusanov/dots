import Slider from "../../../types/widgets/slider";
import { IconSlider, IconSliderProps } from "../icon-slider";

const audio = await Service.import("audio");

export const Sound = () => {
  const handleSpeakerChange = ({ value }: { value: number }) => {
    audio.speaker.volume = value / 100;
  };

  const handleMicrophoneChange = ({ value }: { value: number }) => {
    audio.microphone.volume = value / 100;
  };

  return Widget.Box({
    vertical: true,
    children: [
      IconSlider({
        icon: "audio-volume-high-symbolic",
        onChange: handleSpeakerChange,
      }).hook(audio.speaker, (self) => {
        const slider = self.child as Slider<Attr>;
        slider.value = audio.speaker.volume * 100;
      }),
      IconSlider({
        icon: "microphone-sensitivity-high",
        onChange: handleMicrophoneChange,
      }).hook(audio.microphone, (self) => {
        const slider = self.child as Slider<Attr>;
        slider.value = audio.microphone.volume * 100;
      }),
    ],
  });
};
