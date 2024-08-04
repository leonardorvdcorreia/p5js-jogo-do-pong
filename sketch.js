function preload(){
    //trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
    
  }
  
  
  function setup() {
    createCanvas(600 ,400);
    //trilha.loop();
  }
  
  
  
  //variaveis do som do jogo
  let raquetada;
  let ponto; 
  let trilha; 
  
  
  //variaveis da bolinha  
  let xBolinha = 300;
  let yBolinha = 200;
  let diametro = 17;
  let raio = diametro /2;
  
  //velocidade da bolinha
  let velocidadeXBolinha = 6;    
  let velocidadeYBolinha = 6;      
  
  
  //variaveis da raquete
  let xRaquete = 10;
  let yRaquete = 150;
  let raqueteComprimento = 10;
  let raqueteAltura = 90;
  
  //variaveis da raquete do oponente
  let xRaqueteOponente = 580 ;
  let yRaqueteOponente = 150 ;
  let velocidadeYOponente;
  
  
  
  // varivel dos pontos
  let meusPontos = 0;
  let pontosDoOponente = 0;
  
  
  //variavel da biblioteca
  let colidiu = false; 
  
  
  function draw() {
    background(0);
    //bolinha
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    //raquete
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente)
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();
    //placar
    incluiPlacar();
    marcaPonto();
    bolinhaNaoFicaPresa();
    
    
    //biblioteca
    colisaoRaqueteBiblioteca(xRaquete, yRaquete);
    colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
    
  }
  
  
  //funcoes da bolinha
  
   function mostraBolinha(){
     circle(xBolinha, yBolinha, diametro);  
   }
  
   function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
   }
   
   function verificaColisaoBorda(){
     if (xBolinha + raio > width || xBolinha - raio< 0){
      velocidadeXBolinha *= -1; 
     }
    
    if (yBolinha + raio > height || yBolinha - raio< 0){
      velocidadeYBolinha *= -1; 
    }
   }
  
  
  //funções da raquete
  
   function mostraRaquete(x, y){
     rect(x, y, raqueteComprimento, raqueteAltura)
   }
  
   function movimentaMinhaRaquete() {
     if (keyIsDown(UP_ARROW)){
       yRaquete -= 10 
     }
     if (keyIsDown(DOWN_ARROW)){
       yRaquete += 10
     }
   }
   
   function movimentaRaqueteOponente(){
       if (keyIsDown(87)){
       yRaqueteOponente -= 10
       }
     if (keyIsDown(83)){
       yRaqueteOponente += 10
     }
    
   }
   
   
  //função da biblioteca
  
  function colisaoRaqueteBiblioteca(x, y){
     colidiu =
     collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)
     if (colidiu){
       velocidadeXBolinha *= -1 
     raquetada.play(); 
     }
    
    }
  
  
  //função do placar
   function incluiPlacar(){
     textAlign (CENTER);
     textSize (15);
     fill (255)
     text (meusPontos, 270, 30);
     text (pontosDoOponente, 320, 30);
   }
   
   function marcaPonto(){
     if (xBolinha > 590){
       meusPontos += 1;
       ponto.play();
       alert("voce fez ponto");
     }
     if (xBolinha < 10){
       pontosDoOponente += 1;
       ponto.play();
       alert("oponente fez ponto");
     }
    } 
  
  function bolinhaNaoFicaPresa(){
      if (xBolinha - raio < 0){
      xBolinha = 23
      }
  }
  