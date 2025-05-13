export enum RoutesName {
    LOGIN = '/',
    DASHBOARD = '/dashboard',
    DEPARTMENT = RoutesName.DASHBOARD + '/department',
    DEPARTMENT_CREATE = RoutesName.DEPARTMENT + '/create',
    TEACHER = RoutesName.DASHBOARD + '/teacher',
    TEACHER_CREATE = RoutesName.TEACHER + '/create',

    API_REVALIDATE = '/api/revalidate'
  }