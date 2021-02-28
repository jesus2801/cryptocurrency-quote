import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';

import useMoneda from '../hooks/useMoneda';
import useCryptomoneda from '../hooks/useCryptomoneda';
import axios from 'axios';

import Error from './Error';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66aefe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 300ms ease;
  cursor: pointer;

  &:hover {
    background-color: #326ac0;
  }
`;

const Formulario = ({guardarCryptomoneda, guardarMoneda, APIkey}) => {
  //state del listado de las cryptomonedas
  const [listaCrypto, guardarCrypto] = useState([]);

  const MONEDAS = [
    {codigo: 'USD', nombre: 'Dolar de estados unidos'},
    {codigo: 'MXN', nombre: 'Peso mexicano'},
    {codigo: 'EUR', nombre: 'Euro'},
    {codigo: 'GBP', nombre: 'Libra Esterlina'},
  ];

  // utilizar useMoneda
  const [moneda, Selects] = useMoneda('Elige tu moneda', '', MONEDAS);
  const [error, guardarError] = useState(false);

  //utilizar cryptomoneda
  const [cryptomoneda, SelectCrypto] = useCryptomoneda(
    'Elige tu Cryptomoneda',
    '',
    listaCrypto
  );

  // ejecutar llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${APIkey}`;

      const response = await axios.get(url);

      guardarCrypto(response.data.Data);
    };
    consultarAPI();
  }, []);

  // cuando el usuario hace submit
  const cotizarMoneda = e => {
    e.preventDefault();

    // validar si ambos campos estan llenos
    if (moneda.trim() === '' || cryptomoneda.trim() === '') {
      guardarError(true);
      return;
    }

    //pasar los datos al componente principal
    guardarError(false);
    guardarMoneda(moneda);
    guardarCryptomoneda(cryptomoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <Selects />
      <SelectCrypto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
