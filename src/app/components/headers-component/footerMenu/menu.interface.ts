export interface Menu {
    title: string,

    subMenu: SubMenu[]


}

export interface SubMenu {
    subTitle: string,
    text: string[]
}