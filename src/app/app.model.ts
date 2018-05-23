export interface Task {
    id?: string;
    description: string;
    complete?: boolean;
    list?: string;
}

export interface List {
    id?: string;
    name: string;
    activeDate?: Date;
    active: boolean;
    tasks?: Task[];
}
