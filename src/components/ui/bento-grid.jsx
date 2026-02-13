import React from 'react';

import { cn } from '@/lib/utils';

const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 pb-20 md:auto-rows-[18rem] md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon: IconComponent, // eslint-disable-line no-unused-vars
  description,
  href, // eslint-disable-line no-unused-vars
  cta, // eslint-disable-line no-unused-vars
}) => (
  <div
    key={name}
    className={cn(
      'group relative flex flex-col justify-between overflow-hidden rounded-xl',
      // light styles
      'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      // dark styles
      'transform-gpu bg-black dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]',
      className
    )}
  >
    {/* Background Content */}
    <div>{background}</div>

    {/* Content */}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <IconComponent className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-300" />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">{name}</h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    {/* CTA Removed for simpler implementation or add back if needed */}
    <div
      className={cn(
        'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
      )}
    >
      {/* <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button> */}
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
