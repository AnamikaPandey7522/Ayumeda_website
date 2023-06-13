import HeartRate from '@components/HeartRate';
import HeartBeat from '@components/HeartBeat';
const Header = () => {
  return (
    <section data-scroll-index="1">

    
    <header className="style-3 overflow-hidden" data-scroll-index="0">
      <div className="container">
        <div className="content section-padding">
          <div className="row">
            <div className="col-lg-5">
              <div className="info">
                <h1 className="h1">Make your life easier with help from <span>Iteck</span></h1>
                <p className="p">We help businesses elevate their value through custom software development, product design, QA & consultancy services.</p>
                <h5 className="h5">Get Free Quote! <span className="fw-normal ms-1">We’ll contact back in 24h</span></h5>
                <form action="contact.php" className="form mt-30" method="post">
                  <button className="btn dark-butn  rounded-pill w-100 mt-3">
                    <span>Request A Consultation</span>
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
      <div className="main-img">
      <HeartRate />
         <HeartBeat />
         
         
      </div>
     
      
    </header>
    </section>
  )
}

export default Header