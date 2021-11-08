# Importing datas to MongoDB

## From Quick.DB
If you are using Quick.DB, you can now import datas to MongoDB and switch!

```js
const data = QuickDB.all();
MongoDB.import(data, { unique: true /* or false */, validate: false /* or true */ });

// replace 'QuickDB' with your Quick.DB class.
// replace 'MongoDB' with your MongoDB class.
```

## From other databases
Don't worry, other databases can switch to MongoDB too!

* First, you need to get all datas.
(mostly with `.all()`, but take a look)

```js
const data = YourDatabase.all();

// replace 'YourDatabase' with your database class.
```

<hr>

* Second, call the import function from your MongoDB class.

```js
MongoDB.import(data, { unique: true /* or false */, validate: false /* or true */ });

// replace 'MongoDB' with your MongoDB class.
```

[Docs 📗](https://updevs-db.js.org/docs/#/docs/main/main/class/MongoDB?scrollTo=import)
