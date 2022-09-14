import type { FC, ReactNode } from 'react'

const Menu = (props: { children: ReactNode }) => (
  <ul className="list-disc list-inside" {...props} />
)

interface MenuItemProps {
  children: ReactNode
}

const MenuItem: FC<MenuItemProps> = props => <li {...props} />

Menu.Item = MenuItem

export default Menu
