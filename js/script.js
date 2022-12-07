//1- Creare bottone in html che al click genererà una griglia di gioco
//2- Creare la griglia di gioco in js
//2.1 ogni ha un numero progressivo, da 1 a 100, quindi 10 caselle per ognuna delle 10 righe
//2.2 al click di una delle caselle si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
let button = document.getElementById('btn');
button.addEventListener('click', function(){
    let difficult = document.getElementById('stage').value;
    if(difficult === 'hard'){
        function createSquare(num){

            let elementSquare = document.createElement('div');
    
            elementSquare.classList.add('square-hard');
    
            elementSquare.innerText = num;
    
            return elementSquare;
        }
        
        let grid = document.getElementById('grid');

        document.getElementById('grid').innerHTML="";

        for(let i=0; i<100; i++){
            const newElement = createSquare(i +1);
            
            grid.appendChild(newElement);
            
            newElement.addEventListener('click', function(){
                this.classList.toggle('click')
                console.log(i + 1)
            });
        }
    }
    else if(difficult === 'medium'){
        function createSquare(num){
            let elementSquare = document.createElement('div');
    
            elementSquare.classList.add('square-medium');
    
            elementSquare.innerText = num;
    
            return elementSquare;
        }
        
        let grid = document.getElementById('grid');

        document.getElementById('grid').innerHTML="";
        
        for(let i=0; i<81; i++){
            const newElement = createSquare(i +1);
            
            grid.appendChild(newElement);
            
            newElement.addEventListener('click', function(){
                this.classList.toggle('click')
                console.log(i + 1)
            });
        }    
    }
    else{
        function createSquare(num){
            let elementSquare = document.createElement('div');
    
            elementSquare.classList.add('square-easy');
    
            elementSquare.innerText = num;
    
            return elementSquare;
        }
        
        let grid = document.getElementById('grid');

        document.getElementById('grid').innerHTML="";
        
        for(let i=0; i<49; i++){
            const newElement = createSquare(i +1);
            
            grid.appendChild(newElement);
            
            newElement.addEventListener('click', function(){
                this.classList.toggle('click')
                console.log(i + 1)
            });
        }    
    }
});