import { createEvent, createStore, sample } from "effector";
import { css } from "../utils/css";

export interface ToggleExpandProps {}

export function ToggleExpand({}: ToggleExpandProps) {
  const expanded = Variable(false);

  function toggle() {
    expanded.setValue(!expanded.getValue());
  }

  return Widget.Box({
    vertical: true,
    cursor: "pointer",

    children: [
      Widget.Overlay({
        child: Widget.Box({
          homogeneous: false,
          vertical: true,
          className: css`
            min-width: 3rem;
          `,
          children: [
            Widget.ToggleButton({
              child: Widget.Box({
                homogeneous: false,
                vertical: false,
                cursor: "pointer",
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
                border-radius: 1rem;

                border: none;
                box-shadow: none;

                background-color: rgba(255, 255, 255, 0.1);

                &:checked {
                  background-color: rgba(255, 255, 255, 0.25);
                  border: none;
                }
              `,
            }),
          ],
        }),
        overlays: [
          Widget.Button({
            hpack: "end",
            onClicked: toggle,
            cursor: "pointer",
            child: Widget.Icon({
              icon: "go-next-symbolic",
              className: css`
                color: white;
                text-shadow: none;
                min-height: 3rem;
              `,
            }),
            className: css`
              min-width: 2rem;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 1rem;
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
      Widget.Revealer({
        revealChild: expanded.bind(),
        transitionDuration: 300,
        transition: "slide_down",
        className: css`
          padding-top: 1rem;
          margin-top: -3rem;

          border-radius: 1rem;

          /* overflow: hidden; */
        `,
        child: Widget.Box({
          className: css`
            background: transparent;
            /* margin-top: 1.5rem; */
            min-height: 6rem;
            margin: 0 1rem;
            border-radius: 1rem;

            transition: all 0.3s;

            &.expanded {
              background: red;
            }
          `,
          setup(self) {
            self.hook(expanded, (self) => {
              self.toggleClassName("expanded", expanded.getValue());
            });
          },
        }),
      }),
    ],
  });
}
