//Global Variables:

var breadObject = {
  quick: {
    lean: {name:"Flatbread", link:"https://foodwishes.blogspot.com/2014/11/homemade-flatbread-if-your-have-flour.html", pic:"https://images.pexels.com/photos/3624709/pexels-photo-3624709.jpeg"},
    enriched: {name:"Soda Bread", link:"https://www.allrecipes.com/recipe/16947/amazingly-easy-irish-soda-bread/", pic:"https://images.pexels.com/photos/3992223/pexels-photo-3992223.jpeg"},
    rich: {name:"Biscuits", link:"https://www.allrecipes.com/recipe/20075/basic-biscuits/", pic:"https://images.pexels.com/photos/139746/pexels-photo-139746.jpeg"},
  },
  medium: {
    lean: {name:"Ciabatta", link:"https://www.bakedbyanintrovert.com/ciabatta-bread/", pic:"https://cdn.pixabay.com/photo/2017/04/19/03/05/ciabatta-2241067_960_720.jpg"},
    enriched: {name:"Focaccia", link:"https://www.bonappetit.com/recipe/focaccia-bread", pic:"https://upload.wikimedia.org/wikipedia/commons/8/86/La_focaccia_appena_sfornata.jpg"},
    rich: {name:"Brioche", link:"https://www.finecooking.com/recipe/authentic-brioche", pic:"https://upload.wikimedia.org/wikipedia/commons/5/51/Sicilian_brioche.jpg"},
  },
  long: {
    lean: {name:"Baguette", link:"https://bewitchingkitchen.com/tag/peter-reinharts-baguettes/", pic:"https://cdn.pixabay.com/photo/2019/10/07/06/53/bread-4531842_960_720.jpg"},
    enriched: {name:"Bagels", link:"http://nationalgeographic.com/culture/food/the-plate/2014/04/23/recipes-worth-trying-peter-reinharts-bagels/", pic:"https://storage.needpix.com/rsynced_images/bagel-1434064_1280.jpg"},
    rich: {name:"Croissants", link:"https://bewitchingkitchen.com/tag/peter-reinhart-croissants/", pic:"https://cdn.pixabay.com/photo/2019/03/24/14/23/bread-4077812_960_720.jpg"},
  },
}

var submitBtn = $(".submit");


// Event Listeners

submitBtn.on("click", appendBreadInfo);


// Event Handlers & Call-back Functions
function appendBreadInfo(event){
  event.preventDefault();
  var time = $(".time").val();
  var doughType = $(".doughType").val();
  var breadRec = breadObject[time][doughType];
  var container = $(".container");
  
  container.append(`<div class="breadRec">
    <p>${breadRec.name}</p>
    <a href="${breadRec.link}"><img src="${breadRec.pic}"></a></div>
  `)
}
