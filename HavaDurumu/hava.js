const url='https://api.openweathermap.org/data/2.5/';
const key='46c1040dfa8ebfd3f3806b875fa87a3d';
const setQuery=(e) =>{
    if(e.keyCode==13)
    getResult(searcbar.value)
}
const getResult=(cityName) =>{
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather=>{
        return weather.json();
    }).then(displayResult)
}
const displayResult=(result)=>{
    let city=document.querySelector('.city');
    city.innerText=`${result.name},${result.sys.country}`;
    let temp=document.querySelector('.temp');
    temp.innerText=`${Math.round(result.main.temp)}°C`;
    let desc=document.querySelector('.desc');
    desc.innerText=result.weather[0].description;
    let minmax=document.querySelector('.minmax');
    minmax.innerText=`${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;
}
const searcbar=document.getElementById('searchBar');
searcbar.addEventListener('keypress',setQuery);