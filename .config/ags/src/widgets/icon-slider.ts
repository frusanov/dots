import type { IconProps } from "../../types/widgets/icon";
import type { Slider, SliderProps } from "../../types/widgets/slider";
import { BaseButton } from "../components/base-button";
import { css, cx } from "../utils/css";
import { ValueIcon } from "./value-icon";

export interface IconSliderProps extends SliderProps {
  icon: IconProps["icon"] | Array<IconProps["icon"]>;
  onToggle?: () => void;
}

export const IconSlider = ({
  icon,
  onToggle,
  onChange,
  ...props
}: IconSliderProps) => {
  const iconsArray = Array.isArray(icon);
  const iconSafe = iconsArray ? icon[0] : icon;

  const innerValue = Variable<number>(props.value as number);

  const handleToggle = () => {
    if (onToggle) onToggle();
  };

  const handleChange: SliderProps["onChange"] = (slider) => {
    innerValue.setValue(slider.value / 100);
    if (onChange) (onChange as any)(slider);
  };

  const iconStyle = css`
    margin-left: 0.5rem;
    padding: 0;
    min-width: 1rem;
    min-height: 1rem;

    font-size: 1rem;
  `;

  return Widget.Overlay({
    "pass-through": true,
    child: Widget.Slider({
      ...props,
      onChange: handleChange,
      drawValue: false,
      className: cx([
        css`
          min-width: 320px;

          trough {
            min-height: 0;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.25);
            border: none;
          }

          highlight {
            min-height: 0;
            border-radius: 1rem;
            border: 1rem solid rgba(255, 255, 255, 0.5);
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
      BaseButton({
        className: css`
          min-width: 1rem;
          min-height: 1rem;
          margin-left: 0.75rem;
          padding: 0.5em 0.5em 0.5em 0;
          border-radius: 50%;
        `,
        onClicked: handleToggle,
        hpack: "start",
        vpack: "center",
        cursor: "pointer",
        child: iconsArray
          ? ValueIcon({
              icons: icon,
              value: innerValue.bind("value"),
              className: iconStyle,
            })
          : Widget.Icon({
              icon: iconSafe,
              className: iconStyle,
            }),
      }),
    ],
  });
};
