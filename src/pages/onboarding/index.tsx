import React from "react";
import { useSelector } from "react-redux";
import { Flex } from "antd";
import Header from "./header";
import SignUp from "./signup";
import OnboardingStep from "./onboardingStep";
import LinkBank from "./linkbank";
import Survery from "./survey";

const Onboarding: React.FC = () => {
  const {currentOnboardingStep} = useSelector((state:any) => state.app);

  return (
    <Flex justify="center">
      <Flex
        vertical
        justify="space-between"
        align="center"
        gap="50px"
        style={{ marginBottom: "50px" }}
      >
        <Header />
        <OnboardingStep />
        {currentOnboardingStep === 1 ? (
          <SignUp />
        ) : currentOnboardingStep === 2 ? (
          <LinkBank />
        ) : (
          <Survery />
        )}
      </Flex>
    </Flex>
  );
};

export default Onboarding;
