const lastMsgClass = '#main .copyable-area div[role="region"] .message-in:last-child '//last msg input
const inputClass = '#main footer  div.copyable-area  div.copyable-text' //text input
const buttonClass = '#main footer button span[data-testid="send"]' //send button

function sendMensage(message){
    console.log(message)

    const textbox = document.querySelector(inputClass) 
    textbox.textContent = message

    window.InputEvent = window.Event || window.InputEvent
    const event = new InputEvent('input', { bubbles: true })
    textbox.dispatchEvent(event)
    document.querySelector(buttonClass).click()
}

function sendText(text){
    const lines = text.split('\n')

	let i = 0;
	setInterval(() => {
		if (i >= lines.length) return
        if(i==0)
            sendMensage(lines[i++])
        else{
            var lastMessage = document.querySelector(lastMsgClass)
            if ( lastMessage ) 
                if (lines[i].trim() != '') 
                      sendMensage(lines[i++])         
        }
	}, 1500);
}

sendText(`Só havia um bar 😔
De 1 km 😁
Não servia copos😔
Só baldes😁
Só havia um bartender😔
Pra cada um de nós😁
A polícia veio😔
Era uma mulher😁
Usava óculos😔
E mais nada😁
Nos levou para a prisão😔
Tava cheio de putas😁
Custavam 5 euros😔
Mas eu tinha 10😁
E havia lá uma planta 😔
Era canabis😁
Não tinha folhas😔
Porque eu fumei todas😁
É o fim😔
To brincando, posso mandar mais😁`)

