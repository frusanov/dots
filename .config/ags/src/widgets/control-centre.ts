import { IconSlider } from "../widgets/icon-slider";
import { buttonStyle } from "../styles/button.style";
import { css, cx } from "../utils/css";
import { ToggleExpand } from "./toggle-expand";

const battery = await Service.import("battery");

export const ControlCentre = () =>
  Widget.Box({
    homogeneous: false,
    vertical: false,
    className: css`
      margin-top: 20px;
    `,

    hpack: "end",
    children: [
      Widget.Box({
        className: cx(
          buttonStyle,
          css`
            margin: 0 20px 0 0;
          `,
        ),
        vertical: true,
        children: [
          IconSlider({
            icon: "audio-volume-high-symbolic",
          }),
          ToggleExpand({}),
        ],
      }),
    ],
  });
