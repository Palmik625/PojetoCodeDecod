var btn = document.querySelector("#codificar");
var btndecod = document.querySelector("#decodificar");
var selector = document.querySelector('#codificador');
var cod = document.querySelector('#btncod');
var decod = document.querySelector('#btndecod');



cod.addEventListener( 'change', () =>{
    
    btn.classList.remove("invisível")
    btndecod.classList.add("semuso")

    
})


decod.addEventListener( 'change', () =>{
    
    btndecod.classList.remove("semuso")
    btn.classList.add("invisível")
    console.log(selector.value)
})


btn.addEventListener( 'click', () =>{
    if(selector.value === "cifradecesar"){
        //escolhas    
        cifraeDeCesarCod()   
    }
    else
    {
        
        base64Encriptar()
    }
    
})

btndecod.addEventListener( 'click', () =>{
    console.log(selector.value)

    if(selector.value === "cifradecesar"){
        //escolhas            
        cifraeDeCesarDecod()
    }
    else{
        base64Desincriptar()
    }
    
    
    var  escolhas = selector.addEventListener( 'change', ()=>{
        var vlrDeslocamento = document.querySelector("#deslo")
        var insira = document.querySelector("#insira")
        
        if(selector.value === "cifradecesar"){
            
            vlrDeslocamento.classList.remove("des");
            insira.classList.remove("dsl");
            
        }
        else
        {   
            vlrDeslocamento.classList.add("des");
            insira.classList.add('dsl')
        }
    })
    
    function cifraeDeCesarCod(){
        var elementoRecebido = document.querySelector("#elemento").value;
        
        var dsl = document.querySelector("#deslo").value;
        var deslocamento = parseInt(dsl);
        
        var y = [];
        var z = [];
        var msncod = "";
        
        
        for(var i = 0; i < elementoRecebido.length; i++){
            z.push(elementoRecebido.charCodeAt(i));
            y.push(z[i] + deslocamento) 
            
        }
    }
    
    for(var j = 0; j <= y.length;j++){
        msncod += String.fromCharCode(y[j])  
        
        var btn = document.querySelector("#codificar");
        var btndecod = document.querySelector("#decodificar");
        var selector = document.querySelector('#codificador');
        var cod = document.querySelector('#btncod');
        var decod = document.querySelector('#btndecod');
        
        cod.addEventListener( 'change', () =>{
            
            btn.classList.remove("invisível")
            btndecod.classList.add("semuso")
        })
        
        decod.addEventListener( 'change', () =>{
            
            btndecod.classList.remove("semuso")
            btn.classList.add("invisível")
        })
        
        
        btn.addEventListener( 'click', () =>{
            if(selector.value === "cifradecesar"){
                //escolhas    
                cifraeDeCesarCod()   
            }
            else
            {
                
                base64Encriptar()
            }
            
        })
        
        btndecod.addEventListener( 'click', () =>{
            if(selector.value === "cifradecesar"){
                //escolhas            
                cifraeDeCesarDecod()
            }
            else{
                base64Desincriptar()
            }
        }
        )
        
        var escolhas = selector.addEventListener( 'change', ()=>{
            var vlrDeslocamento = document.querySelector("#deslo")
            var insira = document.querySelector("#insira")
            
            if(selector.value === "cifradecesar"){
                
                vlrDeslocamento.classList.remove("des");
                insira.classList.remove("dsl");
                
            }
            else
            {   
                vlrDeslocamento.classList.add("des");
                insira.classList.add('dsl')
            }
        })
        
        function cifraeDeCesarCod(){
            var elementoRecebido = document.querySelector("#elemento").value;
            
            var dsl = document.querySelector("#deslo").value;
            var deslocamento = parseInt(dsl);
            
            var y = [];
            var z = [];
            var msncod = "";
            
            
            for(var i = 0; i < elementoRecebido.length; i++){
                z.push(elementoRecebido.charCodeAt(i));
                y.push(z[i] + deslocamento)  ;
            }
            
            for(var j = 0; j <= y.length;j++){
                msncod += String.fromCharCode(y[j])  
                
            }
            console.log(y)
            
            var resultado = document.querySelector("#resultado").innerHTML = msncod;
        }
        
        function cifraeDeCesarDecod(){
            var recebido = document.querySelector("#elemento").value;
            var desloc = document.querySelector("#deslo").value;
            var soma = parseInt(desloc);
            console.log(recebido)
            
            var codeDocodigo = [];
            var code = [];
            var mensagemCodif = "";
            
            
            for(var i = 0; i < recebido.length; i++){
                code.push(recebido.charCodeAt(i));
                
                codeDocodigo.push(code[i] - soma)  ;
            }
            
            for(var j = 0; j <= codeDocodigo.length;j++){
                mensagemCodif += String.fromCharCode(codeDocodigo[j])  
                
            }
            
            var resposta = document.querySelector("resposta").innerHTML = mensagemCodif;
            
        }
    }
})
        function base64Encriptar(){
            var elementoRecebido = document.querySelector("#elemento").value;
            var codificada = btoa(elementoRecebido);
            var resultado = document.querySelector("#resultado").innerHTML = codificada;
        }
        
        function base64Desincriptar(){
            var resultadoRecebido = document.querySelector("#elemento").value;
            var cod = atob(resultadoRecebido)
            var resultado = document.querySelector("resultado").innerHTML = cod;
            
        }
    
