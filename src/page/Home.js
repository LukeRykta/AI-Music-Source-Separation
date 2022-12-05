import '../App.css';
import Banner from "../banner/index";
import {abstract, conclusions, introduction, purpose, references} from "../info-section/Data";
import InfoSection from "../info-section";
import AuthorSection from "../author-section";

function Home() {

  return (
      <>
          <Banner/>

              <AuthorSection/>
              <InfoSection {...abstract}/>
              <InfoSection {...introduction}/>
              <InfoSection {...purpose}/>
              <InfoSection {...conclusions}/>
              <InfoSection {...references}/>

      </>
  );
}

export default Home;
