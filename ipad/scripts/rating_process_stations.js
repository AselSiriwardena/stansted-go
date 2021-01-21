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


db.collection("stations").doc('lb568IJxcibiauAEwzAI').collection('Ratings').get().then((snapshot) => {
    snapshot.forEach(function (x) {

        count = count + 1;
        total_rating = total_rating+parseInt(x.data().rating,10)
        rating_obj[x.data().rating]=rating_obj[x.data().rating]+1
        console.log("x",parseInt(x.data().rating,10))
    });
    const rating = count?(total_rating/count).toFixed(1):0

    document.getElementById("star5").className = rating===5? "fa fa-star secondary-color-yellow-text":rating>=4.5 ? "fas fa-star-half-alt secondary-color-yellow-text":"fa fa-star-o secondary-color-yellow-text";
    document.getElementById("star4").className = rating>=4? "fa fa-star secondary-color-yellow-text":rating>=3.5 ? "fas fa-star-half-alt secondary-color-yellow-text":"fa fa-star-o secondary-color-yellow-text";
    document.getElementById("star3").className = rating>=3? "fa fa-star secondary-color-yellow-text":rating>=2.5 ? "fas fa-star-half-alt secondary-color-yellow-text":"fa fa-star-o secondary-color-yellow-text";
    document.getElementById("star2").className = rating>=2? "fa fa-star secondary-color-yellow-text":rating>=1.5 ? "fas fa-star-half-alt secondary-color-yellow-text":"fa fa-star-o secondary-color-yellow-text";
    document.getElementById("star1").className = "fa fa-star secondary-color-yellow-text";

    document.getElementById("bar5").style.width= count ? ((rating_obj["1"]/count)*200).toString()+'px' : '0px';
    document.getElementById("bar1").style.width= count ? ((rating_obj["5"]/count)*200).toString()+'px' : '0px';
    document.getElementById("bar2").style.width= count ? ((rating_obj["4"]/count)*200).toString()+'px' : '0px';
    document.getElementById("bar3").style.width= count ? ((rating_obj["3"]/count)*200).toString()+'px' : '0px';
    document.getElementById("bar4").style.width= count ? ((rating_obj["2"]/count)*200).toString()+'px' : '0px';

    var span = document.getElementById("rating_value");
    var span2 = document.getElementById("review_count");
    span.textContent = rating.toString();
    span2.textContent = " ( "+count.toString()+" )";
});
console.log("x2",total_rating,count)


console.log("rating",rating)