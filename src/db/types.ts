// src/db/types.ts
export interface Teacher {
  readonly id?: number;
  name: string;
  email: string;
  degree: "أ.د" | "أ.م.د" | "د" | "م.م" | "م";
  t_order: number;
  access_token?: string | null;
}
export type JobsType = 'مسؤل' | 'المرشد الأكاديمي العام' | 'نائب المرشد الأكاديمي العام' | 'مرشد أكاديمي' | 'مدرس' | 'عضو لجنة'
export interface TeacherJobs {
  readonly id?: number;
  job: JobsType;
  teacher_id: number;
  depart_id: number
}

export interface Department {
  readonly id?: number;
  name: string;
  depart_code: string;
}

export interface Specialization {
  readonly id?: number;
  name: string;
  depart_id: number;
}

export interface Programs {
  readonly id?: number;
  name: string;
  subject_hours: number;
  paper_hours: number;
  program_code: string;
  depart_id: number
}

export interface DB {
  teachers: Teacher;
  department: Department;
  specialization: Specialization;
  teachers_jobs: TeacherJobs;
  learning_programs: Programs;
}
