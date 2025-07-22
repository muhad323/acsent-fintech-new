export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl w-full px-6 md:px-12 py-8 mx-auto">
      {children}
    </div>
  );
}