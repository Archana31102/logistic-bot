//elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');
var user = {message:""};

const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();

var httpRequest;
chatbotSendMessage("Please choose an option: ");
initializeOptions();

// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
      document.querySelector('input').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

function chatbotSendMessage(messageText){


  var messageElement = document.createElement('div');
  messageElement.classList.add('w-50');
  messageElement.classList.add('float-left');
  messageElement.classList.add('shadow-sm');
  messageElement.style.margin ="10px";
  messageElement.style.padding ="5px";

  messageElement.innerHTML = "<span style="+"font-family:Lucida Sans"+">Clara: </span>"+
  "<span style="+"margin-top:10px;font-family:Lucida Sans;color:black; padding:10px"+">"+ messageText +"</span>";

  messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000}); 
  chatContainer.appendChild(messageElement);

   //scroll to last message
   chatContainer.scrollTop = chatContainer.scrollHeight;
  
}



function sendMessage(messageText){

   var messageElement = document.createElement('div');
   messageElement.classList.add('w-50');
   messageElement.classList.add('float-right');
   messageElement.classList.add('shadow-sm');
   messageElement.style.margin ="10px";
   messageElement.style.padding ="5px";

   messageElement.innerHTML = "<span style="+"font-family:Lucida Sans"+">You: </span>"+
   "<span style="+"margin-top:10px; font-family:Lucida Sans;  color: blue; padding:10px"+">"+ messageText +"</span>";

   messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000}); 
 
   chatContainer.appendChild(messageElement);

   //scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
 

}
sendBtn.addEventListener('click', function(e){

  if(textbox.value == ""){
   alert('Please type in a message');

  }else{
       
   let messageText = textbox.value.trim();   
   user.message = messageText;
   sendMessage(messageText); 
   textbox.value = "";  
   

    assistantResponse(messageText);

  }
});


function initializeOptions(){

  let options = [
    {number:1,chocie:"What is the status of my order?"},
    {number:2,chocie:"Can I track my shipment?"},
    {number:3,chocie:"How can I cancel my order?"},
  ];


 var messageElement = document.createElement('div');
 messageElement.classList.add('w-50');
 messageElement.classList.add('float-left');
 messageElement.classList.add('shadow-sm');
 messageElement.style.margin ="10px";
 messageElement.style.padding ="5px";

 for(let i=0; i<options.length; i++){
       messageElement.innerHTML +=  "<br>"+
       "<span style="+"margin-top:10px;font-family:Lucida Sans;color:black; padding:10px"+">"+ options[i].number +" - "+ options[i].chocie +"</span>";
       
 }

 messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000}); 
 chatContainer.appendChild(messageElement);
   


}
function assistantResponse(messageText){


  let userChoice =  parseInt(messageText.trim());

 // chatbotSendMessage('Please wait...');

  switch(userChoice){

   case 1:
    chatbotSendMessage("Your order is currently in transit and is scheduled to be delivered tomorrow.");
    break;
   case 2:
    chatbotSendMessage( "Yes, you can track your shipment on our website using your order number.");
    break;
   case 3:
    chatbotSendMessage("You can cancel your order by contacting our customer service team.");
    break;
    
    default:               
    alert("Please choose a valid number");
    chatbotSendMessage("Please choose a valid number");
  }


}


textbox.addEventListener('keypress',function(e){

   //if user hits the enter button on keyborad (13)
    if(e.which == 13){
        if(textbox.value == ""){
             alert('Please type in a message');
        
            }else{
                 
             let messageText = textbox.value.trim();
             user.message = messageText;
             sendMessage(messageText); 
             textbox.value = "";  
        
             assistantResponse(messageText);
        
            }
    }
});

// products

var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});

// contact
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});

// send msg 
// submitBtn.addEventListener('click', ()=>{
  //  let userInput = inputElm.value;

  //  let temp = `<div class="out-msg">
 //   <span class="my-msg">${userInput}</span>
 //   <img src="img/me.jpg" class="avatar">
 //   </div>`;

 //   chatArea.insertAdjacentHTML("beforeend", temp);
 //   inputElm.value = '';

//})