import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from 'src/create-notification-body';

@Controller('notifications')
export class AppController {
    constructor(private readonly prisma: PrismaService) {}

    @Get()
    list() {
        return this.prisma.notifications.findMany();
    }

    @Post()
    async create(@Body() body: CreateNotificationBody) {
        const { recipientId, content, category } = body;

        await this.prisma.notifications.create({
            data: {
                id: randomUUID(),
                content,
                category,
                recipientId,
            }
        })
    }
}
