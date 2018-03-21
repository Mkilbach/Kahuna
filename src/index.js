import "../style/style.scss";

const $panels = $('.categories__innerPanel');
const $closeBtn = $('.categories__panelInfoCloseBtn');

$panels.on('click', (e) => {

    $panels.removeClass('categories__expendable');
    $panels.parent().removeClass('unselected');
    $panels.each((i, el) => {    
        if(el === e.currentTarget){
            $(el).parent().addClass('selected');
        } else {
            $(el).parent().addClass('faded');
        }
    });
})

$closeBtn.on('click', (e) => {
    console.log('aa');
    $panels.parent().each((i, el) => {
        if($(el).hasClass('selected')){
            $(el).addClass('unselected');
            console.log($(el).find('categories__innerPanel:first-child'));
        } 
    })
    $panels.addClass('categories__expendable');
    $panels.parent().removeClass('faded selected');
})