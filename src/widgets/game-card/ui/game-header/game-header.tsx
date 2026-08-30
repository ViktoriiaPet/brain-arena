import GameIcon from '@/entities/game/ui/game-icon/game-icon'

type GameCardHeaderProps = {
  cardHeadBackgroundGlow: string
  iconUrl: string
  iconColor: string
}

const GameCardHeader = ({ cardHeadBackgroundGlow, iconUrl, iconColor }: GameCardHeaderProps) => {
  return (
    <>
      {/* CARD HEAD */}
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
          <GameIcon iconUrl={iconUrl} iconColor={iconColor} />
        </div>
      </div>
    </>
  )
}

export default GameCardHeader
