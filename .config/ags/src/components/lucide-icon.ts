import { css } from "../utils/css";

interface LucidIconProps {
  icon: string;
  size?: number | string;
}

App.addIcons(`${App.configDir}/assets/icons`);

export const LucideIcon = ({ icon, size = "1em" }: LucidIconProps) => {
  const isNumber = typeof size === "number";
  const safeSize = isNumber ? `${size}px` : size;

  return Widget.Icon({
    icon: `lucide-${icon}-symbolic`,
    className: css`
      min-width: ${safeSize};
      min-height: ${safeSize};

      font-size: ${safeSize};
      /* outline: none;
      border: none;
      outline-color: transparent;
      -gtk-icon-style: symbolic;

      p {
        color: white;
      } */

      color: red;

      // hardlight

      /* stroke-color: white; */

      -gtk-icon-style:;
    `,
  });
};
