import "react";
import SectionOne from "../components/SectionOne";
import Contactus from "../components/Contactus";
import Aboutus from "../components/Aboutus";
import Blogs from "../components/Blogs";

function Home() {
  return (
    <>
      <SectionOne />
      <Blogs />
      <Aboutus />
      <Contactus />
    </>
  );
}

export default Home;
