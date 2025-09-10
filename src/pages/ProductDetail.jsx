import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {

  const [productDetails, setProductDetails] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      setProductDetails(resp.data)
      console.log(resp.data)
    })
  }, [])

  const { title, image, price, description } = productDetails;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <h2 className="text-center">{title}</h2>
            <div className="card-image my-3">
              <img src={image} alt={title} />
            </div>
            <div className="card-body">
              <span className="fs-3"><strong>{price} &euro;</strong></span>
              <p className="fs-5 mt-3">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
