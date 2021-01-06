import React from 'react';
import Image from 'next/image';

export default function DashboardDisplay() {
  return (
    <div>
      <Image src='/bar-chart.png' height={170} width={170} />
      <Image src='/diagram.png' height={170} width={170} />
    </div>
  );
}
