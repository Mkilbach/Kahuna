import "../style/style.scss";

const $panelsWrapper = $('.categories__panels');
const $panels = $('.categories__innerPanel');
const $closeBtn = $('.categories__panelInfoCloseBtn');
const $articles = $('.categories__panelInfoArticle');

const slide = (e) => {
    $panels.removeClass('categories__expendable');
    $panels.parent().removeClass('unselected');
    $panelsWrapper.addClass('.categories__panels--shrink');
    $panels.each((i, el) => {    
        if(el === e.currentTarget){
            $(el).parent().addClass('selected');
            $articles.each((i, el) => {
                ($(el).attr('data-title') === $(e.currentTarget).attr('data-title')) && $(el).css('display', 'block');
            })
        } else {
            $(el).parent().addClass('faded');
        }
    });
}

// nadanie eventu na panele
$panels.on('click', slide)

// button zamykający artykuł
$closeBtn.on('click', (e) => {

    $panels.parent().each((i, el) => {
        ($(el).hasClass('selected')) && $(el).addClass('unselected');
    })
    $panels.addClass('categories__expendable');
    $panelsWrapper.removeClass('.categories__panels--shrink');
    $panels.parent().removeClass('faded selected');


    $panels.off('click'); //zmuszenie panelu do zamkniecia sie w calosci
    setTimeout(() => {
            $articles.css('display', 'none');
            $panels.on('click', slide); // odnowienie eventu
        }, 1250);
})