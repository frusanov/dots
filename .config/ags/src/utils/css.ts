import { css as emotionCss, cache } from "@emotion/css";
import type { ArrayCSSInterpolation } from "@emotion/css/create-instance";
import { compile, serialize, stringify } from "stylis";

export function css(...args: ArrayCSSInterpolation) {
  const className = emotionCss(...args);

  return serialize(compile(cache.registered[className] as string), stringify);
}
