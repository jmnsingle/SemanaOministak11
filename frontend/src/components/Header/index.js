import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

export default function Header() {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <Switch 
        onChange={() => {}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        width={50}
        // offColor=""
        onColor={colors.primary}
      />
    </Container>
  );
}
