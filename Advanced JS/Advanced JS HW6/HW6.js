let searchYourIp= document.querySelector(".btn");

searchYourIp.addEventListener("click", ()=>{
    async function ipInfo(link){
        let response = await fetch(link);
        let ip=await response.json();
        let responseLink=await fetch(`http://ip-api.com/json/${ip.ip}?fields=continent,country,regionName,city,district`);
        let yourDetails=await responseLink.json();

        let yourAdress=document.createElement("div");
        yourAdress.innerHTML=`
        <h3>Попался</h3>
        <p>Твой континент: ${yourDetails.continent}</p>
        <p>Твоя страна: ${yourDetails.country}</p>
        <p>Твой регион: ${yourDetails.regionName}</p>
        <p>Твой город: ${yourDetails.city}</p>
        <p>Твой район: ${yourDetails.district = "-"}</p>`;

        searchYourIp.after(yourAdress);
    }

    ipInfo("https://api.ipify.org/?format=json");
});

