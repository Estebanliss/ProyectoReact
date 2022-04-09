import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import styled from "styled-components";

const Items = ({ title, stock, price, pictureUrl }) => {

    const ContainerItem = styled.div`
        background: red;
    `;

    const ImageItem = styled.img`
    height: 300px;

    `;

    const IconItem = styled.div`
        font-size: 12px;
        width: 100px;
        height: 40px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 10px;
        transition: all 0.5s ease;
        &:hover {
            background-color: #e9f5f5;
            transform: scale(1.3);
        }
    `;

    return (
        <ContainerItem>
            <ImageItem src={pictureUrl} />
            <IconItem>
                <LocalOfferOutlined /><strong>${price}</strong>
            </IconItem>
            <IconItem>
                <DescriptionOutlined /><strong>${title}</strong>
            </IconItem>
            <IconItem>
                <InfoOutlined /><strong>${stock} unid.</strong>
            </IconItem>

        </ContainerItem>

    )

}

export default Items;