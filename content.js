// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// kkkkkkkkkkkkkkkkkkkk Parent element for all HTML kkkkkkkkkkkkkkkkkkkk

function includeWrap() {

    //main wrapper element that is included to the site's DOM
    var thing = document.createElement("div");
    thing.id = "wrapDiv";
    thing.className = "container";
    
    //adding the main wrapper element to the DOM - this contains all following
    //HTML elements that are created
    document.body.appendChild(thing);
}
    
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// kkkkkkkkkkkkkkkkkkkkkkkkkkkk STYLESHEETS kkkkkkkkkkkkkkkkkkkkkkkkkkkk
    
function includeStyles() {
        
    var link = document.createElement("link");
    link.href = chrome.extension.getURL("styles.css");
    link.type = "text/css";
    link.rel = "stylesheet";
    //including the stylesheet link AFTER the bootstrap link
    document.body.appendChild(link);
}

// Start code for creating and inserting warning elements
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

function includeWarning() {

    //main wrapper element that is included to the site's DOM
    var warningWrapEl = document.createElement("div");
    warningWrapEl.id = "warningDiv";
    warningWrapEl.className = "container";
    
    //adding the main wrapper element to the DOM - this contains all following
    //HTML elements that are created
    document.getElementById('wrapDiv').appendChild(warningWrapEl);

    //div element for warning header
    var warningEl = document.createElement("div");
    warningEl.id = "warningEl";
    warningEl.className = "warning-color";
    warningEl.innerHTML = "Sorry!  There doesn\'t seem to be a party now! :(";
    warningEl.style.display = "none";

    //parent element that this element will be inserted into
    document.getElementById("wrapDiv").appendChild(warningEl);
}
    
// Start code for creating and inserting header elements
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    
function includeHeader() {
    
    //div element for page header
    var backgroundEl = document.createElement("div");
    backgroundEl.id = "backgroundEl";
    
    //parent element that this element will be inserted into
    document.getElementById("wrapDiv").appendChild(backgroundEl);
    
    //nav element for page header
    var headerEl = document.createElement("nav");
    headerEl.setAttribute("class", "navbar primary-color");
    headerEl.id = "headerElement";
    
    //parent element that this element will be inserted into
    document.getElementById("backgroundEl").appendChild(headerEl);
    
    //a link element for "log out" in the top corner of element
    var logOutEl = document.createElement("a");
    logOutEl.id = "logout";
    logOutEl.addEventListener("click", hideApp)
    logOutEl.innerHTML = "X";
    
    //parent element that this element will be inserted into
    document.getElementById("headerElement").appendChild(logOutEl);
    
    //h2 element for containing "poshaccess" text
    var headTagEl = document.createElement("h2");
    headTagEl.setAttribute("class", "primary-color");
    headTagEl.id = "headTagElement";
    headTagEl.innerHTML = "PoshAccess";
    
    //parent element that this element will be inserted into
    document.getElementById("headerElement").appendChild(headTagEl);
}
    
    // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    // End of code for creating and inserting header elements
    
function includeForm() {
    
    // Start code for creating and inserting form elements
    // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    
    //element for containing form elements for user interaction
    var formDivEl = document.createElement("div");
    formDivEl.setAttribute("class", "main-content");
    formDivEl.id = "formDivEl";
    
    //parent element that this element will be inserted into
    document.getElementById("backgroundEl").appendChild(formDivEl);
    
    //element for the main form on the page - contains all form elements
    var mainFormEl = document.createElement("form");
    mainFormEl.id = "mainFormEl";
    
    //parent element that this element will be inserted into
    document.getElementById("formDivEl").appendChild(mainFormEl);
    
    //element for the form container div
    var formContainerEl = document.createElement("div");
    formContainerEl.id = "formContainerEl";
    
    //parent element that this element will be inserted into
    document.getElementById("mainFormEl").appendChild(formContainerEl);

    // Start code for "share with" form elements
    // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    
    //element for the row for the "share" form elements
    var formShareRowEl = document.createElement("div");
    formShareRowEl.id = "formShareRowEl";
    formShareRowEl.className = "borderBottom";
    
    //parent element that this element will be inserted into
    document.getElementById("formContainerEl").appendChild(formShareRowEl);
    
    //element containing the column and form-group for the "share to" elements
    var formShareToContainerEl = document.createElement("div");
    formShareToContainerEl.className = "list-el";
    formShareToContainerEl.id = "formShareToContainerEl";
    
    //parent element that this element will be inserted into
    document.getElementById("formShareRowEl").appendChild(formShareToContainerEl);
    
    //h5 element containing the header text for "share with"
    var shareWithTitleEl = document.createElement("h5");
    shareWithTitleEl.className = "list-el";
    shareWithTitleEl.innerHTML = "Share To:";
    
    //parent element that this element will be inserted into
    document.getElementById("formShareToContainerEl").appendChild(shareWithTitleEl);
    
    //element for input of the "share with" radio button for followers
    var shareFollowersInputEl = document.createElement("input");
    shareFollowersInputEl.id = "followers";
    shareFollowersInputEl.setAttribute("name", "shareLoc");
    shareFollowersInputEl.setAttribute("type", "radio");
    shareFollowersInputEl.setAttribute("value", "followers");
    shareFollowersInputEl.checked = true;
    
    //parent element that this element will be inserted into
    document.getElementById("formShareToContainerEl").appendChild(shareFollowersInputEl);

    //element for label(and parent) of the "share to - followers" input radio button
    var shareWithLabelEl = document.createElement("label");
    shareWithLabelEl.setAttribute("for", "followers");
    shareWithLabelEl.id = "shareWithLabelEl";
    shareWithLabelEl.className = "radioBtn";
    shareWithLabelEl.innerHTML = "Followers";
    
    //parent element that this element will be inserted into
    document.getElementById("formShareToContainerEl").appendChild(shareWithLabelEl);
    
    //element for input of the "share with" radio button for party
    var sharePartyInputEl = document.createElement("input");
    sharePartyInputEl.id = "party";
    sharePartyInputEl.className = "location";
    sharePartyInputEl.setAttribute("name", "shareLoc");
    sharePartyInputEl.setAttribute("type", "radio");
    sharePartyInputEl.setAttribute("value", "party");
    
    //parent element that this element will be inserted into
    document.getElementById("formShareToContainerEl").appendChild(sharePartyInputEl);

    //element for label(and parent) of the "share to - party" input radio button
    var shareWithPartyLabelEl = document.createElement("label");
    shareWithPartyLabelEl.setAttribute("for", "party");
    shareWithPartyLabelEl.id = "shareWithPartyLabelEl";
    shareWithPartyLabelEl.className = "radioBtn";
    shareWithPartyLabelEl.innerHTML = "Party";
    
    //parent element that this element will be inserted into
    document.getElementById("formShareToContainerEl").appendChild(shareWithPartyLabelEl);
    
    // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    // End of code for creating and inserting "share with" elements
    
    // Start code for creating and inserting "continuous" elements
    // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    
    //element for the row for the "continuous" form elements
    var formContRowEl = document.createElement("div");
    formContRowEl.id = "formContRowEl";
    formContRowEl.className = "borderBottom";
    
    //parent element that this element will be inserted into
    document.getElementById("formContainerEl").appendChild(formContRowEl);
    
    //element containing the column and form-group for the "continuous" elements
    var formContContainerEl = document.createElement("div");
    formContContainerEl.className = "list-el";
    formContContainerEl.id = "formContContainerEl";
    
    //parent element that this element will be inserted into
    document.getElementById("formContRowEl").appendChild(formContContainerEl);
    
    //element for input of the "one time" radio button for followers
    var onceInputEl = document.createElement("input");
    onceInputEl.id = "onceInputEl";
    onceInputEl.setAttribute("name", "continuous");
    onceInputEl.setAttribute("type", "radio");
    onceInputEl.setAttribute("value", "once");
    onceInputEl.checked = true;
    
    //parent element that this element will be inserted into
    document.getElementById("formContContainerEl").appendChild(onceInputEl);

    //element for label(and parent) of the "one time" input radio button
    var onceLabelEl = document.createElement("label");
    onceLabelEl.setAttribute("for", "onceInputEl");
    onceLabelEl.id = "onceLabelEl";
    onceLabelEl.className = "radioBtn";
    onceLabelEl.innerHTML = "One Time";
    
    //parent element that this element will be inserted into
    document.getElementById("formContContainerEl").appendChild(onceLabelEl);
    
    //element for input of the "continuous" radio button for followers
    var contInputEl = document.createElement("input");
    contInputEl.id = "contInputEl";
    contInputEl.setAttribute("name", "continuous");
    contInputEl.setAttribute("type", "radio");
    contInputEl.setAttribute("value", "continuous");

    
    //parent element that this element will be inserted into
    document.getElementById("formContContainerEl").appendChild(contInputEl);

    //element for label(and parent) of the "continuous" input radio button
    var contLabelEl = document.createElement("label");
    contLabelEl.setAttribute("for", "contInputEl");
    contLabelEl.id = "contLabelEl";
    contLabelEl.className = "radioBtn";
    contLabelEl.innerHTML = "Continuous";
    
    //parent element that this element will be inserted into
    document.getElementById("formContContainerEl").appendChild(contLabelEl);
}
    
    // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    // End of code for creating and inserting "continuous" elements  

        // Start code for creating and inserting "share" button elements
    // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    
function includeShare() {
    
    //element for containing "share" button
    var shareBtnContainerEl = document.createElement("div");
    shareBtnContainerEl.id = "shareBtnContainerEl";
    shareBtnContainerEl.classList = "main-nav";
    
    //parent element that this element will be inserted into
    document.getElementById("backgroundEl").appendChild(shareBtnContainerEl);
    
    //button element for executing "share" code
    var shareEl = document.createElement("button");
    shareEl.id = "shareEl";
    shareEl.className = "primary-color btn";
    shareEl.addEventListener("click", functionSorter)
    shareEl.innerHTML = "SHARE";

    //parent element that this element will be inserted into
    document.getElementById("shareBtnContainerEl").appendChild(shareEl);
    
}
    
    // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    // kkkkkkkkkkkkkkkkkkkkkkkkkkkk Build the UI kkkkkkkkkkkkkkkkkkkkkkkkkkk
    
async function buildApp() {
        await includeWrap();
        await includeStyles();
        await includeWarning();
        await includeHeader();
        await includeForm();
        await includeShare();
    }

onload = buildApp();
    
    var displayed = true;
    
    var running = false;
    
    function hideApp() {
        var appWrapper = document.getElementById("wrapDiv");
        appWrapper.style.display = "none";
        displayed = !displayed;
    }
    
    function showApp() {
        var appWrapper = document.getElementById("wrapDiv");
        appWrapper.style.display = "block";
        displayed = !displayed;
    }
    
    //message from background page that icon was clicked
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (displayed === false) {
            showApp();
        } else if (displayed === true) {
            hideApp();
        } else {
            console.log('neither condition is true');
        }
        if (request.icon == "click") {
        sendResponse = 'recieved'; }
    });
    
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// kkkkkkkkkkkkkkkkkkkkkkkkk Share button code kkkkkkkkkkkkkkkkkkkkkkkkk
    
    function btnDisplay(a) {
        if (a === true) {
            shareEl.className = "warning-color";
            shareEl.innerHTML = "STOP";
        } else {
            shareEl.className = "primary-color";
            shareEl.innerHTML = "SHARE";
        }
    }

    function shareFunc() {
        if (isLooping === false) {
            running = true;
            changeStuff(running);
            btnDisplay(running);
        } else {
            stopFunc();
        }
    }
    function stopFunc() {
        running = false;
        changeStuff(running);
        btnDisplay(running);
    }

function functionSorter() {
    if (running === false) {
        shareFunc();
    } else {
        stopFunc();
    }
}
