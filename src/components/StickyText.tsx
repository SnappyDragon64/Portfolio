import React from 'react';

interface StickyTextProps {
  text: string;
  xOffset?: number;
  yOffset?: number;
  theta?: number;
  zIndex?: number;
  className?: string;
}

const StickyText: React.FC<StickyTextProps> = ({text, xOffset = 0, yOffset = 0, theta = 0, zIndex = 0, className = ''}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `rotate(${theta}deg) translate(${xOffset}px, ${yOffset}px)`,
        transformOrigin: 'top left',
        zIndex: zIndex
      }}
    >
      <span className="absolute top-0 left-0">{text}</span>
    </div>
  );
};

export default StickyText;
