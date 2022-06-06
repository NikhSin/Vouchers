function myvoucher(name,email,address,amount){
    this.name=name;
    this.email=email;
    this.address=address;
    this.amount=amount;
  }
  let array=JSON.parse(localStorage.getItem("user"))

  let submit=()=>{

    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let address=document.querySelector("#address").value;
    let amount=document.querySelector("#amount").value;

    let sum=0;
    sum=sum+Number(amount)+Number(array)

    let output= new myvoucher(name,email,address,amount)

    localStorage.setItem("user",JSON.stringify(output));
    window.location.reload();


  }
  

   

