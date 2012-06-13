var AppModel = Backbone.Model.extend({
    initialize: function (data) {
        this.items = new Backbone.Collection(data.items);
    }
});

var ItemView = Backbone.View.extend({
    tagName: 'p',
    className: 'square',
    render: function () {
        console.log('rendering item view');
        this.$el.css({ background: this.model.get('background'), 'border-color': this.model.get('border') });
        this.$el.html('i am an item');
        return this;
    }
});

var AppView = Backbone.View.extend({
    tagName: 'section',
    initialize: function () {
        this.model.on('change:heading', this.renderHeading, this);
        this.model.items.on('add, remove', this.render, this);
    },

    render: function () {
        console.log('rendering main view');
        this.$el.empty();
        this.$el.append('<h1>');
        this.renderHeading();
        var itemViews = [];
        for (var i = 0; i < this.model.items.length; i++) {
            var itemView = new ItemView({ model: this.model.items.at(i) });
            itemViews.push(itemView.render().el);
        }
        this.$el.append(itemViews);
        return this;
    },

    renderHeading: function () {
        console.log('rendering heading');
        this.$el.find('h1').text(this.model.get('heading'));
    }
});