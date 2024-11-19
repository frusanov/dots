import { MprisPlayer } from "../../../types/service/mpris";
import { css } from "../../utils/css";
import { PlayerButton } from "./player-button";

interface PlayerControlsProps {
  player: MprisPlayer;
}

export const PlayerControls = ({ player }: PlayerControlsProps) => {
  return Widget.Box({
    homogeneous: true,
    hpack: "fill",
    hexpand: true,
    className: css`
      margin-top: 1rem;
      padding: 1rem;
    `,
    children: [
      Widget.Box({
        hpack: "center",
      }).hook(player, (self) => {
        const isPlaying = player["play_back_status"] === "Playing";

        self.children = [
          PlayerButton({
            player,
            disabled: !player.can_go_prev,
            defaultIcon: "media-skip-backward",
            onClick: player.previous,
          }),
          PlayerButton({
            player,
            disabled: !player.can_play,
            defaultIcon: isPlaying
              ? "media-playback-pause"
              : "media-playback-start",
            onClick: player.playPause,
          }),
          PlayerButton({
            player,
            disabled: !player.can_go_next,
            defaultIcon: "media-skip-forward",
            onClick: player.next,
          }),
        ];
      }),
    ],
  });
};
