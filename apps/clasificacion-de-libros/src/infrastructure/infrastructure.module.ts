import { Module } from '@nestjs/common';
import { ClassificationController } from './controllers/classification.controller';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [PersistenceModule],
  controllers: [ClassificationController],
  providers: [],
})
export class IntrastructureModule {}
