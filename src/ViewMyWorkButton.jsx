import { useEffect, useState } from 'react';

export default function ViewMyWorkButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the button with animation shortly after mount
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <a href="#about" className="inline-block">
      <div
        className={`flex items-center gap-2 border border-red-600 rounded-lg px-5 py-3 text-red-600 text-lg font-semibold transition-transform duration-300 transform 
        hover:bg-red-600 hover:text-white hover:shadow-lg
        hover:scale-120
        transform transition-opacity duration-1000 ease-out 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        View my work
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
        </svg>
      </div>
    </a>
  );
}