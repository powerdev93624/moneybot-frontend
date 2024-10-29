import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Flex, Button, ConfigProvider } from "antd";
import { LIGHT_GREEN_COLOR, GREEN_COLOR } from "@/constants";
import { setCurrentSurveyStep } from "@/store/slices/AppSlice";

const { Title } = Typography;

const Comfortable: React.FC = () => {
  const { currentSurveyStep } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const comfortableList: string[] = [
    "Very comfortable",
    "Somewhat comfortable",
    "Not very comfortable",
    "I need a lot of help",
  ];
  return (
    <Flex vertical justify="space-between" style={{ width: "100%" }} gap={0}>
      <Title
        level={2}
        style={{ fontWeight: "700", fontSize: "24px", marginBottom: "8px" }}
      >
        How comfortable are you with managing finances?
      </Title>
      <p style={{ marginBottom: "12px" }}>
        We'll adjust our guidance based on your experience level
      </p>
      {comfortableList.map((comfortable_item, idx) => {
        return (
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  defaultColor: GREEN_COLOR,
                  defaultHoverColor: GREEN_COLOR,
                  defaultBorderColor: LIGHT_GREEN_COLOR,
                  defaultHoverBorderColor: GREEN_COLOR,
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
                marginTop: "12px",
              }}
              key={idx}
              onClick={() => {
								dispatch(setCurrentSurveyStep(currentSurveyStep + 1))
							}}
            >
              {comfortable_item}
            </Button>
          </ConfigProvider>
        );
      })}
    </Flex>
  );
};

export default Comfortable;
