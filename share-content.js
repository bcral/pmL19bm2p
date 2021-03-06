//var speedInput = document.getElementById('speed');
var speed;
var selectedStyle = "0px 0px 5px 5px #5dafb2";
var shareWIth = '';
var continuous = false;
var active = false;
var isLooping = false;
//total number of listings in closet - for stopping share loop at the end
//of the closet, if selected
var totalListings = document.querySelector('.count').textContent;
totalListings = totalListings.replace(/\,/g,'');
totalListings = parseInt(totalListings,10);

//object for storing values of checkbox inputs from form - share to, speed
let shareValues = {shareWith: "", continuous: false, y: false};

//sets values based on what the user selects in the UI
function writeValues() {
    if (document.getElementById("followers").checked === true) {
        shareWith = 'followers';
    } else {
        shareWith = 'party';
    } 

    if (document.getElementById("contInputEl").checked === true) {
        continuous = true;
    } else {
        continuous = false;
    }
}

//sorts and sets values for what to do with the popup page after "share"
function sharePopupFunction() {
    //if 'shareWith = followers', share to 'followers'
    if (shareWith == 'followers') {
        document.getElementsByClassName('share-wrapper-con')[0].click();
    //if 'shareWith = party', share to 'party'
    } else if (shareWith == 'party') {

        //check if a party is happening
        if (document.getElementsByClassName('share-wrapper-con')[1]) {
            //if so, click link to share there
            document.getElementsByClassName('share-wrapper-con')[1].click();
        //if not, show warning to tell user there isn't a party happening,
        //end cycle, and exit loop
        } else {
            endCycle = true;
            displayWarn();
            document.getElementsByClassName('close')[2].click();
        }
    }
}

//function setting values, and for checking if share loop is currently 
//running or not
function changeStuff(a) {
    active = a;
    writeValues();
    shareLoop();
}

//function for displaying, and then re-hiding the "no party" message
async function displayWarn() {
    document.getElementById("warningEl").style.display = "block";
    setTimeout(function() {
        document.getElementById("warningEl").style.display = "none";
    }, 7000);
}    

//function to ensure that the number stored in "totalListings" is indeed
//the number of items in the closet
function listingsConfirm() {
    if (document.querySelector('.count').classList.contains('has-likes')
    || document.querySelector('.count').parentNode.classList.contains('refresh-text')) {
        totalListings = 20000;
    }

}

//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
//kkkkkkkkkkkkkkkkkkkkkkkkkkk SHARE LOOP CODE kkkkkkkkkkkkkkkkkkkkkkkkkkkkk
//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
//kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk


//loop for sharing through items in closet
//values are passed from the HTML file through the valuePairs object
async function shareLoop () {

    isLooping = true;

    const sleep = (milliseconds) => {
      return new Promise(resolve => setInterval(resolve, milliseconds))
    }

    //main counter variable to mark the current iterration
    var i = 0;

    var currentEl = document.getElementsByClassName('tile');

    var endCycle = false;

    //share loop that continues firing until "active" returns false
    async function doSomething() {
        while (active === true) {

            var captchaEl = document.getElementById("captcha-popup");

            //stop share loop if captcha appears, pause main share loop
            //until captcha is cleared
            if (captchaEl) {
                if (captchaEl.style.display == 'block') {
                    endCycle = true;

                    var isCaptcha = false;
                    
                    const testCaptcha = async () => {
                    
                        isCaptcha = true;

                        while (isCaptcha) {
                            await sleep(3000);
                            if (captchaEl.style.display == 'none') {
                                isCaptcha = false;
                                break;
                            }
                        }
                    }
                    const captchaContinue = () => {
                        endCycle = false;
                    }
                    await testCaptcha().then(captchaContinue);
                }
            }

            var totalEls = currentEl.length;

            listingsConfirm();

            async function statusChecker() {

                //sets delay speed to input
                speed = 4000;

                //just for kicks, and to make it obvious which one is selected
                if (currentEl[i]) {
                    currentEl[i].style.boxShadow = selectedStyle
                } else {
                    //if there is no element selected, end the cycle
                    endCycle = true;
                    isLooping = false;
                    active = false;
                    btnDisplay(active);
                    return false; 
                }

                //put this somewhere that will trigger or not trigger the loop
                //depending on which condition is selected by the user in the UI
                let thisItem = currentEl[i].querySelector('i');

                if (thisItem.classList.contains('sold-tag') == false &&
                thisItem.classList.contains('not-for-sale-tag') == false) {
                    document.getElementsByClassName('share')[i].click();
                    //delay for slowing down the process until a promise can be
                    //implimented to confirm the 'share' element was clicked
                    //after waiting, fire sharePopupFunction() to select where to share
                    await sleep(800).then(sharePopupFunction());
                } else {
                    //slows delay speed to skip through faster
                    speed = 300;
                }
            }

            //selects share link based on which itteration of the loop(i) is
            //currently selected.  Forces popup window with option to share to
            //followers or party
            if (i < totalListings && i < totalEls && endCycle === false) {
                statusChecker();
            } else if ((i <= totalListings || i <= totalEls) && continuous === true && endCycle === false) {
                i = 0;
                statusChecker();      
            } else {
                endCycle = true;
                --i;
            }

            i++;
            await sleep(speed);
            
            //remove "selected" style from previous element
            if (endCycle === false) {
                currentEl[i - 1].style.boxShadow = "none";
            } else if (endCycle === true && active === true) {
                currentEl[i - 1].style.boxShadow = "none";
                active = false;
                running = false;
                btnDisplay(active)
            }
        //indicator that the loop is no longer running, and it's safe to 
        //start a new iteration    
        isLooping = false;
        }
    //^this marks the end of the "while" loop
    }
  //initiates share loop
  doSomething();
}
