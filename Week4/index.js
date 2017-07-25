/*
 * Add your JavaScript to this file to complete the assignment.
 */

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
    document.getElementById("navbar-search-input").value = "Search...";
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


//Below here are various attempts and older processes of code. Disregard.


// //var createbutton = document.querySelector("#create-twit-button");
//
// //var closebutton = document.querySelector("#modal-close-button");
//
// var modal = document.querySelector("#create-twit-modal");
//
// var modalbackdrop = document.querySelector("#modal-backdrop");
//
// // Text input into modal
// var twitinput = document.getElementById("twit-text-input").value;
//
// //Text input into author
// var authorinput = document.getElementById("twit-attribution-input").value;
//
// //var articledisplay = document.querySelector(".twit");
// //var theNewArticle = document.querySelector("article div.twit-content");
// var theNewArticle = document.querySelector("article");
// var newnode = theNewArticle.cloneNode(true);
//
//
// //Experimenting with searching through html
// function searching(){
//     var x = document.getElementById("navbar-search-input");
//     return x;
// }
// function search() {
//
//     var name = document.getElementById("navbar-search-input").value;
//     var pattern = name.toLowerCase();
//     //console.log(pattern);
//     var targetId = "";
//
//     var divs = document.querySelectorAll("#twit-text");
//     for (var i = 0; i < divs.length; i++) {
//         var para = divs[i].getElementsByTagName("p");
//         var index = para[0].innerText.toLowerCase().indexOf(pattern);
//         if (index != -1) {
//             targetId = divs[i].parentNode.id;
//             document.querySelector(".twit").removeChild();
//             console.log("in the if statement..")
//             break;
//         }
//         else{
//             console.log("in the else statement...")
//             break;
//         }
//     }
// }
//
// function valuesearch (){
//     if((document.querySelectorAll("twit-text").value) === document.getElementById("navbar-search-input").value)
//     {
//         document.querySelector("twit-container").remove();
//     }
// }
// function SearchTweeter() {
//     var filterElem = document.getElementById('twit-content'),
//         items = document.querySelectorAll('#twit-text p'),
//         itemText = [].map.call(items, function(elem) {
//             return elem.innerText.toLowerCase();
//         });
//
//     document.addEventListener('input', function() {
//             var filter = filterElem.value.toLowerCase();
//             for(var i = 0; i < items.length; i++) {
//                 if(itemText[i].indexOf(filter) != -1) {
//                     items[i].style.display = 'list-item';
//                 } else {
//                     items[i].style.display = 'none';
//                 }
//             }
//         });
// }
// function addArticle (e){
//
//     var newarticle = document.getElementsByTagName("twit");
//     var newtwittext = document.createTextNode(e);
//     //newarticle.appendChild(newtwittext)[2];
//
//     var currentDiv = document.querySelector("#twit");
//     document.body.insertBefore(newarticle, currentDiv);
// }
//
// function addElement () {
//
//     var twitinput = document.getElementById("twit-text-input").value;
//     var newDiv = document.createElement("div");
//     var newContent = document.createTextNode(twitinput);
//     newDiv.appendChild(newContent);
//
//
//     var currentDiv = document.getElementById("twit-container");
//     document.body.insertBefore(newDiv, currentDiv.firstChild);
//
//     //article.classList.add("class1");
//
//     //console.log("twit input: " +twitinput);
// }
//
// //document.getElmentsById("twit-container").appendChild(newnode);
//
// //Experimenting with search button and hiding elements
// document.querySelector("#navbar-search-button").addEventListener("click", function(){
//     console.log("search button pressed");
//     console.log("search value input: "+searching().value);
//     document.getElementById("navbar-search-input").value = "Search...";
//
//     //document.querySelector("#twit").style.display = "none";
// });
//
// //Experimenting with text input and writing to html, NOT using innerhtml
// document.querySelector(".modal-accept-button").addEventListener("click", function(){
//     //console.log("modal accept element clicked");
//     //console.log("twit input: " +twitinput.value);
//     //console.log("Author input: "+authorinput.value);
//
//     console.log("twit input: " ,twitinput);
//     //console.log("Author input: "+authorinput.value);
//     addElement(twitinput);
//
//     //addArticle(twitinput);
//
//
//     //document.querySelector(".twit-text").replaceChild(+twitinput);
//    // document.querySelector(".twit-attribution").appendChild(+authorinput);
//
//     //document.querySelector(".twit-container").appendChild(newnode);
//
//     alert("Twit Submitted!");
//     modal.style.display = "none";
//     modalbackdrop.style.display = "none";
//     document.querySelector("#twit-text-input").value = "";
//     document.querySelector("#twit-attribution-input").value = "";
// });
//
// //Show modal
// document.querySelector("#create-twit-button").addEventListener("click", function(){
//     console.log("create twit element clicked");
//     modal.style.display = "block";
//     modalbackdrop.style.display = "block";
// });
//
// //Hide modal and clear text input boxes when [x] is pressed
// document.querySelector(".modal-close-button").addEventListener("click", function(){
//     console.log("close [x] element clicked");
//     modal.style.display = "none";
//     modalbackdrop.style.display = "none";
//     document.querySelector("#twit-text-input").value = "";
//     document.querySelector("#twit-attribution-input").value = "";
// });
//
// //Hide modal and clear text input boxes when cancel is pressed
// document.querySelector(".modal-cancel-button").addEventListener("click", function(){
//     console.log("cancel element clicked");
//     modal.style.display = "none";
//     modalbackdrop.style.display = "none";
//     document.querySelector("#twit-text-input").value = "";
//     document.querySelector("#twit-attribution-input").value = "";
// });
//
// //Clicking outside of popup closes popup and clears text
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         modalbackdrop.style.display = "none";
//         document.querySelector("#twit-text-input").value = "";
//         document.querySelector("#twit-attribution-input").value = "";
//     }
// };

