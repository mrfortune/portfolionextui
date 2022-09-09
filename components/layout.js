import Head from 'next/head';
import LabelBottomNavigation from './Footer';
import DrawerAppBar from './AppBar';

export default function Layout({ children }) {
    return (
      <>
        <Head>
          <title>Layouts Example</title>
        </Head>
        <DrawerAppBar/>
        <main>{children}</main>

<LabelBottomNavigation/>
      </>
    )
  }
  