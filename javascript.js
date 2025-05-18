var IS_CLICKED = false
var CURRENT_COLOR = 'red'
var DEFAULT_COLOR = 'white'
var FILL_MODE = false

let zalivka = document.querySelector('.zaliv')
let download = document.querySelector('.start')

download.addEventListener('click', function(){
    domtoimage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'zigaretti.jpeg';
        link.href = dataUrl;
        link.click();
    });
})

document.addEventListener('mousedown', function(){
    IS_CLICKED = true
})

document.addEventListener('mouseup', function(){
    IS_CLICKED = false
})

zalivka.addEventListener('click', function(){
    FILL_MODE = true
})
zalivka.addEventListener('dblclick', function(){
    FILL_MODE = false
})


// Делаем поле (минное)
let pole = document.querySelector('.redactwind')

for (let i = 0; i < 900; i+=1) {
    let klet = document.createElement("div")
    klet.classList.add('klet')
    pole.appendChild(klet)
    klet.addAtr
}

let cell = document.querySelectorAll('.klet')
cell.forEach(klet => {
    klet.addEventListener('mouseover', function(){
        if(IS_CLICKED) {
            anime({
                targets: klet,
                background: CURRENT_COLOR,
                duration: 200,
                easing: 'linear',
            })
        }
    })
})

cell.forEach(klet => {
    klet.addEventListener('mousedown', function(){
            anime({
                targets: klet,
                background: CURRENT_COLOR,
                duration: 200,
                easing: 'linear',
            })
    })
})

cell.forEach(klet => {
    klet.addEventListener('mouseover', function(){
        if(IS_CLICKED) {
            if(FILL_MODE) {
                anime({
                    targets: cell,
                    background: CURRENT_COLOR,
                    duration: 200,
                    easing: 'linear',
            })  }
        }
    })
})

let colr_cells = document.querySelectorAll(".color-str")
colr_cells.forEach(colr_cell => {
    colr_cell.addEventListener('click', function (){
        CURRENT_COLOR = getComputedStyle(colr_cell).backgroundColor;
    })
})
