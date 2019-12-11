var Product = require("../models/product");
var mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/online-shop", {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// });


mongoose.connect(`mongodb+srv://thanhtuan090398:Tuan09031998@cluster0-jodk9.mongodb.net/online-shop?retryWrites=true&w=majority`,{
  useUnifiedTopology: true,
  useNewUrlParser: true
})

var products = [
  new Product({
    name: "GROOT",
    image:
     "../1.jpg",
    category: "allProductTop",
    description:
      "Arbiter Vildred is now very strong due to the fact that he has a free revive...",
    price: 937
  }),
  new Product({
    name: "Móc chìa khóa",
    image: "../2.jpg",
    category: "allProductTop",
    description:
      "This guy is one of the best characters in the game due to the way his...",
    price: 856
  }),
  new Product({
    name: "Xe đồ chơi",
    image: "../3.jpg",
    category: "allProductTop",
    description:
      "Dark Corvus is a tanky warrior that can use a strong single target...",
    price: 432
  }),
  new Product({
    name:"Fallen Cecilia",
    image: "../4.jpg",
    category: "allProductTop",
    description:
      "Fallen Cecilia will be the latest addition for the new ML nat 5...",
    price: 526
  }),
  new Product({
    name: "Apocalypse Ravi",
    image: "../5.jpg",
    category: "allProductTop",
    description:
      "ML Ravi’s strength lies in offense and not much on defense...",
    price: 395
  }),
  new Product({
    name:"Specter Tenebria", 
    image: "../6.jpg",
    category: "allProductTop",
    description:
      "With the new overhaul, she has turned from mediocre to very...",
    price: 421
  }),
  new Product({
    name:"Specimen Sez",
    image: "../7.jpg",
    category: "mostWanted",
    description:
      "With the new buffs, he becomes a terror, if the enemy gets stunned...",
    price: 2261
  }),
  new Product({
    name:"Desert Jewel Basar",
    image: "../8.jpg",
    category: "mostWanted",
    description:
      "ML Basar is a bit of a niche character currently and...",
    price: 238
  }),
  new Product({
    name:"Baal Sage And Sezan",
    image: "../9.jpg",
    category: "mostWanted",
    description:
      "Has one of the most broken skill 2’s in the game...",
    price: 183
  }),
  new Product({
    name:"Judge Kise",
    image: "../10.jpg",
    category: "mostWanted",
    description:
      "She now has AoE dispel on S2 and higher chance to reduce...",
    price: 812
  }),
  new Product({
    name:"Maid Chloe",
    image: "../11.jpg",
    category: "mostWanted",
    description:
      "Maid Chloe is decent as her Revive+Attack is an offensive kit...",
    price: 675
  }),
  new Product({
    name: "Móc chìa khóa",
    image: "../12.jpg",
    category: "mostWanted",
    description:
      "This guy is one of the best characters in the game due to the way his...",
    price: 856
  }),
  new Product({
    name: "Xe đồ chơi",
    image: "../13.jpg",
    category: "scarfs",
    description:
      "Dark Corvus is a tanky warrior that can use a strong single target...",
    price: 432
  }),
  new Product({
    name:"Fallen Cecilia",
    image: "../14.jpg",
    category: "scarfs",
    description:
      "Fallen Cecilia will be the latest addition for the new ML nat 5...",
    price: 526
  }),
  new Product({
    name: "Apocalypse Ravi",
    image: "../15.jpg",
    category: "scarfs",
    description:
      "ML Ravi’s strength lies in offense and not much on defense...",
    price: 395
  }),
  new Product({
    name:"Specter Tenebria", 
      image: "../16.jpg",
    category: "scarfs",
    description:
      "With the new overhaul, she has turned from mediocre to very...",
    price: 421
  }),
  


  new Product({
    name:"Specimen Sez",
    image: "../17.jpg",
    category: "scarfs",
    description:
      "With the new buffs, he becomes a terror, if the enemy gets stunned...",
    price: 2261
  }),
  new Product({
    name:"Desert Jewel Basar",
    image: "../18.jpg",
    category: "scarfs",
    description:
      "ML Basar is a bit of a niche character currently and...",
    price: 238
  }),
  new Product({
    name:"Baal Sage And Sezan",
    image: "../19.jpg",
    category: "onSale",
    description:
      "Has one of the most broken skill 2’s in the game...",
    price: 183
  }),
  new Product({
    name:"Judge Kise",
    image: "../20.jpg",
    category: "onSale",
    description:
      "She now has AoE dispel on S2 and higher chance to reduce...",
    price: 812
  }),
  new Product({
    name:"Maid Chloe",
    image: "../21.jpg",
    category: "onSale",
    description:
      "Maid Chloe is decent as her Revive+Attack is an offensive kit...",
    price: 675
  }),

  new Product({
    name: "Móc chìa khóa",
    image: "../22.jpg",
    category: "onSale",
    description:
      "This guy is one of the best characters in the game due to the way his...",
    price: 856
  }),
  new Product({
    name: "Xe đồ chơi",
    image: "../23.jpg",
    category: "onSale",
    description:
      "Dark Corvus is a tanky warrior that can use a strong single target...",
    price: 432
  }),
  new Product({
    name:"Fallen Cecilia",
    image: "../24.jpg",
    category: "onSale",
    description:
      "Fallen Cecilia will be the latest addition for the new ML nat 5...",
    price: 526
  }),
  new Product({
    name: "Apocalypse Ravi",
    image: "../25.jpg",
    category: "featured",
    description:
      "ML Ravi’s strength lies in offense and not much on defense...",
    price: 395
  }),
  new Product({
    name:"Specter Tenebria", 
    image: "../26.jpg",
    category: "featured",
    description:
      "With the new overhaul, she has turned from mediocre to very...",
    price: 421
  }),
  new Product({
    name:"Specimen Sez",
    image: "../27.jpg",
    category: "featured",
    description:
      "With the new buffs, he becomes a terror, if the enemy gets stunned...",
    price: 2261
  }),
  new Product({
    name:"Desert Jewel Basar",
    image: "../28.jpg",
    category: "featured",
    description:
      "ML Basar is a bit of a niche character currently and...",
    price: 238
  }),
  new Product({
    name:"Baal Sage And Sezan",
    image: "../29.jpg",
    category: "featured",
    description:
      "Has one of the most broken skill 2’s in the game...",
    price: 183
  }),
  new Product({
    name:"Judge Kise",
    image: "../30.jpg",
    category: "featured",
    description:
      "She now has AoE dispel on S2 and higher chance to reduce...",
    price: 812
  }),
  new Product({
    name:"Maid Chloe",
    image: "../31.jpg",
    category: "fromTheBlog",
    description:
      "Maid Chloe is decent as her Revive+Attack is an offensive kit...",
    price: 675
  }),
  new Product({
    name: "Móc chìa khóa",
    image: "../32.jpg",
    category: "fromTheBlog",
    description:
      "This guy is one of the best characters in the game due to the way his...",
    price: 856
  }),
  new Product({
    name: "Xe đồ chơi",
    image: "../33.jpg",
    category: "fromTheBlog",
    description:
      "Dark Corvus is a tanky warrior that can use a strong single target...",
    price: 432
  }),
  new Product({
    name:"Fallen Cecilia",
    image: "../34.jpg",
    category: "fromTheBlog",
    description:
      "Fallen Cecilia will be the latest addition for the new ML nat 5...",
    price: 526
  }),
  new Product({
    name: "Apocalypse Ravi",
    image: "../35.jpg",
    category: "fromTheBlog",
    description:
      "ML Ravi’s strength lies in offense and not much on defense...",
    price: 395
  }),
  new Product({
    name:"Specter Tenebria", 
    image: "../36.jpg",
    category: "fromTheBlog",
    description:
      "With the new overhaul, she has turned from mediocre to very...",
    price: 421
  }),
  new Product({
    name:"Specimen Sez",
    image: "../37.jpg",
    category: "trends",
    description:
      "With the new buffs, he becomes a terror, if the enemy gets stunned...",
    price: 2261
  }),
  new Product({
    name:"Desert Jewel Basar",
    image: "../38.jpg",
    category: "trends",
    description:
      "ML Basar is a bit of a niche character currently and...",
    price: 238
  }),
  new Product({
    name:"Baal Sage And Sezan",
    image: "../39.jpg",
    category: "trends",
    description:
      "Has one of the most broken skill 2’s in the game...",
    price: 183
  }),
  new Product({
    name:"Judge Kise",
    image: "../40.jpg",
    category: "trends",
    description:
      "She now has AoE dispel on S2 and higher chance to reduce...",
    price: 812
  }),
  new Product({
    name:"Maid Chloe",
    image: "../41.jpg",
    category: "trends",
    description:
      "Maid Chloe is decent as her Revive+Attack is an offensive kit...",
    price: 675
  }),
  new Product({
    name:"Maid Chloe",
    image: "../42.jpg",
    category: "trends",
    description:
      "Maid Chloe is decent as her Revive+Attack is an offensive kit...",
    price: 675
  }),
  new Product({
    name:"Specter Tenebria", 
    image: "../43.jpg",
    category: "allProductTop",
    description:
      "With the new overhaul, she has turned from mediocre to very...",
    price: 421
  }),
  new Product({
    name:"Specimen Sez",
    image: "../44.jpg",
    category: "allProductTop",
    description:
      "With the new buffs, he becomes a terror, if the enemy gets stunned...",
    price: 2261
  }),
  new Product({
    name:"Desert Jewel Basar",
    image: "../45.jpg",
    category: "featured",
    description:
      "ML Basar is a bit of a niche character currently and...",
    price: 238
  }),
  new Product({
    name:"Baal Sage And Sezan",
    image: "../46.jpg",
    category: "featured",
    description:
      "Has one of the most broken skill 2’s in the game...",
    price: 183
  }),
  new Product({
    name:"Judge Kise",
    image: "../47.jpg",
    category: "trends",
    description:
      "She now has AoE dispel on S2 and higher chance to reduce...",
    price: 812
  }),
  new Product({
    name:"Maid Chloe",
    image: "../48.jpg",
    category: "trends",
    description:
      "Maid Chloe is decent as her Revive+Attack is an offensive kit...",
    price: 675
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
