import { Game } from '@/entities/game/model/types'
import GameIcon from '@/entities/game/ui/game-icon/GameIcon'

// import { cn } from '@/shared/lib/utils'
// import { Lock } from 'lucide-react'

type GameCardProps = {
  game: Game
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <li className="rounded-(--radius) border border-[#ffffff0d]">
      <div className="relative">
        <div className="absolute flex w-full justify-between">
          <span>Live</span>
          <span>❤️</span>
        </div>
        <div className="flex h-36 items-center justify-center">
          <div className="flex h-22 justify-center">
            <GameIcon iconUrl={game.iconUrl} iconColor={game.color} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default GameCard
