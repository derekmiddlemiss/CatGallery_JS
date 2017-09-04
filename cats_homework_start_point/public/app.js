var app = function(){

  var newCat = document.createElement( 'ul' );
  newCat.classList.add( 'cat' );

  var nameEntry = document.createElement( 'li' );
  nameEntry.innerText = "Name: Oscar";
  var foodEntry = document.createElement( 'li' );
  foodEntry.innerText = "Favourite food: Everything, always, but particularly biscuits and catnip";
  var imageEntry = document.createElement( 'li' );
  var image = document.createElement( 'img' );
  image.src = "http://i.pinimg.com/originals/5f/80/aa/5f80aa46080aa3c1c8d6da1d870ceebb.jpg"
  image.width = "500";

  imageEntry.appendChild( image );
  newCat.appendChild( nameEntry );
  newCat.appendChild( foodEntry );
  newCat.appendChild( imageEntry );

  var cats = document.querySelector( '#cats' );
  cats.appendChild( newCat );

}

window.onload = app;