

import classNames from "classnames";
import { ComponentProps } from "react";
import { EasterStripes } from "./EasterStripes";

export type EasterButtonProps = {
  text?: string;
  eggType: "stripes" | "spots";
} & ComponentProps<"button">;
export const EasterButton = ({
  text,
  className,
  eggType,
  ...props
}: EasterButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        className,
        "w-36 h-52 bg-white rounded-tl-[60%] rounded-tr-[60%] rounded-b-[40%] overflow-hidden",
      )}
    >
     {eggType === "stripes" && <EasterStripes text={text} />}
    </button>
  );
};
