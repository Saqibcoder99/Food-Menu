// const dishes = [
//   {
//     id: 1,
//     category: "breakfast",
//     title: "Halwa Puri",
//     price: 650,
//     description: "Traditional halwa puri served with chickpeas and potato curry.",
//     rating: 4.9,
//     reviews: 320,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhW40P-wPCa5tIQGnSLkqMlwC0JIcwSbb_QQTFQi2CP8ym_5ygpFRqWgI&s=10"
//   },
//     {
//     id: 1,
//     category: "breakfast",
//     title: "Paratha",
//     price: 650,
//     description: "Fully cheeze parathaa.",
//     rating: 4.9,
//     reviews: 350,
//     image: "https://tse1.mm.bing.net/th/id/OIP.9HE3CrwYOomEfzo_f2GYrQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
//   },
//   {
//     id: 2,
//     category: "breakfast",
//     title: "Omelette Toast",
//     price: 380,
//     description: "Cheese omelette with butter toast.",
//     rating: 4.7,
//     reviews: 180,
//     image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600"
//   },
//   {
//     id: 3,
//     category: "breakfast",
//     title: "Pancakes",
//     price: 750,
//     description: "Fluffy pancakes with maple syrup.",
//     rating: 4.8,
//     reviews: 260,
//     image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600"
//   },
//   {
//     id: 4,
//     category: "fast-food",
//     title: "Paratha Roll",
//     price: 420,
//     description: "Crispy paratha served with chicken filling.",
//     rating: 4.6,
//     reviews: 210,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYLEjk8FACm0u6y8yTJ4CrHDTnE2SalaAzRdP3EmRC2CRGnlwvZj6iEA&s=10"
//   },

//   {
//     id: 5,
//     category: "lunch",
//     title: "Chicken Biryani",
//     price: 550,
//     description: "Authentic Pakistani chicken biryani.",
//     rating: 4.9,
//     reviews: 520,
//     image: "https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11.jpg"
//   },
//   {
//     id: 6,
//     category: "lunch",
//     title: "Chicken Karahi",
//     price: 1450,
//     description: "Traditional chicken karahi with naan.",
//     rating: 4.8,
//     reviews: 410,
//     image: "https://www.shutterstock.com/image-photo/authentic-desi-seal-chicken-karahi-260nw-2579767405.jpg"
//   },
//   {
//     id: 7,
//     category: "lunch",
//     title: "Tandori Chicken",
//     price: 990,
//     description: "Healthy grilled chicken with vegetables.",
//     rating: 4.7,
//     reviews: 185,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYUUveT4_lyoaLpighy0BQpRrKPHmOF-1d_lHGtCwIXA&s=10"
//   },
//   {
//     id: 8,
//     category: "lunch",
//     title: "Chicken Handi",
//     price: 1350,
//     description: "Creamy chicken handi served with naan.",
//     rating: 4.8,
//     reviews: 340,
//     image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600"
//   },

//   {
//     id: 9,
//     category: "dinner",
//     title: "Beef Nihari",
//     price: 890,
//     description: "Slow-cooked beef nihari with naan.",
//     rating: 4.9,
//     reviews: 470,
//     image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600"
//   },
//   {
//     id: 10,
//     category: "dinner",
//     title: "Mutton Kebab",
//     price: 780,
//     description: "Juicy mutton seekh kebabs.",
//     rating: 4.8,
//     reviews: 250,
//     image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600"
//   },
//   {
//     id: 11,
//     category: "dinner",
//     title: "Chicken Alfredo Pasta",
//     price: 1150,
//     description: "Creamy pasta with grilled chicken.",
//     rating: 4.7,
//     reviews: 210,
//     image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600"
//   },
//   {
//     id: 12,
//     category: "dinner",
//     title: "Grilled Fish",
//     price: 1600,
//     description: "Fresh grilled fish with lemon butter.",
//     rating: 4.8,
//     reviews: 160,
//     image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600"
//   },

//   {
//     id: 13,
//     category: "fast-food",
//     title: "Zinger Burger",
//     price: 690,
//     description: "Crispy chicken zinger burger.",
//     rating: 4.8,
//     reviews: 510,
//     image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
//   },
//   {
//     id: 14,
//     category: "fast-food",
//     title: "Beef Burger",
//     price: 850,
//     description: "Juicy beef burger with cheddar cheese.",
//     rating: 4.7,
//     reviews: 340,
//     image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600"
//   },
//   {
//     id: 15,
//     category: "fast-food",
//     title: "Pepperoni Pizza",
//     price: 1790,
//     description: "Cheesy pepperoni pizza with extra toppings.",
//     rating: 4.9,
//     reviews: 430,
//     image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
//   },
//   {
//     id: 16,
//     category: "fast-food",
//     title: "Loaded Fries",
//     price: 590,
//     description: "Crispy fries with cheese and sauce.",
//     rating: 4.6,
//     reviews: 230,
//     image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600"
//   },

//   {
//     id: 17,
//     category: "drinks",
//     title: "Fresh Orange Juice",
//     price: 350,
//     description: "Freshly squeezed orange juice.",
//     rating: 4.8,
//     reviews: 120,
//     image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600"
//   },
//   {
//     id: 18,
//     category: "drinks",
//     title: "Mango Shake",
//     price: 420,
//     description: "Creamy fresh mango shake.",
//     rating: 4.9,
//     reviews: 220,
//     image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600"
//   },
//   {
//     id: 19,
//     category: "drinks",
//     title: "Mint Lemonade",
//     price: 280,
//     description: "Refreshing mint lemonade.",
//     rating: 4.7,
//     reviews: 170,
//     image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600"
//   },
//   {
//     id: 20,
//     category: "drinks",
//     title: "Cold Coffee",
//     price: 450,
//     description: "Chilled coffee with whipped cream.",
//     rating: 4.8,
//     reviews: 260,
//     image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
//   }
// ];
async function dishesApi() {
  const response= await fetch("https://dummyjson.com/recipes?limit=50")
  const data = await response.json();    
  renderDish(data.recipes)   
}
dishesApi()
const popularCards = document.querySelector(".popular-cards")
let input=document.getElementById("input")
 let visibleDish = "4";

                    // Button
const viewBtn=document.querySelector(".view-all")
const searchBtn=document.querySelector(".search-btn")
const breakFast=document.getElementById("breakfast")
const lunch=document.getElementById("lunch")
const dinner=document.getElementById("dinner")
const all=document.getElementById("all")
const snack=document.getElementById("snack")
const drink=document.getElementById("drink")
const appetizer=document.getElementById("Appetizer")
const dessert=document.getElementById("dessert")
const categoryBtns=document.querySelectorAll(".category-btn")

  function renderDish(data) {
  popularCards.innerHTML = "";
  data.slice(0,visibleDish).map((dish) => {
    popularCards.innerHTML += `    <div class="food-card">

                        <div class="food-image">

                            <img src="${dish.image}"
                                alt="Pancakes">
                        </div>

                        <div class="food-content">

                            <div class="title-price">

                                <h3>${dish.name}</h3>

                                <span>Serving: ${dish.servings}</span>

                            </div>

                            <p>cuisine: ${dish.cuisine}</p>

                            <div class="food-footer">

                                <div class="rating">
                                    ⭐ ${dish.rating}(240)
                                </div>

                                <button>+</button>

                            </div>

                        </div>

                    </div>`
  })
}
const cardHandler=(data)=>{
return `    <div class="food-card">

                        <div class="food-image">

                            <img src="${data.image}"
                                alt="Pancakes">
                        </div>

                        <div class="food-content">

                            <div class="title-price">

                                <h3>${data.name}</h3>

                                <span>Serving: ${data.servings}</span>

                            </div>

                            <p>cuisine: ${data.cuisine}</p>

                            <div class="food-footer">

                                <div class="rating">
                                    ⭐ ${data.rating}(240)
                                </div>

                                <button>+</button>

                            </div>

                        </div>

                    </div>`
}

let searchHandler=async()=>{
   const response= await fetch("https://dummyjson.com/recipes?limit=50")
  const data = await response.json();  
  if (!input.value.trim()) return alert("please fill the input...");
  let searchValue = input.value;

  let filteredItems = data.recipes.filter((item) => {
    if (
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.name.toLowerCase() == searchValue.toLowerCase()
    ) {
      input.value=" ";
      return item;
    }
  }); 
  
  let cardsHTML = filteredItems.map((item) => {
    return cardHandler(item)
  });
    popularCards.innerHTML = cardsHTML;
      viewBtn.style.display="none"

};
const menu = async(category) => {
   const response= await fetch("https://dummyjson.com/recipes?limit=50")
  const data = await response.json();
  

  let filteredItems = data.recipes.filter((item) => {
    if (category) {
        viewBtn.style.display="none"  
      return item.mealType[0].toLowerCase() == category.toLowerCase();
    } else{
      return true
    }
  });

 let cardsHTML =  filteredItems.map((item) => {
  return cardHandler(item)
});
popularCards.innerHTML = cardsHTML.join("")

}

function setActive(activeCard) {
    categoryBtns.forEach((card) => {
        card.classList.remove("active");
    });

    activeCard.classList.add("active");
}

searchBtn.addEventListener("click",searchHandler)
all.addEventListener("click",()=>{
    visibleDish="4"
      dishesApi();  
      setActive(all);
    viewBtn.style.display="flex"

    })
breakFast.addEventListener("click", () => {
    menu("breakFast");
    setActive(breakFast);
});

lunch.addEventListener("click", () => {
    menu("lunch");
    setActive(lunch);
});

dinner.addEventListener("click", () => {
    menu("dinner");
    setActive(dinner);
});
snack.addEventListener("click", () => {
    menu("snack");
    setActive(snack);
});

appetizer.addEventListener("click", () => {
    menu("appetizer");
    setActive(appetizer);
});
drink.addEventListener("click", () => {
    menu("Beverage");
    setActive(drink);
});

dessert.addEventListener("click", () => {
    menu("dessert");
    setActive(dessert);
});
viewBtn.addEventListener("click",async()=>{
  const response= await fetch("https://dummyjson.com/recipes?limit=50")
  const data = await response.json();
   visibleDish=data.recipes.length;
   dishesApi()
  viewBtn.style.display="none"
})


