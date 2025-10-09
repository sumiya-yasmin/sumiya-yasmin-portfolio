export const formatTextWithBolds = (text: any) => {
  
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part: any, index: any) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      
      return <strong key={index}>{part.substring(2, part.length - 2)}</strong>;
    }
    return part;
  });
};