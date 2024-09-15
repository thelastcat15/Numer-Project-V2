import React, { useEffect, useRef } from 'react';

const ScrollableList = ({ subtopics }) => {
  return (
    <div className="w-full h-full overflow-auto mr-14 ml-2">
      <div className=" scrollbar-hide snap-y snap-mandatory h-full overflow-y-auto flex flex-col items-center gap-y-11 py-20 masked-overflow">
        {
          Object.entries(subtopics).map(([title, { path }]) => (
            <a href={'/'+path} key={path} className="snap-center p-4 w-full text-center text-myYellow">
              {title}
            </a>
          ))
        }
      </div>
    </div>

  );
};

export default ScrollableList;
