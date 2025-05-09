export enum RoutesName {
    LOGIN = '/',
    DASHBOARD = '/dashboard',
    DEPARTMENT = RoutesName.DASHBOARD + '/department',
    DEPARTMENT_CREATE = RoutesName.DEPARTMENT + '/create',

    API_REVALIDATE = 'api/revalidate'
  }