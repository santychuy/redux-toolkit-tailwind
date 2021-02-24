import Link from 'next/link';

import Layout from '../layouts';

const Profile = () => (
  <Layout>
    <h1 className="mb-5 text-3xl">Nombre guardado: </h1>
    <p className="text-blue-500 hover:text-red-500">
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  </Layout>
);

export default Profile;
