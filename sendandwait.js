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

sendText(`S贸 havia um bar 馃様
De 1 km 馃榿
N茫o servia copos馃様
S贸 baldes馃榿
S贸 havia um bartender馃様
Pra cada um de n贸s馃榿
A pol铆cia veio馃様
Era uma mulher馃榿
Usava 贸culos馃様
E mais nada馃榿
Nos levou para a pris茫o馃様
Tava cheio de putas馃榿
Custavam 5 euros馃様
Mas eu tinha 10馃榿
E havia l谩 uma planta 馃様
Era canabis馃榿
N茫o tinha folhas馃様
Porque eu fumei todas馃榿
脡 o fim馃様
To brincando, posso mandar mais馃榿`)

