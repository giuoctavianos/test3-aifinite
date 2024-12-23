import { AVAILABLE_COMMANDS } from '@/lib/constants/terminal';

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export async function executeCommand(command: string): Promise<string[]> {
  switch (command) {
    case 'help':
      return [
        'Available commands:',
        ...Object.entries(AVAILABLE_COMMANDS).map(
          ([cmd, desc]) => `  ${cmd.padEnd(12)} - ${desc}`
        )
      ];

    case 'clear':
      return ['CLEAR_TERMINAL'];

    case 'status':
      return [
        'System Status Report:',
        '=====================================',
        '- AI Models: Operational',
        '- Market Data Feed: Real-time',
        '- Risk Engine: Active',
        '- Last Update: ' + new Date().toLocaleString(),
        '- System Load: 28%',
        '- Memory Usage: 3.2GB/8GB',
        '=====================================',
      ];

    case 'portfolio':
      return [
        'Portfolio Overview:',
        '=====================================',
        `Total AUM: ${formatCurrency(142500000)}`,
        'Performance: +18.3% YTD',
        '',
        'Asset Allocation:',
        '- Quantum Computing: 35%',
        '- AI/ML Technologies: 25%',
        '- Clean Energy: 20%',
        '- Biotech: 15%',
        '- Cash: 5%',
        '=====================================',
      ];

    case 'performance':
      return [
        'Historical Performance:',
        '=====================================',
        '2024 YTD: +18.3%',
        '2023: +45.2%',
        '2022: +28.7%',
        '2021: +62.1%',
        '',
        'Risk Metrics:',
        '- Sharpe Ratio: 2.8',
        '- Max Drawdown: -12.4%',
        '- Beta: 0.85',
        '=====================================',
      ];

    case 'market':
      return [
        'Market Analysis:',
        '=====================================',
        'Current Market Conditions: BULLISH',
        '',
        'Key Indicators:',
        '- AI Sentiment: POSITIVE',
        '- Volume Analysis: ABOVE AVERAGE',
        '- Volatility Index: MODERATE',
        '- Trend Strength: HIGH',
        '=====================================',
      ];

    default:
      return [`Command not found: ${command}. Type 'help' for available commands.`];
  }
}