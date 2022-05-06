import { useMediaQuery } from '@kaliber/use-media-query'
import { viewportMd } from '/cssGlobal/media.css'
import styles from './App.css'

const menuItems = [
  'Cases',
  'Over ons',
  'Werken bij',
  'Contact',
]

export default function App() {
  const isViewportMd = useMediaQuery(viewportMd)
  const showDesktopNavigation = isViewportMd ?? true

  return (
    <div className={styles.component}>
      <header className={cx(styles.header, isViewportMd === null && styles.indeterminate)}>
        {showDesktopNavigation
          ? <HeaderDesktop items={menuItems} />
          : <HeaderMobile items={menuItems} />
        }
      </header>

      <main>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus deserunt non esse sed obcaecati dicta vitae architecto, saepe labore eius nam numquam beatae, officia illo itaque reprehenderit atque aperiam expedita.</p>
        <p>Delectus deserunt non esse sed obcaecati dicta vitae architecto, saepe labore eius nam numquam beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </main>
    </div>
  )
}

function HeaderDesktop({ items }) {
  return (
    <div className={styles.componentHeaderDesktop}>
      <ul className={styles.menuDesktop}>
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  )
}

function HeaderMobile({ items }) {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <div className={styles.componentHeaderMobile}>
      <button className={styles.trigger} onClick={() => setExpanded(x => !x)}>
        Menu
      </button>

      <ul className={cx(styles.menuMobile, expanded && styles.isExpanded)}>
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  )
}
