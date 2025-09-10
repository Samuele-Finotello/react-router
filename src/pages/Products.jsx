import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((resp) => {
      setProducts(resp.data)
    })
  }, [])

  return (
    <div className="container">
      <h1 className="text-center">Our Products</h1>
      <div className="row">
        {products.map(product => {
          return (
            <div className="col-4" key={product.id}>
              <div className="card my-4">
                <p className="text-center fs-4">{product.category}</p>
                <div className="card-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-body">
                  <h3>{product.title}</h3>
                  <span className="fs-4">{product.price} &euro;</span>
                </div>
                <div className="d-flex justify-content-center">
                  <Link to={`/products/${product.id}`}>
                    <button className="btn btn-primary fs-5">Visualizza dettagli</button>
                  </Link>
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
