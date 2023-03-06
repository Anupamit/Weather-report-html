console.log("Hey i am js");

let searchCity=document.getElementById("searchCity");
let cityName=document.getElementById("cityName");
let temp=document.getElementById("temp");

let search = async()=>{
    let inputValue=searchCity.value
    if (inputValue == "") {
        alert("Please enter city name before search");//error message
    } else {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        console.log(url);
        let response = await fetch(url)
        let data =await response.json()

        if (data.name) {
            cityName.textContent=`${data.name} , ${data.sys.country}`
        }else{
            cityName.textContent = "Not Found / You have written wrong CityName"
        }
        
        temp.textContent=data.main.temp
        console.log(data);
    }
    
}