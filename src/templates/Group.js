import Radio from './Radio.svelte';

export let expanded;
export let props;
export let selected;
export let prp;

expanded = false
prp = undefined
function radioClick(e) {
    e.stopPropagation();
}


function toggle (info){
    expanded = !expanded;
    console.log('toggle',info,expanded)
}

function select(name, info, num, infoname){
    console.log('loooggss',info,num,name,infoname)
    // document.getElementById(name).text = infoname
    // info.children.menu = +num+1
    info.name = infoname
    prp = info.children
    // toggle(num)
    console.log('hi')
    
    
    
    
}


/*Dropdown Menu*/
// $('.dropdown').click(function () {
//         $(this).attr('tabindex', 1).focus();
//         $(this).toggleClass('active');
//         $(this).find('.dropdown-menu').slideToggle(300);
//     });
    // $('.dropdown').focusout(function () {
    //     $(this).removeClass('active');
    //     $(this).find('.dropdown-menu').slideUp(300);
    // });


    // $('.dropdown .dropdown-menu li').click(function () {
    //     $(this).parents('.dropdown').find('span').text($(this).text());
    //     $(this).parents('.dropdown').find('input').attr('value', 
    //     $(this).attr('id'));
    // });r