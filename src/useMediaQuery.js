export function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(null)

  React.useEffect(
    () => {
      const mql = window.matchMedia(query)
      setMatches(mql.matches)

      mql.addEventListener('change', handleChange)

      return () => mql.removeEventListener('change', handleChange)

      function handleChange() {
        setMatches(mql.matches)
      }
    },
    [query]
  )

  return matches
}
