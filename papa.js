var count = 0;


window.addEventListener('scroll', function (event) {
    var scroll = this.scrollY;
    var element = document.getElementById('first-page');
    var element2 = document.getElementById('second-page');

    // изменение лого
    var mass = Math.min(20, 1 + 0.005 * $(this).scrollTop()) % 10;
    $('#logo').css('transform', 'scale(' + mass + ')');

    // прозрачность описания
    $('#description').css('opacity', Math.min(1, $('#description').height() / $(this).scrollTop()));


    if (scroll > element.clientHeight / 2 + 50 && count == 0) {
        newdiv = document.createElement('div');
        newdiv.id = 'header';
        newdiv.innerHTML = '<h5> <a href=#top class="linktop">LionsGateInc.</a></h5>';
        var workwith = document.getElementById('second-page')
        document.body.insertBefore(newdiv, workwith);
        count = 1;

    }
    else if (scroll < element.clientHeight / 2 && count == 1) {
        document.getElementById("header").remove();
        count = 0;
    }

    console.log(scroll, element2.clientHeight)

    // if (scroll == element2.clientHeight) {
    //     console.log('BOTTOM');
    // }
})

