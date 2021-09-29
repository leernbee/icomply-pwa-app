import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'

const App = dynamic(() => import('../../../components/Form'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
