import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const StyledSelect = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
`;

const useCryptomoneda = (label, initState, options) => {
  //State de nuestro custom hook
  const [state, updateState] = useState(initState);

  const SelectCrypto = () => {
    return (
      <Fragment>
        <Label htmlFor="">{label}</Label>
        <StyledSelect id="" onChange={e => updateState(e.target.value)} value={state}>
          <option value="">-- Seleccione --</option>
          {options.map(option => (
            <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
              {option.CoinInfo.FullName}
            </option>
          ))}
        </StyledSelect>
      </Fragment>
    );
  };

  //retornar state y funcion que modifica el state
  return [state, SelectCrypto, updateState];
};

useCryptomoneda.propTypes = {
  label: PropTypes.string.isRequired,
  initState: PropTypes.any.isRequired,
  options: PropTypes.object.isRequired,
};

export default useCryptomoneda;
