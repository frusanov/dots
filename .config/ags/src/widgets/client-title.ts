import { buttonStyle } from "../styles/button.style";
import { css } from "../utils/css";

const hyprland = await Service.import("hyprland");

export const ClientTitle = Widget.Label({
  label: hyprland.active.client.bind("title"),
  css: css`
    ${buttonStyle}
    padding: 1px 1rem;
  `,
  setup: (self) =>
    self.hook(hyprland, () => {
      self.visible = !!hyprland.active.client.title;
    }),
});
