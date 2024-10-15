import { notificationCentreService } from "../stores/notification-centre";
import { Calendar } from "../widgets/calendar";

export const CalendarWindow = () =>
  Widget.Window({
    name: "Calendar",
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
