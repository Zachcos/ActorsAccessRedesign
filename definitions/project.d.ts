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
  submenu?: MenuItemProps[] | undefined;
}
