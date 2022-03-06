$.ajax({

    url : 'https://openmensa.org/api/v2/canteens/79/meals',
    type : 'GET',
    dataType:'json',
    success : function(data) {              
        console.log(data[0].meals);
        if(data[1].closed){
            noFood();
        }
        else{
            showMeals(data[1].meals);
        }
    }
});

function showMeals(meals){
    let mealsID = $("#meals");
    mealsID.append(`<div class="main">
    <h1>Alte Mensa</h1>
    <ul class="cards">${generateCards(meals)}
    </ul>
    </div>`);
}

function generateCards(meals){
    let mealsID = $("#meals");
    let cards = ``;

    for(let i = 0; i < meals.length; i++){
         cards= cards + `<li class="cards_item">
         <div class="card">
           <div class="card_content">
               <h2 class="card_title">${meals[i].name}</h2>
               <div>
               <p class="card_text">Students:&nbsp;&nbsp;${meals[i].prices.students}&#8364;</p>
               <p class="card_text">Employees: ${meals[i].prices.employees}&#8364;</p>
               </div>
             </div>
         </div>
       </li>`;
       
    }
    return cards;
}

function noFood(){
    let mealsID = $("#meals");
    mealsID.append(`<p class="s-closed">There is no food today, kids!</p>`);
}
