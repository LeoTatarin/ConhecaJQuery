$(document).ready(function(){
    $('header button').click(function() {
        alert("Expandir Formulario")
    })

    $('form').on('submit',function(e){
        console.log("submit");
        e.preventDefault();
    })
})