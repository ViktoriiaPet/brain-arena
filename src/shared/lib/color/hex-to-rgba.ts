const hexToRgba = (hex: string, opacity = 0.18): string => {
  if (!/^#?[0-9a-fA-F]{6}$/.test(hex)) return `rgba(0,0,0,${opacity})`

  const cleanHex = hex.replace('#', '')

  const r = parseInt(cleanHex.slice(0, 2), 16)
  const g = parseInt(cleanHex.slice(2, 4), 16)
  const b = parseInt(cleanHex.slice(4, 6), 16)

  return `rgba(${r},${g},${b},${opacity})`
}

export default hexToRgba
