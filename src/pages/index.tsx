import Link from 'next/link';

import Layout from '../layouts';

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="font-sans text-2xl pb-5">Prueba de Tailwind + Redux Toolkit ⚛</h1>
      <p className="text-xl underline mb-2">Escribe el nombre que quieres guardar:</p>
      <input className="bg-gray-100 rounded-md h-7 pl-1" />
      <button className="mt-4 mb-6 bg-green-400 px-5 py-1 text-white rounded-xl text-xl">
        Guardar
      </button>
      <p className="text-blue-500 hover:text-red-500">
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
