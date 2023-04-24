interface HeartButtonProps {
  data: string[];
}

export const Hello: React.FC<HeartButtonProps> = ({ data: Dummy }) => {
  return (
    <>
      {Dummy.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
};
