import { Module } from '@nestjs/common';
import { ParserModule } from 'src/parser/parser.module';
import { QueueModule } from 'src/queue/queue.module';
import { TaskService } from './task.service';

@Module({
  imports: [ParserModule, QueueModule],
  providers: [TaskService],
})
export class TaskModule {}
