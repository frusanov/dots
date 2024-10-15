import type { ButtonProps } from "../../types/widgets/button";
import { css, cx } from "../utils/css";

export function BaseButton(props: ButtonProps) {
  return Widget.Button({
    ...props,
    className: cx(
      css({
        background: "none",
        border: "none",
        color: "currentColor",
        boxShadow: "none",
        textShadow: "none",
        padding: 0,
      }),
      props.className as string,
    ),
  });
}
