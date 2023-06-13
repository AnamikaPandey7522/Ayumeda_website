import { useState } from 'react';
import axios from 'axios';
import contactInfo from '@data/Contact/form.json';
import contactInfoRTL from '@data/Contact/form-rtl.json';

const Form = ({ style = "4", rtl }) => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    option: "",
    message: ""
  });

  const contactInfoData = rtl ? contactInfoRTL : contactInfo;

  const handleFormChange = (e) => {
    setFormdata(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formValues = new FormData();

    formValues.append('name', formData.name);
    formValues.append('email', formData.email);
    formValues.append('phone', formData.phone);
    formValues.append('website', formData.website);
    formValues.append('option', formData.option);
    formValues.append('message', formData.message);
    
    const res = await axios.post('/contact.php', formValues)
      .catch(err => alert(err.message));

    if (!res) return;

    alert('Form submitted successfully.')
  }

  return (
    <section className={`contact  pt-${style === '4' ? '0':'50'} style-6`} data-scroll-index="5">
      {
        style === '5' && (
          <>
            
          </>
        )
      }
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form action="contact.php" className="form" method="post" onSubmit={handleFormSubmit}>
                <h2 className="text-center  fs-30px mb-30">{ rtl ? 'الحقل اللذى يحتوى على هذة العلامة اجبارى *' : 'Contact Us' }</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="name" className="form-control" placeholder={ rtl ? 'الاسم' : "Name" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="email" className="form-control" placeholder={ rtl ? 'البريد الالكترونى *' : "Email Address *" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="phone" className="form-control" placeholder={ rtl ? 'رقم الهاتف (اختياري)' : "Phone Number (option)" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-20">
                      <input type="text" name="website" className="form-control" placeholder={ rtl ? 'رابط موقعك (اختيارى)' : "Your Website (option)" } onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-20">
                      <select className="form-select" defaultValue={ rtl ? 'كيف يمكننا مساعدتك ؟' : "How can we help you?" } name="option" onChange={handleFormChange}>
                        <option value="how can we help">{ rtl ? 'كيف يمكننا مساعدتك ؟' : 'How can we help you?' }</option>
                        <option value="option 1">{ rtl ? 'الاختيار الاول' : 'option 1' }</option>
                        <option value="option 2">{ rtl ? 'الاختيار الثاني' : 'option 2' }</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea rows="10" name="message" className="form-control" placeholder={ rtl ? 'كيف يمكننا مساعدتك ؟' : "How can we help you?" } onChange={handleFormChange}></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <div className="form-check d-inline-flex mt-30 mb-30">
                      <input className="form-check-input me-2 mt-0" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label small" htmlFor="flexCheckDefault">
                        { rtl ? 'من خلال الإرسال ، أوافق على' : 'By submitting, i’m agreed to the' } <a href="#" className="text-decoration-underline">{ rtl ? 'الشروط و الاحكام' : 'Terms & Conditons' }</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <input type="submit" value={ rtl ? 'ارسل طلبك' : 'Send Your Request' } className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <img src="/assets/img/icons/contact_a.png" alt="" className="contact_a" />
          <img src="/assets/img/icons/contact_message.png" alt="" className="contact_message" /> */}
        </div>
      </div>
    </section>
  )
}

export default Form