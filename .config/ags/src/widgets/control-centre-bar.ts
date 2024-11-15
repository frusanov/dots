import { Binding } from "../../types/service";
import { BaseButton } from "../components/base-button";
import { buttonStyle } from "../styles/button.style";
import { css, cx } from "../utils/css";
import { showControlCentre } from "../windows/control-centre";
import { GradientBorder } from "./gradient-border";
import { ValueIcon } from "./value-icon";

const battery = await Service.import("battery");
const audio = await Service.import("audio");

// audio.speaker.bind("volume").emitter.connect("changed", () => {
//   console.log("audio.speaker.bind('volume')", audio.speaker.volume);
// });

export const ControlCentreBar = () => {
  return GradientBorder({
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
                    // Widget.Icon({
                    //   icon: "network-wireless-signal-excellent-symbolic",
                    // }),
                    // Widget.Icon({
                    //   icon: "bluetooth-active-symbolic",
                    // }),
                    ValueIcon({
                      icons: [
                        "audio-volume-low",
                        "audio-volume-medium",
                        "audio-volume-high-symbolic",
                      ],
                      value: audio.speaker.bind("volume"),
                    }),
                    ValueIcon({
                      icons: [
                        "microphone-sensitivity-low",
                        "microphone-sensitivity-medium",
                        "microphone-sensitivity-high",
                      ],
                      value: audio.microphone.bind("volume"),
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
                          icon: battery.bind("icon_name"),
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
};
