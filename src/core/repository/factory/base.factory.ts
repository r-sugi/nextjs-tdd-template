import { ClassConstructor, plainToInstance } from "class-transformer";

interface IBaseFactory {
  // TODO: よくわからん
  createEntity<E, P>(entity: ClassConstructor<E>, plainObject: P): E;
  // TODO: よくわからん
  createEntityArray<E, P>(
    entity: ClassConstructor<E>,
    plainObjectArray: P[]
  ): E[];
}

export abstract class BaseFactory implements IBaseFactory {
  createEntity<E, P>(entity: ClassConstructor<E>, plainObject: P) {
    return plainToInstance(entity, plainObject, {
      excludeExtraneousValues: true,
    });
  }

  createEntityArray<E, P>(
    entity: ClassConstructor<E>,
    plainObjectArray: P[]
  ): E[] {
    return plainToInstance(entity, plainObjectArray, {
      excludeExtraneousValues: true,
    });
  }
}
