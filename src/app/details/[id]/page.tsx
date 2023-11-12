import {BASE_URL} from '@/api/api';
import {Details} from '@/components/Details/Details';
import {BackAction} from '@/components/BackAction/BackAction';

type ParamsProps = {
  params: { id: string }
}

const getProductDetails = async (id:string) => {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }: ParamsProps) {
  const details = await getProductDetails(params.id);

  console.log(details);

  return (
    <main className="p-6">
      <BackAction />

      <Details details={details} />
    </main>
  )
}
