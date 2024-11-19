import { Workspaces } from "./widgets/workspaces";
import { css } from "./utils/css";
import { Clock } from "./widgets/clock";
import { ClientTitle } from "./widgets/client-title";
import { Calendar } from "./widgets/calendar";
import { ControlCentreBar } from "./widgets/control-centre-bar";
import { TopBarWindow } from "./windows/top-bar";
import { CalendarWindow } from "./windows/calendar";
import { ControlCentreWindow } from "./windows/control-centre";
import { BackDropWindow } from "./windows/backdrop";
import { InfoCentreWindow } from "./windows/info-centre";

App.config({
  windows: [
    BackDropWindow(),
    TopBarWindow(),
    InfoCentreWindow(),
    ControlCentreWindow(),
  ],
  style: `
    * {
      font-size: 14px;
    }
  `,
  gtkTheme: "Adwaita-dark",
  cursorTheme: "Qogir",
  iconTheme: "MoreWaita",
});
