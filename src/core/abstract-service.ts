import { DeepPartial, Repository } from 'typeorm';

export abstract class AbstractService<T> {
  protected repository: Repository<T>;

  async read();
  async read(id: string | number);

  async read(idOrQuery?: any) {
    if (typeof idOrQuery === 'number' || typeof idOrQuery === 'string') {
      return await this.repository.findOne(idOrQuery);
    }
    return await this.repository.find();
  }

  async create(entity: DeepPartial<T>) {
    const e = this.repository.create(entity);
    return await this.repository.save(e);
  }

  async update(id: number, entity: Partial<T>) {
    const e = await this.repository.findOne(id);
    Object.keys(entity).forEach(key => {
      e[key] = entity[key];
    });
    return await this.repository.save(e);
  }

  async delete(id: number) {
    const entity = await this.repository.findOne(id);
    if (entity) {
      await this.repository.delete(id);
      return { success: true };
    }
    return { success: false };
  }
}
