import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Flex, Typography } from "antd";
import { BankIcon, LockIcon, SecurityIcon } from "@/assets/icon";
import { LIGHT_GREEN_COLOR, GREEN_COLOR } from "@/constants";
import { setCurrentOnboardingStep } from "@/store/slices/AppSlice";

const { Title } = Typography;

const LinkBank: React.FC = () => {
  const {currentOnboardingStep} = useSelector((state:any) => state.app);
  const dispatch = useDispatch();
  const handleLink = () => {
    dispatch(setCurrentOnboardingStep(currentOnboardingStep+1));
  }
  return (
    <Flex
      vertical
      style={{
        backgroundColor: "#fefefe",
        padding: "32px",
        borderRadius: "10px",
        borderBottom: "3px solid #eee",
        width: "400px",
      }}
      align="center"
    >
      <Title level={3} style={{ fontWeight: "bold" }}>
        Connect Your Bank Account
      </Title>
      <p
        style={{
          color: "rgb(75 85 99)",
          textAlign: "center",
          marginTop: 0,
          marginBottom: "32px",
          padding: "16px"
        }}
      >
        Let MoneyBot analyze your finances and provide personalized
        recommendations to help you reach your goals faster.
      </p>
      <Flex
        vertical
        align="center"
        style={{
          border: `2px solid ${LIGHT_GREEN_COLOR}`,
          borderRadius: "8px",
          padding: "16px 0",
          margin: "16px 0",
          width: "100%",
        }}
      >
        <img src={SecurityIcon} alt="security icon" />
        <Title level={5} style={{ margin: "1px 0px 4px" }}>
          Bank-Level Security
        </Title>
        <p
          style={{
            color: "rgb(75 85 99)",
            textAlign: "center",
            margin: 0,
            fontSize: "14px",
            padding: "16px",
          }}
        >
          Your data is encrypted and never stored
        </p>
      </Flex>
      <Flex
        vertical
        align="center"
        style={{
          border: `2px solid ${LIGHT_GREEN_COLOR}`,
          borderRadius: "8px",
          padding: "16px 0",
          margin: "16px 0",
          width: "100%",
        }}
      >
        <img src={LockIcon} alt="security icon" />
        <Title level={5} style={{ margin: "1px 0px 4px" }}>
          Read-Only Access
        </Title>
        <p
          style={{
            color: "rgb(75 85 99)",
            textAlign: "center",
            margin: 0,
            fontSize: "14px",
            padding: "16px",
          }}
        >
          We can't modify your accounts or make transactions
        </p>
      </Flex>
      <Flex
        vertical
        align="center"
        style={{
          border: `2px solid ${LIGHT_GREEN_COLOR}`,
          borderRadius: "8px",
          padding: "16px 0",
          margin: "16px 0",
          width: "100%",
        }}
      >
        <img src={BankIcon} alt="security icon" />
        <Title level={5} style={{ margin: "1px 0px 4px" }}>
          Trusted by Banks
        </Title>
        <p
          style={{
            color: "rgb(75 85 99)",
            textAlign: "center",
            margin: 0,
            fontSize: "14px",
            padding: "16px",
          }}
        >
          We use Plaid, trusted by major financial institutions
        </p>
      </Flex>
      <Button
        type="primary"
        style={{
          width: "100%",
          backgroundColor: GREEN_COLOR,
          marginTop: "16px",
          marginBottom: "32px",
          padding: "20px 0",
          fontSize: "15px",
          fontWeight: "500",
          position: "relative",
        }}
        onClick={handleLink}
      >
        Securely Link
      </Button>
      <p style={{ color: "rgb(75 85 99)", textAlign: "center" }}>
        We use Plaid to securely connect to your bank. Your credentials are
        never stored.
      </p>
    </Flex>
  );
};

export default LinkBank;
