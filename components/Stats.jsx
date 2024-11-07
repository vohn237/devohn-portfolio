'use client';

import CountUp from 'react-countup';

const stats = [
  { text: 'Projects Completed', count: 4 },
  { text: 'Work Experience', count: 3 },
  { text: 'Tech Knowledge', count: 8 },
  { text: 'Code commits', count: 100 },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex justify-between gap-4 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center  "
              >
                <h2 className="text-accent text-4xl font-bold">
                  <CountUp end={stat.count} duration={8} useEasing />
                </h2>
                <p className="text-white/80 ">{stat.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
