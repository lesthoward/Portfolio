class TypeWritter {
    constructor(sloganArr, clickOn) {
        // Content
        this.sloganArr = sloganArr
        this.currentIndex = 0
        this.indexLetter = 0
        this.selectedWord = ''
        this.originalText = ''
        this.isDelating = false;
        this.clickOn = clickOn
        // Times
        this.timeout = 0
        this.timeTyping = 200
        this.timeDelating = 150
        this.timePause = 600
        // Blink
        this.sloganLine = document.querySelector('.slogan__line');
        
    }

    callFuncions() {
        const sloganText = document.querySelector('.slogan__text')
        sloganText.textContent = this.originalText
        this.selectedWord = this.sloganArr[this.currentIndex]
        
        if(!this.isDelating) {
            this.typing()
        } else {
            this.deleting()
        }

        let timeout = setTimeout(() => this.callFuncions(), this.timeout); 
        if(this.clickOn) {
            clearTimeout(timeout)
            console.log('Click to pause');
        }
    }

    typing () {
        this.timeout = this.timeTyping
        if(this.originalText === this.selectedWord) {
            this.isDelating = true
            this.sloganLine.classList.add('slogan__line--blink')
            this.timeout = this.timePause
            
        } else {
            this.indexLetter++
        }
        
        // console.log(this.indexLetter);
        this.originalText = this.selectedWord.substring(0, this.indexLetter)
        
    }
    
    deleting() {
        this.timeout = this.timeDelating
        this.indexLetter--
        // Quitar animación
        this.sloganLine.classList.remove('slogan__line--blink')
        // Si cuando está borrando es igual a '' y el cursor a llegado al final del array significa que su cursor debe ser 0 y ejecutar la función de escribir otra vez
        if(this.currentIndex === this.sloganArr.length - 1 && this.originalText === '') {
            this.currentIndex = 0
            this.isDelating = false
            return
        }
        
        // Si el texto está vacio y su estado está en borrar. El tiempo de duración se acorta y lo saca de esta función
        if(this.originalText === '' && this.isDelating) {
            this.isDelating = false
            this.currentIndex++
        }
       
        this.originalText = this.selectedWord.substring(0, this.indexLetter)
        const sloganText = document.querySelector('.slogan__text')
        sloganText.textContent = this.originalText
    }

    setArrChanged (sloganArr) {
        this.sloganArr = sloganArr
    }
}

function debounce (fn, delay=400) {
    let timeoutId;
    console.log('as');

    if(timeout) {
        clearTimeout(timeoutId)
    }
    return function(...args) {
        timeoutId = setTimeout(function() {
            fn(...args)
        }, 800);
    }
}

export default TypeWritter