import React from 'react';

interface GradientStop {
  color: string; // Hex or color name
  opacity: number; // 0 to 1
  position: string; // e.g. '0%', '50%', '100%'
}

interface GradientBackgroundProps {
  stops?: GradientStop[];
  centerPosition?: string;
  className?: string;
}

/**
 * GradientBackground Component
 * Renders a radial gradient with multiple transparency stops.
 * Used to create depth and premium white/lavender overlays.
 */
export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  stops = [
    { color: '#EFECFF', opacity: 1, position: '0%' }, // Light lavender
    { color: '#FFFFFF', opacity: 0.8, position: '60%' },
    { color: '#FFFFFF', opacity: 0, position: '100%' }
  ],
  centerPosition = 'top left',
  className = ""
}) => {
  // Helper to convert hex to rgba (simplified for common report colors)
  const getRgba = (color: string, opacity: number) => {
    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return color; // Fallback for named colors
  };

  const gradientString = `radial-gradient(circle at ${centerPosition}, ${stops
    .map(stop => `${getRgba(stop.color, stop.opacity)} ${stop.position}`)
    .join(', ')})`;

  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ backgroundImage: gradientString }}
    />
  );
};
