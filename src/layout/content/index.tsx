import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Typography } from "antd";
import { GREEN_COLOR } from "@/constants";

import {
  TextBasedAdviceIcon,
  SmartInsightsIcon,
  BankLevelSecurityIcon,
} from "@/assets/icon";

const { Title } = Typography;

const AppContent: React.FC = () => {
	const navigate = useNavigate();
  return (
    <Flex vertical justify="space-between" gap="170px">
      <Flex vertical justify="center" align="center" gap="large">
        <Title style={{ fontWeight: "bold", fontSize: "50px" }}>
          Your Personal AI Financial Advisor
        </Title>
        <Title
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            color: "rgb(75 85 99)",
            marginTop: "0px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "3rem",
						maxWidth: "700px"
          }}
        >
          Get personalized financial advice, automated savings, and smart
          investment recommendations powered by AI. All through simple text
          messages.
        </Title>
        <Button
          type="primary"
          style={{
            borderRadius: "90px",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            fontWeight: "500",
            padding: "28px 32px ",
            backgroundColor: GREEN_COLOR,
          }}
					onClick={() => {navigate("/onboarding")}}
        >
          Start Your Financial Journey
        </Button>
      </Flex>
      <Flex justify="space-around" gap="large" className="introduction">
        <Flex
          vertical
          align="center"
          justify="space-between"
          style={{ width: "30%" }}
					className="introduction-item"
        >
          <img src={TextBasedAdviceIcon} alt="Text Based Advice" width="40px"/>
          <Title level={3}>Text-Based Advice</Title>
          <p
            style={{
              color: "rgb(75 85 99)",
            }}
          >
            Text-Based AdviceGet financial guidance through simple text
            messages, no app needed
          </p>
        </Flex>
        <Flex
          vertical
          align="center"
          justify="space-between"
          style={{ width: "30%" }}
					className="introduction-item"
        >
          <img src={SmartInsightsIcon} alt="Text Based Advice" width="40px" />
          <Title level={3}>Smart Insights</Title>
          <p
            style={{
              color: "rgb(75 85 99)",
            }}
          >
            AI-powered analysis of your spending and investment patterns
          </p>
        </Flex>
        <Flex
          vertical
          align="center"
          justify="space-between"
          style={{ width: "30%" }}
					className="introduction-item"
        >
          <img
            src={BankLevelSecurityIcon}
            alt="Text Based Advice"
            width="40px"
          />
          <Title level={3}>Bank-Level Security</Title>
          <p
            style={{
              color: "rgb(75 85 99)",
            }}
          >
            Your data is protected with enterprise-grade encryption
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AppContent;
