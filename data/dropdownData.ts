const menuItems: MenuItemProps[] = [
  {
    title: 'home',
    url: '/',
  },
  {
    title: 'breakdowns',
    // submenu: [
    //   {
    //     title: 'United States',
    //     url: 'unitedStates',
    //   },
    //   {
    //     title: 'Canada',
    //     url: 'canada',
    //   },
    // ],
  },
  {
    title: 'my tools',
    // submenu: [
    //   {
    //     title: 'my account',
    //     url: '#',
    //   },
    //   {
    //     title: 'contact information',
    //     url: '#',
    //   },
    //   {
    //     title: 'manage my profile',
    //     url: '#',
    //   },
    //   {
    //     title: 'manage representation',
    //     url: '#',
    //   },
    //   {
    //     title: 'email',
    //     url: '#',
    //   },
    //   {
    //     title: 'custom link',
    //     url: '#',
    //   },
    //   {
    //     title: 'order history',
    //     url: '#',
    //   },
    // ],
  },
  {
    title: 'submissions',
    url: '#',
  },
  {
    title: 'auditions',
    submenu: [
      {
        title: 'auditions',
        submenu: [
          {
            title: 'current',
            url: 'archived',
          },
        ],
      },
      {
        title: 'eco cast live',
        submenu: [
          {
            title: 'current',
            url: 'archived',
          },
        ],
      },
      {
        title: 'eco cast self tapes',
        submenu: [
          {
            title: 'current',
            url: 'archived',
          },
        ],
      },
    ],
  },
  {
    title: 'services',
    //   submenu: [
    //     {
    //       title: 'get sides',
    //       url: '#',
    //     },
    //     {
    //       title: 'talent link',
    //       url: '#',
    //     },
    //     {
    //       title: 'extra access',
    //       url: '#',
    //     },
    //     {
    //       title: 'screenplay online',
    //       url: '#',
    //     },
    //     {
    //       title: 'aircheck',
    //       url: '#',
    //     },
    //   ],
    // },
    // {
    //   title: 'contact us',
    //   url: '/contactUs',
    //   submenu: [
    //     {
    //       title: 'chat',
    //       url: '#',
    //     },
    //     {
    //       title: 'email',
    //       url: '#',
    //     },
    //     {
    //       title: 'phone',
    //       url: '#',
    //     },
    //     {
    //       title: 'FAQ',
    //       url: '#',
    //     },
    //   ],
  },
];

export { menuItems };
