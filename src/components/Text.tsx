interface TextProps {
  data: string[];
}

export const Text: React.FC<TextProps> = ({ data: Dummy }) => {
  return (
    <div className="hover:bg-zinc-800 text-sm max-w-prose">
      <p>
        {Dummy.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </p>
    </div>
  );
};
