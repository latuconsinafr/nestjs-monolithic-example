import { NotFoundException } from '@nestjs/common';

export class CategoriesMockService {
  async findAll(): Promise<void> {
    return;
  }

  async findById(): Promise<void | NotFoundException> {
    return;
  }

  async create(): Promise<void> {
    return;
  }

  async update(): Promise<void> {
    return;
  }

  async delete(): Promise<void> {
    return;
  }
}
