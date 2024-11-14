import type { IconProps } from "../../types/widgets/icon";
import type { SliderProps } from "../../types/widgets/slider";
import { css, cx } from "../utils/css";

export interface IconSliderProps extends SliderProps {
  icon: IconProps["icon"];
}

export const IconSlider = ({ icon, ...props }: IconSliderProps) => {
  return Widget.Overlay({
    "pass-through": true,
    child: Widget.Slider({
      ...props,
      marks: [1, 2],
      drawValue: false,
      className: cx([
        css`
          min-width: 320px;

          trough {
            /* background-color: red; */
            min-height: 0;
            /* border: 1rem solid white; */

            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.25);
            border: none;
          }

          highlight {
            min-height: 0;
            border-radius: 1rem;
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
        `,
        ...(props.className ? [props.className as string] : []),
      ]),
      value: 10,
      step: 1,
      min: 0,
      max: 100,
    }),
    overlays: [
      Widget.Icon({
        hpack: "start",
        icon,
        className: css`
          margin-left: 1.75rem;
          margin-top: 0.25rem;

          min-width: 1rem;
          min-height: 1rem;
          padding: 0;

          font-size: 1rem;
        `,
      }),
    ],
  });
};
