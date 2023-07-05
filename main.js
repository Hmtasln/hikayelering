/* for(let i=1; i<20; i++){
    console.log(i);
     document.getElementById('en'+i).style.display='none';
  } */
    
  function dsblock(id){
       
      document.getElementById(id).style.display='block';

  }

/* document.querySelectorAll(".success").style.display='none';
document.querySelectorAll(".warning").style.display='none'; */
function cevaplar(e,_input,soru,success,warning,cid){

    if(e.length>0){
        for(let i=1; i<40; i++){
            if(cid==i){
            var c= document.getElementById(cid).innerText;
        }
        console.log(c);
       e=e.trim();
       
     
       if(e==c){

        document.getElementById(_input).style.background='#7ee176';
        document.getElementById( warning).style.display='none';
        document.getElementById( success).style.display='inline-block';
       break;
               
       }else if(e!=c){
      
        document.getElementById(_input).style.background='red';
        document.getElementById( success).style.display='none';
        document.getElementById( warning).style.display='inline-block';
       }
    }
  
    }

}

/* function eslestirme(tr,en){

    let arrayy=["tr1"]

      



}
 */