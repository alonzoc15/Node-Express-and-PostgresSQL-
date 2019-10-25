const db = require('./conn.js');

class Track {
    constructor(id, name, address, picture) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.picture = picture;
    }

    static async getAll() {
        try {
            const response = await db.any(`select * from tracks;`);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    static async getById(id) {
        try {
            const response = await db.one(`SELECT * FROM tracks WHERE id = $1;`, [id]);
            return response
        } catch (err) {
            return err.message
        }
    }
}

module.exports = Track;