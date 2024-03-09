import "@/assets/styles/globals.css";

export const metadata = {
  title: "Brad_Tester",
  description: "testing authentication",
  keywords: "syyad",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
