-- CreateTable
CREATE TABLE `classrooms` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `duration_plans` INTEGER UNSIGNED NOT NULL,
    `subject_id` INTEGER UNSIGNED NOT NULL,
    `teacher_id` INTEGER UNSIGNED NULL,

    INDEX `duration_plans`(`duration_plans`),
    INDEX `subject_id`(`subject_id`),
    INDEX `teacher_id`(`teacher_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `degree_plan` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `theoretical` SMALLINT UNSIGNED NOT NULL,
    `practical` SMALLINT UNSIGNED NOT NULL,
    `activity` SMALLINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `department` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(90) NOT NULL,
    `depart_code` CHAR(5) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `duration_plans` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `edu_year` YEAR NOT NULL,
    `term` ENUM('ربيعي', 'خريفي', 'صيفي') NOT NULL,
    `semester` TINYINT UNSIGNED NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `exam_plan` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `theoretical` SMALLINT UNSIGNED NOT NULL,
    `practical` SMALLINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hour_plan` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `theoretical` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `practical` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `credit` TINYINT UNSIGNED NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `learning_programs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(90) NOT NULL,
    `subject_hours` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `paper_hours` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `program_code` CHAR(10) NOT NULL,
    `depart_id` INTEGER UNSIGNED NOT NULL,
    `advisor` INTEGER UNSIGNED NULL,
    `advisor_assistant` INTEGER UNSIGNED NULL,

    INDEX `advisor`(`advisor`),
    INDEX `advisor_assistant`(`advisor_assistant`),
    INDEX `depart_id`(`depart_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `program_requirements` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(90) NOT NULL,
    `credit_hour` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `type` ENUM('اختياري', 'إجباري') NOT NULL,
    `require_code` CHAR(2) NOT NULL,
    `program_id` INTEGER UNSIGNED NOT NULL,

    INDEX `program_id`(`program_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `results` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `student_id` INTEGER UNSIGNED NOT NULL,
    `classroom_id` INTEGER UNSIGNED NOT NULL,
    `st_status` ENUM('اجتاز', 'اخفق') NOT NULL,

    INDEX `classroom_id`(`classroom_id`),
    INDEX `student_id`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `specialization` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(90) NOT NULL,
    `depart_id` INTEGER UNSIGNED NOT NULL,

    INDEX `depart_id`(`depart_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(90) NOT NULL,
    `registered_at` DATE NULL,
    `student_code` VARCHAR(20) NOT NULL,
    `national_n` VARCHAR(14) NULL,
    `phone` CHAR(11) NULL,
    `nation_phone` VARCHAR(40) NULL,
    `advisor` INTEGER UNSIGNED NULL,
    `specialization_id` INTEGER UNSIGNED NOT NULL,

    UNIQUE INDEX `student_code`(`student_code`),
    INDEX `advisor`(`advisor`),
    INDEX `specialization_id`(`specialization_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subjects` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `subject_code` CHAR(2) NOT NULL,
    `hours_id` INTEGER UNSIGNED NULL,
    `exams_id` INTEGER UNSIGNED NULL,
    `degrees_id` INTEGER UNSIGNED NULL,
    `require_id` INTEGER UNSIGNED NULL,

    INDEX `degrees_id`(`degrees_id`),
    INDEX `exams_id`(`exams_id`),
    INDEX `hours_id`(`hours_id`),
    INDEX `require_id`(`require_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teachers` (
    `id` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(90) NOT NULL,
    `degree` ENUM('أ.د', 'أ.م.د', 'د', 'م.م', 'م') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teachers_jobs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `jobs` VARCHAR(191) NOT NULL,
    `teacher_id` INTEGER UNSIGNED NOT NULL,
    `depart_id` INTEGER UNSIGNED NOT NULL,

    INDEX `depart_id`(`depart_id`),
    INDEX `teacher_id`(`teacher_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `classrooms` ADD CONSTRAINT `classrooms_ibfk_1` FOREIGN KEY (`duration_plans`) REFERENCES `duration_plans`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classrooms` ADD CONSTRAINT `classrooms_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classrooms` ADD CONSTRAINT `classrooms_ibfk_3` FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `learning_programs` ADD CONSTRAINT `learning_programs_ibfk_1` FOREIGN KEY (`depart_id`) REFERENCES `department`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `learning_programs` ADD CONSTRAINT `learning_programs_ibfk_2` FOREIGN KEY (`advisor`) REFERENCES `teachers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `learning_programs` ADD CONSTRAINT `learning_programs_ibfk_3` FOREIGN KEY (`advisor_assistant`) REFERENCES `teachers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `program_requirements` ADD CONSTRAINT `program_requirements_ibfk_1` FOREIGN KEY (`program_id`) REFERENCES `learning_programs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `results` ADD CONSTRAINT `results_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `results` ADD CONSTRAINT `results_ibfk_2` FOREIGN KEY (`classroom_id`) REFERENCES `classrooms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `specialization` ADD CONSTRAINT `specialization_ibfk_1` FOREIGN KEY (`depart_id`) REFERENCES `department`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`advisor`) REFERENCES `teachers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_ibfk_2` FOREIGN KEY (`specialization_id`) REFERENCES `specialization`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subjects` ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`hours_id`) REFERENCES `hour_plan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subjects` ADD CONSTRAINT `subjects_ibfk_2` FOREIGN KEY (`exams_id`) REFERENCES `exam_plan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subjects` ADD CONSTRAINT `subjects_ibfk_3` FOREIGN KEY (`degrees_id`) REFERENCES `degree_plan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subjects` ADD CONSTRAINT `subjects_ibfk_4` FOREIGN KEY (`require_id`) REFERENCES `program_requirements`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teachers_jobs` ADD CONSTRAINT `teachers_jobs_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teachers_jobs` ADD CONSTRAINT `teachers_jobs_ibfk_2` FOREIGN KEY (`depart_id`) REFERENCES `department`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
