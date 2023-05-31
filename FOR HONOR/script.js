const beginBtn = document.querySelector(".begin");
const cover = document.querySelector(".cover");

const playerOneBtns = document.querySelector(".playerOneBtns ");
const playerTwoBtns = document.querySelector(".playerTwoBtns ");

// player one btns
const playerTwoHead = document.querySelector(".playerTwoHead");
const playerTwoHands = document.querySelector(".playerTwoHands");
const playerTwoBody = document.querySelector(".playerTwoBody");
const playerTwoLegs = document.querySelector(".playerTwoLegs");

// player two btns

const playerOneHead = document.querySelector(".playerOneHead");
const playerOneHands = document.querySelector(".playerOneHands");
const playerOneBody = document.querySelector(".playerOneBody");
const playerOneLegs = document.querySelector(".playerOneLegs");

// attack and defend
// player 1
const playerOneDefend = document.querySelector(".playerOneDefend");
const playerOneAttack = document.querySelector(".playerOneAttack");
// player 2
const playerTwoDefend = document.querySelector(".playerTwoDefend");
const playerTwoAttack = document.querySelector(".playerTwoAttack");

// begining btn

let ch = false;
function begin() {
  beginBtn.classList.toggle("beginAnimate");
  cover.classList.toggle("coverAnimate");
  playerOneBtns.style.zIndex = "4";
  playerTwoBtns.style.zIndex = "4";

  // btnsAnimation
  // player one btns

  playerTwoHead.classList.toggle("TwoHead");
  playerTwoHands.classList.toggle("TwoHands");
  playerTwoBody.classList.toggle("TwoBody");
  playerTwoLegs.classList.toggle("TwoLegs");

  // player two btns

  playerOneHead.classList.toggle("OneHead");
  playerOneHands.classList.toggle("OneHands");
  playerOneBody.classList.toggle("OneBody");
  playerOneLegs.classList.toggle("OneLegs");

  svlisdamatavreba.classList.toggle("end-button-animate");

  ch = true;
  setTimeout(() => {
    playersTurn();
  }, 1800);
}

// rend player
let rendPlayer = Math.floor(Math.random() * 2);

// starter player
const rightPlayerBtn = document.querySelectorAll(".rightPlayerBtn");
const leftPlayerBtn = document.querySelectorAll(".leftPlayerBtn");

function playersTurn() {
  if (rendPlayer <= 0) {
    playerOneAttack.style.display = "block";
    playerTwoDefend.style.display = "block";
    for (let i = 0; i < rightPlayerBtn.length; i++) {
      rightPlayerBtn[i].classList.toggle("rightPlayerBtnS");
    }
  } else {
    playerTwoAttack.style.display = "block";
    playerOneDefend.style.display = "block";
    for (let i = 0; i < leftPlayerBtn.length; i++) {
      leftPlayerBtn[i].classList.toggle("leftPlayerBtnS");
    }
  }
}

// character health/weapons

const player1HealthBar = document.querySelector(".player1-healthBar");
const player2HealthBar = document.querySelector(".player2-healthBar");

player1HealthBar.innerHTML = 100;
player2HealthBar.innerHTML = 100;

const weapons = {
  // round 1 weapons
  axePlayer1: Math.floor(Math.random() * (7 - 4) + 4),
  axePlayer2: Math.floor(Math.random() * (7 - 4) + 4),
};

if (rendPlayer <= 0) {
  weapons.axePlayer2 = 0;
} else {
  weapons.axePlayer1 = 0;
}

// player1
let mackHead = false;
let mackHands = false;
let mackBody = false;
let mackLegs = false;
// player2
let kenjiHead = false;
let kenjiHands = false;
let kenjiBody = false;
let kenjiLegs = false;

let countP1 = 0;
let countP2 = 0;

// player1
playerTwoHead.addEventListener("click", function () {
  playerTwoHead.style.pointerEvents = "none";
  countP1++;
  mackHead = true;
  blockBtnP1();
});
playerTwoHands.addEventListener("click", function () {
  playerTwoHands.style.pointerEvents = "none";
  countP1++;
  mackHands = true;
  blockBtnP1();
});
playerTwoBody.addEventListener("click", function () {
  playerTwoBody.style.pointerEvents = "none";
  countP1++;
  mackBody = true;
  blockBtnP1();
});
playerTwoLegs.addEventListener("click", function () {
  playerTwoLegs.style.pointerEvents = "none";
  countP1++;
  mackLegs = true;
  blockBtnP1();
});

// player2
playerOneHead.addEventListener("click", function () {
  playerOneHead.style.pointerEvents = "none";
  countP2++;
  kenjiHead = true;
  blockBtnP2();
});
playerOneHands.addEventListener("click", function () {
  playerOneHands.style.pointerEvents = "none";
  countP2++;
  kenjiHands = true;
  blockBtnP2();
});
playerOneBody.addEventListener("click", function () {
  playerOneBody.style.pointerEvents = "none";
  countP2++;
  kenjiBody = true;
  blockBtnP2();
});
playerOneLegs.addEventListener("click", function () {
  playerOneLegs.style.pointerEvents = "none";
  countP2++;
  kenjiLegs = true;
  blockBtnP2();
});

let blockBtnP1Check = false;
let blockBtnP2Check = false;
function blockBtnP1() {
  //   if (countP1 == 2) {
  //     // player1
  //     playerTwoHead.style.pointerEvents = "none";
  //     playerTwoHands.style.pointerEvents = "none";
  //     playerTwoBody.style.pointerEvents = "none";
  //     playerTwoLegs.style.pointerEvents = "none";
  //   } else if (countP2 == 2) {
  //     // player2

  //     playerOneHead.style.pointerEvents = "none";
  //     playerOneHands.style.pointerEvents = "none";
  //     playerOneBody.style.pointerEvents = "none";
  //     playerOneLegs.style.pointerEvents = "none";
  //   }
  if (countP1 == 2) {
    blockBtnP1Check = true;
    for (let i = 0; i < leftPlayerBtn.length; i++) {
      leftPlayerBtn[i].classList.toggle("leftPlayerBtnS");
    }
    for (let i = 0; i < rightPlayerBtn.length; i++) {
      rightPlayerBtn[i].classList.toggle("rightPlayerBtnS");
    }
    countP1 = 0;
    checkdblockBtn();
  }
}
function blockBtnP2() {
  if (countP2 == 2) {
    blockBtnP2Check = true;
    for (let i = 0; i < rightPlayerBtn.length; i++) {
      rightPlayerBtn[i].classList.toggle("rightPlayerBtnS");
    }
    for (let i = 0; i < leftPlayerBtn.length; i++) {
      leftPlayerBtn[i].classList.toggle("leftPlayerBtnS");
    }
    countP2 = 0;
    checkdblockBtn();
  }
}
function checkdblockBtn() {
  if (blockBtnP1Check == true && blockBtnP2Check == true) {
    for (let i = 0; i < rightPlayerBtn.length; i++) {
      rightPlayerBtn[i].classList.add("rightPlayerBtnS");
    }
    for (let i = 0; i < leftPlayerBtn.length; i++) {
      leftPlayerBtn[i].classList.add("leftPlayerBtnS");
    }
    svlisdamatavreba.style.pointerEvents = "auto";
  }
}

// player 1
const player1AttackBox = {
  player1AttackOnHead() {
    if (mackHead == true) {
      if (kenjiHead == false) {
        // damage
        player2HealthBar.innerHTML =
          player2HealthBar.innerHTML - weapons.axePlayer1;
      }
    }
  },
  player1AttackOnHands() {
    if (mackHands == true) {
      if (kenjiHands == false) {
        // damage
        player2HealthBar.innerHTML =
          player2HealthBar.innerHTML - weapons.axePlayer1;
      }
    }
  },
  player1AttackOnBody() {
    if (mackBody == true) {
      if (kenjiBody == false) {
        // damage
        player2HealthBar.innerHTML =
          player2HealthBar.innerHTML - weapons.axePlayer1;
      }
    }
  },
  player1AttackOnLegs() {
    if (mackLegs == true) {
      if (kenjiLegs == false) {
        // damage
        player2HealthBar.innerHTML =
          player2HealthBar.innerHTML - weapons.axePlayer1;
      }
    }
  },
};

// player 2
const player2AttackBox = {
  player2AttackOnHead() {
    if (kenjiHead == true) {
      if (mackHead == false) {
        // damage
        player1HealthBar.innerHTML =
          player1HealthBar.innerHTML - weapons.axePlayer2;
      }
    }
  },
  player2AttackOnHands() {
    if (kenjiHands == true) {
      if (mackHands == false) {
        // damage
        player1HealthBar.innerHTML =
          player1HealthBar.innerHTML - weapons.axePlayer2;
      }
    }
  },
  player2AttackOnBody() {
    if (kenjiBody == true) {
      if (mackBody == false) {
        // damage
        player1HealthBar.innerHTML =
          player1HealthBar.innerHTML - weapons.axePlayer2;
      }
    }
  },
  player2AttackOnLegs() {
    if (kenjiLegs == true) {
      if (mackLegs == false) {
        // damage
        player1HealthBar.innerHTML =
          player1HealthBar.innerHTML - weapons.axePlayer2;
      }
    }
  },
};

const shetevissayudeli = {
  // player 1

  attackHead1() {
    player1AttackBox.player1AttackOnHead();
  },
  attackHands1() {
    player1AttackBox.player1AttackOnHands();
  },
  attackBody1() {
    player1AttackBox.player1AttackOnBody();
  },
  attackLegs1() {
    player1AttackBox.player1AttackOnLegs();
  },

  // player 2

  attackHead2() {
    player2AttackBox.player2AttackOnHead();
  },
  attackHands2() {
    player2AttackBox.player2AttackOnHands();
  },
  attackBody2() {
    player2AttackBox.player2AttackOnBody();
  },
  attackLegs2() {
    player2AttackBox.player2AttackOnLegs();
  },
};

//
//
//
const svlisdamatavreba = document.querySelector(".end-button");
svlisdamatavreba.style.pointerEvents = "none";
let droebiti1 = 0;
let droebiti2 = 0;
function shecvale() {
  svlisdamatavreba.style.pointerEvents = "none";

  droebiti1++;
  droebiti2++;
  // player1
  shetevissayudeli.attackHead1();
  shetevissayudeli.attackHands1();
  shetevissayudeli.attackBody1();
  shetevissayudeli.attackLegs1();
  // player2
  shetevissayudeli.attackHead2();
  shetevissayudeli.attackHands2();
  shetevissayudeli.attackBody2();
  shetevissayudeli.attackLegs2();
  //

  // locked

  // locked //

  // player1
  mackHead = false;
  mackHands = false;
  mackBody = false;
  mackLegs = false;
  // player2
  kenjiHead = false;
  kenjiHands = false;
  kenjiBody = false;
  kenjiLegs = false;

  // default damage

  weapons.axePlayer1 = 0;
  weapons.axePlayer2 = 0;

  if (rendPlayer <= 0) {
    player1Time();
    console.log("1");
  } else {
    console.log("2");
    player2Time();
  }

  blockRemov();
  death()
}

function player1Time() {
  if (droebiti1 == 1) {
    weapons.axePlayer2 = Math.floor(Math.random() * (7 - 4) + 4);
    weapons.axePlayer1 = 0;

    playerOneAttack.style.display = "none";
    playerOneDefend.style.display = "block";
    playerTwoAttack.style.display = "block";
    playerTwoDefend.style.display = "none";

    for (let i = 0; i < rightPlayerBtn.length; i++) {
      rightPlayerBtn[i].classList.toggle("rightPlayerBtnS");
    }
    mackAttack();
  } else if (droebiti1 == 2) {
    weapons.axePlayer1 = Math.floor(Math.random() * (7 - 4) + 4);
    weapons.axePlayer2 = 0;
    droebiti1 = 0;

    playerOneAttack.style.display = "block";
    playerOneDefend.style.display = "none";
    playerTwoAttack.style.display = "none";
    playerTwoDefend.style.display = "block";

    for (let i = 0; i < leftPlayerBtn.length; i++) {
      leftPlayerBtn[i].classList.toggle("leftPlayerBtnS");
    }
    kanjiAttack();
  }
}

function player2Time() {
  if (droebiti2 == 1) {
    weapons.axePlayer1 = Math.floor(Math.random() * (8 - 5) + 5);
    weapons.axePlayer2 = 0;

    playerOneAttack.style.display = "block";
    playerOneDefend.style.display = "none";
    playerTwoAttack.style.display = "none";
    playerTwoDefend.style.display = "block";

    for (let i = 0; i < leftPlayerBtn.length; i++) {
      leftPlayerBtn[i].classList.toggle("leftPlayerBtnS");
    }
    kanjiAttack();
  } else if (droebiti2 == 2) {
    weapons.axePlayer2 = Math.floor(Math.random() * (8 - 5) + 5);
    weapons.axePlayer1 = 0;
    droebiti2 = 0;

    playerOneAttack.style.display = "none";
    playerOneDefend.style.display = "block";
    playerTwoAttack.style.display = "block";
    playerTwoDefend.style.display = "none";

    for (let i = 0; i < rightPlayerBtn.length; i++) {
      rightPlayerBtn[i].classList.toggle("rightPlayerBtnS");
    }
    mackAttack();
  }
}

function mackAttack() {
  playerOneImg.src = mackAttack1;
  setTimeout(() => {
    playerTwoImg.src = kenjkiTakeHit;
  }, 150);
  setTimeout(() => {
    playerTwoImg.src = kenjiIdle;
  }, 300);
  setTimeout(() => {
    playerOneImg.src = mackAttack2;
  }, 300);
  setTimeout(() => {
    playerOneImg.src = mackIdle;
  }, 501);
}
function kanjiAttack() {
  playerTwoImg.src = kenjiAttack1;
  setTimeout(() => {
    playerOneImg.src = mackTakeHit;
  }, 100);
  setTimeout(() => {
    playerOneImg.src = mackIdle;
  }, 400);
  setTimeout(() => {
    playerTwoImg.src = kenjiAttack2;
  }, 200);
  setTimeout(() => {
    playerTwoImg.src = kenjiIdle;
  }, 301);
}

function blockRemov() {
  blockBtnP1Check = false;
  blockBtnP2Check = false;
      // player 1
    playerTwoHead.style.pointerEvents = "auto";
    playerTwoHands.style.pointerEvents = "auto";
    playerTwoBody.style.pointerEvents = "auto";
    playerTwoLegs.style.pointerEvents = "auto";
    // player 2
    playerOneHead.style.pointerEvents = "auto";
    playerOneHands.style.pointerEvents = "auto";
    playerOneBody.style.pointerEvents = "auto";
    playerOneLegs.style.pointerEvents = "auto";
}

function death(){
    if(player1HealthBar.innerHTML<=0){
        alert("kenji won")
        player1HealthBar.innerHTML=0
    }
    else if(player2HealthBar.innerHTML<=0){
        alert("mack won")
        player2HealthBar.innerHTML=0
    }
}