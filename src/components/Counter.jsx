import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(60);

  return (
    <div>
      <button 
        type="button"
        onClick={() => {
          setCount(count + 1)}} // Add the click handler here
        className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <p>Like {count}</p>
      </button>
    </div>
  );
}

export default Counter;
