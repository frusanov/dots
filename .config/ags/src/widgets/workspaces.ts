import { buttonStyle } from "../styles/button.style";
import { css } from "../utils/css";
import { BaseButton } from "../components/base-button";

const hyprland = await Service.import("hyprland");

const dispatch = (ws) => hyprland.messageAsync(`dispatch workspace ${ws}`);

export const Workspaces = Widget.Box({
  spacing: 8,
  homogeneous: false,
  vertical: false,
  css: css`
    box {
      ${buttonStyle}

      padding: 1px;
    }
  `,
  children: Array.from({ length: 10 }, (_, i) => i + 1).map((i) =>
    BaseButton({
      attribute: i,
      label: `${i}`,
      onClicked: () => dispatch(i),
      css: css`
        button {
          border-radius: 1rem;
          min-width: 3rem;
          border: 1px solid rgba(255, 255, 255, 0);

          &.selected {
            font-weight: bold;
            background: rgba(255, 255, 255, 0.15);
          }

          &:hover {
            background: rgba(255, 255, 255, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.5);
          }
        }
      `,
    }),
  ),

  // remove this setup hook if you want fixed number of buttons
  setup: (self) =>
    self.hook(hyprland, () =>
      self.children.forEach((btn) => {
        btn.visible = hyprland.workspaces.some((ws) => ws.id === btn.attribute);

        const isSelected = hyprland.active.workspace.id === btn.attribute;

        btn.className = isSelected ? "selected" : "";
      }),
    ),
});
