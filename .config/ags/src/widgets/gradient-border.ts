import type { BoxProps } from "../../types/widgets/box";
import { cx, css } from "../utils/css";

export interface GradientBorderProps extends BoxProps {}

export const GradientBorder = (props: GradientBorderProps) =>
  Widget.Box({
    ...props,
    className: cx(
      css`
        padding: 2px;
        border-radius: 1rem;
        background-image: linear-gradient(
          45deg,
          rgba(51, 204, 255, 0.93),
          rgba(0, 255, 153, 0.93)
        );
      `,
      props.className as string,
    ),
  });
