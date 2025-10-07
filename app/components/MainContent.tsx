export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main 
      className="pt-10 max-w-6xl mx-auto px-6"
    >
      {children}
    </main>
  );
}