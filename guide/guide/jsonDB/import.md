# Importing datas to JsonDB

::: warning
This can only be used in `dev` version!
:::

## From Quick.DB
If you are using Quick.DB, you can now import datas to JsonDB and use JsonDB!

```js
const data = QuickDB.all();
JsonDB.import(data, { validate: false /* or true */ });

// replace 'QuickDB' with your Quick.DB class.
// replace 'JsonDB' with your JsonDB class.
```

## From other databases
Don't worry, other databases can switch to JsonDB too!

* First, you need to get all datas.
(mostly with `.all()`, but take a look)

```js
const data = YourDatabase.all();

// replace 'YourDatabase' with your database class.
```

<hr>

* Second, call the import function from your JsonDB class.

```js
JsonDB.import(data, { validate: false /* or true */ });

// replace 'JsonDB' with your JsonDB class.
```

[Docs 📗](https://updevs-db.js.org/docs/#/docs/main/main/class/JsonDB?scrollTo=import)
