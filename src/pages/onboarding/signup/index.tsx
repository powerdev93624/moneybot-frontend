import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex, Button, Form, Input, Typography } from "antd";
import { GREEN_COLOR } from "@/constants";
import { setCurrentOnboardingStep } from "@/store/slices/AppSlice";

const { Title } = Typography;
const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const {currentOnboardingStep} = useSelector((state:any) => state.app);
  const dispatch = useDispatch();
  const handleSignUp = () => {
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
        Create Your Account
      </Title>
      <p style={{ color: "rgb(75 85 99)", textAlign: "center" }}>
        Join thousands of people who've already improved their financial future
        with MoneyBot's personalized AI guidance.
      </p>
      <Form layout={"vertical"} form={form} style={{ width: "100%", marginTop: "32px" }}>
        <Form.Item
          label={
            <h5
              style={{
                color: "rgb(75 85 99)",
                fontSize: "13px",
                margin: "0 0 5px",
              }}
            >
              Full Name
            </h5>
          }
        >
          <Input placeholder="" style={{ fontSize: "20px" }} />
        </Form.Item>
        <Form.Item
          label={
            <h5
              style={{
                color: "rgb(75 85 99)",
                fontSize: "13px",
                margin: "0 0 5px",
              }}
            >
              Email
            </h5>
          }
        >
          <Input placeholder="" style={{ fontSize: "20px" }} />
        </Form.Item>
        <Form.Item
          label={
            <h5
              style={{
                color: "rgb(75 85 99)",
                fontSize: "13px",
                margin: "0 0 5px",
              }}
            >
              Phone Number
            </h5>
          }
        >
          <Input placeholder="" style={{ fontSize: "20px" }} />
        </Form.Item>
        <Form.Item
          label={
            <h5
              style={{
                color: "rgb(75 85 99)",
                fontSize: "13px",
                margin: "0 0 5px",
              }}
            >
              Password
            </h5>
          }
        >
          <Input placeholder="" style={{ fontSize: "20px" }} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            style={{
              width: "100%",
              backgroundColor: GREEN_COLOR,
              padding: "20px 0",
              fontSize: "15px",
              fontWeight: "500",
            }}
            onClick={handleSignUp}
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
      <p style={{ fontSize: "14px", marginBottom: "8px" }}>
        By signing up, you'll get:
      </p>
      <p style={{ fontSize: "15px", margin: "1px 0 0 0" }}>
        ✨ Personalized financial insights
      </p>
      <p style={{ fontSize: "15px", margin: "1px 0 0 0" }}>
        💡 AI-powered investment recommendations
      </p>
      <p style={{ fontSize: "15px", margin: "1px 0 0 0" }}>
        📱 Daily tips via text message
      </p>
    </Flex>
  );
};

export default SignUp;
