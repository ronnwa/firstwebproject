
function validatefeed(form){

    var name = document.getElementById('Cname')
    if(name.validity.valueMissing){

        name.setCustomValidity("Please enter your name");
    }

    else{
        name.setCustomValidity("");
    }

    var odno = document.getElementById('Ono')

    if(odno.validity.valueMissing)
            odno.setCustomValidity("Please enter your order number")
    else if (odno.validity.patternMismatch)
            odno.setCustomValidity("Please enter the correct 6 digit order number ")
    else
        odno.setCustomValidity("");

    var feeds = document.getElementById('feedshare')
        if(feeds.validity.valueMissing){

            feeds.setCustomValidity("Please enter your feedback");
        }
    
        else{
            feeds.setCustomValidity("");
        }
    }        

    function validateorder(){
        var addr = document.getElementById('onlineadd')
        if(addr.validity.valueMissing){

            addr.setCustomValidity("Please enter your Address");
        }
    
        else{
            addr.setCustomValidity("");
        }

        var cnumber = document.getElementById('pnumber')
        if(cnumber.validity.valueMissing){

            cnumber.setCustomValidity("Please enter your contact number");
        }
    
        else{
            cnumber.setCustomValidity("");
        }

    }



function feedbackfunc() {

    var v = document.getElementById('concern');
    var im = document.getElementById('face');
    var last = document.getElementById('last');
    if(v[1].selected == true){

        im.src = v[1].value;
        im.hidden = false;  
        last.innerText = "We are Happy to hear that";
    }

    else{

        im.src = v[2].value;
        im.hidden = false;

        last.innerText = "We Unfortuante to hear that" ;
        
    }
    
}

function finishfeed(){

    window.alert("Thank you for the feedback");
    window.open("index.html");
    window.close();
    
}

function cardf(){

    document.getElementById('confdinein').hidden = true;
    cardname() , cardguest() , cardtime(), cardnum() ;
    
}
 



function dinelocation(h1) {
    txt = h1.innerText;
    txt = txt.replaceAll('\n' , ', ')
    document.getElementById("targetdinelocation").innerText = "Location : " + txt;
    

}

function cardname(){
    txt = document.getElementById('dinename').value;
    document.getElementById('targetdinename').innerText = "Guest Name : " + txt;

    
}

function cardguest() {
    txt = document.getElementById('guestnum').value;
    document.getElementById('targetNguest').innerText = "Total Guests : " + txt;

}

function cardtime() {
    txt = document.getElementById('datetime').value;
    txt=txt.replaceAll('T',' & Time ');
    document.getElementById('targetdatetime').innerText = "Date : " + txt;

    
}

function cardnum() {
    txt = document.getElementById('custnum').value;
    document.getElementById('targetcnum').innerText = "Phone : " + txt;


}

function finalcard(){
    var f = 1;
    v = document.getElementsByTagName('p');
    for(let i =0 ; i < v.length ; i++){

        if(v[i].innerText.length == 0) {
                flag = 0;
                break;
        }
    }

    if(flag==1){
        document.getElementById('confdinein').hidden = false;
    }
    else{
        document.getElementById('confdinein').hidden = true;
    }

}

function orderadd(){
    document.getElementById('ordersummary').hidden = false;
   var pizza = document.getElementsByName('pizza')
   var sides = document.getElementsByName('sides')
   var drink = document.getElementsByName('drinks')

   var target = document.getElementById('finalorder')

  for(let i =0 ; i<pizza.length;i++){
      if(pizza[i].checked){
            
            var  p = pizza[i].value; 
            var  s = document.getElementsByName('size');
            var top = document.getElementsByName('topping')
            var ch = document.getElementsByName('cheese')
            var dou = document.getElementsByName('double')
            var size ='';
            var t = '';
            var che = '';
            var doub = '';
            if(s[0].checked)
                size = s[0].value;
            else if(s[1].checked)
                size=s[1].value;
            else
                size=s[2].value

            if(top[0].checked)
                t += top[0].value + " ";
            if(top[1].checked)
                t +=  top[1].value + " ";
            if(top[2].checked)
                t+= top[2].value + " ";     
            if(top[3].checked)
                t+=top[3].value + " " ;

            if(ch[0].checked)
                che = "with extra cheese"

            if(dou[0].checked)
                    doub = "and double stuffing"


            target.innerText += size + " " +  p  + " pizza " + t + " "+ che + "\n " + doub + "\n";    

        }
        
     }  for(let i = 0 ; i < sides.length ; i ++ ){
                
            if(sides[i].checked){
                side_options = '';
                side_options += sides[i].value;
                target.innerText += side_options + "\n";
            }
                

                
     }      

     for(let i = 0 ; i < drink.length ; i ++ ){

        if(drink[i].checked){
            drink_opt = '';
            drink_opt += drink[i].value;
            target.innerText += drink_opt + "\n";
        }

     }


} 

function orderdone() {

    document.getElementById('add').disabled = true;
    h =  document.getElementsByName('oconfirm');
    for(let i = 0 ; i < h.length ; i ++)
                h[i].hidden = false;
    document.getElementById('clabel').style.display = 'block';
    document.getElementById('clabel2').style.display = 'block';
                
    
}