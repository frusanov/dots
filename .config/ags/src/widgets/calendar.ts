import Gtk from "gi://Gtk";

const GtkCalendar = Widget.subclass(Gtk.Calendar);

export const Calendar = () =>
  Widget.Box({
    children: [
      GtkCalendar({
        // @ts-ignore
        showDayNames: false,

        // @ts-ignore
        showHeading: true,
      }),
    ],
  });
