var styles = document.querySelector(':root')
var darkModeInput = document.getElementsByTagName("checkbox")
let darkMode = false

function setDarkMode(){
    console.log("Dark Mode function Called "+darkMode)
    if(!darkMode){
        styles.style.setProperty('--color1','black')
        styles.style.setProperty('--color2','grey')
        darkMode = true
    }
    else{   
        styles.style.setProperty('--color1','#18314F')
        styles.style.setProperty('--color2','#C1CFDA')
        darkMode = false
    }

}
function keepDarkMode(){
    if(darkMode){
        styles.style.setProperty('--color1','black')
        styles.style.setProperty('--color2','grey')
    }
    else{   
        styles.style.setProperty('--color1','#18314F')
        styles.style.setProperty('--color2','#C1CFDA')
    }
}
onload(keepDarkMode())