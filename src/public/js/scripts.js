$("#btn-like").click(e => {
    e.preventDefault();
    let imgId = $("#btn-like").data('id');

    $.post(`/images/${imgId}/like`)
        .done(data => {
            $(".likes-count").text(data.likes);
        });
});