let slideOrder = ['ej1', 'ej2'];

function openNextSlide() {
    let currentVisible = document.querySelector('.layout.visible');
    if(currentVisible === null) {
        console.log("No any visible slides");
        return;
    }
    let slide = currentVisible.dataset.slide;
    let index = slideOrder.indexOf(slide);
    if(slideOrder[index + 1] !== undefined) {
        
        let nextSlide = document.querySelector(`[data-slide="${slideOrder[index + 1]}"]`);
        if(nextSlide !== null) {
            currentVisible.classList.remove('visible');
            nextSlide.classList.add('visible');
        }
    }
    /*localSt();*/
    myFunction();
    /*checkMediaQuery();*/
}




let currentV = document.querySelector('.vkc__Auth__pageBox.layout');
let currentViv = document.querySelector('.vkc_001.layout');
let fractal = document.querySelector('.g0078.g20.layout');


var mql = window.matchMedia('(max-width: 760px)');

function myFunction() {
    mql.onchange = (e) => {
        if (e.matches) {
            /* the viewport is 600 pixels wide or less */
            currentV.style.display = 'none';
            currentViv.style.display = 'block';
            fractal.style.display = 'none';

            document.body.style.backgroundColor = "yellow";
            console.log('This is a narrow screen — less than 600px wide.')
      } else {
            /* the viewport is more than 600 pixels wide */
            currentV.style.display = 'block';
            currentViv.style.display = 'none';
            
            document.body.style.backgroundColor = "pink";
            console.log('This is a wide screen — more than 600px wide.')
        }
    }
}


    document.getElementById("name").addEventListener("keyup", function() {
    var nameInput = document.getElementById('name').value;


    if (nameInput != "") {
        //document.getElementById('send').removeAttribute("disabled");
        document.getElementById('send').classList.remove('vkc__Button__disabled');
    } else {
        document.getElementById('send').setAttribute("disabled", null);
        document.getElementById('send').classList.add('vkc__Button__disabled');
        
    }
});





function emailValid() {
    var emailID = document.getElementById("name").value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || ( dotpos - atpos < 2 ))
    {
        document.querySelector('.vkc__TextField__icon').classList.remove('layout');
        document.querySelector('.vkc__TextField__tooltip').classList.remove('layout');
        document.querySelector('.vkc__TextField__input').classList.add('vkc__TextField__errorIcon1');
        //alert("Please enter correct email ID");
        //return false;
    }else{
        localSt();
        /*openNextSlide()*/
    }
}




var inputEmail= document.getElementById("name");

var id = "id" + Math.random().toString(16).slice(2);
var value = "email";

function localSt() {
    if(inputEmail.value === null) {
        const button = document.querySelector('#send');

        const disableButton = () => {
            button.disabled = true;
        };

        button.addEventListener('click', disableButton);
    }else{
        // Put the object into storage
        localStorage.setItem(`${id}`,value + " " + inputEmail.value);

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem(`${id}`);

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        console.log(id);
    }

}





/*//var inputEmail= document.getElementById("name");
function emailValid() {
    //email = $('inputEmail');
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(inputEmail.value)) {
        alert("is valid email");
    // Yay! valid
    //return true;
    }else{
        alert("is not valid email");
        //{return false;}
    }
}*/

/*var testObject = { 'name': "Gor", 'lastName': "Karapetyan", 'age': 25, 'emailAddress': "gorkarapetyan@gmail.com" };

var id = "id" + Math.random().toString(16).slice(2);


function localSt() {
    // Put the object into storage
    localStorage.setItem(`${id}`, JSON.stringify(testObject));

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(`${id}`);

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    console.log(id);
}*/


/*function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth <= 760) {
        // Then log this message to the console
        document.querySelector('.vkc__Auth__pageBox.layout').style.display = 'none';
        document.querySelector('.g0078.g20.layout').style.display = 'none';
        document.querySelector('.vkc_001.layout').style.display = 'block';
    }
    /*if (window.innerWidth > 760) {
        // Then log this message to the console
        document.querySelector('.vkc__Auth__pageBox').style.display = 'block';
        document.querySelector('.vkc_001').style.display = 'none';
    }
}*/