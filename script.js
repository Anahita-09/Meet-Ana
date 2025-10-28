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

laptop.addEventListener("click", function showLaptopInfo() {
    itemInfo.innerHTML = "<h1>Laptop</h1><p></p>";
});
wallet.addEventListener("click", function showWalletInfo() {
    itemInfo.innerHTML = "<h1>Wallet</h1><p>♾️ My wallet contains the flower my boyfriend gave me.</p>";
});
keychains.addEventListener("click", function showKeychainsInto() {
    itemInfo.innerHTML = "<h1>Keychains</h1><p> ♾️ I'm very emotionally connected to these keychains given by my boyfriend. Backstory - I lost one of them once, and he brought the exact same one for me again <3</p>";
});
headphones.addEventListener("click", function showHeadphonesInfo() {
    itemInfo.innerHTML = "<h1>Headphones</h1><p>♾️ Sony Headphones! I usually listen to Punjabi songs on this (Though I barely understand them).</p>";
});
woodenBox.addEventListener("click", function showWoodenBoxInfo () {
    itemInfo.innerHTML = "<h1>Wooden Box</h1><p>♾️ My Boyfriend made this box for me, it has our ship name written on it.</p>";
});
phone.addEventListener("click", function showPhoneInfo () {
    itemInfo.innerHTML = "<h1>Phone</h1><p>♾️ My phone case represents my hope to fly back to India soon.</p>";
});
cake.addEventListener("click", function showCakeInfo () {
    itemInfo.innerHTML = "<h1>Cake</h1><p>♾️ I always have this cake from Tours Les Jours, my favorite bakery!</p>";
});
