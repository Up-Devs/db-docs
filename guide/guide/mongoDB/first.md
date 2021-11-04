# Creating your first MongoDB class

## Creating a MongoDB class

::: warning
If you don't have a mongo database yet, please check [here](./start.md).
:::

```js
const { MongoDB } = require('up-devs.db');
const db = new MongoDB('mongodb+srv://username:password@updevs-db.mongodb.net/mongo' /* Your mongo connection string */, 'up-devs.db' /* Your model name */, { consoleEvents: true /* or false */ });
```

[Docs 📗](https://updevs-db.js.org/docs/#/docs/main/main/class/MongoDB)

::: danger
NEVER, EVER publish or publicly share your mongo connection string. So, put this class in a private file.
:::

## Setting, deleting and fetching datas (basic)
### Setting a data
The most important thing for a database: Setting a data. You can easily do this with:

```js
await db.set('key', value)
```

[Docs 📗](https://updevs-db.js.org/docs/#/docs/main/main/class/MongoDB?scrollTo=set)

You can see your setted datas in your MongoDB Compass.
Guide [here](./start.md).

### Deleting a data
When you don't like a data, you can throw it in the trash! It's easy as:

```js
await db.delete('key')
```

[Docs 📗](https://updevs-db.js.org/docs/#/docs/main/main/class/MongoDB?scrollTo=delete)

When you delete a data it's irrecoverable, so think twice before deleting them.

### Fetching a data
When you save a data, you can access it with:

```js
await db.fetch('key')
```

[Docs 📗](https://updevs-db.js.org/docs/#/docs/main/main/class/MongoDB?scrollTo=fetch)
