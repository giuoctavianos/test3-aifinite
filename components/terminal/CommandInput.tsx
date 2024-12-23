interface CommandInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

export function CommandInput({ value, onChange, onKeyPress }: CommandInputProps) {
  return (
    <div className="command-line">
      <span className="command-prompt">gttmr@ai-fund:~$</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyPress}
        className="bg-transparent border-none outline-none flex-1 text-terminal-green ml-2"
        spellCheck={false}
        autoFocus
      />
    </div>
  );
}