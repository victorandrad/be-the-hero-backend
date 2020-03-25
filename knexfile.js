// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            user: 'root',
            password: '123',
            host: 'mysql.nano.docker',
            database: 'semanaomnistack11'
        },
        migrations: {
            directory: './src/database/migrations'
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
