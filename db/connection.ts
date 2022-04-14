import { Sequelize } from 'sequelize';


const db = new Sequelize( 'node', 'root', 'Cleo123212', {
  host: 'localhost',
  dialect: 'mysql',
  //logging: true
});

export default db;
