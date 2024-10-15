import Gtk from "gi://Gtk";

export const showCalendar = Variable(false);

const GtkCalendar = Widget.subclass(Gtk.Calendar);

export const Calendar = Widget.Box({
  children: [
    GtkCalendar({
      // @ts-ignore
      showDayNames: false,

      // @ts-ignore
      showHeading: true,

      visible: showCalendar.bind(),
    }),
  ],
});
