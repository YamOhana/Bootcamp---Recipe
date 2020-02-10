class Renderer {

    _render(data) {
        const source = $('#recipeID').html();
        const template = Handlebars.compile(source);
        const newHtml = template(data);
        $('.container').empty().append(newHtml);
    }

    render(data) {
        this._render(data);
    }
}