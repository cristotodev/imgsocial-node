$('#post-comment').hide();

$('#btn-toggle-comment').click(e => {
    e.preventDefault();
    $('#post-comment').slideToggle();
})

$("#btn-like").click(e => {
    e.preventDefault();
    let imgId = $("#btn-like").data('id');

    $.post(`/images/${imgId}/like`)
        .done(data => {
            $(".likes-count").text(data.likes);
        });
});

$("#btn-delete").click(e => {
    e.preventDefault();
    let imgId = $("#btn-delete").data('id');
    const response = confirm('Are you sure you want to delete this image?');

    if (response) {
        $.ajax({
                url: `/images/${imgId}`,
                type: 'DELETE'
            })
            .done(result => {
                $("#btn-delete").removeClass('btn-danger').addClass('btn-success');
                $("#btn-delete").find('i').removeClass('fa-times').addClass('fa-check');
                $("#btn-delete").append('<span>Deleted!</span>');
            });
    }
});