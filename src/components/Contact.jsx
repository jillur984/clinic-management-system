import HospitalImage from "../assets/hospital.jpg";
import LocationIcon from "../assets/location.png";
import HelpLineIcon from "../assets/helpline.png";
import EmailIcon from "../assets/email.png";
const Contact = () => {
  return (
    <>
      <section className="container">
        <div className="relative">
          <img src={HospitalImage} alt="" className="h-48 w-full " />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-red-600 text-3xl font-bold ">
            Contact Us
          </span>
        </div>

        <div className="text-center mt-5 mb-16 w-full">
          <h1 className="font-bold text-2xl text-gray-900">
            Let's get in touch
          </h1>
          <p className="text-gray-500 text-1xl">
            we are open for any suggestion or just have to chat
          </p>
        </div>

        <div className="flex justify-evenly mb-5 mt-5 max-w[100%] w-full ">
          <div className="flex gap-3 w-1/3 mx-5">
            <div>
              <img src={LocationIcon} alt="" className="h-12 " />
            </div>
            <div>
              <h1>Our Address</h1>
              <h2>Address</h2>
              <p className="text-justify">71/1,Nandibari,Muktagacha,Mymensingh</p>
            </div>
          </div>
          <div className="flex gap-3 w-1/3 mx-5">
            <div>
              <img src={HelpLineIcon} alt="" className="h-12 " />
            </div>
            <div>
              <h1>Hotline</h1>
              <span className="block">+8801734634864</span>
              <span>+8801916182025</span>
            </div>
          </div>
          <div className="flex gap-3 w-1/3">
            <div>
              <img src={EmailIcon} alt="" className="h-12 " />
            </div>
            <div>
              <h1>Email us</h1>
              <span>jillur.cse.bd@outlook.com</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
