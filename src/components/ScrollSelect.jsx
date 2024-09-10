import React, { useEffect, useRef } from 'react';

const ScrollableList = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const scrollToClosestItem = () => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height / 2;

    let closestItem = null;
    let closestDistance = Infinity;

    itemsRef.current.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;
      const distance = Math.abs(containerCenter - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestItem = item;
      }
    });

    if (closestItem) {
      container.scrollTo({
        top: closestItem.offsetTop - container.offsetTop - container.clientHeight / 2 + closestItem.clientHeight / 2,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      scrollToClosestItem();
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[200px] h-[300px] overflow-y-auto border border-gray-300"
    >
      <ul className="space-y-4">
        {[...Array(10).keys()].map((index) => (
          <li
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="p-4 bg-gray-200"
          >
            Item {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollableList;
