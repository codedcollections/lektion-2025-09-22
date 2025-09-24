//Hämta ID
const textInput = document.getElementById('textInput')
const btnSend = document.getElementById('btnSend')
const msgContainer = document.getElementById('msgContainer')
const chatContainer = document.querySelector(".history")

btnSend.addEventListener('click', (e)=> {
    e.preventDefault();
    newMsg (textInput.value);
    textInput.value = ''
    chatContainer.scrollTop = chatContainer.scrollHeight;
 })

function newMsg (msg){
    const newMsgLi = document.createElement ('li')
    const timeP = document.createElement ('p')
    const msgP = document.createElement ('p')
    const date = new Date()
    timeP.textContent = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    msgP.textContent = msg
    msgContainer.appendChild(newMsgLi)
    newMsgLi.appendChild(timeP)
    newMsgLi.appendChild(msgP)
}

// consttalet millisekunder sedan 1 januari 1970 UTC
