Existe dois tipos de promessas:

1- Podemos utilizar o .then para que se tudo der certo, ele faça alguma coisa 
e também podemos utilizar o .catch para indicar se existe algum erro e ele retornará a informação

2- Outra forma é utilizando as palavras chaves, async e await, utilizamos a palavra async antes de começar uma funçao e a palavra await é usada para indicar aonde o codigo deve esperar a execução para prosseguir.


# Utilizando promisses com then

    function pegaArquivo(caminhaArquivo) {
    const enconding = 'utf-8';
    fs.promises
    .readFile(caminhaArquivo, enconding)
    .then(texto => console.log(chalk.green(texto)))
    .catch(trataErro)
    }

# Utilizando promisses com async await
    
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
