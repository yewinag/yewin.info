import { ProductCard } from "@components";
import { IProduct } from "@interfaces";
import { selectApp, setLoading } from "@redux";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { homeApi } from "src/API/home";

import styled from "styled-components";

export const PageHome = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { loading } = useSelector(selectApp);

    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        fetchProducts();
    }, ["products"]);

    const fetchProducts = async () => {
        try {
            dispatch(setLoading(true));
            const res = await homeApi.products();
            setProducts(res.data);
            dispatch(setLoading(false));
        } catch (err: any) {
            console.log(err);
            dispatch(setLoading(false));
        }
    };
    return (
        <StyledHome>
            <h1>{t("page.person_name")}</h1>
            <p>{t("page.person_desc")}</p>
            <section>
                <h3>{t("page.About")}</h3>
            </section>
            <section>
                {loading ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        {products.map((item, index) => (
                            <ProductCard key={index} product={item} />
                        ))}
                    </div>
                )}
            </section>
        </StyledHome>
    );
};
const StyledHome = styled.div`
    padding: ${(p) => p.theme.space.rem_2} 0;
`;
