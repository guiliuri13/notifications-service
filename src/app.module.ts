import { Module } from '@nestjs/common';
import { HttpModule } from 'src/http.module';
import { PrismaService } from 'src/prisma.service';
import { AppController } from './app.controller';

@Module({
    imports: [HttpModule],
    controllers: [AppController],
    providers: [
        PrismaService,
    ],
})
export class AppModule {}
