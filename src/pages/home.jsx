import "react";
import SectionOne from "../components/SectionOne";
import Contactus from "../components/Contactus";
import Blogs from "../components/Blogs";
import Aboutus from "../components/Aboutus";

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
