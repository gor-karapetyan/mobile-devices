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


//function changeInput() {
    document.getElementById('signInBtn').onclick = function() {
        openNextSlide();
        document.querySelector('.vkc__EnterLogin__input.signInBtn_login').classList.remove('layout');
    }
    document.getElementById('signUpBtn').onclick = function() {
        openNextSlide();
        document.querySelector('.vkc__EnterLogin__input.signUpBtn_phone').classList.remove('layout');
        document.getElementById('send').classList.add('layout');
        document.getElementById('send2').classList.remove('layout');
    }
//}


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


    ((document.getElementById("name").addEventListener) || (document.getElementById("validNumber")))("keyup", function() {
    var nameInput = document.getElementById('name').value;
    var input = document.getElementById('validNumber').value;


    if (nameInput != "" || input != "") {
        //document.getElementById('send').removeAttribute("disabled");
        document.getElementById('send2').classList.remove('vkc__Button__disabled');
        document.getElementById('send').classList.remove('vkc__Button__disabled');
    } else {
        document.getElementById('send').setAttribute("disabled", null);
        document.getElementById('send').classList.add('vkc__Button__disabled');
        document.getElementById('send2').setAttribute("disabled", null);
        document.getElementById('send2').classList.add('vkc__Button__disabled');
        
    }
});





function emailValid() {
    
    var emailID = document.getElementById("name");
    emailID.value=document.getElementById('name').value;
    //atpos = emailID.indexOf("@");
    //dotpos = emailID.lastIndexOf(".");
    //re = /\S+@\S+\.\S+/;
    re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
        //return re.test(email);
    if (/*atpos < 1 || ( dotpos - atpos < 2 ) ||*/ (re.test(emailID.value) !== true))
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



document.getElementById('validNumber').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = '+' + x[1] + ' ' + x[2] + '-' + x[3] + '-' + x[4] + '-' + x[5];
});




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



var input = document.getElementById('validNumber');

var id = "id" + Math.random().toString(16).slice(2);
var val = "phone";

function localStor() {
    if(input.value === null) {
        const button = document.querySelector('#send2');

        const disableButton = () => {
            button.disabled = true;
        };

        button.addEventListener('click', disableButton);
    }else{
        // Put the object into storage
        localStorage.setItem(`${id}`,val + " " + input.value);

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem(`${id}`);

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
        console.log(id);
    }

}



/*document.getElementById('validNumber').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = '+(' + x[1] + ') ' + x[2] + '-' + x[3] + '-' + x[4] + '-' + x[5];
  });*/



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

//var phoneNumber = document.getElementById('validNumber');
/*const handleClick=()=>{
    // getting the reference of myPhone input
    var input = document.getElementById("validNumber").value;
    // format for the phone number
    var format = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    // conditional statements
    if(input===''){
        alert("Please Enter Phone Number")
    }
    else if(input.match(format)){
        alert("Phone Number: "+ input);
    }
    else{
        alert("Type using correct format");
    }
    localSt();
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