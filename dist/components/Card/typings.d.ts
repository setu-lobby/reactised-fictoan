import { BaseAndHTMLProps } from "../BaseComponent/typings";
import { RFTheme } from "../../ts/Theme";
export interface CardCustomProps {
    shape?: "rounded" | "curved";
    shadow?: "mild" | "soft" | "hard";
    theme?: typeof RFTheme;
}
export declare type CardProps = BaseAndHTMLProps<HTMLDivElement> & CardCustomProps;