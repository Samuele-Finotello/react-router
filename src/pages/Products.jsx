import axios from "axios"
import { useEffect, useState } from "react"

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((resp) => {
      setProducts(resp.data)
      console.log(resp.data)
    })
  }, [])

  return (
    <div className="container">
      <h1 className="text-center">Our Products</h1>
      <div className="row">
        {products.map(product => {
          return (
            <div className="col-4">
              <div className="card">
                <div className="card-image">
                  <img className="img-fluid" src={product.image} alt={product.title} />
                </div>
                <div className="card-body">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products
