import { buttonStyle } from "../styles/button.style";
import { css, cx } from "../utils/css";
import { BaseButton } from "../components/base-button";
import { showCalendar } from "./calendar";

// const hyprland = await Service.import("hyprland");

// const dispatch = (ws) => hyprland.messageAsync(`dispatch workspace ${ws}`);

const time = Variable("", {
  poll: [1000, 'date "+%H:%M"'],
});

const date = Variable("", {
  poll: [1000, 'date "+%b %e"'],
});

const labelStyle = css`
  font-weight: bold;
  margin: 0;
`;

export const Clock = BaseButton({
  onClicked: () => showCalendar.setValue(!showCalendar.getValue()),
  child: Widget.Box({
    spacing: 8,
    homogeneous: false,
    vertical: false,
    className: cx(
      buttonStyle,
      css`
        padding: 1px 1rem;
        margin: 0;
      `,
    ),
    children: [
      Widget.Label({
        label: time.bind(),
        className: labelStyle,
      }),
      Widget.Label({
        label: date.bind(),
        className: labelStyle,
      }),
    ],
  }),
});
