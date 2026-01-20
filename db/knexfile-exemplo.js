module.exports = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'SEU_USUARIO',
        password: 'SEU_USUARIO',
        database: 'subarashiimanga',
        port: 0o0 // SUA PORTA
    },
    pool: {
        min: 2,
        max: 10
    }
}