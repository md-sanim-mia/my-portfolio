import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sanim Mia | Contact",
};
const ContactPage = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
