import Transition from "react-transition-group/Transition";
import React from "react";

export function ScaleSlideRight({ children, duration, maxHeight, in: inProp }) {
  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: "opacity, transform, max-height"
  };
  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: "translateX(-100%) scale(0.4)",
      maxHeight: "0px"
    },
    entered: {
      opacity: 1,
      transform: "translateX(0) scale(1)",
      maxHeight
    },
    exiting: {
      opacity: 0,
      transform: "translateX(-100%) scale(0.4)",
      maxHeight: "0px"
    }
  };

  return (
    <Transition
      in={inProp}
      timeout={{
        enter: 0,
        exit: duration
      }}
    >
      {status => {
        if (status === "exited") {
          return null;
        }
        const currentStyles = transitionStyles[status];
        return React.cloneElement(children, {
          style: { ...defaultStyle, ...currentStyles }
        });
      }}
    </Transition>
  );
}
