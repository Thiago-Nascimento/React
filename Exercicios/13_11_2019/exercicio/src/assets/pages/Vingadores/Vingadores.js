import React from 'react';
import Footer from "../../components/Footer/Footer";

function Vingadores() {
    return (
        <div>
            <main>
                <div class="conteudo">
                    <section class="imagem">
                        <img src="./img/Vingadores-LOGOjp.jpg" alt="Logo dos Vingadores"/>
                    </section>
                    <section class="texto">
                        <h1>Vingadores</h1>
                        <p>O vídeo fornece uma maneira poderosa de ajudá-lo a provar seu argumento. Ao clicar em Vídeo Online, você pode colar o código de inserção do vídeo que deseja adicionar. Você também pode digitar uma palavra-chave para pesquisar online o vídeo mais adequado ao seu documento. Para dar ao documento uma aparência profissional, o Word fornece designs de cabeçalho, rodapé, folha de rosto e caixa de texto que se complementam entre si. Por exemplo, você pode adicionar uma folha de rosto, um cabeçalho e uma barra lateral correspondentes. Clique em Inserir e escolha os elementos desejados nas diferentes galerias. Temas e estilos também ajudam a manter seu documento coordenado.</p>
                    </section>
                </div>
                <div class="conteudo2">
                    <img src="./img/vingadores.jpg" alt="Vingadores"/>
                    <img src="./img/vingadores3.jpg" alt="Homem de Ferro e Capitão América"/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Vingadores;