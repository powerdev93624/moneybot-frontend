import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex, Typography, Input, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import {
  WarrenbuffetIcon,
  JohnbogleIcon,
  DaveramseyIcon,
  MyownadvisorIcon,
} from "@/assets/images";
import { GREEN_COLOR, HEAVY_GREEN_COLOR, LIGHT_GREEN_COLOR } from "@/constants";
import { setCurrentOnboardingStep } from "@/store/slices/AppSlice";

const { Title } = Typography;

const Advisor: React.FC = () => {
	const {currentOnboardingStep} = useSelector((state:any) => state.app);
	const dispatch = useDispatch();
  const [showMyAdvisor, setShowMyAdvisor] = React.useState(false);
  return (
    <>
      <style>
        {`
					.advisor_option{
						&:hover {
							background-color: ${LIGHT_GREEN_COLOR};
						}
					}
					input {
						&:focus {
							border: 2px solid ${GREEN_COLOR}
						}
					}
				`}
      </style>
      <Title level={3} style={{ fontWeight: "bold", textAlign: "center" }}>
        Choose Your AI Financial Advisor
      </Title>
      <p
        style={{
          color: "rgb(75 85 99)",
          textAlign: "center",
          marginTop: 0,
          marginBottom: "32px",
          padding: "16px 0",
        }}
      >
        Select an advisor whose investment philosophy matches your goals
      </p>
      <Flex vertical gap={16}>
        <Flex
          align="center"
          justify="space-between"
          gap={8}
          style={{
            border: `1px solid ${GREEN_COLOR}`,
            borderRadius: "8px",
            padding: "12px 16px",
            cursor: "pointer",
          }}
          className="advisor_option"
					onClick={() => {
						dispatch(setCurrentOnboardingStep(currentOnboardingStep + 1));
					}}
        >
          <Flex gap={16} align="center">
            <img src={WarrenbuffetIcon} style={{ width: "50px" }} />
            <div>
              <Title
                level={5}
                style={{
                  fontSize: "100%",
                  fontWeight: "500",
                  padding: 0,
                  margin: 0,
                }}
              >
                Warren Buffet
              </Title>
              <p style={{ fontSize: "14px", lineHeight: "20px" }}>
                Value investing expert, long-term wealth building focus
              </p>
            </div>
          </Flex>

          <RightOutlined style={{ color: "rgb(156 163 175)" }} />
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          gap={8}
          style={{
            border: `1px solid ${GREEN_COLOR}`,
            borderRadius: "8px",
            padding: "12px 16px",
            cursor: "pointer",
          }}
          className="advisor_option"
					onClick={() => {
						dispatch(setCurrentOnboardingStep(currentOnboardingStep + 1));
					}}
        >
          <Flex gap={16} align="center">
            <img src={JohnbogleIcon} style={{ width: "50px" }} />
            <div>
              <Title
                level={5}
                style={{
                  fontSize: "100%",
                  fontWeight: "500",
                  padding: 0,
                  margin: 0,
                }}
              >
                John Bogle of Vanguard
              </Title>
              <p style={{ fontSize: "14px", lineHeight: "20px" }}>
                Index fund pioneer, passive investment strategy advocate
              </p>
            </div>
          </Flex>

          <RightOutlined style={{ color: "rgb(156 163 175)" }} />
        </Flex>
        <Flex
          align="center"
          gap={8}
          style={{
            border: `1px solid ${GREEN_COLOR}`,
            borderRadius: "8px",
            padding: "12px 16px",
            cursor: "pointer",
          }}
          className="advisor_option"
					onClick={() => {
						dispatch(setCurrentOnboardingStep(currentOnboardingStep + 1));
					}}
        >
          <Flex gap={16} align="center">
            <img src={DaveramseyIcon} style={{ width: "50px" }} />
            <div>
              <Title
                level={5}
                style={{
                  fontSize: "100%",
                  fontWeight: "500",
                  padding: 0,
                  margin: 0,
                }}
              >
                Dave Ramsey
              </Title>
              <p style={{ fontSize: "14px", lineHeight: "20px" }}>
                Debt-free living and personal finance expert
              </p>
            </div>
          </Flex>

          <RightOutlined style={{ color: "rgb(156 163 175)" }} />
        </Flex>
        {showMyAdvisor ? (
          <Flex vertical gap={12}>
            <Input
              placeholder="Enter advisor name"
              style={{
                padding: "12px 16px",
                fontSize: "100%",
                borderColor: GREEN_COLOR,
              }}
            />
            <Button
              type="primary"
              style={{
                backgroundColor: GREEN_COLOR,
                padding: "12px 16px",
                fontSize: "100%",
                boxSizing: "border-box",
                height: "48px",
              }}
							onClick={() => {
								dispatch(setCurrentOnboardingStep(currentOnboardingStep + 1));
							}}
            >
              Continue
            </Button>
          </Flex>
        ) : (
          <Flex
            justify="space-between"
            align="center"
            gap={8}
            style={{
              border: `1px solid ${GREEN_COLOR}`,
              borderRadius: "8px",
              padding: "12px 16px",
              cursor: "pointer",
            }}
            className="advisor_option"
            onClick={() => {
              setShowMyAdvisor(true);
            }}
          >
            <Flex gap={16} align="center">
              <img src={MyownadvisorIcon} style={{ width: "50px" }} />
              <div>
                <Title
                  level={5}
                  style={{
                    fontSize: "100%",
                    fontWeight: "500",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  Write in your own
                </Title>
              </div>
            </Flex>
            <RightOutlined style={{ color: "rgb(156 163 175)" }} />
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Advisor;
