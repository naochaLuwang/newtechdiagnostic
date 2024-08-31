import ClientsTestimonial from "@/components/ClientsTestimonial";
import ContactDetail from "@/components/ContactDetail";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ContactDetail />
    </>
  );
}
