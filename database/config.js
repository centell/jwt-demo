require('dotenv').config();

module.exports = {
  development: {
    user: process.env.MYSQL_USER,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    define: {
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_general_ci',
      },
    },
    operatorsAliases: false,
    jwtObj: {
      secret: process.env.JWT_TOKEN
    },
  },
  test: {
    user: process.env.MYSQL_TEST_USER,
    username: process.env.MYSQL_TEST_USER,
    password: process.env.MYSQL_TEST_PASSWORD,
    database: process.env.MYSQL_TEST_DATABASE,
    host: process.env.MYSQL_TEST_HOST,
    port: process.env.MYSQL_TEST_PORT,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    define: {
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_general_ci',
      },
    },
    operatorsAliases: false,
    jwtObj: {
      secret: process.env.JWT_TEST_TOKEN
    },
  },
  production: {
    user: process.env.MYSQL_PRODUCTION_USER,
    username: process.env.MYSQL_PRODUCTION_USER,
    password: process.env.MYSQL_PRODUCTION_PASSWORD,
    database: process.env.MYSQL_PRODUCTION_DATABASE,
    host: process.env.MYSQL_PRODUCTION_HOST,
    port: process.env.MYSQL_PRODUCTION_PORT,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    define: {
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_general_ci',
      },
    },
    operatorsAliases: false,
    jwtObj: {
      secret: process.env.JWT_PRODUCTION_TOKEN
    },
  }
};
