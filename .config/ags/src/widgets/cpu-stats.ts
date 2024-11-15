import { BaseButton } from "../components/base-button";
import { buttonStyle } from "../styles/button.style";
import { css, cx } from "../utils/css";
import { GradientBorder } from "./gradient-border";

export const CPUStats = () => {
  const labelStyle = css`
    margin: 0 0.25em;
  `;

  return GradientBorder({
    className: css`
      margin-right: 0.5em;
    `,
    children: [
      BaseButton({
        className: cx([
          buttonStyle,
          css`
            padding: 0 0.5em;
          `,
        ]),
        onClicked: () => console.log("onClicked"),
        child: Widget.Box({
          children: [
            Widget.Label({
              label: "...",
              className: labelStyle,
              setup: (self) => {
                const updateTemp = () => {
                  const tempRaw = Utils.exec(
                    "cat /sys/class/hwmon/hwmon5/temp1_input",
                  );
                  const temp = parseInt(tempRaw) / 1000;

                  self.label = `${temp} °C`;
                };

                Utils.interval(3000, updateTemp, self);

                setTimeout(updateTemp);
              },
            }),
            Widget.Label({
              label: "...",
              className: labelStyle,
              setup: (self) => {
                const updateFreq = () => {
                  const freqArr = Utils.exec(`cat /proc/cpuinfo`)
                    .split("\n")
                    .filter((str) => str.includes("cpu MHz"))
                    .map((str) => parseFloat(str.split(":")[1]));

                  const averegeFreq = Math.round(
                    freqArr.reduce((acc, value) => {
                      return (acc || 0) + value;
                    }) / freqArr.length,
                  );

                  self.label = `${averegeFreq} MHz`;
                };

                Utils.interval(5000, updateFreq, self);

                setTimeout(updateFreq);
              },
            }),
          ],
        }),
      }),
    ],
  });
};
