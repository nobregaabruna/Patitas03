function ProductCard () {
    const navigate = useNavigate();
    function handleAddToCard (){
        navigate('/cart')
    };
    return (
        <Container>
            <ProductorPhoto src="">
            <ProductInfo>
                <ProductName></ProductName>
                <ProductDescription></ProductDescription>
                <ProductPrice></ProductPrice>
                <AddToCartButton onClick={() => handleAddToCard()}>
                    Adicione ao carrinho
                </AddToCartButton>
            </ProductInfo>
            </ProductorPhoto>
        </Container>
    )

};

export default ProductCard;