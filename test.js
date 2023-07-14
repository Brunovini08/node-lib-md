import fs from "fs";

function trataErro(erro) {
    throw new Error(erro.code, 'Nao ha arquivos no diretorio');
}


async function pegaArquivo(caminhoArquivo) {
    try {
        const encondig = 'utf-8';
        const text = await fs.promises.readFile(caminhoArquivo, encondig);
    } catch (erro){
        trataErro(erro);
    } finally {
        console.log("Obrigado por usar nossa api")
    }
}