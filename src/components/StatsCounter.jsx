import React, { useState, useEffect, useRef } from 'react';

function CounterNumber({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500; // ms
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = value / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="stat-number">
      {count.toLocaleString()}
      <span>{suffix}</span>
    </div>
  );
}

export function StatsCounter({ stats }) {
  return (
    <section className="stats-bar-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <CounterNumber value={stat.value} suffix={stat.suffix} />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
