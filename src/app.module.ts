import { Module } from '@nestjs/common';
import { AppController } from 'src/infra/app.controller';
import { HttpModule } from 'src/infra/http.module';
import { PrismaService } from 'src/infra/prisma.service';

@Module({
    imports: [HttpModule],
    controllers: [AppController],
    providers: [
        PrismaService,
    ],
})
export class AppModule {}
