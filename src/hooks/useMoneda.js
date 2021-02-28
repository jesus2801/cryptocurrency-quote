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

const useMoneda = (label, initState, options) => {
  //State de nuestro custom hook
  const [state, updateState] = useState(initState);

  const Select = () => {
    return (
      <Fragment>
        <Label htmlFor="">{label}</Label>
        <StyledSelect id="" onChange={e => updateState(e.target.value)} value={state}>
          <option value="">-- Seleccione --</option>
          {options.map(option => (
            <option key={option.codigo} value={option.codigo}>
              {option.nombre}
            </option>
          ))}
        </StyledSelect>
      </Fragment>
    );
  };

  //retornar state y funcion que modifica el state
  return [state, Select, updateState];
};

useMoneda.propTypes = {
  label: PropTypes.string.isRequired,
  initState: PropTypes.any.isRequired,
  options: PropTypes.object.isRequired,
};

export default useMoneda;
