const mainStoryDiv = document.querySelector("#hikaye-metni");
let wordFunc = null;
let initWords = null;

function satirlaraAyir(metin) {
  const satirlar = [];
  let satir = '';
  for (let i = 0; i < metin.length; i++) {
    if (satir.length === 100) {
      satirlar.push(satir);
      satir = '';
    }
    satir += metin[i];
  }
  satirlar.push(satir);
  return satirlar;
}



fetch("hikaye.json").then(response => response.json())
  .then(data => {

    let pEtiketleri = '';
    let _kelimeler = '';
    let kelimeler = '';
    let startTime = 0;
    let endTime = 0;
    var result = Object.keys(data).map((key) => [Number(key), data[key]]);


    let hikayeMetni = result[0][1].bolum + '<br>' + result[0][1].turkce;

    _kelimeler = hikayeMetni.split(" ");

    

    for (let i = 0; i < _kelimeler.length; i++) {

      kelimeler += `<span class="storyContent" id="p${i}" onclick=translations(p${i})> ${_kelimeler[i]} </span>`;
      mainStoryDiv.innerHTML = kelimeler;

      
    }


    let storyWords = document.querySelectorAll(".storyContent");
    console.log(typeof (_kelimeler));
        console.log("kelimeleeeer", _kelimeler);


      
    const wordProcess = (words) => {

       
        let index = 0;
        
        let intervalId = setInterval(function () {
          
          words[index].style.backgroundColor = "yellow";
          index++;
          if (index === words.length) {
            clearInterval(intervalId);
          }

          document.getElementById("stop-button").addEventListener("click", function () {

            audio.pause();
            clearInterval(intervalId);
          });
        }, 640);

  }

  var duration;
  let sure;
  document.getElementById("play-button").addEventListener("click", () => {
    playAudio();
     duration = audio.duration;
      sure=(((duration*1000)/_kelimeler.length));
     console.log("www",parseFloat(sure));
  });



    // synth.speak(utterance);
    const playAudio = () => {
      audio.play();
      audio
      wordProcess(storyWords);
    }
 
  }).catch(error => console.error(error));

  audio.addEventListener('canplaythrough', function() {
    const duration = audioElement.duration * 1000;
    const wordStart = 1000; // kelimenin başlangıç zamanı
    const wordEnd = 1500; // kelimenin bitiş zamanı
  
    const wordDuration = wordEnd - wordStart;
    console.log("Kelimenin süresi: " + wordDuration + " ms");
  });
const _translations = [
  "basin",
  "side'",
  "eagle’s nest",

];

const audio = document.getElementById("audio");
let currentSentence = 0;
let intervalId;

function translations(id){

  alert(_translations[0])


}

/*  document.getElementById("p22").addEventListener("click", function() {
  this.innerHTML = translations[0];

}); */
/*
document.getElementById("p2").addEventListener("click", function() {
  this.innerHTML = translations[1];
});

document.getElementById("p3").addEventListener("click", function() {
  this.innerHTML = translations[2];
});

document.getElementById("p4").addEventListener("click", function() {
  this.innerHTML = translations[3];
});

document.getElementById("p5").addEventListener("click", function() {
  this.innerHTML = translations[4];
});
 */
