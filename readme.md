# @kaliber/use-media-query
A hook that makes it easy to use a media query in React.

## Motivation
Sometimes it's useful to render a different version of a component on different media. For instance: a navigation component can have wildly different implementations for mobile and desktop. This hook gives you the power to use media queries to trigger this behavior.

## Installation

```
yarn add @kaliber/use-media-query
```

Add the library to your `compileWithBabel` array:

__`config/default.js`__
```js
module.exports = {
  kaliber: {
    compileWithBabel: [/@kaliber\/use-media-query/]
  }
}
```

## Usage

```jsx
import { useMediaQuery } from '@kaliber/use-media-query'

function Component() {
  const showDesktopNavigation = useMediaQuery(mediaQuery)

  return (
    <div className={styles.component}>
      <header className={styles.header}>
        {showDesktopNavigation
          ? <HeaderDesktop items={menuItems} />
          : <HeaderMobile items={menuItems} />
        }
      </header>
    </div>
  )
}
```

Please do refer to the example in the `/example` folder to see how you can avoid CLS and displaying the wrong menu for a frame.

### Default values

`useMediaQuery` only returns a non-null value after the first render, because the first render there's no information about the media query available yet. If you need a default value, you can add one using the __nullish coalescing operator__:

```js
const showDesktopNavigation = useMediaQuery(mediaQuery) ?? true
```

### Indeterminate

If you want to display a waiting state while you wait for `useMediaQuery` to update, you can explicitly test against `null`:

```js
function Component() {
  const isViewportMd = useMediaQuery(mediaQuery)
  const indeterminate = isViewportMd === null

  return (
    <div className={styles.component}>
      <header className={cx(styles.header, indeterminate && styles.indeterminate)}>
        {/* ... */}
      </header>
    </div>
  )
}
```

---

![](https://media.giphy.com/media/3yjYqt6EosROH9ZwFX/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.
