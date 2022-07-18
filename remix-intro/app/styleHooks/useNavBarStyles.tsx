import { createStyles } from '@mantine/core';

const useNavBarStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    // borderBottom: 0,
  },
  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  menus: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  menu: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&hover': {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export default useNavBarStyles;
