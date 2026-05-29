function closeMedia1() {
    let fb = document.getElementsByClassName('fbClosopen')[0]

    if(fb.style.display == 'flex'){
        fb.classList.add('openClass')
        fb.style.display = 'none'
    }else{
        fb.style.display = 'flex'
    }
}

function closeMedia2() {
    let yb = document.getElementsByClassName('ytcloseopen')[0]

    if(yb.style.display == 'flex'){
        yb.classList.add('openClass')
        yb.style.display = 'none'

    }else{
        yb.style.display = 'flex'
    }
}


function closeMedia3() {
    let gt = document.getElementsByClassName('gtcloseopen')[0]

    if(gt.style.display == 'flex'){
        gt.classList.add('openClass')
        gt.style.display = 'none'

    }else{
        gt.style.display = 'flex'
    }
}

function closeMedia4() {
    let ism = document.getElementsByClassName('ismcloseopen')[0]

    if(ism.style.display == 'flex'){
        ism.classList.add('openClass')
        ism.style.display = 'none'

    }else{
        ism.style.display = 'flex'
    }
}
