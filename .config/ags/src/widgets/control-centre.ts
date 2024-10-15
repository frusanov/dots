import { BaseButton } from "../components/base-button";
import { LucideIcon } from "../components/lucide-icon";
import { buttonStyle } from "../styles/button.style";
import { css, cx } from "../utils/css";

const battery = await Service.import("battery");

export const ControlCentre = () =>
  Widget.Box({
    homogeneous: false,
    vertical: false,
    className: css`
      margin-top: 20px;
    `,

    hpack: "end",
    children: [
      Widget.Box({
        className: cx(
          buttonStyle,
          css`
            margin: 0 20px 0 0;
          `,
        ),
        vertical: true,
        children: [
          Widget.Overlay({
            "pass-through": true,
            child: Widget.Slider({
              onChange: ({ value }) => print(value),
              className: css`
                min-width: 320px;

                trough {
                  /* background-color: red; */
                  min-height: 0;
                  /* border: 1rem solid white; */

                  border-radius: 4rem;
                  background: rgba(255, 255, 255, 0.25);
                  border: none;
                }

                highlight {
                  min-height: 0;
                  border-radius: 2rem;
                  border: 1.5rem solid rgba(255, 255, 255, 0.5);
                  background: none;
                }

                slider {
                  color: rgba(255, 255, 255, 0);
                  background: none;

                  box-shadow: none;
                  border-radius: 0;
                  caret-color: rgba(255, 255, 255, 0);
                  border: none;
                }
              `,
              value: 10,
              min: 0,
              max: 100,
            }),
            overlays: [
              Widget.Icon({
                hpack: "start",
                icon: "audio-volume-high-symbolic",
                className: css`
                  margin-left: 1.75rem;
                  margin-top: 1.25rem;

                  min-width: 1rem;
                  min-height: 1rem;
                  padding: 0;

                  font-size: 1rem;
                `,
              }),
            ],
          }),
          Widget.Overlay({
            child: Widget.Box({
              homogeneous: false,
              vertical: true,
              children: [
                Widget.ToggleButton({
                  onToggled: ({ active }) => print(active),
                  child: Widget.Box({
                    homogeneous: false,
                    vertical: false,
                    className: css`
                      /* margin: 0 0.5em; */
                      /* padding: 1em 0; */
                    `,
                    children: [
                      Widget.Icon({
                        icon: "bluetooth-active-symbolic",
                        className: css`
                          color: rgba(255, 255, 255, 0.5);

                          min-width: 3rem;
                        `,
                      }),
                      Widget.Label({
                        label: "Bluetooth",
                      }),
                    ],
                  }),
                  className: css`
                    color: white;
                    text-shadow: none;
                    padding: 0;
                    margin: 0 1em;
                    background: none;
                    min-height: 3rem;
                    border-radius: 2rem;

                    border: none;
                    box-shadow: none;

                    background-color: rgba(255, 255, 255, 0.1);

                    &:checked {
                      background-color: rgba(255, 255, 255, 0.25);
                      border: none;
                    }
                  `,
                }),
                Widget.Revealer({
                  revealChild: true,
                  transitionDuration: 300,
                  transition: "slide_down",
                  child: Widget.Box({
                    className: css`
                      background: red;
                      /* margin-top: 1.5rem; */
                      min-height: 6rem;
                    `,
                  }),
                  setup: (self) =>
                    self.poll(2000, () => {
                      self.reveal_child = !self.reveal_child;
                    }),
                }),
              ],
            }),

            overlays: [
              Widget.Button({
                hpack: "end",
                child: Widget.Icon({
                  icon: "go-next-symbolic",
                  className: css`
                    color: white;
                    text-shadow: none;
                  `,
                }),
                className: css`
                  min-width: 2rem;
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 50%;
                  border: none;
                  box-shadow: none;
                  padding: 0;
                  margin-right: 1rem;
                  min-width: 3rem;
                  min-height: 3rem;

                  &:active {
                    background-color: rgba(255, 255, 255, 0.25);
                    border: none;
                  }
                `,
              }),
            ],
          }),
        ],
      }),
    ],
  });
