var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/Google_Chrome_Logo.png');
    }
    var myBotton = document.querySelector('button');
    var myHeading = document.querySelector('h1');
    
    function setUserName(){
        var myName = prompt('Please enter your name.');
        localStorage.setItem('name, myName');
        myHeading.innerHTML = 'Mozilla is cool' + myName;
    }
    if(!localStorage.getItem('name')){
        setUserName();
    }else{
        var storedName = localStorage.getItem('name');
        myHeading.innerHTML = 'Mozilla is cool,' + storedName;
    }
    myBotton.onclick = function(){
        setUserName();
    }
}