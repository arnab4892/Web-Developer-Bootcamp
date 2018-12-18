// Check Off Specific Todos By Clicking
$('li').on('click', function () {
    $(this).toggleClass('completed');
});

// Click on X to delete ToDo
$('span').on('click', function (event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});