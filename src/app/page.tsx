import {Products} from '@/components/Products/Products';
import {BASE_URL} from '@/api/api';

const getProducts = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="bg-[#EBECF0]">
      <main className="p-6">
        <Products products={products} />
      </main>
    </div>
  )
}
