import { buttonStyle } from "../styles/button.style";
import { css } from "../utils/css";

const hyprland = await Service.import("hyprland");
const { query } = await Service.import("applications");

const TITLE_LIMIT = 64;

export const ClientTitle = Widget.Box({
  setup: (self) =>
    self.hook(hyprland.active.client, () => {
      const title = hyprland.active.client.title;

      self.class_name = css`
        ${buttonStyle}
        padding: 1px 1rem;
        opacity: ${!!title ? 1 : 0};
      `;
    }),
  children: [
    Widget.Icon({
      icon: hyprland.active.client.bind("class"),
      size: 16,
    }),
    Widget.Label({
      label: "",
      className: css`
        margin-left: 0.5em;
      `,
      setup: (self) =>
        self.hook(hyprland.active.client, () => {
          const title = hyprland.active.client.title;

          if (title.length > TITLE_LIMIT) {
            self.label = title.slice(0, TITLE_LIMIT - 3) + "...";
            return;
          }

          self.label = hyprland.active.client.title;
        }),
    }),
  ],
});
