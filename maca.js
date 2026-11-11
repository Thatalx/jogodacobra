class Maca extends ObjetoJogo {
   imagem = new Image();
   constructor(){
        super(30);
        this.imagem.src='maca.png';
   }
   desenhar(){
        canvasCtx.drawImage(this.imagem,this.x,this.y
            ,this.tamanho,this.tamanho)
   }       
}