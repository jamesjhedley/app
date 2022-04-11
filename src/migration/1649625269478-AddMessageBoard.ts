import { MigrationInterface, QueryRunner } from "typeorm";

const MESSAGE_BOARD_TABLE = "message_board";
const MESSAGE_TABLE = "message";

export class AddMessageBoard1649625269478 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE ${MESSAGE_BOARD_TABLE} (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX (created_at)
      );
    `);
    await queryRunner.query(`
      CREATE TABLE ${MESSAGE_TABLE} (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        message_board_id INT NOT NULL,
        parent_message_id INT,
        message VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX (created_at, message_board_id, parent_message_id),
        FOREIGN KEY (message_board_id)
          REFERENCES message_board(id),
        FOREIGN KEY (parent_message_id)
          REFERENCES message(id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS ${MESSAGE_TABLE}`);
    queryRunner.query(`DROP TABLE IF EXISTS ${MESSAGE_BOARD_TABLE}`);
  }
}
