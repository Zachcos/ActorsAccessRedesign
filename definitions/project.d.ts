interface BreakdownProps {
  id: number;
  dateTime: string;
  title: string;
  type: string;
  casting: string;
  startDate?: string;
  union: string;
}

interface MenuItemProps {
  title: string;
  url?: string;
  submenu?: MenuItemProps[];
}

interface MenuItemsProps {
  items: MenuItemProps[];
}

interface GigProps {
  title: string;
  datePosted: string;
  venue: string;
  union: string;
  audDates: string;
  audDeadline: string;
  rehDates: string;
  prodDates: string;
  prodPay: string;
  prodLocation: string;
}

interface CreativeProps {
  label: string;
  value: string;
}

interface RolesProps {
  role: string;
  description: string;
}

interface ShowDataProps {
  gigInfo: GigProps[];
  creativeInfo: CreativeProps[];
  roles: RolesProps[];
}
