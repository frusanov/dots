import Slider from "../../../types/widgets/slider";
import { brightness } from "../../services/brightness";
import { IconSlider, IconSliderProps } from "../icon-slider";

export const Brightness = () => {
  const handleChange = ({ value }: { value: number }) => {
    brightness.screen_value = Math.max(value / 100, 0.1);
  };

  return IconSlider({
    icon: "display-brightness-symbolic",
    onChange: handleChange,
  }).hook(brightness, (self) => {
    const slider = self.child as Slider<Attr>;
    slider.value = brightness.screen_value * 100;
  });
};
