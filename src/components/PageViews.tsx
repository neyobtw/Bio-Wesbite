import { useEffect, useState } from "react";

function PageViews() {
  const [views, setViews] = useState<number|null>(null);

  useEffect(() => {
    fetch('/.netlify/functions/page-views')
      .then(res => res.json())
      .then(data => setViews(data.count));
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center bg-gray-900/90 border border-accent text-white rounded-2xl shadow-lg px-4 py-2 font-semibold select-none" style={{backdropFilter: 'blur(6px)'}}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={22} height={22} className="mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      {views !== null ? views : '...'}
    </div>
  );
}

export default PageViews; 