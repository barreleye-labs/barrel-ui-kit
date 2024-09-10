import type {ColorPaletteProp, VariantProp} from "@mui/joy";
import {ReactNode} from "react";
import { CSSObject } from '@mui/system';

export interface ButtonProps {
    loading?: boolean;
    text?: string;
    variant?: VariantProp;
    radiusType?: 'slight' | 'rounded';
    size?: 'sm' | 'md' | 'lg';
    color?: ColorPaletteProp;
    className?: string;
    children?: ReactNode;
    startDecorator?: ReactNode;
    sx?: CSSObject;
    onClick?: () => void;
}
