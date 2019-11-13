import React, {Component} from 'react';
import Footer from '../../components/Footer/Footer';

class Moda extends Component {
    render(){
        return(
            <div>
                <div class="banner">
                    <img src="./img/banner.jpg" alt="Prateleira com roupas diversas."/>
                    <div class="texto-banner">
                        <p class="t1">GRANDE LIQUIDAÇÃO<br/>DE MODA</p>                    
                        <p>Preço Acessível, Produtos de Qualidade</p>                    
                        <p class="t2">A PARTIR DE $39.99</p>
                        <a href="#" class="btn">Compre</a>
                    </div>
                </div>
                <main>
                    <div class="container">
                        <div class="card">
                            <img src="./img/sapato.jpg" alt="Sapato Marron"/>
                            <p>O vídeo fornece uma maneira poderosa de ajudá-lo a provar seu argumento. Ao clicar em Vídeo Online, você pode colar o código de inserção do vídeo que deseja adicionar.</p>
                            <a href="#" class="btn">Compre</a>
                        </div>
                        <div class="card">
                            <img src="./img/sapato.jpg" alt="Sapato Marron"/>
                            <p>O vídeo fornece uma maneira poderosa de ajudá-lo a provar seu argumento. Ao clicar em Vídeo Online, você pode colar o código de inserção do vídeo que deseja adicionar.</p>
                            <a href="#" class="btn">Compre</a>
                        </div>
                        <div class="card">
                            <img src="./img/sapato.jpg" alt="Sapato Marron"/>
                            <p>O vídeo fornece uma maneira poderosa de ajudá-lo a provar seu argumento. Ao clicar em Vídeo Online, você pode colar o código de inserção do vídeo que deseja adicionar.</p>
                            <a href="#" class="btn">Compre</a>
                        </div>
                        <div class="card">
                            <img src="./img/sapato.jpg" alt="Sapato Marron"/>
                            <p>O vídeo fornece uma maneira poderosa de ajudá-lo a provar seu argumento. Ao clicar em Vídeo Online, você pode colar o código de inserção do vídeo que deseja adicionar.</p>
                            <a href="#" class="btn">Compre</a>
                        </div>
                        <div class="card">
                            <img src="./img/sapato.jpg" alt="Sapato Marron"/>
                            <p>O vídeo fornece uma maneira poderosa de ajudá-lo a provar seu argumento. Ao clicar em Vídeo Online, você pode colar o código de inserção do vídeo que deseja adicionar.</p>
                            <a href="#" class="btn">Compre</a>
                        </div>
                        <div class="card">
                            <img src="./img/sapato.jpg" alt="Sapato Marron"/>
                            <p>O vídeo fornece uma maneira poderosa de ajudá-lo a provar seu argumento. Ao clicar em Vídeo Online, você pode colar o código de inserção do vídeo que deseja adicionar.</p>
                            <a href="#" class="btn">Compre</a>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}
export default Moda;