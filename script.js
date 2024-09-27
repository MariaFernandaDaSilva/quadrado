const quadrado = document.getElementById("quadrado");

addEventListener('keydown', function(){
    quadrado.style.backgroundColor = 'black';
})

addEventListener('keyup', function(){
    quadrado.style.backgroundColor = 'palevioletred';
})

addEventListener('click', function(){
    quadrado.style.scale = '1.5';
    })
