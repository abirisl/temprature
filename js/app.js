const API_KEY= `926861c1f8d8372a54f65957daa8f56a`;

const searchTamprature = () =>{
    const searchDistrict= document.getElementById('search-district').value;
    document.getElementById('search-district').value= ''
    

    const url= `https://api.openweathermap.org/data/2.5/weather?q=${searchDistrict}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemprature(data))
}

const searchText= (id,text)=>{
    document.getElementById(id).innerText=text;
}

const displayTemprature = temprature =>{
    console.log(temprature)
    searchText('city-name',temprature.name);
    searchText('city-tempreture',temprature.main.temp);
    searchText('weather',temprature.weather[0].main);
    const url= `http://openweathermap.org/img/wn/${temprature.weather[0].icon}@2x.png`;
    const tempIcon= document.getElementById('weather-icon');
    tempIcon.setAttribute('src',url);
    console.log(url)

}