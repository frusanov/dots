import { MprisPlayer } from "../../../types/service/mpris";
import Button from "../../../types/widgets/button";
import Icon from "../../../types/widgets/icon";
import { BaseButton } from "../../components/base-button";
import { css } from "../../utils/css";

interface PlayerButtonProps {
  player: MprisPlayer;
  defaultIcon: string;
  hook?: (self: Icon<unknown>) => void;
  onClick?: () => void;
  disabled?: boolean;
}

export const PlayerButton = ({
  player,
  defaultIcon,
  onClick,
  hook,
  disabled,
}: PlayerButtonProps) => {
  const handleClick = () => {
    if (onClick && !disabled) onClick();
  };

  return BaseButton({
    hpack: "center",
    cursor: disabled ? "default" : "pointer",
    className: css`
      color: rgba(255, 255, 255, 0.25);

      margin: 0 0.5rem;

      ${!disabled
        ? ` &:hover {
        color: rgba(255, 255, 255, 1);
      }`
        : ""}
    `,
    child: Widget.Icon({
      icon: defaultIcon,
      className: css`
        font-size: 1.5rem;
      `,
      setup: (self) => {
        if (hook) self.hook(player, hook);
      },
    }),
    onClicked: handleClick,
  });
};
