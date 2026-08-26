import { Game } from '@/entities/game/model/types'
import GameIcon from '@/entities/game/ui/game-icon/GameIcon'
import GameParameters from '@/entities/game/ui/game-parameters/GameParameters'
import { hexToRgba } from '@/shared/lib/color'
import { Button } from '@/shared/ui/button'
import { Clock, Play, Star, Users } from 'lucide-react'
import { CSSProperties } from 'react'

type GameCardProps = {
  game: Game
}

const GameCard = ({ game }: GameCardProps) => {
  const cardGlow = hexToRgba(game.color, 0.01)
  const cardBorderColor = hexToRgba(game.color, 0.1)
  const cardHeadBackgroundGlow = `radial-gradient(at 55% 45%, ${hexToRgba(game.color)}, transparent 95%)`
  const iconBgColor = hexToRgba(game.color, 0.1)
  const difficultyBgColor = hexToRgba(game.color, 0.1)
  const borderColor = hexToRgba(game.color, 0.25)

  return (
    <li
      className="group relative overflow-hidden rounded-(--radius) border border-[#ffffff0d] shadow-[0_4px_32px_var(--card-glow-color),0_4px_16px_rgba(0,0,0,0.6)] duration-300 hover:-translate-y-0.75 hover:border-(--border-color) hover:bg-(--card-glow-color) hover:shadow-[0_16px_60px_var(--card-border-color),0_2px_8px_rgba(0,0,0,0.5)]"
      style={
        {
          '--card-glow-color': cardGlow,
          '--card-border-color': cardBorderColor,
          '--call-to-action-color': game.color,
          '--border-color': borderColor,
        } as CSSProperties
      }
    >
      {/* TOP ACCENT */}
      <div
        className="absolute top-0 right-0 left-0 h-0.5 opacity-0 duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${game.color}80, ${game.color}, ${game.color}80, transparent)`,
        }}
      />
      {/* CARD HEAD */}
      <div className="relative">
        <div className="absolute flex w-full justify-between p-4">
          <span>Live</span>
          <span>❤️</span>
        </div>
        {/* CARD HEAD BACKGROUND */}
        <div className="flex h-36 items-center justify-center">
          <div
            className="flex h-full w-full items-center justify-center bg-(--card-head-background-glow) opacity-50 duration-(--duration-fast) group-hover:opacity-90"
            style={{
              background: cardHeadBackgroundGlow,
            }}
          >
            <GameIcon iconUrl={game.iconUrl} iconColor={game.color} />
          </div>
        </div>

        {/* CARD BODY */}
        <div className="flex flex-col gap-3 p-4">
          {/* GAME INFO */}
          <div className="flex h-auto flex-col gap-2.5">
            <div className="flex gap-2.5">
              <div
                className="flex h-8.25 w-8.25 items-center justify-center rounded-4xl"
                style={{ background: iconBgColor }}
              >
                <GameIcon iconUrl={game.iconUrl} iconColor={game.color} iconSize={22} />
              </div>
              <div className="flex flex-col items-start gap-2">
                <h4 className="text-foreground truncate text-sm leading-tight font-bold">
                  {game.title}
                </h4>
                <span
                  className="truncate rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase"
                  style={{ color: game.color, background: difficultyBgColor }}
                >
                  {game.difficulty}
                </span>
              </div>
            </div>
            <p className="line-clamp-2 max-w-61.25 text-[11px] leading-relaxed text-[#6B7280]">
              {game.description}
            </p>
          </div>
          {/* GAME PARAMETERS */}
          <div className="grid grid-cols-3 gap-1.5 rounded-xl border border-[#ffffff0d] bg-[#181B22] px-2 py-1.5">
            <GameParameters
              icon={<Clock size={8} />}
              title="Time"
              value={game.parameters.duration}
            />
            <GameParameters icon={<Users size={8} />} title="Today" value={game.parameters.today} />
            <GameParameters
              icon={<Star size={8} />}
              title="Avg"
              value={game.parameters.avg}
              valueColor={game.color}
            />
          </div>
          {/* CALL TO ACTION */}
          <Button
            variant="outline"
            className="flex h-auto w-full items-center justify-center gap-1.5 rounded-xl border border-(--border-color) bg-[#1B1E26] py-2.5 text-xs font-bold text-(--call-to-action-color) transition-all duration-300 group-hover:bg-(--call-to-action-color)! group-hover:text-[#0B0D12]!"
          >
            <Play size={11} fill="currentColor" /> Play Now
          </Button>
        </div>
      </div>
    </li>
  )
}

export default GameCard
