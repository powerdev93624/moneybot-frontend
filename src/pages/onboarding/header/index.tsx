import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Flex, Typography, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { BotIcon } from "@/assets/icon";
import { GREEN_COLOR } from "@/constants";
import { setCurrentOnboardingStep } from "@/store/slices/AppSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentOnboardingStep } = useSelector((state: any) => state.app);
  const handleReturn = () => {
    if (currentOnboardingStep > 1) {
      dispatch(setCurrentOnboardingStep(currentOnboardingStep - 1));
    } else {
      navigate("/");
    }
  };
  return (
    <Flex
      justify="flex-start"
      align="center"
      gap="8px"
      style={{
        fontSize: "20px",
        fontWeight: "bold",
        width: "100%",
        padding: "15px 0px",
      }}
    >
      <Button type="link" onClick={handleReturn} style={{ padding: 0 }}>
        <LeftOutlined style={{ color: GREEN_COLOR }} />
      </Button>
      <img src={BotIcon} width="30px" />
      <Typography style={{ fontSize: "20px" }}>
        Money<span style={{ color: GREEN_COLOR }}>Bot</span>
      </Typography>
    </Flex>
  );
};

export default Header;
