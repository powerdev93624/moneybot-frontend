import React from "react";
import { useSelector } from "react-redux";
import { Flex } from "antd";
import Header from "./header";
import SignUp from "./signup";
import OnboardingStep from "./onboardingStep";
import LinkBank from "./linkbank";
import Survery from "./survey";
import Advisor from "./advisor";

const Onboarding: React.FC = () => {
  const { currentOnboardingStep } = useSelector((state: any) => state.app);

  return (
    <Flex justify="center" style={{padding: 0}}>
      <Flex
        vertical
        justify="space-between"
        align="center"
        gap="50px"
        style={{ width: "450px", margin: "0 10px 50px" }}
        className="full-mobile"
      >
        <Header />
        <OnboardingStep />
        <Flex
          vertical
          style={{
            backgroundColor: "#fefefe",
            padding: "32px",
            borderRadius: "10px",
            borderBottom: "3px solid #eee",
            width: "95%",
          }}
          align="center"
        >
          {currentOnboardingStep === 1 ? (
            <SignUp />
          ) : currentOnboardingStep === 2 ? (
            <LinkBank />
          ) : currentOnboardingStep === 3 ? (
            <Advisor />
          ) : (
            <Survery />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Onboarding;
