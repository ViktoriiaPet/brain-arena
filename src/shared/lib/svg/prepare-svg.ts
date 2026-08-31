import DOMPurify from 'dompurify'

const prepareSvg = (iconTxt: string): string | null => {
  const clean = DOMPurify.sanitize(iconTxt, { USE_PROFILES: { svg: true, svgFilters: true } })

  const parse = new DOMParser()
  const document = parse.parseFromString(clean, 'image/svg+xml')

  const svg = document.documentElement

  if (svg.tagName.toLowerCase() !== 'svg') {
    return null
  }

  svg.setAttribute('width', '100%')
  svg.setAttribute('height', '100%')

  return svg.outerHTML
}

export default prepareSvg
