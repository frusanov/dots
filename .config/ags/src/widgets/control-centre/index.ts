import { IconSlider } from "../../widgets/icon-slider";
import { buttonStyle } from "../../styles/button.style";
import { css, cx } from "../../utils/css";
import { ToggleExpand } from "../toggle-expand";
import { GradientBorder } from "../gradient-border";
import { Sound } from "./sound";
import { Brightness } from "./brightness";

const battery = await Service.import("battery");

export const ControlCentre = () =>
  Widget.Box({
    homogeneous: false,
    vertical: false,
    className: css`
      /* margin-top: 20px; */
    `,

    hpack: "end",
    children: [
      GradientBorder({
        className: css`
          margin: 20px 20px 1rem 1rem;
          box-shadow: 0 0 0.5rem rgba(26, 26, 26, 0.93);
        `,
        children: [
          Widget.Box({
            className: cx(
              buttonStyle,
              css`
                padding: 1rem 0;
              `,
            ),
            vertical: true,
            children: [Sound(), Brightness()],
          }),
        ],
      }),
    ],
  });
