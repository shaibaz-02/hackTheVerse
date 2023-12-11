import React from "react";
import { DisclosureComponent } from "./DisclosureComponent";

export const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto gap-10" id="faqs">
      <h1 className="text-center text-glow text-4xl md:text-6xl max-w-[15ch] mx-auto font-semibold text-white pb-8">
        Frequently asked questions
      </h1>
      <div className="mx-auto rounded-2xl transition-all delay-100 ease-in my-12">
        <DisclosureComponent
          heading={"Where and how to register for Hack The Verse?"}
        >
          <p>Registrations are being accepted through this website.</p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={"Do I need to pay a registration fee for the hackathon?"}
        >
          <p>
          The registration fee is ₹600 Includes food and accomodation charges
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={"Can students outside CMRTC participate in Hack The Verse?"}
        >
          <p>
            Yes, this hackathon is for students studying in any college.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={
            "Are there any solo events under Hack The Verse or do I need to team up?"
          }
        >
          <p>
          Team up! Each team can have a minimum of 3 and maximum of 4 members.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={
            "If we have an idea, should that be fully working, or can it have some margin for further development?"
          }
        >
          <p>
            The entirety of your idea need not be fully implemented. However,
            the submission should be functional so that it can be reviewed by
            the judges.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={
            "Can Hack The Verse  environment allow us to code in any language or will there be an IDE and  DB provided to us?"
          }
        >
          <p>
            Any language. Make sure you constantly update your GitHub repository
            comprising your project and submit its link. Update the README.md
            with all the details about your application and the instructions to
            run the code.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={"What is the mode of organization of the hackathon?"}
        >
          <p>This will be a completely offline hackathon.</p>
        </DisclosureComponent>
        {/* <DisclosureComponent
          heading={"Will there be a demonstration of my creation?"}
        >
          <p>
            The top 13 teams, qualifying for the 2nd round will get the
            opportunity to present their work/project to the judges.
          </p>
        </DisclosureComponent> */}
        <DisclosureComponent
          heading={
            "Who will own the Intellectual Property (IP) rights of the projects that we build?"
          }
        >
          <p>
            The developer(s) will have all the rights to own the IP of the
            product. However, all the code needs to be in the public domain
            (open source) as mentioned earlier. so that it can be thoroughly
            evaluated by the judges.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={"In case of further doubts, how do I approach?"}
        >
          <p>
            Write to us at{" "}
            <a
              href="mailto:moiduddin7337@gmail.com"
              className="text-blue-400 hover:underline"
            >
            moiduddin7337@gmail.com
            </a>{" "}
            or 
            <a
              href="mailto:shaibazmd1000@gmail.com"
              className="text-blue-400 hover:underline"
            >
              shaibazmd1000@gmail.com
            </a>
           
          </p>
        </DisclosureComponent>
      </div>
    </div>
  );
};
