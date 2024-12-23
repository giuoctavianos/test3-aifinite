import { TITLE } from '@/lib/constants/terminal';

export function TerminalHeader() {
  return (
    <div className="terminal-header">
      <div className="terminal-buttons">
        <div className="terminal-button"></div>
        <div className="terminal-button"></div>
        <div className="terminal-button"></div>
      </div>
      <div className="terminal-title">{TITLE}</div>
    </div>
  );
}