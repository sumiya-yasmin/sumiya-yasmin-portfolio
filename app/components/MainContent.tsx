export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main 
      className="pt-8"
    >
      {children}
    </main>
  );
}