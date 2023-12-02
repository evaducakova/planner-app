export interface Task {
  id: number;
  title: string;
  description: string;
  deadline?: string;
  assignedPerson?: AssignedPerson;
  priority: number;
}

export interface AssignedPerson {
  name: string;
  surname: string;
}
