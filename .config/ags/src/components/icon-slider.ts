import type { IconProps } from "../../types/widgets/icon";
import type { SliderProps } from "../../types/widgets/slider";
import { css } from "../utils/css";

export interface IconSliderProps extends SliderProps {
  icon: IconProps["icon"];
}

export const IconSlider = ({ icon, ...props }: IconSliderProps) => {
  return Widget.Overlay({
    "pass-through": true,
    child: Widget.Slider({
      value: 10,
      min: 0,
      max: 100,
      ...props,
      className: css`
        scale {
          min-width: 320px;

          trough {
            min-height: 0;
            border-radius: 4rem;
            background: rgba(255, 255, 255, 0.25);
            border: none;
          }

          highlight {
            min-height: 0;
            border-radius: 2rem;
            border: 1.5rem solid rgba(255, 255, 255, 0.5);
            background: none;
          }

          slider {
            color: rgba(255, 255, 255, 0);
            background: none;
            box-shadow: none;
            border-radius: 0;
            caret-color: rgba(255, 255, 255, 0);
            border: none;
          }
        }
      `,
    }),
    overlays: [
      Widget.Icon({
        hpack: "start",
        icon,
        className: css`
          margin-left: 1.75rem;
          margin-top: 1.25rem;

          min-width: 1rem;
          min-height: 1rem;
          padding: 0;

          font-size: 1rem;
        `,
      }),
    ],
  });
};
