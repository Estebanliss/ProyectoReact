
const Items = ({ title, stock, price, pictureUrl }) => {

    return (
        <div>
            <img src={pictureUrl} alt="Imagen"></img>
            <p><strong>${title}</strong></p>
            <p><strong>${price}</strong></p>
            <p><strong>${stock} unid.</strong></p>
        </div>

    )

}

export default Items;