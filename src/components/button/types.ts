import type {ColorPaletteProp, VariantProp} from "@mui/joy";
import {ReactNode} from "react";

export type ButtonProps = {
    text?: string;
    variant?: VariantProp;
    size?: 'sm' | 'md' | 'lg';
    color?: ColorPaletteProp;
    className?: string;
    children?: ReactNode;
    startDecorator?: ReactNode;
    onClick?: () => void;
}
