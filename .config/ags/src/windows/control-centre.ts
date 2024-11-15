import { ClientTitle } from "../widgets/client-title";
import { Workspaces } from "../widgets/workspaces";
import { ControlCentreBar } from "../widgets/control-centre-bar";
import { css } from "../utils/css";
import { Clock } from "../widgets/clock";
import { ControlCentre } from "../widgets/control-centre";
import { backdropService } from "../services/backdrop";

export const showControlCentre = Variable(false);

backdropService.subscribe(showControlCentre, () => {
  showControlCentre.setValue(false);
});

export const ControlCentreWindow = () =>
  Widget.Window({
    name: "ControlCentre",
    anchor: ["top", "right"],
    layer: "overlay",
    child: ControlCentre(),
    visible: showControlCentre.bind(),
    className: css`
      background-color: rgba(0, 0, 0, 0);
    `,
  });
