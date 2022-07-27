import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    background-color: #c9caff;
  }
`;

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas(
    "Seleccionar tu moneda",
    monedas
  );
  const [criptoMoneda, SelectCripto] = useSelectMonedas(
    "Seleccionar tu criptomoneda",
    criptos
  );

  useEffect(() => {
    const queryApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const response = await fetch(url);
      const result = await response.json();
      const arrayCriptos = result.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return objeto;
      });
      // console.log('LLegaron las monedas')
      console.log(arrayCriptos);
      setCriptos(arrayCriptos);
    };
    queryApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptoMoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({ moneda, criptoMoneda });
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form action="" onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCripto />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;
