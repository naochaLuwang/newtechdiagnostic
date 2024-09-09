
import { AuthProvider } from '../../../context/AuthContext';
import '../../globals.css'; // Adjust as needed

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>

          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
