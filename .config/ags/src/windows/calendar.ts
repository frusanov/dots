import { Calendar, showCalendar } from "../widgets/calendar";

export const CalendarWindow = () =>
  Widget.Window({
    name: "Calendar",
    anchor: ["top"],
    child: Calendar,
    visible: showCalendar.bind(),
  });
