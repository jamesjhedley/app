import { MigrationInterface, QueryRunner } from "typeorm";

const TABLE_NAME = "sample_table";

export class AddSampleTable1649625269458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE ${TABLE_NAME} (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          app_name VARCHAR(30) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          INDEX (created_at)
        );
      `);

    await queryRunner.query(`
        INSERT INTO ${TABLE_NAME} (app_name) VALUES ("playground-app");
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS ${TABLE_NAME}`);
  }
}
