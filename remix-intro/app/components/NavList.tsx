import React from 'react';
import { Center, Menu, Group } from '@mantine/core';
import useNavBarStyles from '~/styleHooks/useNavBarStyles';
import chevron_down from 'app/asset/icon/chevron_down.svg';
import type { HeaderSearchProps } from '~/constant/Menus';

export default function NavList({ links }: HeaderSearchProps) {
  const { classes } = useNavBarStyles();
  const { menu, menus, linkLabel } = classes;

  const navItems = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));
    if (menuItems) {
      console.log('menuItems', menuItems);
      return (
        <Menu
          key={link.label}
          trigger='hover'
          delay={1}
          transitionDuration={1}
          placement='end'
          gutter={4}
          control={
            <a
              className={menu}
              href={link.link}
              onClick={(e) => e.preventDefault()}
            >
              <Center className={linkLabel}>
                <span>{link.label}</span>
              </Center>
              {/* <img alt='chevron_down' src={chevron_down} /> */}
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }
    return (
      <a
        className={menu}
        key={link.label}
        href={link.link}
        onClick={(e) => e.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Group className={menus} spacing={5}>
      {navItems}
    </Group>
  );
}
