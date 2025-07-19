
let array = [1000, 2000, 3000, 4000];
for(let i=0; i<array.length; i++){
  console.log("origial value", array[i]);
  let offer = array[i]/10;
  console.log("offer ammount", offer);

  let discound = array[i]-offer;
  console.log("final value after discound", discound);
}