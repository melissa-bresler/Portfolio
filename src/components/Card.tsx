export const Card: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
      {children}
    </div>
  );
};
