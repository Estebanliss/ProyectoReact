import { Badge } from "@material-ui/core";
import styled from "styled-components";

// CartWidget
const IconCartWidget = styled(Badge)`
   {
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

  &:hover ${ContainerIcon} {
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
    background-color: #e4e6e7;
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
  width: 80%;
  margin: 0;
`;

const ContainerDetails = styled.div`
  width: 60%;
  display: column;
  margin: 0;
`;

const Title = styled.h1`
  h1 {
    text-aling: left;
    width: 80%;
    font-size: 30px;
    color: black;
    margin: 0;
  }
`;

const Description = styled.p`
  p {
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
  list-style: none;
  font-size: 12px;
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

// Cart

const ConteinerCart = styled.div`
  width: 60%;
  margin: auto;
  text-align: center;
`;

const ButtonCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 400;
  }
`;

const ContainerItemCart = styled.div`
  display: column;
  width: 80%;
`;

const ProductOverview = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const DetailProduct = styled.div`
  width: 95%;
  heigth: 100px;
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;

const PurchaseDetail = styled.div`
  width: 20%;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 10px;
  heigth: auto;

  h3 {
    text-align: left;
  }

  p {
    text-align: left;
  }

  h2 {
    text-align: left;
    margin-top: 50px;
  }
`;

const ImagePurchase = styled.img`
  width: 10%;
  padding: 10px;
`;

const DetailItem = styled.div`
  width: 40%;
  text-align: left;
  padding: 10px;
`;

const PriceItem = styled.div`
  width: 40%;
  text-align: left;
  padding: 10px;
`;

const IconItemCart = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fafafa;
  color: #bfbfbf;
  border-radius: 50%;
  text-align: center;
  justify-content: center;

  :hover {
    background-color: #f3f3f3;
  }
`;

const ButtonCartItem = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

export {
  IconCartWidget,
  ContainerIcon,
  ContainerItem,
  ImageItem,
  IconItem,
  ContainerProducts,
  ProductQuantity,
  ContainerGeneral,
  ContainerImage,
  ProductsImage,
  ContainerDetails,
  Title,
  Description,
  Price,
  DivEjemplo,
  ConteinerNavBar,
  ContainerLogo,
  ContainerCategories,
  ContainerUl,
  ContainerUlLogin,
  ContainerLi,
  ContainerLogin,
  ImageProducts,
  ConteinerCart,
  ButtonCart,
  ProductOverview,
  DetailProduct,
  PurchaseDetail,
  ImagePurchase,
  DetailItem,
  PriceItem,
  IconItemCart,
  ContainerItemCart,
  ButtonCartItem,
};
