function rand(upperbd){
    return Math.floor(Math.random()*upperbd);
}



function justDoIt(){
    console.log(rand(4))
var shoe1 = "https://4.kixify.com//sites/default/files/imagecache/product_full/externals/b5b76f4f41dbbd26a2d6d4605f59b204.jpg";
var shoe2 = "https://newsneakernews-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/jordan-space-jam-11-shoes-3.jpg";
var shoe3 = "https://cdn5.kicksonfire.com/wp-content/uploads/2017/05/Air-Jordan-1-1.jpg?x77385"; 
var shoes = [shoe1,shoe2,shoe3];
shoes = shoes[rand(3)];
$("body").append("<img class='shoeIMG' src=" + shoes + ">")

}