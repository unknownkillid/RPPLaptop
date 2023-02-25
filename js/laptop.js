// Time and Date
  const timeinterval = setInterval(() => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const clockElement = document.getElementById("clock");
    clockElement.innerHTML = time;    
  }, 1000);

  // Start Menu show and hide
  let startMenu = document.getElementById('startmenu');
  let startMenuButton = document.getElementById('startmenubutton');

  startMenuButton.addEventListener('click', function(){
    if (startMenu.style.display === "block"){
      startMenu.style.display = "none";
    } else {
      startMenu.style.display = "block";
    }
  });

// Terminal functions

//Terminal Button Function

let terminalbutton = document.getElementById('terminalbutton');
let terminalAll = document.getElementById('terminalmain');

function terminalOnOff(){
  let savedTerminalColor = localStorage.getItem('terminalColor'); //string
  if(savedTerminalColor != null) setColor(savedTerminalColor);
  
  if (terminalAll.style.display === "block") {
    terminalAll.style.display = "none";
  } else {
    terminalAll.style.display = "block";
  }
};

// Terminal before text code and commands

let terminal = document.getElementById("terminal");

terminal.spellcheck = false;

let terminalscrolldown = 99999999999;
let defaultText = "\nAnonymous ~ Root: ";
let unknownCommand = "\nUnknown Command";
let help = "\nYou can use next commands for use Terminal: /help, /whoami, /clear, /ifconfig, /wallpaper, /ls";
const ifconfig = 
"\neth0  Link encap:Ethernet  HWaddr 00:0B:CD:1C:18:5A" +
"inet addr:172.16.25.126  Bcast:172.16.25.63  Mask:255.255.255.224" +
"inet6 addr: fe80::20b:cdff:fe1c:185a/64 Scope:Link" +
"UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1" +
"RX packets:2341604 errors:0 dropped:0 overruns:0 frame:0" +
"TX packets:2217673 errors:0 dropped:0 overruns:0" +
"carrier:0 collisions:0 txqueuelen:1000" +
"RX bytes:293460932 (279.8 MiB)  TX bytes:1042006549 (993.7 MiB)" +
"Interrupt:185 Memory:f7fe0000-f7ff0000";

let update = "\nAnonymous ~ Root: apt";
let terminalDownloadline = "\n-----------------------------------------------------------------------------";
let terminalDownload = "\n#############################################################################";

function scrolldown(){
  terminal.scrollTop = terminalscrolldown;
}
function preventdefault(){
  event.preventDefault();
}

terminal.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    
    if (terminal.value.endsWith("\nAnonymous ~ Root: /clear")) {
      terminal.value = defaultText;
      preventdefault();
      scrolldown()
    } else if (terminal.value.endsWith("\nAnonymous ~ Root: /help")) {
      terminal.value += help;
      terminal.value += defaultText;
      preventdefault();
      scrolldown()
    } else if (terminal.value.endsWith("\nAnonymous ~ Root: /whoami")) {
      terminal.value += "\nRoot";
      terminal.value += defaultText;
      scrolldown();
      preventdefault();
    } else if (terminal.value.endsWith("\nAnonymous ~ Root: /ifconfig")){
      terminal.value += ifconfig;
      terminal.value += defaultText;
      scrolldown();
      preventdefault();
    } else if (terminal.value.endsWith(defaultText)){
      terminal.value += defaultText;
      scrolldown();
      preventdefault();
    } else if (terminal.value.endsWith('\nAnonymous ~ Root: /wallpaper')){
      terminal.value += defaultText;
      scrolldown();
      preventdefault();
      wallpaperOn();
    } else if (terminal.value.endsWith('\nAnonymous ~ Root: /ls')){
      terminal.value += "\n/Home/System/HackTool";
      terminal.value += defaultText;
      scrolldown();
      preventdefault();
    } else if (terminal.value.endsWith(update)) {
      terminal.value += terminalDownloadline;
      terminal.value += defaultText;
      scrolldown();
      preventdefault();
    } 
    
    else {
      terminal.value += unknownCommand;
      terminal.value += defaultText;
      terminal.scrollTop = terminalscrolldown;
      event.preventDefault();
    }
  } else if (event.keyCode === 8) {
    event.preventDefault();
  }
});


// terminal.setSelectionRange(0, 19);
// terminal.readOnly = true;


// settings window

let terminalSettings = document.getElementById('settingswindow');
let terminalX = document.getElementById('settingsX');
let settingsbutton = document.getElementById('settings');

function settingsMenu(){
  if (terminalSettings.style.display === "flex") {
    terminal.removeAttribute('readonly', true);
    terminalSettings.style.display = "none";
  } else {
    terminal.setAttribute("readonly", true);
    terminalSettings.style.display = "flex";
  }
}

// settings window terminal change themes

function setColor(givenColor) {
  localStorage.setItem("terminalColor", givenColor);
  if(givenColor == "black") {
    terminal.style.backgroundColor = "white";
    terminal.style.color = "black";
  }
  else {
    terminal.style.backgroundColor = "black";
    terminal.style.color = givenColor;
  }
}

// terminal x button 



// background window on off

let wallpapericon = document.getElementById('wallpaper');
let wallpapermenu = document.getElementById('wallpaperwindow');
let bgnav = document.getElementById('bgnav');

function wallpaperOn(){
  wallminimizenavbarONOff.style.display = "block";
  bgnav.style.position = "static";
  wallpapermenu.style.display = "block";
  const comeInterval = setInterval(() => {
    wallpapermenu.style.right = 0;
    clearInterval(comeInterval);
  }, 500);
};

// X off

let wallpaperWindowOff = document.getElementById('bgOff');

wallpaperWindowOff.addEventListener('click', function(){
  wallminimizenavbarONOff.style.display = "none";
  bgnav.style.position = "static";
  wallpapermenu.style.right = "-40%";
  const wallpaperMenuTimeout = setTimeout(() => {
      wallpapermenu.style.display = "none";
      clearTimeout(wallpaperMenuTimeout);
  }, 1000);
});

wallpapermenu.addEventListener('scroll', function(){
  bgnav.style.position = "fixed";
});

// Minimize 

let minimizewallpaper = document.getElementById('bgMinimize');
let wallminimizenavbarONOff = document.getElementById('wallminimized');

minimizewallpaper.addEventListener('click', function(){
  wallminimizenavbarONOff.style.display = "block";
  wallpapermenu.style.display = "none";
});

wallminimizenavbarONOff.addEventListener('click', function(){
  if (wallpapermenu.style.display === "block") {
    wallpapermenu.style.display = "none";
  } else {
    wallpapermenu.style.display = "block";
  }
});

// wallpaper change on desktop 

let desktop = document.getElementById('desktop');
const skullbg = document.getElementById('skullWallpaper');
const anonymousbg = document.getElementById('anonymousWallpaper');
const roadWallpaper = document.getElementById('roadWallpaper');
const animegirl = document.getElementById('animeGirlWallpaper');
const cyberbg = document.getElementById('cyberGirlWallpaper');
const hackerbg = document.getElementById('hackerWallpaper');
const jokerbg = document.getElementById('jokerWallpaper');
const samuraibg = document.getElementById('samuraiWallpaper');
const anonbg = document.getElementById('anonWallpaper');
const hackbg = document.getElementById('hackWallpaper');
const royalbg = document.getElementById('royalWallpaper');
const noplacebg = document.getElementById('noplaceWallpaper');

skullbg.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/MTFYsrS3/pixelated-hacker-poison-skull-gg733qbdv3fhhumk.jpg)";
  localStorage.setItem("backgroundImage", "url(https://i.postimg.cc/MTFYsrS3/pixelated-hacker-poison-skull-gg733qbdv3fhhumk.jpg)");
});

anonymousbg.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/fb37VfXx/8c627d0108845d3a82f3bd876e8733a7.png)";
  localStorage.setItem("backgroundImage", "url(https://i.postimg.cc/fb37VfXx/8c627d0108845d3a82f3bd876e8733a7.png)")
});

roadWallpaper.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/3xQCkv16/wallpaperflare-com-wallpaper-5.jpg)";
  localStorage.setItem("backgroundImage", "url(https://i.postimg.cc/3xQCkv16/wallpaperflare-com-wallpaper-5.jpg)")
});

animegirl.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/RF2GGb1C/wallpaperflare-com-wallpaper-10.jpg)";
  localStorage.setItem("backgroundImage", "url(https://i.postimg.cc/RF2GGb1C/wallpaperflare-com-wallpaper-10.jpg)")
});

cyberbg.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/7LFTRvRR/wallpaperflare-com-wallpaper-11.jpg)";
  localStorage.setItem('backgroundImage', "url(https://i.postimg.cc/7LFTRvRR/wallpaperflare-com-wallpaper-11.jpg)")
});

hackerbg.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/JhLLYPqq/wallpaperflare-com-wallpaper-7.jpg)";
  localStorage.setItem('backgroundImage', "url(https://i.postimg.cc/JhLLYPqq/wallpaperflare-com-wallpaper-7.jpg)")
});

jokerbg.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/wv4nzVhn/wallpaperflare-com-wallpaper-3.jpg)";
  localStorage.setItem('backgroundImage', "url(https://i.postimg.cc/wv4nzVhn/wallpaperflare-com-wallpaper-3.jpg)")
});

samuraibg.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/43BSv5Fn/wallpaperflare-com-wallpaper-4.jpg)";
  localStorage.setItem('backgroundImage', "url(https://i.postimg.cc/43BSv5Fn/wallpaperflare-com-wallpaper-4.jpg)")
});
anonbg.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/xT3hTnyK/wallpaperflare-com-wallpaper-6.jpg)";
  localStorage.setItem('backgroundImage', "url(https://i.postimg.cc/xT3hTnyK/wallpaperflare-com-wallpaper-6.jpg)")
});
hackbg.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/NF4DYfqF/wallpaperflare-com-wallpaper-9.jpg)";
  localStorage.setItem('backgroundImage', "url(https://i.postimg.cc/NF4DYfqF/wallpaperflare-com-wallpaper-9.jpg)")
});
royalbg.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/j2dNHHmq/Wallpaper-Dog-20495318.jpg)";
  localStorage.setItem('backgroundImage', "url(https://i.postimg.cc/j2dNHHmq/Wallpaper-Dog-20495318.jpg)")
});
noplacebg.addEventListener('click', function(){
  desktop.style.backgroundImage = "url(https://i.postimg.cc/G239VcQq/wallpaperflare-com-wallpaper-8.jpg)";
  localStorage.setItem('backgroundImage', "url(https://i.postimg.cc/G239VcQq/wallpaperflare-com-wallpaper-8.jpg)")
});

window.addEventListener("load", function() {
  var storedImage = localStorage.getItem("backgroundImage");
  if (storedImage) {
    desktop.style.backgroundImage = storedImage;
  }
});


// musicplayer on off desktop icons hide\show

let musicplayericon = document.getElementById('musicplayericon');
let musicplayerbody = document.getElementById('musicPlayer');
let lablenone1 = document.getElementById('displaynonelabel1');
let lablenone2 = document.getElementById('displaynonelabel2');
let navbarmusicicon = document.getElementById('musicplayericonminimize');
musicplayericon.addEventListener('click', function(){
    navbarmusicicon.style.display = "block";
    musicplayerbody.style.display = "flex";
    musicplayericon.style.display = "none";
    lablenone1.style.display = "none";
    lablenone2.style.display = "none";
    wallpapericon.style.display = "none";
});

navbarmusicicon.addEventListener('click', function(){
  if (navbarmusicicon.style.display === "block"){
    musicplayericon.style.display = "block";
    lablenone1.style.display = "block";
    lablenone2.style.display = "block";
    wallpapericon.style.display = "block";
    musicplayerbody.style.display = "none";
  } else {
    musicplayerbody.style.display = "flex";
    musicplayericon.style.display = "none";
    lablenone1.style.display = "none";
    lablenone2.style.display = "none";
    wallpapericon.style.display = "none";
  }
});

let musicPlayerPauseResume = document.getElementById('pauseresume');

musicPlayerPauseResume.addEventListener('click', function(){
  if (musicPlayerPauseResume.textContent === "Play"){
    list.pause();
    musicPlayerPauseResume.textContent = "Pause";
  } else {
    list.play();
    musicPlayerPauseResume.textContent = "Play";
  }
});

let list = new Audio();

let track = document.getElementById('track1');

track.addEventListener('click', function(){
  let flag = 1;
  if (flag === 1) {
    flag = 0;
    list.play();
  } else {
    flag = 1;
    list.pause();
  }
})

let loadingTxt = document.getElementById('loadingtext');
let loadingBg = document.getElementById("loadingbg");
let loadingMain = document.getElementById('loading');

setInterval(() => {
  const startTime = performance.now();

function updateLoadingText() {
  const currentTime = performance.now();
  const progress = Math.min((currentTime - startTime) / 7000, 1); // 5000ms = 5s (animation duration)
  const percentage = Math.round(loadingBg.offsetWidth / loadingBg.parentElement.offsetWidth * 102);
  loadingTxt.textContent = "Loading " + percentage + '%';
  
  loadingMain.style.transition = "2s";
  
  if (progress < 1) {
    requestAnimationFrame(updateLoadingText);
  }
}

requestAnimationFrame(updateLoadingText);
}, 1000);

setTimeout(() => {
  const opacinterval = setInterval(() => {
    loadingMain.style.display = "none";
  }, 3000);
  loadingMain.style.opacity = 0;
}, 18000);
