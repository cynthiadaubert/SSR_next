'use client'

import { useParams } from 'next/navigation';

const ProductPage = () => {
    const params = useParams();
    return <p>{JSON.stringify(params)}</p>;
  };
  
  export default ProductPage;