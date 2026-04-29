import { getProducts } from "@/services/api";
import { use } from "react";


export default async function ProdutoPage() {
 const res = await getProducts()
 
 console.log(res);

    return (
        <div>
            <h1>Produto</h1>
            {res?.map((product: any) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
}