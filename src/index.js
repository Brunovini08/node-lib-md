import chalk from 'chalk';
import  fs from "fs";

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'nao ha links no arquivo'
}



function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'))
}




// async/await

async function pegaArquivo(caminhoArquivo) {
    try {
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoArquivo, enconding)
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log("Operation completed, thanks for using our api")
    }

}

export default pegaArquivo;



