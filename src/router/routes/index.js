/**
 * Requires all modules matching the regex expression inside the current directory.
 *
 * - [StackOverflow - How to import an entire folder of SVG images (or how to load them dynamically) into a React Web App?](https://stackoverflow.com/a/46210355/4179020)
 * - [VueJS - Automatic Global Registration of Base Components](https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components)
 *
 * 1. `folder` - `String` - Path to folder to begin scanning for files.
 * 2. `recursion` - `Boolean` - Whether to recursively scan the folder.
 * 3. `file pattern` - `RegExp` - Matching pattern describing which files to include.
 */
const requireModules = require.context('.', false, /\.js$/)

let modules = []

requireModules
  .keys()
  .filter(a => a !== './index.js')
  .forEach(fileName => {
    const module = requireModules(fileName)
    modules.push(module.default)
  })

export default modules
