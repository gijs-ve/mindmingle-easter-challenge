'use client'

import { ComponentProps } from "react";

export type EasterButtonProps = {
    text?: string;
} & ComponentProps<'button'>;
export const EasterButton = ({text, ...props} : EasterButtonProps) => {
    return <button {...props}>{text}</button>
}