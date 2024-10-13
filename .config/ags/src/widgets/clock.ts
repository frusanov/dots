import { buttonStyle } from "../styles/button.style";
import { css } from "../utils/css";
import { BaseButton } from "../components/base-button";
import { toggleNotificationCentreVisibility } from "../stores/notification-centre";

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
  onClicked: () => toggleNotificationCentreVisibility(),
  child: Widget.Box({
    spacing: 8,
    homogeneous: false,
    vertical: false,
    css: css`
      box {
        ${buttonStyle}
        padding: 1px 1rem;
        margin: 0;
      }
    `,
    children: [
      Widget.Label({
        label: time.bind(),
        css: css`
          ${labelStyle}
        `,
      }),
      Widget.Label({
        label: date.bind(),
        css: css`
          ${labelStyle}
        `,
      }),
    ],
  }),
});
