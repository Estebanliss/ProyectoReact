import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Items = ({ id, stock, cost, pictureUrl }) => {

    const ContainerIcon = styled.div`
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 3;
        diplay: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s ease;
    `;

    const ContainerItem = styled.div`
        flex: 1;
        margin: 5px;
        min-width: 280px;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5fbfd;
        position: relative;
        &:hover ${ContainerIcon}{
            opacity: 1;
        }
    `;


    const ImageItem = styled.img`
    height: 300px;

    `;

    const IconItem = styled.div`
        font-size: 12px;
        width: 100px;
        height: 40px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 10px;
        transition: all 0.5s ease;
        &:hover {
            background-color: #E4E6E7;
            transform: scale(1.1);
        }
    `;

    return (
        <ContainerItem>
            <ImageItem src={pictureUrl} />
            <ContainerIcon>
                <IconItem>
                    <LocalOfferOutlined /><strong>${cost}</strong>
                </IconItem>
                <IconItem>
                    <InfoOutlined /><strong>${stock} unid.</strong>
                </IconItem>
                <IconItem style={{ cursor: "pointer", textDecoration:"none"}}>
                    <Link to={`/item/${id}`}><DescriptionOutlined /><strong>Details</strong></Link>
                </IconItem>
            </ContainerIcon>
        </ContainerItem >
    )

}

export default Items;