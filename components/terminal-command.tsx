import { cn } from '@/lib/utils'

interface TerminalCommandProps {
  command: string
  output?: string
  className?: string
}

export function TerminalCommand({ command, output, className }: TerminalCommandProps) {
  return (
    <div className={cn('font-mono text-sm md:text-base', className)}>
      <div className="flex items-start gap-2">
        <span className="text-green-400 shrink-0">$</span>
        <span className="text-green-500">{command}</span>
      </div>
      {output && (
        <div className="mt-2 pl-4 text-green-500/70 whitespace-pre-wrap border-l border-green-500/30">
          {output}
        </div>
      )}
    </div>
  )
}
