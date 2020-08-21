const database = require('./connection')

database.query(
    `Create Table "User-waiters"(
        id serial PRIMARY KEY,
        nama VARCHAR (50),
        password VARCHAR (50)
    );`, (err, res) => {
    if (err) {
        res.status(400).json(err)
    } else {
        database.query(
            `CREATE TABLE "Menu"(
                    id serial PRIMARY KEY,
                    no_table INTEGER,
                    food VARCHAR (50),
                    drink VARCHAR (50),
                    snack VARCHAR (50)
                );`, (err, res) => {
            if (err) {
                res.status(400).json(err)
            } else {
                database.query(
                    `CREATE TABLE "Order_Temporary"(
                            id serial PRIMARY KEY,
                            User-waiters_id INTEGER REFERENCES "User-waiters" (id),
                            Menu_id INTEGER REFERENCES "Menu" (id)
                        );`, (err, res) => {
                    if (err) {
                        res.status(400).json(err)
                    } else {
                        res.status(200).json('msg:Berhasil membuat tabel')
                        database.end()
                    }
                })
            }
        })
    }
})