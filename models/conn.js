const pgp = require('pg-promise')({
    query: function(e) {
        console.log('QUERY:', e.query)
    }
});

const options = {
    host: 'localhost',
    database: 'race_tracks'
}

const db = pgp(options);

module.exports = db