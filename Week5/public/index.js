/*
 * Add the contents of your index.js file from Assignment 3 here to see the
 * interactions you implemented.
 */

//alert('Add the content of your index.js from Assignment 3 to public/index.js.');

//Function of creating the tweets
function createTweet(){
    var modal = document.querySelector("#create-twit-modal");
    var modalbackdrop = document.querySelector("#modal-backdrop");
    //console.log("create twit element clicked");
    modal.style.display = "block";
    modalbackdrop.style.display = "block";
}

//Function for closing the modal
function CloseModal(){
    var modal = document.querySelector("#create-twit-modal");
    var modalbackdrop = document.querySelector("#modal-backdrop");
    //console.log("close [x] element clicked");
    modal.style.display = "none";
    modalbackdrop.style.display = "none";
    document.querySelector("#twit-text-input").value = "";
    document.querySelector("#twit-attribution-input").value = "";
}

function createTwit(){
    var text = document.getElementById("twit-text-input").value;
    var author = document.getElementById("twit-attribution-input").value;

    //Alerts if input fields are blank
    if(document.querySelector("#twit-text-input").value == "" || document.querySelector("#twit-attribution-input").value == ""){
        alert("Fields are blank!!");
        return;
    }

    var elem = document.createElement('article');
    var articeElem = elem ;
    elem.setAttribute('class','twit');
    document.querySelector('.twit-container').append(elem);

    var innerelem1 = document.createElement('div');
    innerelem1.setAttribute('class','twit-icon');
    elem.append(innerelem1);
    elem = innerelem1;

    var innerelem2 = document.createElement('i');
    innerelem2.setAttribute('class','fa fa-bullhorn');
    elem.append(innerelem2);
    //elem = innerelem2;

    var innerelem3 = document.createElement('div');
    var twitcontentelem = innerelem3;
    innerelem3.setAttribute('class','twit-content');
    articeElem.append(innerelem3);
    elem = innerelem3;


    var innerelem4 = document.createElement('p');
    innerelem4.setAttribute('class','twit-text');
    innerelem4.textContent = text;
    elem.append(innerelem4);
    //elem = innerelem;


    var innerelem5 = document.createElement('p');
    innerelem5.setAttribute('class','twit-attribution');
    twitcontentelem.append(innerelem5);
    elem = innerelem5;

    var innerelem6 = document.createElement('a');
    innerelem6.setAttribute('href','#');
    innerelem6.textContent = author;
    elem.append(innerelem6);
    //elem = innerelem6;

    //Close the modal
    CloseModal();

}


//Search through the twit content
function search(){
    var searchfieldcontent = document.getElementById("navbar-search-input").value;
    document.querySelectorAll('.twit-content').forEach(function(item){
        var a = item.innerText.includes(searchfieldcontent);
        console.log(a);
        if(!a) {
            item.parentNode.remove();
        }
    })
}

// //Search button and hiding elements
document.querySelector("#navbar-search-button").addEventListener("click", function(){
    search();
    //var searching = document.getElementById("navbar-search-input").value;
    //console.log("search button pressed");
    //console.log("search value input: "+searching);
    document.getElementById("navbar-search-input").value = "";
});

//Text input and writing to html, NOT using innerhtml
document.querySelector(".modal-accept-button").addEventListener("click", function(){
    //debug
    //console.log("twit input: " ,twitinput);
    createTwit();

});

//Show modal
document.querySelector("#create-twit-button").addEventListener("click", function(){
    createTweet();
});

//Hide modal and clear text input boxes when [x] is pressed
document.querySelector(".modal-close-button").addEventListener("click", function(){
    CloseModal();
});

//Hide modal and clear text input boxes when cancel is pressed
document.querySelector(".modal-cancel-button").addEventListener("click", function(){
    CloseModal();
});

//Clicking outside of popup closes popup and clears text
window.onclick = function(event) {
    var modal = document.querySelector("#create-twit-modal");
    var modalbackdrop = document.querySelector("#modal-backdrop");
    if (event.target == modal) {
        modal.style.display = "none";
        modalbackdrop.style.display = "none";
        document.querySelector("#twit-text-input").value = "";
        document.querySelector("#twit-attribution-input").value = "";
    }
};
