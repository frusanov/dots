import { buttonStyle } from "../styles/button.style";
import { css, cx } from "../utils/css";
import { BaseButton } from "../components/base-button";
import { GradientBorder } from "./gradient-border";
import { showInfoCentre } from "../windows/info-centre";

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

export const Clock = GradientBorder({
  children: [
    BaseButton({
      onClicked: () => showInfoCentre.setValue(!showInfoCentre.getValue()),
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
    }),
  ],
});
