export function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(null)

  React.useEffect(
    () => {
      const mql = window.matchMedia(query)
      setMatches(mql.matches)

      mql.addEventListener
        ? mql.addEventListener('change', handleChange)
        : mql.addListener(handleChange)

      return () => mql.removeEventListener
        ? mql.removeEventListener('change', handleChange)
        : mql.removeListener(handleChange)

      function handleChange() {
        setMatches(mql.matches)
      }
    },
    [query]
  )

  return matches
}
