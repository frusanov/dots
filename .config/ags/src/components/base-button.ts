import { css } from "../utils/css";

export function BaseButton(props) {
  return Widget.Button({
    ...props,
    css: css(
      {
        button: {
          background: "none",
          border: "none",
          color: "currentColor",
          boxShadow: "none",
          textShadow: "none",
          padding: 0,
        },
      },
      props.css || "",
    ),
  });
}
