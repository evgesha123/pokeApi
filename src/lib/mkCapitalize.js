const mkCapitalize = (value) => {
  if (typeof value !== 'string') return ''
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export default mkCapitalize;
