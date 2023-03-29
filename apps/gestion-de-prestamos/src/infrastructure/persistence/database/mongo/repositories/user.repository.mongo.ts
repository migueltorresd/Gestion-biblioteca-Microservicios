import { InjectRepository } from "@nestjs/typeorm";

export class UserRepository implements IBase<UserEntityMongo> {
  constructor(
    @InjectRepository(UserEntityMongo)
    private userRepository: Repository<UserEntityMongo>,
  ) {}

  // se usa un observable para que el metodo sea asincrono y no se bloquee el hilo de ejecucion
  create(UserEntityMongo): Observable<UserDomainEntity> {
    return from(this.userRepository.save(UserEntityMongo));
  }
}
