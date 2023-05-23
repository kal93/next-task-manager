import GlassPane from "@tm/components/GlassPane";
import Sidebar from "@tm/components/Sidebadr";
import "@tm/styles/global.css";

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>

      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center">
          <Sidebar />

          {children}
        </GlassPane>
        {/* Modal placeholder/portal div for modal to be attached */}
        <div id="modal"></div>
      </body>
    </html>
  );
}
