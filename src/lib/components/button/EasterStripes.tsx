
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
    let _borderColor = getRandomColor();
    while (secondColor === firstColor) {
        secondColor = getRandomColor();
    }
    while (middleColor === firstColor || middleColor === secondColor) {
        middleColor = getRandomColor();
    }
    while (_borderColor === firstColor || _borderColor === secondColor || _borderColor === middleColor) {
        _borderColor = getRandomColor();
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
        const [color, borderColor] = [getColor(index), _borderColor]
        return <span key={index} className={classNames("h-1/5 min-w-full flex items-center justify-center", {
                'border-y-2': index === 2,
                'bg-red-400': color === 'red',
                'bg-orange-400': color === 'orange',
                'bg-yellow-400': color === 'yellow',
                'bg-green-400': color === 'green',
                'bg-blue-400': color === 'blue',
                'bg-purple-400': color === 'purple',
                'bg-pink-400': color === 'pink',
                'bg-rose-800': color === 'heavyRed',
                'bg-cyan-400': color === 'cyan',
                'border-red-400': borderColor === 'red' && index === 2,
                'border-orange-400': borderColor === 'orange' && index === 2,
                'border-yellow-400': borderColor === 'yellow' && index === 2,
                'border-green-400': borderColor === 'green' && index === 2,
                'border-blue-400': borderColor === 'blue' && index === 2,
                'border-purple-400': borderColor === 'purple' && index === 2,
                'border-pink-400': borderColor === 'pink' && index === 2,
                'border-rose-800': borderColor === 'heavyRed' && index === 2,
                'border-cyan-400': borderColor === 'cyan' && index === 2,
        })} >{index === 2 && text}</span>
      })}
    </>
  );
};
