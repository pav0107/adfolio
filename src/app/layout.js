import './globals.css';
import Nav from './Nav';

export const metadata = {
  title: 'Pav Rao',
  description: 'Pav Rao - Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
