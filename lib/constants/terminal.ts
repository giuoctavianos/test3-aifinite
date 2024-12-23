export const TITLE = "AIFinite Capital // Terminal v1.0";

export const getSystemChecks = () => {
  const now = new Date();
  const weekNumber = Math.ceil((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / 604800000);
  
  return [
    'INITIALIZING AIFINITE CAPITAL TERMINAL...',
    '[■■■■■■■■■■■■■■■■■■■■] 100%',
    '=====================================',
    'CORE SYSTEMS:',
    '> Quantum Engine........... ONLINE',
    '> Market Analysis.......... ACTIVE',
    '> Risk Management......... ENABLED',
    '> AI Models.............. RUNNING',
    '> Portfolio Manager........ READY',
    '=====================================',
    `SYSTEM STATUS: OPERATIONAL | ${now.toLocaleDateString()} | Week ${weekNumber}`,
    'SECURE CONNECTION ESTABLISHED...',
    '',
    '[TYPE "HELP" FOR AVAILABLE COMMANDS]'
  ];
};

export const AVAILABLE_COMMANDS = {
  'help': 'Display available commands',
  'status': 'Show current system status',
  'portfolio': 'View portfolio allocation',
  'risk': 'Display risk metrics',
  'market': 'Show market analysis',
  'predict': 'Run AI predictions',
  'performance': 'View historical performance',
  'settings': 'System configuration',
  'clear': 'Clear terminal screen'
} as const;

export type Command = keyof typeof AVAILABLE_COMMANDS;