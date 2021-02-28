import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({resultado}) => {
  if (Object.keys(resultado).length === 0) return null;

  console.log(resultado);

  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        El precio más alto del día: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        El precio más bajo del día: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variacion últimas 24 horas: <span>{resultado.CHANGE24HOUR}</span>
      </Info>
      <Info>
        Última actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
      <Info>
        Volumen del día: <span>{resultado.VOLUMEDAY}</span>
      </Info>
      <Info>
        Volumen última hora: <span>{resultado.VOLUMEHOUR}</span>
      </Info>
    </ResultadoDiv>
  );
};

Error.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Cotizacion;
