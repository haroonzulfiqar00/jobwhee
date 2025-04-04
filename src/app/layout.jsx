import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'container p-0'}>
        {children}
      </body>
    </html>
  );
}
