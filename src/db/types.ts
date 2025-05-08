// src/db/types.ts
export interface Teacher {
    id?: number;
    name: string;
    email: string;
    login_name: string;
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
  
  export interface DB {
    teachers: Teacher;
    permissions: Permission;
    managements: Management;
  }
  