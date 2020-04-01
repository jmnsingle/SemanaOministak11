import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 24px 0px 24px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  color: ${({theme}) => theme.colors.title};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.textStrong};
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: ${({theme}) => theme.title === 'dark' ? '2px solid #fff' : 0};
  margin-bottom: 16px;
  margin-top: 20px;
`;

export const IncidentProperty = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.textStrong};
  margin-top: 24px;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${({theme}) => theme.colors.textStrong};
`;

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.cardBackground};
  border: ${({theme}) => theme.title === 'dark' ? '2px solid #fff' : 0};
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${({theme}) => theme.colors.title};
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.colors.textStrong};
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
