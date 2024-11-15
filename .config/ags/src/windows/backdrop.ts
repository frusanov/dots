import { ClientTitle } from "../widgets/client-title";
import { Workspaces } from "../widgets/workspaces";
import { ControlCentreBar } from "../widgets/control-centre-bar";
import { css } from "../utils/css";
import { Clock } from "../widgets/clock";
import { ControlCentre } from "../widgets/control-centre";
import { showControlCentre } from "./control-centre";
import { BaseButton } from "../components/base-button";
import { backdropService } from "../services/backdrop";

export const showBackDrop = Variable(false);

export const BackDropWindow = () =>
  Widget.Window({
    name: "BackDropWindow",
    anchor: ["top", "bottom", "right", "left"],
    canFocus: true,
    hasFocus: false,
    focusOnClick: true,
    keymode: "on-demand",
    child: BaseButton({
      className: css`
        min-height: 400px;
        background-color: rgba(0, 0, 0, 0);
      `,
      onClicked: () => {
        backdropService.emit("backdrop_clicked");
      },
    }),
    // layer: "overlay",
    visible: backdropService.bind("backdrop_visible"),
    className: css``,
  });
