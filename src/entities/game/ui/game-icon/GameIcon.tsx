'use client'

import { prepareSvg } from '@/shared/lib/svg'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

type GameIconProps = {
  iconUrl: string
  iconColor?: string
  iconSize?: number
  className?: string
}

const GameIcon = ({
  iconUrl,
  iconColor = 'currentColor',
  iconSize = 88,
  className,
}: GameIconProps) => {
  const { data } = useQuery({
    queryKey: ['game-icon', iconUrl],
    queryFn: async () => {
      const response = await fetch(iconUrl)

      return response.text()
    },
  })

  const icon = useMemo(() => (data ? prepareSvg(data) : null), [data])

  return (
    <div
      className={className}
      style={{ color: iconColor, width: iconSize, height: iconSize }}
      dangerouslySetInnerHTML={{
        __html: icon ?? '',
      }}
    />
  )
}

export default GameIcon
