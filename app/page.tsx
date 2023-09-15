import Image from 'next/image';
import FullPageSpread from './components/FullPageSpread';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <FullPageSpread />
    </main>
  );
}
