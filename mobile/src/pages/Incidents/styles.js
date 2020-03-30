import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px 24px 0px 24px;
    /* background: #f0f0f0; */
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderText = styled.Text`
    font-size: 15px;
    color: #737380;
`;

export const HeaderTextBold = styled.Text`
    font-weight: bold;
`;

export const Title = styled.Text`
    font-size: 30px;
    margin-bottom: 16px;
    color: #13131a;
    font-weight: bold;
`;

export const Description = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: #737380;
`;

export const IncidentList = styled.FlatList`
    margin-top: 32px;
`;

export const Incident = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
    font-size: 14px;
    color: #41414d;
`;

export const IncidentValue = styled.Text`
    margin-top: 8px;
    font-size: 15px;
    margin-bottom: 24px;
    color: #737380;
`;

export const DetailButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DetailButtonText = styled.Text`
    color: #e02041;
    font-size: 15px;
    font-weight: bold;
`;

export const ToggleThemeButton = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  right: 35px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px black;
  elevation: 5;
`;

export const ThemeIcon = styled(Icon).attrs({
  size: 30,
  color: '#feb72b',
})``;