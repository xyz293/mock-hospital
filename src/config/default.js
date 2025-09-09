const config = {
    /*
    配置项
    端口
    数据库配置
    密钥
    */
  port: 3000,
  db: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'tjh20051107',
    database: 'mock',
    secret: '这是一个后端秘钥',
    expiresIn: '1d',
  },
};
module.exports = config;