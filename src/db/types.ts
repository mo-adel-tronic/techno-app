// src/db/types.ts
export interface Teacher {
    readonly id?: number;
    name: string;
    email: string;
    degree: 'أ.د'| 'أ.م.د'| 'د'| 'م.م'| 'م';
    access_token?: string | null
  }
  
  export interface Permission {
    id: number;
    user_id: number;
    management_id: number;
    role: string;
  }
  
  export interface Management {
    id: number;
    name: string;
  }

  export interface Department {
    readonly id?: number;
    name: string;
    depart_code: string;
}
  
  export interface DB {
    teachers: Teacher;
    permissions: Permission;
    managements: Management;
    department: Department;
  }
  