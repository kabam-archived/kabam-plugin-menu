exports.name = 'kabamPluginMenu';
exports.middleware = function(kabam) {
  return function(request,response,next){
    //todo - from menu.json file!
    response.locals.menu = [
      { name: 'MenuItem1', help: 'MenuItem1 help', 'url':'#menuItem' },
      { name: 'MenuItem1', help: 'MenuItem1 help', 'url':'#menuItem' },
      { name: 'MenuItem1', help: 'MenuItem1 help', 'url':'#menuItem' },
      { name: 'MenuItem1', help: 'MenuItem1 help', 'url':'#menuItem' }
    ]
  };
};

exports.routes = function(kabam){
  kabam.app.get('/api/menus',function(){
    response.json(response.locals.menu);
  });
};