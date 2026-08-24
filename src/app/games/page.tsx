import { games } from '@/entities/game/config/mock-games'

import GameCard from '@/entities/game/ui/GameCard'

const Games = () => {
  return (
    <div className="container">
      <section className="flex flex-col gap-5.5">
        <div className="flex items-center gap-2">
          <h3 className="text-muted-foreground text-[11px] font-semibold tracking-widest uppercase">
            All games
          </h3>
          {games?.length > 0 && (
            <span className="rounded-full bg-[#6c6fff1a] px-2 py-0.5 text-[10px] font-bold text-[#6c6fff]">
              {games.length}
            </span>
          )}
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => {
            return <GameCard key={game.id} game={game} />
          })}
        </ul>
      </section>
    </div>
  )
}

export default Games
