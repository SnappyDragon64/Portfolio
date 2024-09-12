import React, {useEffect, useRef, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';

interface HoverMenuProps {
  offset?: number;
  className?: string;
}

const HoverMenu: React.FC<HoverMenuProps> = ({ offset = 10, className = '' }) => {
  const [barWidth, setBarWidth] = useState(0);
  const [barXTransform, setBarXTransform] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  const startAnimation = (newYValue) => {
    controls.start({
      y: `${newYValue}rem`,
      transition: { duration: 0.16 }
    });
  };

  const handleMouseEnter = (i) => {
    const newY = -2.75 * (3 - i);
    startAnimation(newY);
  };

  const measureList = () => {
    if (listRef.current) {
      const rect = listRef.current.getBoundingClientRect();
      const listWidth = rect.width;
      const listRight = rect.right;
      setBarWidth(listRight + offset * 2);
      setBarXTransform(listWidth - listRight - offset);
    }
  };

  useEffect(() => {
    measureList();
    window.addEventListener('resize', measureList);
    return () => window.removeEventListener('resize', measureList);
  }, [offset]);

  return (
    <div className={`w-full h-full flex space-x-8 ${className}`}>
      <div className='bg-blue-600 w-8 h-[120%] -translate-y-[10%] z-10' />
      <div className='items-end flex w-full pb-[4rem] relative'>
        <div ref={listRef} className='z-10'>
          <ul className='space-y-1 z-10'>
            {['ABOUT', 'PROJECTS', 'RESUME', 'CONTACT'].map((item, i) => (
              <li key={item} className='text-4xl font-black text-white text-left italic'
                  onMouseEnter={() => handleMouseEnter(i)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='absolute w-full'>
          <motion.div animate={controls} initial={{ y: '-8.25rem' }}>
            <div
              style={{
                width: `${barWidth}px`,
                transform: `translate(${barXTransform}px)`,
              }}
              className='bg-red-600 left-0 h-7'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HoverMenu;
