interface TaskInterface {
    id: string;
    title: string;
    state: string;
}

interface TaskProps {
    /** Composition of the task */
    task: TaskInterface,

    /** Event to change the task to archived */
    // eslint-disable-next-line no-unused-vars
    onArchiveTask: (action: string, id: string) => void;

    /** Event to change the task to pinned */
    // eslint-disable-next-line no-unused-vars
    onTogglePinTask: (state: string, id: string) => void;

    /** Event to change the task title */
    // eslint-disable-next-line no-unused-vars
    onEditTitle: (title: string, id: string) => void;
}

export default TaskProps