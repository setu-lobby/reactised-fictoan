import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { RowStyled } from "./Row.styled";


export interface RowCustomProps {
    sidePadding          ? : "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
    gutters              ? : "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
    retainLayoutOnTabLS  ? : boolean;
    retainLayoutOnTabPT  ? : boolean;
    retainLayoutOnMobile ? : boolean;
    retainLayoutAlways   ? : boolean;
}

export type RowElementType = HTMLDivElement;
export type RowProps       = CommonAndHTMLProps<RowElementType> & RowCustomProps;

export const Row = ({
    sidePadding,
    gutters,
    retainLayoutOnTabLS,
    retainLayoutOnTabPT,
    retainLayoutOnMobile,
    retainLayoutAlways,
    ...props
}: RowProps) => {
    let classNames = [];

    if (sidePadding) {
        classNames.push(`side-padding-${sidePadding}`);
    }

    if (gutters) {
        classNames.push (
            gutters === "none"
                ?
                "no-gutters"
                :
                (`${gutters}-gutters`)
        )
    }

    if (retainLayoutOnTabLS) {
        classNames.push("retain-layout-on-tab-ls");
    }

    if (retainLayoutOnTabPT) {
        classNames.push("retain-layout-on-tab-pt");
    }

    if (retainLayoutOnMobile) {
        classNames.push("retain-layout-on-mobile");
    }

    if (retainLayoutAlways) {
        classNames.push("retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile");
    }

    return (
        <Element<RowElementType>
            as={RowStyled}
            classNames={classNames}
            {...props}
        />
    );
}

Row.defaultProps = {
    gutters : "medium"
}
