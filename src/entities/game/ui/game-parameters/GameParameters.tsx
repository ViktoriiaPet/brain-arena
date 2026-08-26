import { ReactNode } from 'react'

type GameParametersProps = {
  icon: ReactNode
  title: string
  value: string | number
  valueColor?: string
}

const GameParameters = ({ icon, title, value, valueColor = '#A8AEBF' }: GameParametersProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-0.5 flex items-center gap-0.5 text-[9px] tracking-wide text-[#4B5563] uppercase">
        {icon} {title}
      </p>
      <p className="text-[11px] font-bold" style={{ color: valueColor }}>
        {value}
      </p>
    </div>
  )
}

export default GameParameters
