import React from 'react';

export const formatTextWithBolds = (text: string): React.ReactNode[] => {
  
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part: string, index: number) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      
      return <strong key={index}>{part.substring(2, part.length - 2)}</strong>;
    }
    return part;
  });
};