export interface NavItem {
    label: string;
    url: string;
}

export interface NavProps {
  opened: boolean
  setOpen: (opened: boolean) => void
  items: NavItem[]
}
