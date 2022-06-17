// const Name = "Juan José";
// const LastName = "Saldarriaga Cañaveral";
// const Age = 32;

// const SendMessage = () => {
//     const Data = "Hi, I am the function"
//     return Data;
// }

// const NewMessage = {
//     message: "Hola mundo",
//     titulo: "Prueba",
// };
import PropTypes from 'prop-types'

export const FirstApp = ({ title, subTitle }) => {


    return (
        <>
            <h1>{title} </h1>
            <h1>{subTitle} </h1>
            {/* <h3>Nombre : {Name}</h3>
            <h3>Apellido : {LastName}</h3>
            <h3>Edad : {Age}</h3>
            <h3>Funcion : {SendMessage()}</h3> */}
        </>
    )
}
FirstApp.propTypes = {
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title : "No hay titulo",
    subTitle : 123
}