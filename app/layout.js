import '../styles/globals.css';

export const metadata = {
  title: 'EasyContract',
  description: 'Générateur de contrats informatiques pédagogiques',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head />
      <body className="bg-gray-100 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}