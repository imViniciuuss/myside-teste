import { getProducts } from "@/services/api";
import { use } from "react";


export default async function ProdutoPage() {
 const res = await fetch("https://dummyjson.com/products")

 const data = await res.json()


 
 console.log(data);

    return (
        <div>
            <h1>Produto</h1>
            {data.products.map((product: any) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
}