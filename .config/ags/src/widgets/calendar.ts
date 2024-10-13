import Gtk from "gi://Gtk";
import { notificationCentreService } from "../stores/notification-centre";

export const GtkCalendar = new Gtk.Calendar({
  showDayNames: false,
  showHeading: true,
  visible: false,
});

export const Calendar = Widget.Box({
  children: [GtkCalendar],
});
