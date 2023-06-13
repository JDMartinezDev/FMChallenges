import { useGlobalContext } from "../context";
import successIcon from "../assets/images/icon-success.svg";
export const SuscribedPage = () => {
  const { email, handleDismiss } = useGlobalContext();
  return (
    <main className="suscribedCard">
      <section>
        <img src={successIcon} />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription
        </p>
      </section>
      <button className="dismissBtn" onClick={handleDismiss}>
        Dismiss message
      </button>
    </main>
  );
};
