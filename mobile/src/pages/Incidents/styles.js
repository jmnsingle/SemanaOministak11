import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px 24px 0px 24px;
    background: ${({theme}) => theme.colors.background};

`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderText = styled.Text`
    font-size: 15px;
    color: ${({theme}) => theme.colors.textStrong};
`;

export const HeaderTextBold = styled.Text`
    font-weight: bold;
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

export const IncidentList = styled.FlatList`
    margin-top: 32px;
`;

export const Incident = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.cardBackground};
    margin-bottom: 16px;
    border: ${({theme}) => theme.title === 'dark' ? '2px solid #fff' : 0};
`;

export const IncidentProperty = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.text};
`;

export const IncidentValue = styled.Text`
    margin-top: 8px;
    font-size: 15px;
    margin-bottom: 24px;
    color: ${({theme}) => theme.colors.textStrong};
`;

export const DetailButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DetailButtonText = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-size: 15px;
    font-weight: bold;
`;

export const ToggleThemeButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background: ${({theme}) => theme.colors.cardBackground};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px black;
  elevation: 5;
`;

export const ThemeIcon = styled(Icon).attrs({
  size: 30,
  color: '#feb72b',
})``;