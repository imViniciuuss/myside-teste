import { getProducts } from "@/services/api";
import { use } from "react";


export default function ProdutoPage() {
 const products = use(getProducts());

 console.log(products);

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