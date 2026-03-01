import React from 'react';

interface BackgroundPatternProps {
  opacity?: number;
  maskPosition?: string;
  dotColor?: string;
  dotSize?: number;
  gap?: number;
  maskSize?: string;
}

export const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  opacity = 0.12,
  maskPosition = 'top left',
  dotColor = '#3A338A',
  dotSize = 2.5,
  gap = 32,
  maskSize = '80%'
}) => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${gap}px ${gap}px`,
        maskImage: `radial-gradient(circle at ${maskPosition}, black, transparent ${maskSize})`,
        WebkitMaskImage: `radial-gradient(circle at ${maskPosition}, black, transparent ${maskSize})`,
      }}
    />
  );
};
