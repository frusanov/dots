import { buttonStyle } from "../styles/button.style";
import { css, cx } from "../utils/css";
import { BaseButton } from "../components/base-button";
import { GradientBorder } from "./gradient-border";

const hyprland = await Service.import("hyprland");

const dispatch = (ws: number) =>
  hyprland.messageAsync(`dispatch workspace ${ws}`);

export const Workspaces = GradientBorder({
  children: [
    Widget.Box({
      spacing: 8,
      homogeneous: false,
      vertical: false,
      className: cx(
        buttonStyle,
        css`
          padding: 1px;
        `,
      ),
      children: Array.from({ length: 10 }, (_, i) => i + 1).map((i) =>
        BaseButton({
          attribute: i,
          label: `${i}`,
          onClicked: () => dispatch(i),
          className: css`
            border-radius: 1rem;
            min-width: 3rem;

            &.selected {
              font-weight: bold;
              background: rgba(63, 63, 63, 1);
            }

            &:hover {
              background: rgba(255, 255, 255, 0.25);
            }
          `,
        }),
      ),

      // remove this setup hook if you want fixed number of buttons
      setup: (self) =>
        self.hook(hyprland, () =>
          self.children.forEach((btn) => {
            btn.visible = hyprland.workspaces.some(
              (ws) => ws.id === btn.attribute,
            );

            const isSelected = hyprland.active.workspace.id === btn.attribute;

            btn.toggleClassName("selected", isSelected);
          }),
        ),
    }),
  ],
});
