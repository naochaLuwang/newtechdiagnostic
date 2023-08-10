import ClientsTestimonial from "@/components/ClientsTestimonial";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ClientsTestimonial />
    </>
  );
}
