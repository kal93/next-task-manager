import GlassPane from "@tm/components/GlassPane";
import '@tm/styles/global.css';

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>

      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">{children}</GlassPane>
      </body>
    </html>
  );
}
