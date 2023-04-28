import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect , useState} from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function() {
  axios
  .get(
    `https://2b8e0705-50c3-4d26-9a8c-e3aeb68ea16f.mock.pstmn.io/products/${id}`
    )
  .then(
    function(result){ 
      setProduct(result.data);
      console.log(result);
  
    })
    .catch(function(error){
      console.log(error);
    });
   },[] );
  return <h1>Product Detail Page {id} product </h1>;
}

export default ProductPage;
