import type { RouteLocationRaw } from 'vue-router'

export type SubMenu = Omit<Menu, 'isSingle' | 'subMenu'>
export interface RouteMeta {
  en: string
  text: string
}
export interface Menu {
  label: string
  isSingle: boolean
  route?: RouteLocationRaw & Partial<Record<'meta', Partial<RouteMeta>>>
  subMenu?: SubMenu[]
}

const MenuItems: Menu[] = [
  {
    label: 'Home',
    isSingle: true,
    route: {
      name: 'index',
    },
  },
  {
    label: 'Parent',
    isSingle: false,
    subMenu: [
      {
        label: 'aa',
        route: {
          name: 'parent-aa',
        },
      },
      {
        label: 'bb',
        route: {
          name: 'parent-bb',
        },
      },
      {
        label: 'Child1',
        route: {
          name: 'parent-childId',
          params: {
            childId: '123',
          },
        },
      },
      {
        label: 'Child2',
        route: {
          name: 'parent-childId',
          params: {
            childId: '234',
          },
        },
      },
      {
        label: 'Group',
        route: {
          name: 'parent-child-group-id',
          params: {
            group: '666',
            id: '777',
          },
        },
      },
    ],
  },
  {
    label: 'About',
    isSingle: true,
    route: {
      name: 'about',
    },
  },
]

export const useMenu = () => {
  return {
    menuItems: MenuItems,
  }
}
