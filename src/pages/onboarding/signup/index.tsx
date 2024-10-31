import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Flex, Form, Input, Typography } from "antd";
import { Rule } from "antd/es/form";
import PhoneInput from "antd-phone-input";
import { GREEN_COLOR } from "@/constants";
import { setCurrentOnboardingStep } from "@/store/slices/AppSlice";

const { Title } = Typography;
const validator: (rule: Rule, value: any) => Promise<void> = (_, { valid }) => {
  // if (valid(true)) return Promise.resolve(); // strict validation
  if (valid()) return Promise.resolve(); // non-strict validation
  return Promise.reject("Invalid phone number");
};

const SignUp: React.FC = () => {
  const [form] = Form.useForm();
  const { currentOnboardingStep } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const handleSignUp = async () => {
    const values = await form.validateFields();
    console.log(values);
    dispatch(setCurrentOnboardingStep(currentOnboardingStep + 1));
  };
  return (
    <>
      <Title level={3} style={{ fontWeight: "bold" }}>
        Create Your Account
      </Title>
      <p style={{ color: "rgb(75 85 99)", textAlign: "center" }}>
        Join thousands of people who've already improved their financial future
        with MoneyBot's personalized AI guidance.
      </p>
      <Form
        name="signup-form"
        layout={"vertical"}
        form={form}
        style={{ width: "100%", marginTop: "32px" }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          style={{
            marginBottom: "12px",
          }}
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
          <Input placeholder="" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email." },
            { type: "email", message: "Please input a valid email!" },
          ]}
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
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number." },
            { validator }
          ]}
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
          {/* <Input
            placeholder=""
            style={{ fontSize: "20px" }}
          /> */}
          <PhoneInput placeholder="+1 (111) 111 1111" enableSearch />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true }]}
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
          <Input.Password placeholder="" style={{ fontSize: "20px" }} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
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
      <Flex vertical>
        <p
          style={{ fontSize: "14px", marginBottom: "8px", paddingLeft: "8px" }}
        >
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
    </>
  );
};

export default SignUp;
