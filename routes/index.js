const findCourseRouter = require('./find_courses');
const myCourseRouter = require('./my_courses');
const settingsRouter = require('./settings');
const signinRouter = require('./accounts/signin');
const authWechatRouter = require('./accounts/auth_wechat');
const authMiddleware = require('../middlewares/auth');

module.exports = (app) => {
  app.use('/', findCourseRouter);
  app.use('/auth_wechat', authWechatRouter);
  app.use('/signin', signinRouter);
  app.use(authMiddleware);
  app.use('/my_courses', myCourseRouter);
  app.use('/settings', settingsRouter);
};
