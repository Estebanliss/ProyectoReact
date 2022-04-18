import { Badge } from "@material-ui/core";
import styled from "styled-components";

// CartWidget
const IconCartWidget = styled(Badge)`
    .iconCartWidget{
        color: white;
    }

`;

// Item

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

// ItemCount

const ContainerProducts = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;

const ProductQuantity = styled.div`
    font-size: 24px;
    margin: 5px;
`;


// ItemDetail
const ContainerGeneral = styled.div`
    width: 70%;
    display: flex;
    margin: auto;
`;

const ContainerImage = styled.div`
    width: 40%;
    margin: 0;
`;

const ProductsImage = styled.img`
    padding: 20px;
    width:80%;
    margin: 0;
`;

const ContainerDetails = styled.div`
    width: 60%;
    display: column;
    margin: 0;
`;

const Title = styled.h1`
    h1{
        text-aling: left;
        width: 80%;
        font-size: 30px;
        color: black;
        margin: 0;
    }
`;

const Description = styled.p`
    p{
        text-aling: left;
        width: 80%;
        font-size: 14px;
        margin: 0;
    }    
`;

const Price = styled.h6`
    text-aling: left;
    width: 80%;
    font-size: 12px;
    margin: 0;
`;

// ItemList
const DivEjemplo = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

//NavBar
const ConteinerNavBar = styled.div`
    width: 100%;
    height: 70px;
    background-color: black;
    display: flex;
    align-items: center;
`;

const ContainerLogo = styled.div`
    width: 30%;
`;

const ContainerCategories = styled.div`
    width: 40%;
`;

const ContainerUl = styled.ul`
    display: flex;
    justify-content: space-evenly;
    color: white;
`;

const ContainerUlLogin = styled.ul`
    display: flex;
    justify-content: space-evenly;
    color: white;
    justify-content: right;
    margin-right: 10%;
    align-items: center !important;
`;

const ContainerLi = styled.li`
    list-style:none;
    font-size:12px;
    cursor: pointer;
    text-align: center;
    margin-right: 10px;
`;

const ContainerLogin = styled.div`
    width: 30%;
`;

const ImageProducts = styled.img`
    width: 200px;
    margin-left: 10%;
`;





export {
    IconCartWidget,
    ContainerIcon, ContainerItem, ImageItem, IconItem,
    ContainerProducts, ProductQuantity,
    ContainerGeneral, ContainerImage, ProductsImage, ContainerDetails, Title, Description, Price,
    DivEjemplo,
    ConteinerNavBar, ContainerLogo, ContainerCategories, ContainerUl, ContainerUlLogin, ContainerLi, ContainerLogin, ImageProducts,

}