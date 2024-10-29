import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Flex, Button, Input } from "antd";
import { GREEN_COLOR } from "@/constants";
import { setCurrentSurveyStep } from "@/store/slices/AppSlice";

const { Title } = Typography;
const { TextArea } = Input;

const Situation: React.FC = () => {
	const {currentSurveyStep} = useSelector((state:any) => state.app);
	const dispatch = useDispatch();
  return (
    <Flex vertical justify="space-between" style={{ width: "100%" }} gap={0}>
      <Title
        level={2}
        style={{ fontWeight: "700", fontSize: "24px", marginBottom: "8px" }}
      >
        Tell us about your current financial situation
      </Title>
      <p style={{ marginBottom: "24px" }}>
        This helps us understand your starting point
      </p>
      <TextArea
        rows={4}
        style={{ padding: "16px", fontSize: "100%" }}
        placeholder="E.g., current income, savings, debt, or any specific concerns..."
      />
      <Button
        type="primary"
        style={{
          height: "40px",
          padding: "8px 16px",
          border: "none",
          marginTop: "24px",
          fontSize: "100%",
					backgroundColor: GREEN_COLOR
        }}
				onClick={() => {
					dispatch(setCurrentSurveyStep(currentSurveyStep+1));
				}}
      >
        Continue
      </Button>
    </Flex>
  );
};

export default Situation;
