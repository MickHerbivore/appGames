export interface Header {
    title: string;
    items: Item[];
}

export interface Item {
    name: string;
    href: string;
    isDropdown: boolean;
    options: Options[]
}

export interface Options {
    name: string;
    href: string;
}