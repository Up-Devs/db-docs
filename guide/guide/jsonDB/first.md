# Creating your first JsonDB class
::: danger
If you are using Heroku, you **shouldn't** use Json database. Heroku's json files gets erased very often, meaning that your datas will get deleted.
:::

## Creating a JsonDB class

```js
const { JsonDB } = require('up-devs.db');
const db = new JsonDB('up-devs' /* Your database name (fileName.json) */, { consoleEvents: true /* or false */ })
```

[Docs 📗](https://updevs-db.js.org/docs/#/docs/main/main/class/JsonDB)

## Setting, deleting and fetching datas (basic)
### Setting a data
The most important thing for a database: Setting a data. You can easily do this with:

```js
db.set('key', value)
```

[Docs 📗](https://updevs-db.js.org/docs/#/docs/main/main/class/JsonDB?scrollTo=set)

You can see your setted datas in your json file.
Guide [here](./start.md).

### Deleting a data
When you don't like a data, you can throw it in the trash! It's easy as:

```js
db.delete('key')
```

[Docs 📗](https://updevs-db.js.org/docs/#/docs/main/main/class/JsonDB?scrollTo=delete)

When you delete a data it's irrecoverable, so think twice before deleting them.

### Fetching a data
When you save a data, you can access it with:

```js
db.fetch('key')
```

[Docs 📗](https://updevs-db.js.org/docs/#/docs/main/main/class/JsonDB?scrollTo=fetch)
