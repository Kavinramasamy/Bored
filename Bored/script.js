//API link for random activity

url = "https://www.boredapi.com/api/activity/";

//Function to get random activity

async function getNewActivity() {
    await fetch(url)
        .then((response) => response.json())
        .then((data) => setActivity(data))
        .catch((error) => alert("Reload the page..." + error));

}
//Function to set Activity

function setActivity(source) {

    document.getElementsByClassName("activityType")[0].innerHTML = source.type.charAt(0).toUpperCase() + source.type.slice(1);;
    document.getElementsByClassName("card-text")[0].innerHTML = source.activity;
    let websiteLink = source.link;
    if (websiteLink.length !== 0) {
        document.getElementsByClassName("website")[0].href = websiteLink;
        document.getElementsByClassName("website")[0].style.display = "block";
    }
}
//Function call
getNewActivity();
