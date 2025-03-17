import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <span>Hola mundo</span>
        {children}
      </main>
    </>
  );
}
