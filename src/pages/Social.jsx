import React from 'react';



function Social() {
  return (
<div class="col-lg-10">
<div class="container">
    <div class="bubbleWrapper">
        <div class="inlineContainer">
           <img src="img/pessoa1.jpg" alt="Icone/Foto"class="rounded-circle" width="50px" height="50px"></img>
            <div class="otherBubble other">
               mensagem mensagem mensagem
            </div>
        </div><span class="other">08:41</span>
    </div>
    <div class="bubbleWrapper">
        <div class="inlineContainer own">
            <img src="img/pessoa2.jpg" alt="Icone/Foto" class="rounded-circle" width="70px"height="50px"></img>
            <div class="ownBubble own">
             mensagem mensagem mensagem
            </div>
        </div><span class="own">08:55</span>
    </div>
    <div class="bubbleWrapper">
        <div class="inlineContainer">
           <img src="img/pessoa1.jpg" alt="Icone/Foto"class="rounded-circle" width="70px" height="50px"></img>
            <div class="otherBubble other">
             mensagem mensagem mensagem
            </div>
        </div>
    </div><span class="other">10:13</span>
    <div class="bubbleWrapper">
        <div class="inlineContainer own">
           <img src="img/pessoa2.jpg" alt="Icone/Foto"class="rounded-circle" width="70px" height="50px"></img>
            <div class="ownBubble own">
             mensagem mensagem mensagem
           
            </div>
        </div><span class="own">11:07</span>
    </div>
    <div class="bubbleWrapper">
        <div class="inlineContainer">
           <img src="img/pessoa1.jpg"  alt="Iconea/Foto" class="rounded-circle" width="70px" height="50px"></img>
            <div class="otherBubble other">
             mensagem mensagem mensagem
                
            </div>
        </div><span class="other">11:11</span>
        <br></br>
    </div>
</div>
<div class="col-lg-12">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Enviar mensagem"></input>
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Enviar</button>
      </span>
    </div>
  </div>
</div>
);
}

export default Social;
