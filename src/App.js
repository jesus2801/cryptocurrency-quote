import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import cryptoImage from './cryptomonedas.png';
import Formulario from './components/Formulario';
import axios from 'axios';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  margin: 50px 0 80px 0;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66aefe;
    display: block;
  }
`;

function App() {
  const APIkey = '411a0a9be8c0f7de32df2ea4fe9956a0d8a5d6871658c4e16f7329a9de93a194';
  const [moneda, guardarMoneda] = useState('');
  const [cryptomoneda, guardarCryptomoneda] = useState('');

  useEffect(() => {
    const cotizarCryptomoneda = async () => {
      //evitamos la ejecucion al cargar la página
      if (moneda === '') return;

      //cotizar la API para cotizar los valores del usuario
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda},EUR${APIkey}`;

      const response = await axios.get(url);

      console.log(response.data.DISPLAY[cryptomoneda][moneda]);
    };
    cotizarCryptomoneda();
  }, [moneda, cryptomoneda]);

  return (
    <Contenedor>
      <div>
        <Image src={cryptoImage} alt="imagen cryptomoneda" />
      </div>
      <div>
        <Heading>Cotiza cryptomedas al instante</Heading>
        <Formulario
          guardarCryptomoneda={guardarCryptomoneda}
          guardarMoneda={guardarMoneda}
          APIkey={APIkey}
        />
      </div>
    </Contenedor>
  );
}

export default App;
