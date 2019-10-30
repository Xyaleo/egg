
'use strict';

module.exports = app => {
    const { router, controller } = app;
    router.get('/',controller.home.render);
    router.post('/post', controller.home.index);
};