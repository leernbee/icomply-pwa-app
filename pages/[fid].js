import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/Form'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
