import { ClientTitle } from "../widgets/client-title";
import { Workspaces } from "../widgets/workspaces";
import { ControlCentreBar } from "../widgets/control-centre-bar";
import { css } from "../utils/css";
import { Clock } from "../widgets/clock";
import { SystemTray } from "../widgets/system-tray";
import { CPUStats } from "../widgets/cpu-stats";

export const TopBarWindow = () =>
  Widget.Window({
    name: "TopBar",
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",
    child: Widget.CenterBox({
      spacing: 8,
      vertical: false,
      className: css`
        margin: 1em 0 0;
      `,
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
      endWidget: Widget.Box({
        hpack: "end",
        children: [CPUStats(), SystemTray(), ControlCentreBar()],
      }),
    }),

    className: css`
      background-color: rgba(0, 0, 0, 0);
    `,
  });
