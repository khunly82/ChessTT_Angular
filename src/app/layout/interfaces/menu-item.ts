export interface MenuItem {
    title: string;
    link?: string|string[];
    icon?: string;
    children?: MenuItem[];
    open?: boolean;
}