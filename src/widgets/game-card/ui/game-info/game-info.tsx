import GameIcon from '@/entities/game/ui/game-icon/game-icon'

type GameInfoProps = {
  iconBgColor: string
  iconUrl: string
  color: string
  title: string
  difficultyBgColor: string
  difficulty: string
  description: string
}

const GameInfo = ({
  iconBgColor,
  iconUrl,
  color,
  title,
  difficultyBgColor,
  difficulty,
  description,
}: GameInfoProps) => {
  return (
    <div className="flex h-auto flex-col gap-2.5">
      <div className="flex gap-2.5">
        <div
          className="flex h-8.25 w-8.25 items-center justify-center rounded-4xl"
          style={{ background: iconBgColor }}
        >
          <GameIcon iconUrl={iconUrl} iconColor={color} iconSize={22} />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h4 className="text-foreground truncate text-sm leading-tight font-bold">{title}</h4>
          <span
            className="truncate rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase"
            style={{ color: color, background: difficultyBgColor }}
          >
            {difficulty}
          </span>
        </div>
      </div>
      <p className="text-muted-foreground line-clamp-2 max-w-61.25 text-[11px] leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default GameInfo
