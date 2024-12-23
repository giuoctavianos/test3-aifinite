'use client';

import { useState, useEffect } from 'react';
import { getSystemChecks } from '@/lib/constants/terminal';
import { useTerminal } from '@/lib/hooks/useTerminal';
import { TerminalHeader } from './TerminalHeader';
import { TerminalLine } from './TerminalLine';
import { CommandInput } from './CommandInput';

export function Terminal() {
  const [initialized, setInitialized] = useState(false);
  const [statusLines, setStatusLines] = useState<string[]>([]);
  const { input, setInput, output, handleKeyPress } = useTerminal();

  useEffect(() => {
    const initializeSystem = async () => {
      const checks = getSystemChecks();
      for (let i = 0; i < checks.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setStatusLines(prev => [...prev, checks[i]]);
      }
      setInitialized(true);
    };

    initializeSystem();
  }, []);

  return (
    <div className="terminal-window">
      <TerminalHeader />
      <div className="terminal-content">
        {statusLines.map((line, index) => (
          <TerminalLine 
            key={`status-${index}`} 
            content={line}
            className={line.includes('TYPE "HELP"') ? 'help-text' : ''}
          />
        ))}
        {output.map((line, index) => (
          <TerminalLine 
            key={`output-${index}`}
            content={line}
          />
        ))}
        {initialized && (
          <CommandInput
            value={input}
            onChange={setInput}
            onKeyPress={handleKeyPress}
          />
        )}
      </div>
    </div>
  );
}