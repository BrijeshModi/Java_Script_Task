
    
    
    let stackBtnOne = document.getElementById('Stack1');
    let stackBtnTwo = document.getElementById('Stack2');
    let queueBtnOne = document.getElementById('Queue1');
    let queueBtnTwo = document.getElementById('Queue2');
    let stackListOne = document.getElementById('sl1');
    let stackListTwo = document.getElementById('sl2');
    let queueListone = document.getElementById('ql1');
    let queueListTwo = document.getElementById('ql2');
    let pushBtn = document.getElementById('push');
    let popBtn = document.getElementById('pop');
    let queueBtn = document.getElementById('queue');
    let dequeueBtn = document.getElementById('dequeue');
    let stackInput = document.getElementById('stackInput');
    let stackOneQueue = document.getElementById('stack1Queue');
    let stackTwoQueue = document.getElementById('stack2Queue');
    let userInst = document.getElementById('userInst')
    let info = document.getElementById('info');
    let MsgOne = document.getElementById('MsgOne');
    let MsgTwo = document.getElementById('MsgTwo');
    let MsgThree = document.getElementById('MsgThree');
    let MsgFour = document.getElementById('MsgFour');
    let MsgFive = document.getElementById('MsgFive');
    let MsgSix = document.getElementById('MsgSix');
    let stackQueueOne = 3;
    let stackQueueTwo = 0;


function stackMenu()
{
   stackBtnOne.style.display = "block";
   stackBtnTwo.style.display = "block";
   stackOneQueue.style.display = "block";
   stackTwoQueue.style.display = "block";

     
   queueBtnOne.style.display = "none";
   queueBtnTwo.style.display = "none";  
   userInst.style.display = "none";
   userInst.style.display = "none";
   stackListOne.style.display = "none";
   stackListTwo.style.display = "none";
   pushBtn.style.display = "none";
   popBtn.style.display = "none";
   info.style.display = "none";
   stackInput.style.display = "none";
   queueListone.style.display ="none";
   queueListTwo.style.display ="none";
   queueBtn.style.display = "none";
   dequeueBtn.style.display ="none";
   

}

function queueMenu()
{
   queueBtnOne.style.display = "block";
   queueBtnTwo.style.display = "block";
   stackOneQueue.style.display = "block";
   stackTwoQueue.style.display = "block";


   stackBtnOne.style.display = "none";
   stackBtnTwo.style.display = "none";
   userInst.style.display = "none";
   stackListOne.style.display = "none";
   stackListTwo.style.display = "none";
   pushBtn.style.display = "none";
   popBtn.style.display = "none";
   info.style.display = "none";
   stackInput.style.display = "none";
   queueListone.style.display ="none";
   queueListTwo.style.display ="none";
   queueBtn.style.display = "none";
   dequeueBtn.style.display ="none";

}

function stackOne()

{
   info.style.display = "block";
   stackOneQueue.style.display ="block"
   stackListOne.style.display ="block";
   pushBtn.style.display = "block";
   popBtn.style.display = "block";
   stackInput.style.display ="block";

   queueListone.style.display = "none";
   queueListTwo.style.display = "none";
   queueBtn.style.display ="none";
   dequeueBtn.style.display ="none";
   stackListTwo.style.display = "none";
   stackTwoQueue.style.display ="none"
  

}
function stackTwo()

{
   info.style.display = "block";
   stackOneQueue.style.display ="block"
   stackTwoQueue.style.display ="block"
   pushBtn.style.display = "block";
   popBtn.style.display = "block";
   stackListOne.style.display = "block";
   stackListTwo.style.display = "block";
   stackInput.style.display ="block";
   
   queueListone.style.display = "none";
   queueListTwo.style.display = "none";
   queueBtn.style.display ="none";
   dequeueBtn.style.display ="none";

}

function queueOne()

{
   info.style.display = "block";
   stackOneQueue.style.display ="block"
   queueBtn.style.display ="block";
   dequeueBtn.style.display ="block";
   queueListone.style.display = "block";
   queueListTwo.style.display = "block";
   stackInput.style.display ="block";

   queueListTwo.style.display = "none"; 
   pushBtn.style.display = "none";
   popBtn.style.display = "none";
   stackListOne.style.display ="none";
   stackListTwo.style.display = "none";
   stackTwoQueue.style.display ="none"
   
   
}

function queueTwo()

{
   info.style.display = "block";
   stackOneQueue.style.display ="block";
   stackTwoQueue.style.display ="block";
   queueBtn.style.display ="block";
   dequeueBtn.style.display ="block";
   queueListone.style.display = "block";
   queueListTwo.style.display = "block";
   stackInput.style.display ="block";

   
   pushBtn.style.display = "none";
   popBtn.style.display = "none";
   stackListOne.style.display ="none";
   stackListTwo.style.display = "none";

}

function push()
{
    
     
   MsgTwo.style.display = "none";

    if (stackOneQueue.length >= 3)
    {
      MsgThree.style.display = "block";
      var stackTwoElement = document.createElement('option');
        stackTwoQueue.appendChild(stackTwoElement);    
        stackTwoElement.innerHTML = stackInput.value;
        if( stackTwoQueue.length >= 3 )
        {
         MsgOne.style.display = "block";
         MsgThree.style.display = "none";
         stackTwoQueue.length = 3;
        }
        
    }
    else{

        var stackOneElement = document.createElement('option');
        stackOneQueue.appendChild(stackOneElement);    
        stackOneElement.innerHTML = stackInput.value;
            
        }
        
        return stackOneQueue.length;
        
}

function pop()
{
      
    MsgOne.style.display = "none";

    if (stackTwoQueue.length <= 0)
        {
        
            MsgTwo.style.display = "block";
            MsgFour.style.display = "none"
            stackOneQueue.removeChild(stackOneQueue.lastElementChild);
            
        }
        else
        {
            stackTwoQueue.removeChild(stackTwoQueue.lastElementChild);

            if(stackTwoQueue.length <= 0)
            {
               MsgFour.style.display = "block"
            }

        }
         
}


function queue()
{


   MsgTwo.style.display = "none";

   if (stackOneQueue.length >= 3)
   {
     MsgFive.style.display = "block";
     var stackTwoElement = document.createElement('option');
       stackTwoQueue.appendChild(stackTwoElement);    
       stackTwoElement.innerHTML = stackInput.value;
       if( stackTwoQueue.length >= 3 )
       {
        MsgOne.style.display = "block";
        MsgFive.style.display = "none";
        stackTwoQueue.length = 3;
       }
       
   }
   else{

       var stackOneElement = document.createElement('option');
       stackOneQueue.appendChild(stackOneElement);    
       stackOneElement.innerHTML = stackInput.value;
           
       }
       
       return stackOneQueue.length;
       
}

function dequeue()
{
   
   MsgOne.style.display = "none";

   if (stackTwoQueue.length <= 0)
       {
       
           MsgTwo.style.display = "block";
           MsgSix.style.display = "none"
           stackOneQueue.removeChild(stackOneQueue.firstElementChild);
           
       }
       else
       {
           stackTwoQueue.removeChild(stackTwoQueue.firstElementChild);

           if(stackTwoQueue.length <= 0)
           {
              MsgSix.style.display = "block"
           }

       }
        
}

