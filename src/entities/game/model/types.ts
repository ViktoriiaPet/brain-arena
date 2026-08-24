export type GameStatus = 'available' | 'coming-soon'
export type GameDifficulty = 'easy' | 'medium' | 'hard' | 'expert'

export interface Game {
  id: string
  slug: string
  title: string
  description: string
  status: GameStatus
  category: string
  difficulty: GameDifficulty
  duration: string
  color: string
  iconUrl: string
}
