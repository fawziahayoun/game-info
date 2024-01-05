const words ={ 
    player : ["bouhklal","nibet","mitouali","benchrifa","khanos","ziyach","maradona","ronaldo"
    ,"isco","etoo"
    ,"ronaldinho","johan","pele","bidodan","alodi","mbarki","somah" ,"kadoui","ozil","kaka",
     "mahmod","hadji", "salhi","dibala","kharja","nor","hadraf","manqari","taarabt","benatia",
     "mahrz","aboutrika","chamakh","haland","hamdallah","ennesyri","hilali","zniti","bono"],
    club : ["sale","tituan","mas","roma","liverpool","taraji","mazenbi","simba","shalka","napoli","feenerbahche","bazel", "bichaktack","foirentina", "osasona", "khouribga"
    , "olympiacos", "ittihad","boca","amrica","zamalik","toutnham","sivila","ajax","celtic",],
    country :["portogul","brazil","argentina","egypt","nejiria","ingland","norway",
    "palestine","cameron","urguay","ethiopia","sodan","north korea"
    ,"soth africa","germany","ghana","italy","kwait","angola","romania","bahamas","lebanon"],
    countries :["iceland","ksa","germany","spain","canada","italy","norway","morocco","palestine"
    ,"switzesland","singapora","france","swisra","usa","china","morocco","ingland","germany",
    "uae","polska","morocco"],
    english :["cat","car","zibra","beer","tiger","wolf","cow","plain","rocket","referee","goal",
    "toothbrush",
"stor","city","gun","dear","bee","earth","tree","flower","eagle","stadium","panda","tv","cup","water","street","books","door"],
    
  };
  

  imagesPlayers = ["1bou.jpg","nibet.jpg","mitouali.jpg","benchrifa.jpg","khanos.jpg","ziyach.jpg",
  "maradona.jpeg","cronaldo.jpg"
  ,"isco.jpg","eto.jpg","aron.jpg","1j.jpg","1p.jpg","abid.jpg","alo.jpg","mba.jpg","som.jpg","kad.jpg","ozi.jpg","kak.jpg","mah.jpg",
  "ahaj.jpg","sal.jpg", "dib.jpg","kha.jpg", "nor.jpg","1hadraf.jpg","1manqari.jpg","1taarabt.jpg",
  "1benatia.jpg","1mahrez.jpg","66a.jpg","77aa.jpg","44a.jpg","9a.jpg ","88n.jpg","0bak.jpg"
  ,"1zni.jpg","1bon.jpg",];
  imageclubs = ["1ass.jpg","1mat.jpg","1mas.jpg","romaa.jpg","liv.png","taraji.jpg","mazinbi.jpg",
  "simbaa.jpg","acha.jpg","anap.jpg","1fee.jpg","baz.jpg","bic.jpg","voi.jpg","osa.jpg","1ock.jpg","ola.jpg","iti.jpg"
  ,"boc.png","amrica.png","zamalik.png","1bb.jpg","1sivia.jpg","0ajax.png","0celtic.png"];
  imageCountry = ["apor.jpg","bra.png","arg.png","egy.png","neg.png","ing.png","a.nar.jpg","pal.jpg","cam.png","urg.png","ith.jpg","sod.jpg","kor.jpg","sot.jpg",
  "gir.png","gha.png","ita.png","kwi.jpg","1angola.png","1aaa.png","1bahamas.png","8lob.jpg"];
  imagePlace = ["1isl.jpg","1ksa.jpg","1ger.jpg","1bar.jpg","canada.jpg","jmhor.jpg","norway.jpg",
  "adon.jpg","aqod.jpg","swi.jpg","a.san.jpg","par.jpg","swi.jpg","usa.jpg","chi.jpg","cha.jpg",
  "lon.jpg","ger.jpg","dob.jpg","pol.jpg","11casa.jpg",];
  imagesEnglish  = ["1cat.jpg","1car.jpg","1zibra.jpg","1beer.jpg","1tig.jpg","1wolf.jpg",
  "1cow.jpeg","1pl.jpg","1rockiet.jpeg","1hakam.jpeg","1gol.jpg","1touthbrach.jpeg",
  "1stor.jpeg","1city.jpg","11g.jpg","8dearr.jpeg","8bee.jpeg","8earth.jpg"
  ,"8tree.jpg","8flor.jpg","8egl.jpg","8stud.jpg","1panda.jpg","1tv.jpg","1cup.jpg","1wat.jpg","1rod.png","1bok.jpg","1dor.jpg"];
 
  const allLatters = "abcdefjklmnopqhgrtifsvuwxzy";
    
   let lettersGuess = document.querySelector(".letters-guess");
  let category = document.querySelector(".category span");
  let but = document.querySelector(".but");
  let landing = document.querySelector(".tv");

 let setIntervall;

 let allkeys = Object.keys(words);
 let randomPropNumber = Math.floor(Math.random() * allkeys.length); //index
 let randompropName = allkeys[randomPropNumber]; //key
 let randompropValue = words[randompropName]; //value
 let randomValuenumber = Math.floor(Math.random() * randompropValue.length);
 let randomValueValue = randompropValue[randomValuenumber];
 let choosenWords = Array.from(randomValueValue.toLowerCase());

 let = right = 0;
 let = answer = 0;
 let = gameFinished = 20;

document.addEventListener("click", function (e) {
    let clickedlatter = e.target.innerHTML.toLowerCase();
    if(e.target.className === 'letter-box'){
    e.target.classList.add("ckliked");
  var  shoosen = choosenWords.length;
    choosenWords.forEach((latervalue, latterIndex) => {
        if(clickedlatter == latervalue){
    document.querySelectorAll(".letters-guess span").forEach((spans, spansIndex) => {
                if(latterIndex === spansIndex ){
                    right ++;
            spans.innerHTML = clickedlatter;
                    if(right == shoosen){
                        answer ++;
                        document.getElementById('gool').play();
                        localStorage.setItem("sccored" , answer);
                let score =   document.querySelector(".game-your .goal").textContent = answer;
                if(score == 10){
                    document.querySelector(".commm span").textContent = "Equal";
                }
                else if (score > 10){
                    document.querySelector(".commm span").textContent = " you win  ";
                }
                     }
                       
                  } 
              }) ;
           } 
           
      } );
    }
   });
   
 function manegment(){
    let lattersarray = Array.from(allLatters);
    let latters = document.querySelector(".letters");
    lattersarray.forEach((latter) => {
    let laterSpan =    document.createElement('span');
     let textSpan =  document.createTextNode(latter);
     laterSpan.appendChild(textSpan);
     laterSpan.className = 'letter-box';
     latters.appendChild(laterSpan);
     }); 
      document.querySelector(".result span").innerHTML = `${gameFinished} question left `
     if(gameFinished === 0){
        document.querySelector(".result").style.opacity = 0;
        document.querySelector(".commm").style.opacity = 1;
        but.remove();
        countdown().remove()
     }
      allkeys = Object.keys(words);
      randomPropNumber = Math.floor(Math.random() * allkeys.length); //index
     randompropName = allkeys[randomPropNumber]; //key
     randompropValue = words[randompropName]; //value
     randomValuenumber = Math.floor(Math.random() * randompropValue.length);
     randomValueValue = randompropValue[randomValuenumber];
     choosenWords = Array.from(randomValueValue.toLowerCase());
    category.innerHTML = randompropName;
    countdown(13);
    setPhoto (randompropName, randomValuenumber);
    latterGuess(randomValueValue);

but.onclick = () => {
    document.body.classList.add("kk");

  countdown(13);
 category.innerHTML= '';
lettersGuess.innerHTML= '';
landing.style.backgroundImage ='';
right= '';
latters.innerHTML = '';
gameFinished --;

clearInterval(setIntervall)
manegment();
setPhoto ();
latterGuess();
}
};
manegment();
   function setPhoto (randomGameName, randomGameIndex){
    if(randomGameName == "player"  ){
        landing.style.backgroundImage = 'url("images/'+ imagesPlayers[randomGameIndex] +'")'
    }
    if(randomGameName == "club"  ){
        landing.style.backgroundImage = 'url("images/'+ imageclubs[randomGameIndex] +'")'
    }
    if(randomGameName == "country"  ){
        landing.style.backgroundImage = 'url("images/'+ imageCountry[randomGameIndex] +'")'
    }
    if(randomGameName == "countries"  ){
        landing.style.backgroundImage = 'url("images/'+ imagePlace[randomGameIndex] +'")'
    }
    if(randomGameName == "english"  ){
        landing.style.backgroundImage = 'url("images/'+ imagesEnglish [randomGameIndex] +'")'
    }
   };
   startButton = document.querySelector(".game-over .butt").onclick = function (){
    let yourname = prompt("what's your name");
    if(yourname== null || yourname == ''){
        document.querySelector(".game-gaol .name ").innerHTML= 'unknown';
    }else{
       player = document.querySelector(".game-gaol .name").innerHTML = yourname;
    };
    document.querySelector(".game-over").remove();
    document.getElementById('muc').play();
    document.querySelector(".result").style.opacity = 1;
    localStorage.setItem("player",yourname );
 
 }
     
    function countdown(duiretion )  {
        if(document.body.classList.contains("kk")){
            setIntervall = setInterval(() => {
                muniets = parseInt(duiretion /  60);
                seconds = parseInt (duiretion % 60);
                seconds = seconds < 10 ? `0${seconds}` : seconds;
                but.innerHTML = `${muniets}: ${seconds}`
                if(--duiretion < 0  ){
                    clearInterval(setIntervall);
                    but.onclick();
                }
            }, 1000);

        }
  

    };
 function latterGuess(wordsGuess) {
    let ArrayValue = Array.from(wordsGuess);
    ArrayValue.forEach(value => {
        let span =  document.createElement('span');
        if (value === ' '){
            span.className = "with-space";
        }
        lettersGuess.appendChild(span);
     }); 
    };