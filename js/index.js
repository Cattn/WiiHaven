var y = document.getElementById("safety");
y.currentTime = 1;
let backImage = "";
let shortName = "";
let link = ""
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function startup() {
  setTimeout(function() {
    var e = document.getElementById("safety");
    e.style.transition = '.7s';
    e.style.opacity = '0';
    e.style.visibility = 'hidden';
  }, 0);
  PlayHomeSound("homeMusic");
  

  // HARD CODDED TILES (If you add here, please be concious of users Saved tiles, and be sure to incriment #s in the tile-manager so there is not issues)
  // Since at the moment the ability to add games is not added, I hard coded the examples below as a proof of concept.
  //The user should be able to add their own games via Steam, GOG, EGS, Itch, etc, and they should be able to add their own images, sounds, etc per game.
  let box1Prev = "assets/sa2_hero.webp";
  localStorage.setItem("box1-preview", box1Prev);
  let box2Prev = "assets/p3reload_hero.webp";
  localStorage.setItem("box2-preview", box2Prev);
  let box3Prev = "assets/amongus.png";
  localStorage.setItem("box3-preview", box3Prev);
  let box4Prev = "assets/smbwii.jpg";
  localStorage.setItem("box4-preview", box4Prev);
  let box5Prev = "assets/pizzatower.png";
  localStorage.setItem("box5-preview", box5Prev);
  let box6Prev = "assets/votv.jpg";
  localStorage.setItem("box6-preview", box6Prev);
  let box7Prev = "assets/sonicfrontiers.webp";
  localStorage.setItem("box7-preview", box7Prev);
  let box8Prev = "assets/soniccolors.webp";
  localStorage.setItem("box8-preview", box8Prev);
  let box9Prev = "assets/totk.png";
  localStorage.setItem("box9-preview", box9Prev);
  let box10Prev = "assets/terraria.png";
  localStorage.setItem("box10-preview", box10Prev);
  let box11Prev = "assets/ttyd.webp";
  localStorage.setItem("box11-preview", box11Prev);
  let box12Prev = "assets/platinum.webp";
  localStorage.setItem("box12-preview", box12Prev);

  let box1Img = "assets/sa2.png";
  localStorage.setItem("box1-image", box1Img);
  let box2Img = "assets/p3reload_hero.webp";
  localStorage.setItem("box2-image", box2Img);
  let box3Img = "assets/amongus.png";
  localStorage.setItem("box3-image", box3Img);
  let box4Img = "assets/smbwii.jpg";
  localStorage.setItem("box4-image", box4Img);

  let box1Link = "New_Super_Mario_Bros._(USA)";
  localStorage.setItem("box1-link", box1Link);
  let box2Link = "New_Super_Mario_Bros._(USA)";
  localStorage.setItem("box2-link", box2Link);
  let box3Link = "New_Super_Mario_Bros._(USA)";
  localStorage.setItem("box3-link", box3Link);
  let box4Link = "New_Super_Mario_Bros._(USA)";
  localStorage.setItem("box4-link", box4Link);

  let box1LinkType = "emu";
  localStorage.setItem("box1-linkType", box1LinkType);
  let box2LinkType = "emu";
  localStorage.setItem("box2-linkType", box2LinkType);
  let box3LinkType = "emu";
  localStorage.setItem("box3-linkType", box3LinkType);
  let box4LinkType = "emu";
  localStorage.setItem("box4-linkType", box4LinkType);


  for (var i = 1; i <= 24; i++) {
    var boxPreview = localStorage.getItem("box" + i + "-preview");
    var tile = document.getElementById("tile" + i);
    console.log(boxPreview);
    tile.style.backgroundImage = "url(" + boxPreview + ")";
    if (boxPreview === null || boxPreview === undefined) {
      tile.style.backgroundImage = "url('assets/empty.gif')";
    }
  }

  window.scrollTo(0, 0);
}

document.querySelector("#safety").addEventListener("click", () => {
  startup();
});
document.addEventListener("keypress", function (event) {
  startup();
});

function PlaySound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.volume = 0.2;
  thissound.play();
}

function PlayHomeSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.volume = 0.5;
  thissound.play();
}

function StopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}

function addClasses(id) {
  let qid = "#" + id;
}

window.onload = function() {
  let empties = document.getElementsByClassName("empty-tile");
  for (var i=0; i<empties.length; i++) {
    empties[i].setAttribute("onmouseover", "PlaySound('mySound');")
    empties[i].setAttribute("onmouseleave", "StopSound('mySound');")
    empties[i].setAttribute("onclick", "PlaySound('clickSound');")
  }
}


document.querySelectorAll('.empty-tile').forEach(function(el){
  el.addEventListener('click', function() {

    openAnimation(this);

    var id = parseInt(el.dataset.id);
    var boxLink = localStorage.getItem("box" + id + "-link");
    var boxImage = localStorage.getItem("box" + id + "-image");
    var boxCore = localStorage.getItem("box" + id + "-core");
    var boxLinkType = localStorage.getItem("box" + id + "-linkType");
    var romLocation = localStorage.getItem("box" + id + "-rom");
    console.log("Box Link: " + boxLink + " Box Image: " + boxImage + " Box Core: " + boxCore + " Box Link Type: " + boxLinkType + " Rom Location: " + romLocation);

    if (boxLink == null) {
      document.querySelector("#StartText").href = "404.html";
    } else if (boxLinkType == "ext") {
      document.querySelector("#StartText").href = boxLink;
    } else if (boxLinkType == "emu") {
      document.querySelector("#StartText").href = 'launchpad.html';
    } else {
      document.querySelector("#StartText").href = boxLink;
    }

    
    if (boxCore == null) {
      coreName = 'nds'
      localStorage.setItem("coreName", coreName);
      console.log(coreName);
    } else if (boxLinkType == "emu") { 
      coreName = boxCore
      localStorage.setItem("coreName", coreName);
      console.log(coreName);
    } else {
      coreName = 'nds'
      localStorage.setItem("coreName", coreName);
      console.log(coreName);
    }
    if (boxImage == null) {
      document.querySelector("#tile-content").style.backgroundImage = "url('assets/nsmbds.jpg')";
    } else {
      document.querySelector("#tile-content").style.backgroundImage = "url('" + boxImage + "')";
    }
    
    if (romLocation === null) {
      console.log("Rom Location Not Found Saving Info anyway")
      localStorage.setItem("internal", 'true');
      localStorage.setItem("fileName", boxLink);
    } else if (romLocation == 'true') {
      localStorage.setItem("internal", 'true');
      localStorage.setItem("fileName", boxLink);
      console.log(boxLink + 'FILENAME (INTERAL ROM)');
    } else if (romLocation == 'false') {
      localStorage.setItem("internal", 'false');
      localStorage.setItem("fileName", boxLink);
      console.log(boxLink + 'FILENAME (EXTERNAL ROM)');
    } else {
      localStorage.setItem("internal", 'true');
      localStorage.setItem("fileName", boxLink);
      console.log(boxLink + ' FILENAME (UNSPECIFIED ROM) DEFAULTING TO INTERNAL');
      console.log(id);
    }

    localStorage.setItem("lastTile", this.id);
  });
});

async function openAnimation(el) {
  document.querySelector("#" + el.id).classList.add("fullscreen");
  window.scrollTo(0, 0);
    await sleep(1000);
    document.querySelector("#" + el.id).classList.add("hidden");
      document.querySelector("#tile-content").classList.add("tile-content");
      document.querySelector("#black").classList.add("black-screen");
      await sleep(800);
      document.querySelector("#tile-content").classList.add("fullscreen");

      StopSound("homeMusic");
      PlayHomeSound("smbMusicIntro");

}

document.querySelector("#Wiimenu").addEventListener("click", () => {
  let lastTile = localStorage.getItem("lastTile");
  document.querySelector("#tile-content").classList.remove("fullscreen");
  document.querySelector("#tile-content").classList.remove("tile-content");
  document.querySelector("#black").classList.remove("black-screen");
  document.querySelector("#" + lastTile).classList.remove("hidden");
  document.querySelector("#" + lastTile).classList.remove("fullscreen");

  StopSound("smbMusicIntro");
  StopSound("homeMusic");
  PlayHomeSound("homeMusic");
});

document.querySelector("#arrow-right").addEventListener("click", () => {
document.querySelector("#arrow-right").classList.add("hidden");
document.querySelector("#arrow-left").classList.remove("hidden");

//document.querySelector("#arrow-left2").classList.remove("hidden");
//document.querySelector("#arrow-right2").classList.add("hidden");
});

document.querySelector("#arrow-left").addEventListener("click", () => {
  document.querySelector("#arrow-left").classList.add("hidden");
  document.querySelector("#arrow-right").classList.remove("hidden");

  //document.querySelector("#arrow-left2").classList.add("hidden");
 // document.querySelector("#arrow-right2").classList.remove("hidden");
  });

//661.9875183105469, 168.47500228881836,
//58.36249923706055, 432.5500183105469,





// Thanks z3r0 
//Get all the hyperlink elements
var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function(elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          });
    });
  }
});