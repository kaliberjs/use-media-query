import App from '/App.universal'
import polyfill from '@kaliber/build/lib/polyfill'
import javascript from '@kaliber/build/lib/javascript'
import stylesheet from '@kaliber/build/lib/stylesheet'

export default (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <title>@kaliber/use-media-query</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {polyfill(['default', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022', 'Element.prototype.classList', 'IntersectionObserver', 'ResizeObserver', 'fetch', 'matchMedia', 'MediaQueryList.prototype.addEventListener', 'MediaQueryList.prototype.removeEventListener'])}
      {javascript}
      {stylesheet}
    </head>
    <body data-interactive="false">
      <script dangerouslySetInnerHTML={{ __html: `document.body.setAttribute('data-interactive', 'true');` }} />
      <App />
    </body>
  </html>
)
