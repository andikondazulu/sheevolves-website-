import Header from "../../components/Header";
import Footer from "../../components/Footer";
import JoinForm from "../../components/JoinForm";

export const metadata = {
  title: "Join us | SheEvolves Co.",
  description: "Join SheEvolves Co., a community where women celebrate women.",
};

export default function JoinPage() {
  return (
    <>
      <Header />
      <main>
        <section className="join-hero">
          <div className="container">
            <h1>Join SheEvolves Co.</h1>
            <p>
              Women celebrate women, through the ups and the downs. Fill in the
              form and we will be in touch.
            </p>
          </div>
        </section>
        <section className="container join-wrap">
          <JoinForm />
        </section>
      </main>
      <Footer />
    </>
  );
}