define('ItemView', function () {
    var ItemView = Backbone.View.extend({
        tagName: 'p',
        className: 'square',

        render: function () {
            console.log('rendering item view');
            this.$el.css({ background: this.model.background, 'border-color': this.model.border });
            this.$el.html('i am an item');
            return this;
        }
    });

    return ItemView;
});