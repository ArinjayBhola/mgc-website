import Footer from "@/app/_Components/Footer";
import Header from "@/app/_Components/Header";
import SectionWithCards from "@/app/_Components/SectionWithCards";
import React from "react";

const page = () => {
  const cards = [
    {
      title: "Our IFC Services Include:",
      description: `-IFC Framework Design and Implementation: We help organizations design a robust internal control framework tailored to their industry, size, and operational complexity, covering key financial reporting and operational areas.

-Risk Assessment and Control Mapping: Identifying potential financial and operational risks, and mapping appropriate control measures to mitigate those risks effectively.

-Process Documentation and SOPs: Preparing detailed process flows, control narratives, and Standard Operating Procedures (SOPs) for key business functions to ensure consistency and accountability.

-Testing and Evaluation of Controls: Conducting walkthroughs, control testing, and gap analysis to evaluate the design and effectiveness of existing controls.

-Remediation and Strengthening of Controls: Recommending and assisting in the implementation of corrective measures to address control deficiencies and improve governance.

-IFC Reporting and Certification Support: Assisting management in preparing required reports and supporting statutory auditors in forming their opinion on the effectiveness of IFC.

By offering comprehensive IFC services, our CA firm ensures that clients not only meet statutory obligations but also build a strong control environment that enhances financial integrity, reduces risk, and supports long-term business sustainability.`,
    },
    {
      title: "Risk Control Matrix (RCM):",
      description: `A Risk Control Matrix (RCM) is a structured tool used to:
	
-	Identify risks associated with business processes.
-	Define control objectives to address those risks.
-	Map actual controls implemented by the company.
-	Evaluate the design and operating effectiveness of those controls.
	
	It is central to implementing and evaluating Internal Financial Controls (IFC) as per the Companies Act, 2013, especially Section 134(5)(e).
	
	The risk column in the RCM lists specific risks for each process activity.
	
	RCM captures:
	Control objective
	Control description (e.g., invoice matching before payment)
	Type of control (preventive/detective, manual/system)
	
	RCM is updated with:
	Control deficiencies
	Suggested remediation
	Target completion dates
	
	RCM provides auditable evidence of control performance and is be used by  auditors for their own IFC opinion.
	
	We work closely with our clients to build Risk Control Matrices that align with their operations and help ensure robust internal financial controls.
`,
    },
  ];

  return (
    <div>
      <Header />
      <SectionWithCards
        id="ifc-services"
        sectionTitle="IFC and Risk Control Services"
        sectionDescription="MGCO offers specialized Internal Financial Control (IFC) services to help organizations strengthen their internal processes, ensure compliance with legal requirements, and enhance operational efficiency. Under Section 134(5)(e) of the Companies Act, 2013, certain companies are required to establish and maintain adequate IFC systems, making this an essential area of focus for growing businesses."
        cards={cards}
      />
      <Footer />
    </div>
  );
};

export default page;
