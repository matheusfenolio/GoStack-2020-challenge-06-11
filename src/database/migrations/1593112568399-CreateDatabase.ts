import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateDatabase1593112568399 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('gostack_desafio06_tests');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('gostack_desafio06_tests');
  }
}
