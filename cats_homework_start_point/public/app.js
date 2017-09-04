var app = function(){

  cat1 = {
    name: "Boba",
    food: "Sock fluff",
    imageSRC: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
  };

  cat2 = {
    name: "Barnaby",
    food: "Tuna",
    imageSRC: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
  };

  cat3 = {
    name: "Max",
    food: "Whiskas Temptations",
    imageSRC: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
  };

  cat4 = {
    name: "Clawscar",
    food: "Everything, always, but particularly biscuits and catnip",
    imageSRC: "http://i.pinimg.com/originals/5f/80/aa/5f80aa46080aa3c1c8d6da1d870ceebb.jpg"
  };

  cats = [ cat1, cat2, cat3, cat4 ];

  processCats( cats );

}

var processCats = function( cats ){
  for ( cat of cats ){
    addCat( cat.name, cat.food, cat.imageSRC );
  }
}

var addCat = function( name, food, imageSRC ){
  var newCat = createElement( { tag: "ul", class: "cat" } );   
  var nameEntry = createElement( { tag: "li", innerText: "Name: " + name }); 
  var foodEntry = createElement( { tag: "li", innerText: "Favourite food: " + food }); 
  var imageEntry = createElement( { tag: "li" });
  var image =  createElement( { tag: "img", src: imageSRC, width: "500" } ); 

  imageEntry.appendChild( image );
  newCat.appendChild( nameEntry );
  newCat.appendChild( foodEntry );
  newCat.appendChild( imageEntry );

  var cats = document.querySelector( '#cats' );
  cats.appendChild( newCat );
}

var createElement = function( params ){
  var element = document.createElement( params.tag );
  if ( params.class ) element.classList.add( params.class );
  if ( params.innerText ) element.innerText = params.innerText;
  if ( params.src ) element.src = params.src;
  if ( params.width ) element.width = params.width;
  return element;
}

window.onload = app;