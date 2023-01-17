import { IProduct } from "src/Interfaces/products";
import styled from "styled-components";

interface IProps {
    product: IProduct;
}
export const ProductCard = ({ product }: IProps) => {
    return (
        <StyledCard>
            <h5>{product.title}</h5>
        </StyledCard>
    );
};
const StyledCard = styled.article``;
