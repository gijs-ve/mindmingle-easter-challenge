
import classNames from "classnames";
import { stripeColors } from "../../constants/stripeColors";
import { ComponentProps } from "react";

export type EasterStripesProps = {
    text?: string;
} & ComponentProps<"div">;

export const EasterStripes = ({ className, text, ...props }: EasterStripesProps) => {
  const stripes = Array.from(Array(5));
    const getRandomColor = () => {
        return stripeColors[Math.floor(Math.random() * stripeColors.length)];
    }
    const firstColor = getRandomColor();
    let secondColor = getRandomColor();
    let middleColor = getRandomColor();
    while (secondColor === firstColor) {
        secondColor = getRandomColor();
    }
    while (middleColor === firstColor || middleColor === secondColor) {
        middleColor = getRandomColor();
    }
  const getColor = (index: number) => {
    if (index === 0 || index === 4) {
        return firstColor;
        }
    if (index === 1 || index === 3) {
        return secondColor;
        }
    return middleColor;
  }
  return (
    <>
      {stripes.map((value, index) => {
        const color = getColor(index);
        return <span key={index} className={classNames("h-1/5 min-w-full flex items-center justify-center", {
            
            'border-y-[1px] border-white': index === 2,
                'bg-red-400': color === 'red',
                'bg-orange-400': color === 'orange',
                'bg-yellow-400': color === 'yellow',
                'bg-green-400': color === 'green',
                'bg-blue-400': color === 'blue',
                'bg-purple-400': color === 'purple',
                'bg-pink-400': color === 'pink',
                'bg-rose-800': color === 'heavyRed',
                'bg-cyan-400': color === 'cyan',
        })} >{index === 2 && text}</span>
      })}
    </>
  );
};
