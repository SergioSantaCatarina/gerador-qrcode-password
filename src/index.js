console.log("Hello QR Codes World!!!!");

// importando módulos
import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

// função principal
async function main() {
    // configurando o prompt
    prompt.get(mainPrompt, async(err, choose) => {
        if(choose.select == 1 ) {
            await createQRCode()
        }else if(choose.select == 2) {
            await createPassword();
        }
    })
    // rodando o prompt para obter a opção
    prompt.start();
}

main();
