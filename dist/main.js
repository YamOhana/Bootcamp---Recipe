  
const renderer = new Renderer;

$('#btn').on('click', function () {
    $('#logos').empty()
    let ing = $('#input').val();
    $.get(`/recipes/${ing}`, (data) => {
        renderer.render(data);
    })
})

$('.container').on('click', 'img', function(){
    console.log($(this).closest('div').find('li').first().text())
})