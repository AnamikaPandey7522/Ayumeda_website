import Link from "next/link";
import aboutData from '@data/Software/about.json';
const Technology = () => {
  return (
    <section id="technology" className="about section-padding style-3"  data-scroll-index="3">
      <div className="btm-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="info pe-lg-5">
                <div className="section-head mb-40 style-3">
                  <h3>
                    Iteck’s <span>Technology</span>
                  </h3>
                </div>
                <div className="text mb-30">
                  Our team can assist you in transforming your business through
                  latest tech capabilities to stay ahead of the curve.
                </div>
                <ul>
                  {aboutData.features.map((feature, index) => (
                    <li key={index}>
                      {" "}
                      <i className="bi bi-star-fill me-3"></i> {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/page-about-5">
                  <a className="btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn">
                    <span>How We Work</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="img img-right">
          <img src="/assets/img/about/style_3_2.png" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Technology