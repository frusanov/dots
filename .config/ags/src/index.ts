import { Workspaces } from "./widgets/workspaces";
import { css } from "./utils/css";
import { Clock } from "./widgets/clock";
import { ClientTitle } from "./widgets/client-title";
import { Calendar } from "./widgets/calendar";
import { notificationCentreService } from "./stores/notification-centre";

const myLabel = Widget.Label({
  label: "some example content",
});

const calendar = Widget.Window({
  name: "calendar",
  anchor: ["top"],
  child: Calendar,
  visible: false,
  setup: (self) => {
    self.hook(notificationCentreService, (self) => {
      console.log("hook", typeof notificationCentreService.store);
      self.visible = notificationCentreService.store;
    });
  },
});

const myBar = Widget.Window({
  name: "bar",
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
      css: `
        margin: 0 20px;
      `,
    }),
    centerWidget: Widget.Box({
      spacing: 8,
      homogeneous: false,
      vertical: false,
      children: [Clock],
      css: `
        margin: 0 20px;
      `,
    }),
    // endWidget: Widget.Label("right widget"),
  }),

  css: `
    background-color: rgba(0, 0, 0, 0);
  `,
});

App.config({
  windows: [myBar, calendar],
  style: css({
    "*": {
      fontSize: 14,
    },
  }),
});
