var config = {
    apiKey: "AIzaSyDC0db7ssF55Q-yfiGUeCqB8wtHZ4_tyZw",
    authDomain: "ui-ux-b3439.firebaseapp.com",
    projectId: "ui-ux-b3439",
    storageBucket: "ui-ux-b3439.appspot.com",
    messagingSenderId: "628403705685",
    appId: "1:628403705685:web:bebfe39d9d923bbf74c1dc",
    measurementId: "G-CMKJ405F25"
};
// Initialize Firebase
var app = firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
const db = app.firestore();
let total_rating = 0;
let count = 0;
const rating_obj = {1:0,2:0,3:0,4:0,5:0,}


db.collection("Places").doc('place_id_01').collection('Ratings').get().then((snapshot) => {
    snapshot.forEach(function (x) {

        count = count + 1;
        total_rating = total_rating+parseInt(x.data().rating,10)
        rating_obj[x.data().rating]=rating_obj[x.data().rating]+1
        console.log("x",parseInt(x.data().rating,10))
    });
    var newElement=(`
                                            <div class="rating__bars">
                                <div class="rating__bar rating__bar--1">

                                </div>
                                <div class="rating__bar rating__bar--2"></div>
                                <div class="rating__bar rating__bar--3" style="width: ${count?(rating_obj/count)*200:0}px"></div>
                                <div class="rating__bar rating__bar--4"></div>
                                <div class="rating__bar rating__bar--5"></div>
                            </div>

`)
    // var p = document.getElementById("ratingBars");
    // var newElement = document.createElement(newElement);
    // newElement.setAttribute('id', elementId);
    // newElement.innerHTML = html;
    // p.appendChild(newElement);
    // document.getElementById("bar1").style.width=count ? ((rating_obj.1/count)*200): 0;
    // document.getElementById("bar2").style.width=`${count ? (rating_obj.2/count)*200: 0}px`;
    // document.getElementById("bar3").style.width=`${count ? (rating_obj.3/count)*200: 0}px`;
    // document.getElementById("bar4").style.width=`${count ? (rating_obj.4/count)*200: 0}px`;
    // document.getElementById("bar5").style.width=`${count ? (rating_obj.5/count)*200: 0}px`;
    const rating = count?(total_rating/count).toFixed(1):0
    var span = document.getElementById("rating_value");
    span.textContent = rating.toString();
});
console.log("x2",total_rating,count)


console.log("rating",rating)