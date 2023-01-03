const adviceApi = "https://api.adviceslip.com/advice";

const adviceBtn = document.querySelector('.dice');
const showAdvice = document.querySelector(".advices");
const adviceId = document.querySelector(".id");


// Getting the API using .then or promises
fetch(adviceApi)
    .then(response => response.json())
    .then(json => {
        // console.log(json)
        adviceId.innerHTML = json.slip.id;
        showAdvice.textContent = json.slip.advice;
    });
    
const getApi =()=>{
    fetch(adviceApi)
    .then(response => response.json())
    .then(json => {
        // console.log(json)
        adviceId.innerHTML = json.slip.id;
        showAdvice.textContent = json.slip.advice;
    });
}
// update it in Btn
adviceBtn.onclick=()=>getApi();

// Or this function but the first one is kinda better

// adviceBtn.onclick=()=>{
//     fetch(adviceApi).then((data)=>{
//         return data.json();
//     }).then((app) =>{
//         console.log(app.slip)
//         adviceId.innerHTML = app.slip.id;
//         showAdvice.innerHTML = app.slip.advice;
//     })
// }