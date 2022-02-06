const select = document.getElementById("select-option")

changeText = () => {
        const paragraphValue = document.getElementById('paragraph-value')
        //const segundoVersiculo = document.getElementById('segundo-versiculo')
        

        if(select.value === 'Como lidar com a Ansiedade?'){
            paragraphValue.innerHTML = 
            "<strong>Isaías 41:10</strong> - Não tenha medo, pois estou com você. Não fique ansioso, pois eu sou o seu Deus. Vou fortalecê-lo, sim, vou ajudá-lo. Vou segurá-lo firmemente com a minha mão direita de justiça."
        }
        if(select.value === 'Que esperança há para os mortos?'){
            paragraphValue.innerHTML = "<strong>Atos 24:15</strong> - Haverá uma ressureição tanto de justos como de injustos."

        }
        if(select.value === 'O que a Bíblia promete para o Futuro?'){
            paragraphValue.innerHTML = "<strong>Apocalipse 21:4</strong> - Ele enxugará dos seus olhos toda lágrima, e não haverá mais tristeza, nem choro, nem dor. As coisas anteriores já passaram."
        }
        if(select.value === 'Como encontrar felicidade?'){
            paragraphValue.innerHTML = "<strong>Lucas 11:28</strong> - Felizes os que ouvem a palavra de Deus e a põem em prática!"
        }
            
         
 
    
    }
select.addEventListener('change', changeText)

