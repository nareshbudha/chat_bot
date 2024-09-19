

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 usefullink">
              <div className="footer-widget">
                <h4>Useful Links</h4>
                <ul className="m-0 p-0">
                  <li><i className="fa-solid fa-link"></i> <a href="http://entrance.mu.edu.np/" target="_blank">Online Entrance Form</a></li>
                  <li><i className="fa-solid fa-link"></i> <a href="http://www.mwuqaad.edu.np/" target="_blank">Quality Assurance and Accreditation Division</a></li>
                  <li><i className="fa-solid fa-link"></i> <a href="http://www.mwu.edu.np/?post_type=quicklink&amp;p=317&amp;preview=true" target="_blank">University Service Commission</a></li>
                  <li><i className="fa-solid fa-link"></i> <a href="http://www.ugcnepal.edu.np/" target="_blank">Universities of Nepal</a></li>
                  <li><i className="fa-solid fa-link"></i> <a href="http://ugcnepal.edu.np/" target="_blank">University Grant Commission</a></li>
                  <li><i className="fa-solid fa-link"></i> <a href="https://moic.gov.np/" target="_blank">Ministry of Information and Communications</a></li>
                  <li><i className="fa-solid fa-link"></i> <a href="http://mof.gov.np/" target="_blank">Ministry of Finance</a></li>
                  <li><i className="fa-solid fa-link"></i> <a href="http://moe.gov.np/" target="_blank">Ministry of Education</a></li>
                  <li><i className="fa-solid fa-link"></i> <a href="https://www.opmcm.gov.np/" target="_blank">Office of Prime Minister and Council of Ministers</a></li>

                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="footer-widget facebook">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmu.edu.np%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500"></iframe>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="footer-widget footer-contact">
                <h4>Our Address</h4>
                <ul className="m-0 p-0">
                  <li><i className="fa fa-map-marker"></i> Birendranagar-9 Surkhet, Nepal </li>
                  <li><i className="fa fa-phone"></i> <a href="tel:083-524681">083-524681 / 525444 / 525333</a> </li>
                  <li><i className="fa fa-envelope"></i> <a href="mailto:info@mu.edu.np">info@mu.edu.np</a> </li>
                </ul>
              </div>
              <div className="social-link">
                <ul>
                  <li><a href="https://www.facebook.com/mu.edu.np/" title="Facebook" target="_blank"><i className="fa-brands fa-facebook"></i></a></li>
                  <li><a href="https://twitter.com/MWUNepal" title="Twitter" target="_blank"><i className="fa-brands fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.youtube.com/channel/UCmlFfUfqK5YU7gQu0pnTAcg" title="Youtube" target="_blank"><i className="fa-brands fa-youtube" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.instagram.com/midwesternuniversity/" title="Instagram" target="_blank"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <p>© 2021 Mid-West University, Nepal | All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
