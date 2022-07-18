// import type { HeaderSearchProps } from '~/components/NavList';

export interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

const links: HeaderSearchProps = {
  links: [
    {
      link: '/about',
      label: 'Features',
    },
    {
      link: '#1',
      label: 'Learn',
      links: [
        {
          link: '/docs',
          label: 'Documentation',
        },
        {
          link: '/resources',
          label: 'Resources',
        },
        {
          link: '/community',
          label: 'Community',
        },
        {
          link: '/blog',
          label: 'Blog',
        },
      ],
    },
    {
      link: '/about',
      label: 'About',
    },
    {
      link: '/pricing',
      label: 'Pricing',
    },
    {
      link: '#2',
      label: 'Support',
      links: [
        {
          link: '/faq',
          label: 'FAQ',
        },
        {
          link: '/demo',
          label: 'Book a demo',
        },
        {
          link: '/forums',
          label: 'Forums',
        },
      ],
    },
  ],
};

export default links;