import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography, Flex, Button, Input } from "antd";
import { GREEN_COLOR } from "@/constants";
import { setCurrentSurveyStep, setCurrentOnboardingStep } from "@/store/slices/AppSlice";

const { Title } = Typography;

const FinancialGoal: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
  return (
    <Flex vertical justify="space-between" style={{ width: "100%" }} gap={0}>
      <Title
        level={2}
        style={{ fontWeight: "700", fontSize: "24px", marginBottom: "8px" }}
      >
        What are your financial goals?
      </Title>
      <p style={{ marginBottom: "24px" }}>
        Setting clear goals helps us create a personalized plan for you
      </p>
      <p style={{ fontWeight: 500, fontSize: "14px" }}>
        Short-term goal (next 12 months)
      </p>
      <Input
        placeholder="E.g., Build emergency fund of $5,000"
        style={{ margin: "8px 0 16px", padding: "12px", fontSize: "100%" }}
      />
      <p style={{ fontWeight: 500, fontSize: "14px" }}>
        Medium-term goal (1-5 years)
      </p>
      <Input
        placeholder="E.g., Save for a house down payment"
        style={{ margin: "8px 0 16px", padding: "12px", fontSize: "100%" }}
      />
      <p style={{ fontWeight: 500, fontSize: "14px" }}>
        Long-term goal (5+ years)
      </p>
      <Input
        placeholder="E.g., Save for retirement"
        style={{ margin: "8px 0 16px", padding: "12px", fontSize: "100%" }}
      />

      <Button
        type="primary"
        style={{
          height: "40px",
          padding: "8px 16px",
          border: "none",
          marginTop: "24px",
          fontSize: "100%",
          backgroundColor: GREEN_COLOR,
        }}
				onClick={() => {
					navigate("/");
					dispatch(setCurrentSurveyStep(1));
					dispatch(setCurrentOnboardingStep(1));
				}}
      >
        Continue
      </Button>
    </Flex>
  );
};

export default FinancialGoal;
