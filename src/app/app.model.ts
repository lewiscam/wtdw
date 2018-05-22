export interface Task {
    id: string;
    description: string;
    complete?: boolean;
}

export interface List {
    id: string;
    name: string;
    activeDate: Date;
    active: boolean;
    tasks?: Task[];
}
