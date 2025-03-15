/**
 * userMenuPanelで利用するあらゆる定数や型定義
 */

export type MenuItem = ItemLink;
type ItemLink = { href: string; title: string };

export const userMenu: MenuItem[] = [{ href: "/my", title: "マイページ" }];
