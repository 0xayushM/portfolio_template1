import React, { FC, ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
  tooltip: string;
}

const ToolTip: FC<Props> = ({ children, tooltip }: Props): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      className='tooltip_container group relative'
    >
      {children}
      <span
        ref={tooltipRef}
        className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap transform -translate-y-full md:-translate-x-1/2 left-1/2'
      >
        {tooltip}
      </span>
    </div>
  );
};

export default ToolTip;
