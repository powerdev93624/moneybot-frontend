import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Flex, Button, ConfigProvider } from "antd";
import { LIGHT_GREEN_COLOR, GREEN_COLOR } from "@/constants";
import { setCurrentSurveyStep } from "@/store/slices/AppSlice";

const { Title } = Typography;

const Challenge: React.FC = () => {
  const {currentSurveyStep} = useSelector((state:any) => state.app);
  const dispatch = useDispatch();
  const challengeList: string[] = [
    "Sticking to a budget",
    "Managing debt",
    "Growing savings",
    "Understanding investments"
  ];
  return (
    <Flex vertical justify="space-between" style={{ width: "100%" }} gap={0}>
      <Title
        level={2}
        style={{ fontWeight: "700", fontSize: "24px", marginBottom: "8px" }}
      >
        What is your biggest financial challenge?
      </Title>
      <p style={{ marginBottom: "12px" }}>
      Understanding your challenges helps us provide better solutions
      </p>
      {challengeList.map((challenge_item, idx) => {
        return (
          <ConfigProvider
            theme={{
              components: {
                Button: {
									defaultColor: GREEN_COLOR,
									defaultHoverColor: GREEN_COLOR,
									defaultBorderColor: LIGHT_GREEN_COLOR,
									defaultHoverBorderColor: GREEN_COLOR
                },
              },
            }}
          >
            <Button
              type="default"
              style={{
                padding: "16px",
                justifyContent: "flex-start",
                fontSize: "100%",
                height: "56px",
                marginTop: "12px"
              }}
              key={idx}
              onClick={() => {
                dispatch(setCurrentSurveyStep(currentSurveyStep + 1));
              }}
            >
              {challenge_item}
            </Button>
          </ConfigProvider>
        );
      })}
    </Flex>
  );
};

export default Challenge;
