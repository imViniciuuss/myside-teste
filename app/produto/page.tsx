import { getProducts } from "@/services/api";


export default async function ProdutoPage() {
 const products = await getProducts();

    return (
        <div>
            <h1>Produto</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
}