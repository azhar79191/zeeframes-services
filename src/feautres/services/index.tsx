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
import StickyNavigation from "@/src/components/StickyNavigation";

const HomeView=()=>{
    return (<>
       <HeroSection/>
       {/* Sticky Navigation Container - Tabs remain sticky until end of WhyZeeframe section */}
       <div className="relative">
           <StickyNavigation />
           <HelpView/>
           <ServicesSection/>
           <ProcessSection/>
           <StackSection/>
           <UsecasesSection/>
           <DeliverablesSection/>
           <WhyZeeframe/>
       </div>
       <FaqSection/>
       <DesignSection/>
       <InsightsSection/>
       <ContactSection/>
       <LocationSection/>
       </>
    )
}

export default HomeView;