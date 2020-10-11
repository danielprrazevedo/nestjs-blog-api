import { DeepPartial, Repository } from 'typeorm';

export abstract class AbstractService<T> {
  protected readonly repository: Repository<T>;

  async read(): Promise<T[]>;
  async read(id: string | number): Promise<T>;

  async read(idOrQuery?: any): Promise<T | T[]> {
    if (typeof idOrQuery === 'number' || typeof idOrQuery === 'string') {
      return await this.repository.findOne(idOrQuery);
    }
    return await this.repository.find();
  }

  async create(entity: DeepPartial<T>) {
    const e = this.repository.create(entity);
    return await this.repository.save(e);
  }

  async update(id: string, entity: Partial<T>) {
    const e = await this.repository.findOne(id);
    Object.keys(entity).forEach(key => {
      e[key] = entity[key];
    });
    return await this.repository.save(e);
  }

  async delete(id: string) {
    const entity = await this.repository.findOne(id);
    if (entity) {
      await this.repository.delete(id);
      return { success: true };
    }
    return { success: false };
  }
}
