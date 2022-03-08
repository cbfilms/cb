// AUTO LOGIN

let x = localStorage.getItem("signedIn"); 
if (x == "true") {
  window.location.replace("home.html");
}

// LOGIN FEATURES

var modal = document.getElementById("modal");

function modalOpen() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var sin = document.getElementById("signin");
var sup = document.getElementById("signup");
var suped = document.getElementById("signedup");

function sinGoAway() {
    sin.style.display = "none";
    sup.style.display = "block";
    suped.style.display = "none";
};
function supGoAway() {
    sin.style.display = "block";
    sup.style.display = "none";
    suped.style.display = "none";
};

async function submit() {
  var username = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var information = "username=" + username + "&email=" + email;
  console.log(username, email);

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    console.log("sent")
  }
  xhttp.open("GET", "js/append.js");
  xhttp.send();

  suped.style.display = "block";
  sup.style.display = "none";
  sin.style.display = "none";
};

function signin() {
  localStorage.setItem("signedIn", "true");
};

// BOX

const names = {
  anAccidentalTripToTheMoon:"An Accidental Trip to the Moon",
  mobyDick:"Moby Dick",
  oscarMicheaux:"Oscar Micheaux",
  theCaseOfTheErase:"The Case of the Erase",
  theDevilsCastle:"The Devil's Castle",
  theDream:"The Dream",
  theEye:"The Eye",
  theNightBeforeChristmas:"The Night Before Christmas",
  theSky:"The Sky",
  theTudors:"The Tudors",
  theWalk:"The Walk"
};
const synopsis = {
  anAccidentalTripToTheMoon:"Professor Verne makes an accidental trip to the moon, only just escaping capture by sinister aliens...",
  mobyDick:"An animated take on Herman Melville's tale of madness and obsession as Captain Ahab seeks vengance on the white whale, Moby Dick...",
  oscarMicheaux:"This short but consise documentary takes you through the life and career of the first major African American film director, Oscar Micheaux.",
  theCaseOfTheErase:"A man appears to have been kidnapped; however, things are not as they seem... A short animation inspired by Fritz Lang's 1928 film <i>Spione</i>.",
  theDevilsCastle:"An animated remake of the first horror film: George M&eacute;l&egrave;ies's comedic 1896 tale of two medieval lords who are haunted by the devil...",
  theDream:"A sisnister animation in the style of the classic German Expressionist films like <i>The Cabinet of Dr Caligari</i> and <i>M</i>.",
  theEye:"This haunting black-and-white animation focuses on what is perhaps on of the most important parts of film: the eye.",
  theNightBeforeChristmas:"This nostalgic animation by Hanmer Hanbury loosely follows the narrative of Clement Clarke Moore's 1837 poem, The Night Before Christmas.",
  theSky:"A compact animation featuring motifs from throught the history of film with the sky as the overall theme.",
  theTudors:"Birdie Hanbury's wonderful documentary explains every aspect of life in the Tudor era from politics to art and culture.",
  theWalk:"A very short expressive sequence with a plot twist. With an excellence performance by Tommy Locke and a haunting soundtrack by Shostakovic."
};
var i
const filmBox = document.getElementsByClassName("box");
for (i=0; i < filmBox.length; i++) {
  var filmBoxInfo = filmBox[i].innerHTML;
  var filmName = names[filmBoxInfo];
  var filmSynopsis = synopsis[filmBoxInfo];
  var box = `
      <a onclick="modalOpen()">
        <div class="hold" style="cursor: pointer">
            <img class="smallimg" src="images/`+ filmName + `.jpg"><h6>`+ filmName + `</h6></img>
            <div class="synopsis">
                <div class="playIcon"><i class="fa fa-play"></i></div>
                <div class="title">
                    <h4>`+ filmName + `</h4>
                    <p>`+ filmSynopsis + `</p>
                </div>
            </div>
        </div>
      </a>
  `;
  filmBox[i].innerHTML = box;
};
