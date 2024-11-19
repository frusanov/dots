import { backdropService } from "../services/backdrop";
import { css } from "../utils/css";
import { InfoCentre } from "../widgets/info-centre";

export const showInfoCentre = Variable(false);

backdropService.subscribe(showInfoCentre, () => {
  showInfoCentre.setValue(false);
});

export const InfoCentreWindow = () => {
  return Widget.Window({
    name: "InfoCentreWindow",
    anchor: ["top"],
    layer: "overlay",
    child: InfoCentre(),
    visible: showInfoCentre.bind(),
    className: css`
      background-color: rgba(0, 0, 0, 0);
    `,
  });
};
