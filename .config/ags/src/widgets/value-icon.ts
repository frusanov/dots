import { Binding, Connectable } from "../../types/service";
// import type { Variable } from "../../types/variable";
import { IconProps } from "../../types/widgets/icon";

export interface ValueIconProps extends Omit<IconProps, "icon"> {
  icons: Array<IconProps["icon"]>;
  value: Binding<any, any, number>;
}

export const ValueIcon = ({ icons, value, ...props }: ValueIconProps) => {
  const innerIcon = Variable<IconProps["icon"]>(icons[0]);

  value.emitter.connect("changed", (emitter: typeof value.emitter) => {
    const maxIndex = icons.length - 1;
    const index = Math.round(emitter[value.prop] * maxIndex);

    innerIcon.setValue(icons[index]);
  });

  return Widget.Icon({
    ...props,
    icon: innerIcon.getValue(),
  }).hook(innerIcon, (self) => {
    const value = innerIcon.getValue();

    if (value) {
      self.icon = value as string;
    }
  });
};
