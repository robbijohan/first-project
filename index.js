const db = require('.connection')

class data {
    static createUser(nama, password) {
        const query = `INSERT INTO "User-waiters" (nama, password) VALUES ($1, $2)`
        const values = [`${nama}`, `${password}`]
        db.query(
            query, values, (err, res) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).json('data masuk')
                }
            })
    }
    static createMenu(no_table, food, drink, snack) {
        const query = `INSERT INTO "Menu" (no_table, food, drink, snack) VALUES ($1, $2, $3, $4)`
        const values = [`${no_table}`, `${food}`, `${drink}`, `${snack}`]
        db.query(
            query, values, (err, res) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).json('data pesanan masuk')
                }
            }
        )
    }
}