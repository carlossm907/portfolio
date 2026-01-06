export const StaticGrid = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(34, 197, 94, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 197, 94, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    />
  );
};