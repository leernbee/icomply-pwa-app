import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/Signup'), {
  ssr: false,
});

export default function Index() {
  return <App />;
}
