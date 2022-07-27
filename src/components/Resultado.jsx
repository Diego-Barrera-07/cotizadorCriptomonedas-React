import styled from "@emotion/styled";

const ResultadoContenedor = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
    color: #FFF;
    font-family: 'lato', sans-serif;
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Textos =  styled.p`
    font-size: 16px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 22px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
    return (
        <ResultadoContenedor>
            <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="Imagen de criptomoneda" />
            <div>
            <Precio>El precio actual es de: <span>{PRICE}</span></Precio> 
            <Textos>El precio más alto del día: <span>{HIGHDAY}</span></Textos> 
            <Textos>El precio más bajo del día: <span>{LOWDAY}</span></Textos> 
            <Textos>Varíación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Textos> 
            <Textos>Última actualización: <span>{LASTUPDATE}</span></Textos> 
            </div>

        </ResultadoContenedor>
    )
}

export default Resultado