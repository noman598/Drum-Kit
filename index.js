
var drumtarget = document.querySelectorAll(".drum");

for(var i = 0; i < drumtarget.length; i++){

    drumtarget[i].addEventListener("click", function(){
        // alert("hello")
        var htmlletter = this.innerHTML;
        movesounds(htmlletter)
        AddAnimation(htmlletter)

        
        
    });
}

document.addEventListener("keydown", function(event){
    movesounds(event.key)
    AddAnimation(event.key)
})

function movesounds(key)
{
    switch (key) {
        case 'w':
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case 'a':
            var kickbass = new Audio('sounds/kick-bass.mp3')
            kickbass.play();
            break;
        case 's':
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
        case 'j':
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case 'k':
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        
    
        default:
            console.log(htmlletter)
            break;
    }

}

function AddAnimation(key1)
{
    document.querySelector("." + key1).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + key1).classList.remove("pressed");
    },200)


}