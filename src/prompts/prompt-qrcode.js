import chalk from "chalk";

const promptQRCode = [
    {
        name:"link",
        description:chalk.yellow("Informe o link para gerar o QR CODE"),
    },

    {
        name:"type",
        description: chalk.yellow("Escolha QR-Code (1-NORMAL ou (2-TERMINAL"),
        pattern:/^[1-2]+$/,
        message: chalk.red.italic("Apenas as opções 1 ou 2 são aceitas"),
        require:true,
    },
];

export default promptQRCode;
