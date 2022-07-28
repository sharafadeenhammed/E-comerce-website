import {useParams} from "react-router-dom"
function Cart() {
  const params = useParams();
  console.log(params)
  return (
    <div>Cart {params.id}</div>
  )
}

export default Cart