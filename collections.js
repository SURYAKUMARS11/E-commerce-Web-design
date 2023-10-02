import { products } from "./product.js";

var offerbtn = document.getElementById("offerbtn");

var offerexit = document
  .getElementById("offerexit")
  .addEventListener("click", function () {
    offerbtn.style.display = "none";
  });

var sidenav = document.getElementById("sidnav-titles");

var menubar = document
  .getElementById("menubar")
  .addEventListener("click", function () {
    sidenav.style.marginLeft = "0px";
  });

var clodebar = document
  .getElementById("closebar")
  .addEventListener("click", function () {
    sidenav.style.marginLeft = "-60%";
  });

var container = document.querySelector(".products");
products.forEach((product) => {
  var createItem = document.createElement("div");
  createItem.classList.add("product");
  createItem.innerHTML = ` <img style="width: 20vw;" src="${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`;

  container.append(createItem);
});

var filterList = [];
var tags = document.getElementsByName("tags");
console.log(tags);

tags.forEach((tag) => {
  tag.addEventListener("change", (e) => {
    if (e.target.checked) {
      filterList.push(e.target.value);
      console.log(filterList);
      update();
    } else {
      filterList = filterList.filter((item) => item !== e.target.value);
      update();
    }
  });
});

function update() {
  var productList = document.querySelectorAll(".product");
  for (var i = 0; i < productList.length; i++) {
    var check = false;
    var product = productList[i];
    console.log(product);
    var temp = product.querySelector("tags").innerHTML;

    console.log("elemen" + temp);

    const tempFilterArray = temp.split(",");

    console.log("tempfilterarray" + tempFilterArray);
    console.log("filterlist" + filterList);

    filterList.forEach((j) => {
      tempFilterArray.forEach((i) => {
        if (j == i) {
          check = true;
        }
      });
    });

    if (!check && filterList.length > 0) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  }
}

//  var searchInput = document.getElementById("searchInput");

//  var items = document.querySelector(".container");

//  searchInput.addEventListener("keyup",function(){
//     console.log(items)

//     var enteredvalue = searchInput.value

//     items.forEach(function(el){
//         var itemtext = el.textcontent

//         if(itemtext.indexOf(enteredvalue)<0)
//         {
//             el.style.display = "none"
//         }
//         else{
//             el.style.display = "block"
//         }
//     })

//  })
