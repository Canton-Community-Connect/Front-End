const Map = () => {
  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80 wow fadeInUp">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
	      <iframe
	      className="gmap_iframe"
	          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47210.307760095464!2d-83.52824034852898!3d42.30745607642441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b53be61dd223f%3A0x4cfc83026575a920!2sCanton%2C%20MI!5e0!3m2!1sen!2sus!4v1683153147730!5m2!1sen!2sus"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
