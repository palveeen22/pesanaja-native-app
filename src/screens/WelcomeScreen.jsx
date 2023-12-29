import React from "react";
import styled from "styled-components/native";
import { Text, Image } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Image
        source={require("../assets/1.jpg")}
        style={{ width: 300, height: 300 }}
      />
      <Box>
        <TextH1>Pesanaja</TextH1>
        <Paragraph>Get your product in 15 minutes</Paragraph>
      </Box>
      <ButtonNext
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <ButtonText>Get Started</ButtonText>
      </ButtonNext>
    </Container>
  );
};

export default WelcomeScreen;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 5px;
`;

const Box = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextH1 = styled.Text`
  color: #404040;
  font-size: 40px;
  font-weight: bold;
`;

const Paragraph = styled.Text`
  color: #595959;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
`;

const ButtonNext = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #39b54a;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 90%;
  padding-horizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 500;
  text-align: center;
  padding: 15px;
  margin-right: 10px;
`;
