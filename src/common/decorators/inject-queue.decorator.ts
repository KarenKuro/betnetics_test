import {InjectQueue} from '@nestjs/bull'
import { QueueEnum } from "@common/enums";

export const InjectQueueBTCS = (queue: QueueEnum) => InjectQueue(queue)
