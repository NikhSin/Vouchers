let array=JSON.parse(localStorage.getItem("user"))

let balance=document.querySelector("#wallet_balance").innerHTML=array.amount;
let list=document.querySelector("#voucher_list")
let arrayone=JSON.parse(localStorage.getItem("purchase"))||[];

 let newfun=async()=>{
   try{
     let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

     let one=await fetch(url);
     let two=await one.json();

     appendhere(two[0].vouchers)
   }catch(err){
     console.log(err)
   }

 }
 newfun();


 let appendhere=(data)=>{
   console.log(data)
   data.forEach(function(el,index){

    let div=document.createElement("div");

    let image=document.createElement("img")
    image.src=el.image;

    let name=document.createElement("h3")
    name.innerText=el.name;

    let price=document.createElement("p")
    price.innerText=el.price;

    let btn=document.createElement("button")
    btn.innerText="buy";
    btn.setAttribute("class","buy_voucher")
    btn.addEventListener("click",function(){
      callfun(el)
    })
    div.append(image,name,price,btn)
    list.append(div);

   })

   
 }
 let callfun=(el)=>{
   arrayone.push(el)
   localStorage.setItem("purchase",JSON.stringify(arrayone))
   let wallet=array.amount;
   let money=el.price;
   let Wallmon=wallet-money
   console.log(Wallmon)
 }