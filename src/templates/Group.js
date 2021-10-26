import Radio from './Radio.svelte';

export let expanded;
export let props;
export let selected;
// export let prp;

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

