import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './contact.scss';
export default function Contact() {
  const { handleSubmit, register, reset } = useForm();
  const sendMassage = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="container">
        <div className="contact_map">
          <Link to="/" className="contact_map-home">
            Home
          </Link>
          <span>/</span>
          <Link to="/contact" className="contact_map-contact">
            Contact
          </Link>
        </div>
        <div className="contact_main">
          <div className="contact_info">
            <div className="contact_phone">
              <div>
                <img src="/contact/icons-phone.svg" alt="" />
                <h3>Call To Us</h3>
              </div>
              <p>We are available 24/7, 7 days a week</p>
              <Link to="tel:+8801611112222">Phone: +8801611112222</Link>
            </div>
            <div className="contact_string"></div>
            <div className="contact_mail">
              <div>
                <img src="/contact/icons-mail.svg" alt="" />
                <h3>Write To US</h3>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <Link to="mailto:customer@exclusive.com">
                Emails: customer@exclusive.com
              </Link>
              <Link to="mailto:support@exclusive.com">
                Emails: support@exclusive.com
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit(sendMassage)}>
            <div>
              <input
                type="text"
                {...register('name', { required: true })}
                placeholder="Your Name *"
              />
              <input
                type="email"
                {...register('email', { required: true })}
                placeholder="Your Email *"
              />
              <input
                type="phone"
                {...register('phone', { required: true })}
                placeholder="Your Phone *"
              />
            </div>

            <textarea
              {...register('message', { required: true })}
              placeholder="Your Message"
            />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
