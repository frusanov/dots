import { BaseButton } from "../components/base-button";
import { buttonStyle } from "../styles/button.style";
import { css, cx } from "../utils/css";
import { showControlCentre } from "../windows/control-centre";
import { GradientBorder } from "./gradient-border";

const battery = await Service.import("battery");

export const ControlCentreBar = GradientBorder({
  hpack: "end",
  className: css`
    margin: 0 20px 0 0;
  `,
  children: [
    BaseButton({
      onClicked: () =>
        showControlCentre.setValue(!showControlCentre.getValue()),
      child: Widget.Box({
        homogeneous: false,
        vertical: false,

        children: [
          Widget.Box({
            className: cx(buttonStyle),
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
      }),
    }),
  ],
});
