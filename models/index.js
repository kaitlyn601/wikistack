const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack',{logging: false});


const page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content:{
    type: Sequelize.TEXT,allowNull: false
  },
  status:{
    type: Sequelize.ENUM('open', 'closed')
  }
});
const user = db.define('user', {
  name: {
    type: Sequelize.STRING,allowNull: false
  },
  email: {
    type: Sequelize.STRING,allowNull: false
  }
});
module.exports = {
  db,
  page,
  user
}

