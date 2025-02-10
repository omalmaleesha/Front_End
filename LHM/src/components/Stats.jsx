import React, { useEffect, useState } from 'react';

const stats = [
  { id: 1, number: 500, suffix: '+', label: 'Lecture Halls Managed' },
  { id: 2, number: 90, suffix: '%', label: 'Utilization Improvement' },
  { id: 3, number: 100, suffix: '+', label: 'Institutions Trust Us' },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="stats-section" className="bg-blue-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">
                {isVisible ? (
                  <span className="transition-all duration-1000">
                    {stat.number}{stat.suffix}
                  </span>
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}