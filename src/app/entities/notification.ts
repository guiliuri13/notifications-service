export interface NotificationProps {
    recipientId: string;
    content: string;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private props: NotificationProps;

    constructor(props: NotificationProps) {
        this.props = props;
    }

    public set content(content: string) {
        this.props.content = content;
    }

    public get content(): string {
        return this.props.content;
    }
}