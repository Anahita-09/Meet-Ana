var bag = document.getElementById("bag");
bag.addEventListener("click", showBagItems);

var bagInstruction = document.getElementById("bag-instructions");

var clickItems = document.getElementById("click-items");
clickItems.style.display = "none";

var itemInfo = document.getElementById("item-info");
itemInfo.style.display = "none";

var laptop =document.getElementById("laptop");
var wallet = document.getElementById("wallet");
var keychains = document.getElementById("keychains");
var headphones = document.getElementById("headphones");
var woodenBox = document.getElementById("woodenBox");
var phone = document.getElementById("phone");
var cake = document.getElementById("cake");

var bagItem = [laptop, wallet, keychains, headphones, woodenBox, phone, cake];

function showBagItems() {
    console.log("bag clicked");
    bagInstruction.innerHTML = "<p>Click an item to know its story!</p>";
    
    bag.src = "backpack/open-bag.png";
    bag.style.margin = "0";
    bag.style.padding = "0";
    bag.style.width = "25%";
    bag.style.height = "15%";

    clickItems.style.display = "grid";
    clickItems.style.width = "75%";
    itemInfo.style.display = "block";
    itemInfo.innerHTML = "<h1>The Tale!</h1>";
    bagItem.forEach(function(item) {
        item.style.display = "block";
    })
}

const bagItem = {
    laptop: "♾️",
    wallet: "♾️ My wallet contains the flower my boyfriend gave me.",
    keychains: "♾️ I'm very emotionally connected to these keychains given by my boyfriend. Backstory - I lost one of them once, and he brought the exactly same one again <3",
    headphones: "♾️ Sony Headphones! I usually listen to Punjabi songs (Though I barely understand them)",
    woodenBox: "♾️ My boyfriend made this box for me which has our ship name written on it.",
    phone: "♾️ My phone cover represents my hope to soon fly back to India.", 
    cake: "♾️ I always have this cake from Tours Les Jours, my favorite bakery!"
};


