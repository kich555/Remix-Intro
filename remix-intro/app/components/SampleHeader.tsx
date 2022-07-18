import React from 'react';
import { useBooleanToggle } from '@mantine/hooks';
import { Burger, Container, Header } from '@mantine/core';
import { MantineLogo } from './MantineLogo';
import useNavBarStyles from '~/styleHooks/useNavBarStyles';
import NavList from './NavList';
import type { HeaderSearchProps } from '~/constant/Menus';

export default function SampleHeader({ links }: HeaderSearchProps) {
  const [opened, setOpened] = useBooleanToggle(false);
  const { classes } = useNavBarStyles();
  const { header, inner, burger } = classes;
  return (
    <Header height={56} className={header}>
      <Container>
        <div className={inner}>
          <MantineLogo variant='white' />
          <NavList links={links} />
          <Burger
            className={burger}
            opened={opened}
            onClick={() => setOpened()}
            size='sm'
          />
        </div>
      </Container>
    </Header>
  );
}
