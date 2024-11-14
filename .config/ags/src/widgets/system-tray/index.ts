import { TrayItem } from "../../../types/service/systemtray";
import { BaseButton } from "../../components/base-button";
import { buttonStyle } from "../../styles/button.style";
import { css, cx } from "../../utils/css";
import { GradientBorder } from "../gradient-border";

const systemtray = await Service.import("systemtray");

const SysTrayItem = (item: TrayItem) =>
  BaseButton({
    className: css`
      margin: 0 0.25em;
    `,
    child: Widget.Icon().bind("icon", item, "icon"),
    tooltipMarkup: item.bind("tooltip_markup"),
    onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: (_, event) => item.openMenu(event),
  });

export const SystemTray = () =>
  GradientBorder({
    className: css`
      margin-right: 0.5em;
    `,
    children: [
      Widget.Box({
        className: cx(
          buttonStyle,
          css`
            padding: 0 0.75em;
          `,
        ),
        children: systemtray.bind("items").as((i) => i.map(SysTrayItem)),
      }),
    ],
  });
