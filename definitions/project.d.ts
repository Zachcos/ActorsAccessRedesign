interface BreakdownProps {
  id: number;
  dateTime: string;
  title: string;
  type: string;
  casting: string;
  startDate?: string;
  union: string;
}

interface ItemProps {
  title: string;
  url?: string;
  submenu?: ItemProps[];
}

interface ItemsProps {
  items: ItemProps[];
}
