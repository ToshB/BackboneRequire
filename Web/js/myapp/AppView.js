define([
        'ItemView'
    ], function (ItemView) {
    var AppView = Backbone.View.extend({
        initialize: function () {
            this.model.on('change', this.render, this);
        },
        render: function () {
            console.log('rendering main view');
            this.$el.empty();
            
            // Render main element info
            this.$el.append('<h1>' + this.model.get('heading') + '</h1>');

            // Render child items
            for (var i = 0; i < this.model.get('items').length; i++) {
                var itemView = new ItemView({ model: this.model.get('items')[i] });
                itemView.render();
                this.$el.append(itemView.el);
            }
            return this;
        }
    });

    return AppView;
});
