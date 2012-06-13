require([
        'AppView',
        'AppModel'
    ], function (AppView, AppModel) {
        var model = new AppModel(window.dataRetrievedFromServer);
        window.model = model;
        var appView = new AppView({ model: model });
        appView.render();
        $('#app').html(appView.el);
    });