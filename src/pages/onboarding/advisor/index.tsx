import React from "react";
import { Flex, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { WarrenbuffetIcon, JohnbogleIcon, DaveramseyIcon, MyownadvisorIcon } from "@/assets/icon";

const {Title} = Typography;

const Advisor: React.FC = () => {
	return(
		<>
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
			<Flex vertical>
				<Flex>
					<img src={WarrenbuffetIcon} />
					<div>
						<Title level={5}>Warren Buffet</Title>
						<p>Value investing expert, long-term wealth building focus</p>
					</div>
					<RightOutlined />
				</Flex>
			</Flex>
		</>
	);
};

export default Advisor;

