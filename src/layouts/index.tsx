import { FC } from 'react';

const Layout: FC = ({ children }) => (
  <div className="h-screen flex justify-center items-center flex-col">{children}</div>
);

export default Layout;
