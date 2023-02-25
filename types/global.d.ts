declare module 'react-outside-click-handler' {
    import * as React from "react";

    export interface DefaultProps {
        disabled: boolean;
        useCapture: boolean;
        display: "block" | "flex" | "inline" | "inline-block" | "contents";
    }

    // TODO: Remove partial once DT support TS 3.0, so skipping mandatory listed in default props won't result in compile error
    export interface Props extends Partial<DefaultProps> {
        children: React.ReactNode;
        onOutsideClick: (e: MouseEvent) => void;
    }

    export default class OutsideClickHandler extends React.Component<Props> {
        static defaultProps: DefaultProps;
    }
}

declare module "nodemailer" {
    var nodemailer: NodeMailer;
    export = nodemailer;
 }

declare module 'react-interpunct' {
    import { FC } from 'react'
    import PropTypes from 'prop-types'
    interface InterpunctProps {
        
    }
    const Interpunct: FC<InterpunctProps>

    export default Interpunct
}
