module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'db_auth_node',
  define: {
    // adicionar timestamp automaticamente
    timestamps: true,

    // passar snake case
    underscored: true,
  }
}