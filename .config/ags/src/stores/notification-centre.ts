import { sample } from "effector";
import { createEvent, createStore } from "effector/compat";
import { createEffectorSerivice } from "../services/effector-service";

export const $showNotificationCentre = createStore(false, {
  sid: "showNotificationCentre",
});
export const setNotificationCentreVisibility = createEvent<boolean>();
export const toggleNotificationCentreVisibility = createEvent();

sample({
  source: setNotificationCentreVisibility,
  target: $showNotificationCentre,
});

sample({
  clock: toggleNotificationCentreVisibility,
  source: $showNotificationCentre,
  fn: (show) => !show,
  target: setNotificationCentreVisibility,
});

export const notificationCentreService = createEffectorSerivice({
  store: $showNotificationCentre,
  setterEvent: setNotificationCentreVisibility,
  access: "rw",
});
