CREATE TABLE `tarefas` (
	`id_tarefa` INT(11) NOT NULL AUTO_INCREMENT,
	`descricao` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	`concluido` CHAR(1) NULL DEFAULT NULL COLLATE 'utf8mb4_unicode_ci',
	PRIMARY KEY (`id_tarefa`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
;
