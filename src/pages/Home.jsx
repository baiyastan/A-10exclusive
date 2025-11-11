import React, {useEffect} from 'react'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../redux/thunk/thunk'

function Home() {
  const {array, loading, error} = useSelector((state) => state.product)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProduct())
  },[])

  console.log(array);
  
  return (
    <div>
      <Banner/>
      <ProductList list={array} loader={loading} />
    </div>
  )
}

export default Home
