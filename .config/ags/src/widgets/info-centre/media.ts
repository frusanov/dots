import { MprisPlayer } from "../../../types/service/mpris";
import Icon from "../../../types/widgets/icon";
import { BaseButton } from "../../components/base-button";
import { css } from "../../utils/css";
import { PlayerButton } from "./player-button";
import { PlayerControls } from "./player-controls";

const mpris = await Service.import("mpris");

interface PlayerProps extends MprisPlayer {}

const Player = (player: PlayerProps) => {
  return Widget.Box({
    className: css`
      padding: 1rem;
      margin-right: 1rem;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.15);

      margin-bottom: 1rem;
    `,
    children: [
      Widget.Box({
        className: css`
          min-width: 100px;
          min-height: 100px;
          border-radius: 12px;
          margin-right: 1rem;

          background-position: center;
          background-size: cover;
        `,
      }).hook(player, (self) => {
        self.css = `
          background-image: url("${player["cover_path"]}");
        `;
      }),
      Widget.Box({
        vertical: true,
        vpack: "fill",
        children: [
          Widget.Label({
            hpack: "start",
          }).hook(player, (self) => {
            const { track_artists, track_title } = player;

            let label = `${track_artists.join(", ")} - ${track_title}`;

            if (label.length > 48) {
              label = label.slice(0, 48) + "...";
            }

            self.label = label;
          }),
          PlayerControls({ player }),
        ],
      }),
    ],
  });
};

export const Media = () => {
  return Widget.Box({
    vertical: true,
    children: mpris.bind("players").as((p) => p.map(Player)),
  });
};
