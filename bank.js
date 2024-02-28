function register(){

    accnumber=acno.value;
    username=uname.value;
    pswd=pass.value;
    
    console.log(accnumber,username,pswd)

    userdetails={
        accnumber,
        username,
        pswd,
        balance:0
    }

    if(accnumber in localStorage){
        alert("user already existed");
    }else{
        
        localStorage.setItem(accnumber,JSON.stringify(userdetails));
        alert("login success");

        window.location="login.html";
    }




}

function login() {

    uacno=luname.value;
    pswd=lpass.value;

    
    if (uacno in localStorage && pswd in localStorage) {
        data=JSON.parse(localStorage.getItem(uacno));
        console.log(data.username);
        window.location="home.html";
    
        
    }else{
        alert("invalid datas")
    }
       
        
}


amnt=0;


function deposit() {

    camnt=dmnt.value;
    depacc=dacno.value;
    camnt=Math.floor(camnt);
    if(depacc in localStorage){
 data=JSON.parse(localStorage.getItem(depacc));
        if (depacc == data.accnumber && camnt <= 0 ) {

            alert("Sorry Transaction eroor");
            
        }else{
           
            data.balance += camnt;
            localStorage.setItem(depacc, JSON.stringify(data));
            console.log(data.balance);
            alert("your Amount deposited successfully");

            displayd.innerHTML= `<div style=background-color:white;color:green;border-radius:10px; > your current Balance ${data.balance}</div>`
        }

    }else{
        alert("enter a valid Account no.");
    }
    
}

function withdraw() {

    withdrawamnt=wamnt.value;
    withdrawacc=wacno.value;

    withdrawamnt=Math.floor(withdrawamnt);

    if(withdrawacc in localStorage){

        data=JSON.parse(localStorage.getItem(withdrawacc));
        if(withdrawacc==data.accnumber && withdrawamnt<=0){
            alert("Enter a valid amount")
        }else if(withdrawamnt>data.balance){

            alert("Sorry insufficient Balance");
           
        }else{
          data.balance -= withdrawamnt;
            localStorage.setItem(withdrawacc,JSON.stringify(data));
            
            displayw.innerHTML=`<div style= background-color:white;color:green;border-radius:10px;  >Balance Amount is ${data.balance} </div>`

            alert("Amount Withdraw Successfully");
        }

    }else{
        alert("Enter a valid Account Number")
    }
    
} 

function logout(){
 
    localStorage.clear();

    
   
}