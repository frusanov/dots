import { ClientTitle } from "../widgets/client-title";
import { Workspaces } from "../widgets/workspaces";
import { ControlCentreBar } from "../widgets/control-centre-bar";
import { css } from "../utils/css";
import { Clock } from "../widgets/clock";

export const TopBarWindow = () =>
  Widget.Window({
    name: "TopBar",
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",
    child: Widget.CenterBox({
      spacing: 8,
      vertical: false,
      startWidget: Widget.Box({
        spacing: 8,
        homogeneous: false,
        vertical: false,
        children: [Workspaces, ClientTitle],
        className: css`
          margin: 0 0 0 20px;
        `,
      }),
      centerWidget: Widget.Box({
        spacing: 8,
        homogeneous: false,
        vertical: false,
        children: [Clock],
      }),
      endWidget: ControlCentreBar,
    }),

    className: css`
      background-color: rgba(0, 0, 0, 0);
    `,
  });
