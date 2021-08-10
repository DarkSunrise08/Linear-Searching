var arr =[1,2,3,4,5,6,7,8,9,10];


function find_num(arr,x){
  var y = 0;
  for(var i  = 0;i<arr.length;i++){
  if(arr[i]===x){
  console.log(i);
  y = 1;
  }
  }
  if(y === 0){
    console.log("-1");
  }
}

function search_num(arr,x){
  for(var u = 0;u<arr.length;u++){
    if(arr[u]===x){
      return u;
    }
  }
  return -1;
}

function setup() 
{
  createCanvas(400, 400);
  //find_num(arr,4);
  var result = search_num(arr,6);
  if(result === -1){
    console.log("number not present");
  }
  else{
    console.log("number present at index "+result)
  }
}

function draw() 
{
   background(220);
  
}