/**
 * This version of useMediaQuery caches the different `matchMedia` instances.
 * This allows you to preload the matches and prevent layout shifts.
 */

const cache = {}

export function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(() => cache[query]?.matches || null)

  React.useEffect(
    () => {
      const mql = cache[query] || (cache[query] = window.matchMedia(query))

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
