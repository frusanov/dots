import { LucideIcon } from "../components/lucide-icon";
import { buttonStyle } from "../styles/button.style";
import { css, cx } from "../utils/css";

const battery = await Service.import("battery");

export const ControlCentreBar = Widget.Box({
  homogeneous: false,
  vertical: false,

  hpack: "end",
  children: [
    Widget.Box({
      className: cx(
        buttonStyle,
        css`
          margin: 0 20px 0 0;
        `,
      ),
      children: [
        Widget.Box({
          homogeneous: false,
          vertical: false,
          spacing: 8,
          className: css`
            padding: 0 1em;
          `,
          children: [
            Widget.Icon({
              icon: "network-wireless-signal-excellent-symbolic",
            }),
            Widget.Icon({
              icon: "bluetooth-active-symbolic",
            }),
            Widget.Icon({
              icon: "audio-volume-high-symbolic",
            }),
            Widget.Icon({
              icon: "microphone-sensitivity-high-symbolic",
            }),
            Widget.Box({
              children: [
                Widget.Label({
                  label: battery.bind("percent").as((p) => `${p}%`),
                  className: css`
                    margin-right: 0.25em;
                  `,
                }),
                Widget.Icon({
                  icon: "battery-full-symbolic",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
