import { buttonStyle } from "../../styles/button.style";
import { css, cx } from "../../utils/css";
import { Calendar } from "../calendar";
import { GradientBorder } from "../gradient-border";
import { Media } from "./media";

export const InfoCentre = () => {
  return Widget.Box({
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
                padding: 1rem;
              `,
            ),
            vertical: false,
            children: [
              Widget.Box({
                children: [Media()],
              }),
              Widget.Box({
                children: [Calendar()],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
