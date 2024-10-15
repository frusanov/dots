import { ClientTitle } from "../widgets/client-title";
import { Workspaces } from "../widgets/workspaces";
import { ControlCentreBar } from "../widgets/control-centre-bar";
import { css } from "../utils/css";
import { Clock } from "../widgets/clock";
import { ControlCentre } from "../widgets/control-centre";

export const ControlCentreWindow = () =>
  Widget.Window({
    name: "ControlCentre",
    anchor: ["top", "right"],
    child: ControlCentre(),
    className: css`
      background-color: rgba(0, 0, 0, 0);
    `,
  });
