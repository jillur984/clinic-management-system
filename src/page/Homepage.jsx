import MedicalImage from "../assets/medical.webp";
const Homepage = () => {
  return (
    <>
      <div>
        <div className="overflow-hidden whitespace-nowrap bg-blue-500 text-white py-2 w-full">
          <p className="inline-block pl-[100%] animate-marquee text-xl font-bold ">
            🎉 Special Offer! Get 50% Discount on X-Ray Services at Our Clinic!
            🏥
          </p>
        </div>
        <div className="">
          <img src={MedicalImage} alt="" className="w-full h-96" />
        </div>
        <p className="text-justify mt-5 font-serif">
          Jillur-M Diagnostic Center, established over 20 years ago, is one of
          the leading healthcare facilities in Bangladesh. Renowned for its
          comprehensive diagnostic services, the center features a team of
          highly specialized doctors and medical professionals across various
          fields. It offers an extensive range of services, including advanced
          imaging techniques (like MRI and CT scans), laboratory tests, and
          health screenings. The center is equipped with state-of-the-art
          technology to ensure accurate and timely results, supporting both
          patients and healthcare providers in making informed medical
          decisions. Jillur-M Diagnostic Center emphasizes patient comfort and
          care, providing a welcoming environment for all visitors. Its
          commitment to quality healthcare and innovative practices has made it
          a trusted name in the Bangladeshi healthcare landscape.
        </p>
      </div>
    </>
  );
};

export default Homepage;
