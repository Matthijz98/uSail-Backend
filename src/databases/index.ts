import Sequelize from 'sequelize';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';

const sequelize = new Sequelize.Sequelize(process.env.db_database, process.env.db_user, process.env.db_password, {
  host: process.env.db_host,
  dialect: 'postgres',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  logQueryParameters: process.env.NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Users: UserModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;
