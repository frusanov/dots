import { backdropService } from "../services/backdrop";
import { Calendar } from "../widgets/calendar";

export const showCalendar = Variable(false);

backdropService.subscribe(showCalendar, () => {
  showCalendar.setValue(false);
});

export const CalendarWindow = () =>
  Widget.Window({
    name: "Calendar",
    anchor: ["top"],
    layer: "overlay",
    child: Calendar,
    visible: showCalendar.bind(),
  });
