import React from "react";
import { useSelector } from "react-redux";
import { Flex } from "antd";
import { GREEN_COLOR, LIGHT_GREEN_COLOR } from "@/constants";

const OnboardingStep: React.FC = () => {
  const { currentOnboardingStep } = useSelector((state: any) => state.app);
  const onboardingStepArray: readonly number[] = [1, 2, 3, 4];
  console.log(currentOnboardingStep);

  return (
    <Flex justify="space-between" align="center" style={{ width: "350px" }}>
      {onboardingStepArray.map((step_number, index) => {
        return (
          <Flex
            justify="center"
            align="center"
            style={{
              backgroundColor:
                step_number === currentOnboardingStep ? GREEN_COLOR : LIGHT_GREEN_COLOR,
              width: "40px",
              height: "40px",
              borderRadius: "100px",
              color: step_number === currentOnboardingStep ? "#fff" : GREEN_COLOR,
            }}
            key={index}
          >
            {step_number}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default OnboardingStep;
