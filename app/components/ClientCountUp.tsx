import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

interface ClientCountUpProps {
  end: number;
  duration: number;
  decimals?: number;
  suffix?: string;
}

const DynamicCountUp = dynamic(() => import("react-countup"), {
  ssr: false,
  loading: () => <span>0</span>,
});

export const ClientCountUp: React.FC<ClientCountUpProps> = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span suppressHydrationWarning>0</span>;
  }
  return (
    <DynamicCountUp
      start={0}
      end={props.end}
      duration={props.duration}
      decimals={props.decimals}
      suffix={props.suffix}
      enableScrollSpy={true}
      scrollSpyOnce={true}
    >
      {({ countUpRef }) => <span ref={countUpRef}>0</span>}
    </DynamicCountUp>
  );
};
