import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";
import CircleIcon from "@material-ui/icons/RadioButtonUnchecked";
import DigitalClockIcon from "@material-ui/icons/Looks3";
import * as CircleCode from "./codes/circle-code";
import * as DigitalClock from "./codes/digital-clock-code";

export type PageName = "/円を描こう" | "/デジタル時計を描こう";
export type PlayGroundType = "NORMAL" | "TIMER";

export type Page = {
  page: PageName;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  type: PlayGroundType;
  init: string;
  origin: Function;
};

export const pages: Page[] = [
  {
    page: "/円を描こう",
    label: "円を描こう",
    type: "NORMAL",
    icon: CircleIcon,
    init: CircleCode.initial,
    origin: CircleCode.original,
  },
  {
    page: "/デジタル時計を描こう",
    label: "デジタル時計",
    type: "TIMER",
    icon: DigitalClockIcon,
    init: DigitalClock.initial,
    origin: DigitalClock.original,
  },
];
// export const digitalClockPage: Page = { page: 'デジタル時計を描こう', icon: DigitalClockIcon };
