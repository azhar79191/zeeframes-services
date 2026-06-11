import ContactSection from "./contactsection";
import DeliverablesSection from "./deliverable";
import DesignSection from "./designsection";
import FaqSection from "./faqsection";
import HelpView from "./helpsection";
import HeroSection from "./hero";
import InsightsSection from "./insightssection";
import LocationSection from "./locationsection";
import ProcessSection from "./processsection";
import ServicesSection from "./services";
import StackSection from "./stacksection";
import UsecasesSection from "./usecases";
import WhyZeeframe  from "./zeeframsection";

const HomeView=()=>{
    return (<>
       <HeroSection/>
       <HelpView/>
       <ServicesSection/>
       <ProcessSection/>
       <StackSection/>
       <UsecasesSection/>
       <DeliverablesSection/>
       <WhyZeeframe/>
       <FaqSection/>
       <DesignSection/>
       <InsightsSection/>
       <ContactSection/>
       <LocationSection/>
       </>
    )
}

export default HomeView;