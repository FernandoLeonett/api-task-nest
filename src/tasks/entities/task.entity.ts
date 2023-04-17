export enum TaskCategory {
    Personal = 'Personal',
    Work = 'Work',
    Shopping = 'Shopping',
    Entertainment = 'Entertainment',
    Fitness = 'Fitness',
    PhoneCall = 'Phone Call',
    Other = 'Other'
}

export class Task {
    id: string
    title: string
    category: TaskCategory
    expiration: Date
    description: string
    completed: boolean 
    
}