import { useState, useCallback } from 'react';
import { AVAILABLE_COMMANDS } from '@/lib/constants/terminal';
import { executeCommand } from '@/lib/utils/commands';

export function useTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [output, setOutput] = useState<string[]>([]);

  const handleCommand = useCallback(async (command: string) => {
    setHistory(prev => [...prev, command]);
    setInput('');
    
    const result = await executeCommand(command);
    setOutput(prev => [...prev, ...result]);
  }, []);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input.trim().toLowerCase());
    }
  }, [input, handleCommand]);

  return {
    input,
    setInput,
    history,
    output,
    handleKeyPress
  };
}