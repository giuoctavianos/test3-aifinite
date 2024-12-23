interface TerminalLineProps {
  content: string;
  className?: string;
}

export function TerminalLine({ content, className = '' }: TerminalLineProps) {
  return (
    <div className="status-line">
      <span className={`status-indicator ${className}`}>{content}</span>
    </div>
  );
}