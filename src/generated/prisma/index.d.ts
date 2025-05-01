
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model classrooms
 * 
 */
export type classrooms = $Result.DefaultSelection<Prisma.$classroomsPayload>
/**
 * Model degree_plan
 * 
 */
export type degree_plan = $Result.DefaultSelection<Prisma.$degree_planPayload>
/**
 * Model department
 * 
 */
export type department = $Result.DefaultSelection<Prisma.$departmentPayload>
/**
 * Model duration_plans
 * 
 */
export type duration_plans = $Result.DefaultSelection<Prisma.$duration_plansPayload>
/**
 * Model exam_plan
 * 
 */
export type exam_plan = $Result.DefaultSelection<Prisma.$exam_planPayload>
/**
 * Model hour_plan
 * 
 */
export type hour_plan = $Result.DefaultSelection<Prisma.$hour_planPayload>
/**
 * Model learning_programs
 * 
 */
export type learning_programs = $Result.DefaultSelection<Prisma.$learning_programsPayload>
/**
 * Model program_requirements
 * 
 */
export type program_requirements = $Result.DefaultSelection<Prisma.$program_requirementsPayload>
/**
 * Model results
 * 
 */
export type results = $Result.DefaultSelection<Prisma.$resultsPayload>
/**
 * Model specialization
 * 
 */
export type specialization = $Result.DefaultSelection<Prisma.$specializationPayload>
/**
 * Model students
 * 
 */
export type students = $Result.DefaultSelection<Prisma.$studentsPayload>
/**
 * Model subjects
 * 
 */
export type subjects = $Result.DefaultSelection<Prisma.$subjectsPayload>
/**
 * Model teachers
 * 
 */
export type teachers = $Result.DefaultSelection<Prisma.$teachersPayload>
/**
 * Model teachers_jobs
 * 
 */
export type teachers_jobs = $Result.DefaultSelection<Prisma.$teachers_jobsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const duration_plans_term: {
  Spring: 'Spring',
  Fall: 'Fall',
  Summer: 'Summer'
};

export type duration_plans_term = (typeof duration_plans_term)[keyof typeof duration_plans_term]


export const teachers_degree: {
  ProfessorDoctor: 'ProfessorDoctor',
  AssociateProfessorDoctor: 'AssociateProfessorDoctor',
  Doctor: 'Doctor',
  AssistantLecturer: 'AssistantLecturer',
  Lecturer: 'Lecturer'
};

export type teachers_degree = (typeof teachers_degree)[keyof typeof teachers_degree]


export const program_requirements_type: {
  Optional: 'Optional',
  Mandatory: 'Mandatory'
};

export type program_requirements_type = (typeof program_requirements_type)[keyof typeof program_requirements_type]


export const results_st_status: {
  Passed: 'Passed',
  Failed: 'Failed'
};

export type results_st_status = (typeof results_st_status)[keyof typeof results_st_status]

}

export type duration_plans_term = $Enums.duration_plans_term

export const duration_plans_term: typeof $Enums.duration_plans_term

export type teachers_degree = $Enums.teachers_degree

export const teachers_degree: typeof $Enums.teachers_degree

export type program_requirements_type = $Enums.program_requirements_type

export const program_requirements_type: typeof $Enums.program_requirements_type

export type results_st_status = $Enums.results_st_status

export const results_st_status: typeof $Enums.results_st_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Classrooms
 * const classrooms = await prisma.classrooms.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Classrooms
   * const classrooms = await prisma.classrooms.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.classrooms`: Exposes CRUD operations for the **classrooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classrooms.findMany()
    * ```
    */
  get classrooms(): Prisma.classroomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.degree_plan`: Exposes CRUD operations for the **degree_plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Degree_plans
    * const degree_plans = await prisma.degree_plan.findMany()
    * ```
    */
  get degree_plan(): Prisma.degree_planDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.departmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.duration_plans`: Exposes CRUD operations for the **duration_plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Duration_plans
    * const duration_plans = await prisma.duration_plans.findMany()
    * ```
    */
  get duration_plans(): Prisma.duration_plansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exam_plan`: Exposes CRUD operations for the **exam_plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exam_plans
    * const exam_plans = await prisma.exam_plan.findMany()
    * ```
    */
  get exam_plan(): Prisma.exam_planDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hour_plan`: Exposes CRUD operations for the **hour_plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hour_plans
    * const hour_plans = await prisma.hour_plan.findMany()
    * ```
    */
  get hour_plan(): Prisma.hour_planDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learning_programs`: Exposes CRUD operations for the **learning_programs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Learning_programs
    * const learning_programs = await prisma.learning_programs.findMany()
    * ```
    */
  get learning_programs(): Prisma.learning_programsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program_requirements`: Exposes CRUD operations for the **program_requirements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Program_requirements
    * const program_requirements = await prisma.program_requirements.findMany()
    * ```
    */
  get program_requirements(): Prisma.program_requirementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.results`: Exposes CRUD operations for the **results** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.results.findMany()
    * ```
    */
  get results(): Prisma.resultsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialization`: Exposes CRUD operations for the **specialization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specializations
    * const specializations = await prisma.specialization.findMany()
    * ```
    */
  get specialization(): Prisma.specializationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.studentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjects`: Exposes CRUD operations for the **subjects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subjects.findMany()
    * ```
    */
  get subjects(): Prisma.subjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachers`: Exposes CRUD operations for the **teachers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teachers.findMany()
    * ```
    */
  get teachers(): Prisma.teachersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachers_jobs`: Exposes CRUD operations for the **teachers_jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers_jobs
    * const teachers_jobs = await prisma.teachers_jobs.findMany()
    * ```
    */
  get teachers_jobs(): Prisma.teachers_jobsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    classrooms: 'classrooms',
    degree_plan: 'degree_plan',
    department: 'department',
    duration_plans: 'duration_plans',
    exam_plan: 'exam_plan',
    hour_plan: 'hour_plan',
    learning_programs: 'learning_programs',
    program_requirements: 'program_requirements',
    results: 'results',
    specialization: 'specialization',
    students: 'students',
    subjects: 'subjects',
    teachers: 'teachers',
    teachers_jobs: 'teachers_jobs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "classrooms" | "degree_plan" | "department" | "duration_plans" | "exam_plan" | "hour_plan" | "learning_programs" | "program_requirements" | "results" | "specialization" | "students" | "subjects" | "teachers" | "teachers_jobs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      classrooms: {
        payload: Prisma.$classroomsPayload<ExtArgs>
        fields: Prisma.classroomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.classroomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.classroomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          findFirst: {
            args: Prisma.classroomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.classroomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          findMany: {
            args: Prisma.classroomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>[]
          }
          create: {
            args: Prisma.classroomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          createMany: {
            args: Prisma.classroomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.classroomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          update: {
            args: Prisma.classroomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          deleteMany: {
            args: Prisma.classroomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.classroomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.classroomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classroomsPayload>
          }
          aggregate: {
            args: Prisma.ClassroomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassrooms>
          }
          groupBy: {
            args: Prisma.classroomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.classroomsCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomsCountAggregateOutputType> | number
          }
        }
      }
      degree_plan: {
        payload: Prisma.$degree_planPayload<ExtArgs>
        fields: Prisma.degree_planFieldRefs
        operations: {
          findUnique: {
            args: Prisma.degree_planFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_planPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.degree_planFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_planPayload>
          }
          findFirst: {
            args: Prisma.degree_planFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_planPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.degree_planFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_planPayload>
          }
          findMany: {
            args: Prisma.degree_planFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_planPayload>[]
          }
          create: {
            args: Prisma.degree_planCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_planPayload>
          }
          createMany: {
            args: Prisma.degree_planCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.degree_planDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_planPayload>
          }
          update: {
            args: Prisma.degree_planUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_planPayload>
          }
          deleteMany: {
            args: Prisma.degree_planDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.degree_planUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.degree_planUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$degree_planPayload>
          }
          aggregate: {
            args: Prisma.Degree_planAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDegree_plan>
          }
          groupBy: {
            args: Prisma.degree_planGroupByArgs<ExtArgs>
            result: $Utils.Optional<Degree_planGroupByOutputType>[]
          }
          count: {
            args: Prisma.degree_planCountArgs<ExtArgs>
            result: $Utils.Optional<Degree_planCountAggregateOutputType> | number
          }
        }
      }
      department: {
        payload: Prisma.$departmentPayload<ExtArgs>
        fields: Prisma.departmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findFirst: {
            args: Prisma.departmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findMany: {
            args: Prisma.departmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          create: {
            args: Prisma.departmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          createMany: {
            args: Prisma.departmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.departmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          update: {
            args: Prisma.departmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          deleteMany: {
            args: Prisma.departmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.departmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.departmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      duration_plans: {
        payload: Prisma.$duration_plansPayload<ExtArgs>
        fields: Prisma.duration_plansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.duration_plansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duration_plansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.duration_plansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duration_plansPayload>
          }
          findFirst: {
            args: Prisma.duration_plansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duration_plansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.duration_plansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duration_plansPayload>
          }
          findMany: {
            args: Prisma.duration_plansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duration_plansPayload>[]
          }
          create: {
            args: Prisma.duration_plansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duration_plansPayload>
          }
          createMany: {
            args: Prisma.duration_plansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.duration_plansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duration_plansPayload>
          }
          update: {
            args: Prisma.duration_plansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duration_plansPayload>
          }
          deleteMany: {
            args: Prisma.duration_plansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.duration_plansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.duration_plansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duration_plansPayload>
          }
          aggregate: {
            args: Prisma.Duration_plansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDuration_plans>
          }
          groupBy: {
            args: Prisma.duration_plansGroupByArgs<ExtArgs>
            result: $Utils.Optional<Duration_plansGroupByOutputType>[]
          }
          count: {
            args: Prisma.duration_plansCountArgs<ExtArgs>
            result: $Utils.Optional<Duration_plansCountAggregateOutputType> | number
          }
        }
      }
      exam_plan: {
        payload: Prisma.$exam_planPayload<ExtArgs>
        fields: Prisma.exam_planFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exam_planFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_planPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exam_planFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_planPayload>
          }
          findFirst: {
            args: Prisma.exam_planFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_planPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exam_planFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_planPayload>
          }
          findMany: {
            args: Prisma.exam_planFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_planPayload>[]
          }
          create: {
            args: Prisma.exam_planCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_planPayload>
          }
          createMany: {
            args: Prisma.exam_planCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.exam_planDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_planPayload>
          }
          update: {
            args: Prisma.exam_planUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_planPayload>
          }
          deleteMany: {
            args: Prisma.exam_planDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exam_planUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.exam_planUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exam_planPayload>
          }
          aggregate: {
            args: Prisma.Exam_planAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam_plan>
          }
          groupBy: {
            args: Prisma.exam_planGroupByArgs<ExtArgs>
            result: $Utils.Optional<Exam_planGroupByOutputType>[]
          }
          count: {
            args: Prisma.exam_planCountArgs<ExtArgs>
            result: $Utils.Optional<Exam_planCountAggregateOutputType> | number
          }
        }
      }
      hour_plan: {
        payload: Prisma.$hour_planPayload<ExtArgs>
        fields: Prisma.hour_planFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hour_planFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_planPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hour_planFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_planPayload>
          }
          findFirst: {
            args: Prisma.hour_planFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_planPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hour_planFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_planPayload>
          }
          findMany: {
            args: Prisma.hour_planFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_planPayload>[]
          }
          create: {
            args: Prisma.hour_planCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_planPayload>
          }
          createMany: {
            args: Prisma.hour_planCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.hour_planDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_planPayload>
          }
          update: {
            args: Prisma.hour_planUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_planPayload>
          }
          deleteMany: {
            args: Prisma.hour_planDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hour_planUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.hour_planUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hour_planPayload>
          }
          aggregate: {
            args: Prisma.Hour_planAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHour_plan>
          }
          groupBy: {
            args: Prisma.hour_planGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hour_planGroupByOutputType>[]
          }
          count: {
            args: Prisma.hour_planCountArgs<ExtArgs>
            result: $Utils.Optional<Hour_planCountAggregateOutputType> | number
          }
        }
      }
      learning_programs: {
        payload: Prisma.$learning_programsPayload<ExtArgs>
        fields: Prisma.learning_programsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.learning_programsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learning_programsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.learning_programsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learning_programsPayload>
          }
          findFirst: {
            args: Prisma.learning_programsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learning_programsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.learning_programsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learning_programsPayload>
          }
          findMany: {
            args: Prisma.learning_programsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learning_programsPayload>[]
          }
          create: {
            args: Prisma.learning_programsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learning_programsPayload>
          }
          createMany: {
            args: Prisma.learning_programsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.learning_programsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learning_programsPayload>
          }
          update: {
            args: Prisma.learning_programsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learning_programsPayload>
          }
          deleteMany: {
            args: Prisma.learning_programsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.learning_programsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.learning_programsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learning_programsPayload>
          }
          aggregate: {
            args: Prisma.Learning_programsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearning_programs>
          }
          groupBy: {
            args: Prisma.learning_programsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Learning_programsGroupByOutputType>[]
          }
          count: {
            args: Prisma.learning_programsCountArgs<ExtArgs>
            result: $Utils.Optional<Learning_programsCountAggregateOutputType> | number
          }
        }
      }
      program_requirements: {
        payload: Prisma.$program_requirementsPayload<ExtArgs>
        fields: Prisma.program_requirementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.program_requirementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_requirementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.program_requirementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_requirementsPayload>
          }
          findFirst: {
            args: Prisma.program_requirementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_requirementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.program_requirementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_requirementsPayload>
          }
          findMany: {
            args: Prisma.program_requirementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_requirementsPayload>[]
          }
          create: {
            args: Prisma.program_requirementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_requirementsPayload>
          }
          createMany: {
            args: Prisma.program_requirementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.program_requirementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_requirementsPayload>
          }
          update: {
            args: Prisma.program_requirementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_requirementsPayload>
          }
          deleteMany: {
            args: Prisma.program_requirementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.program_requirementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.program_requirementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$program_requirementsPayload>
          }
          aggregate: {
            args: Prisma.Program_requirementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram_requirements>
          }
          groupBy: {
            args: Prisma.program_requirementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Program_requirementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.program_requirementsCountArgs<ExtArgs>
            result: $Utils.Optional<Program_requirementsCountAggregateOutputType> | number
          }
        }
      }
      results: {
        payload: Prisma.$resultsPayload<ExtArgs>
        fields: Prisma.resultsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.resultsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.resultsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          findFirst: {
            args: Prisma.resultsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.resultsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          findMany: {
            args: Prisma.resultsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>[]
          }
          create: {
            args: Prisma.resultsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          createMany: {
            args: Prisma.resultsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.resultsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          update: {
            args: Prisma.resultsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          deleteMany: {
            args: Prisma.resultsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.resultsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.resultsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          aggregate: {
            args: Prisma.ResultsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResults>
          }
          groupBy: {
            args: Prisma.resultsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultsGroupByOutputType>[]
          }
          count: {
            args: Prisma.resultsCountArgs<ExtArgs>
            result: $Utils.Optional<ResultsCountAggregateOutputType> | number
          }
        }
      }
      specialization: {
        payload: Prisma.$specializationPayload<ExtArgs>
        fields: Prisma.specializationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.specializationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.specializationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializationPayload>
          }
          findFirst: {
            args: Prisma.specializationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.specializationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializationPayload>
          }
          findMany: {
            args: Prisma.specializationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializationPayload>[]
          }
          create: {
            args: Prisma.specializationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializationPayload>
          }
          createMany: {
            args: Prisma.specializationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.specializationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializationPayload>
          }
          update: {
            args: Prisma.specializationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializationPayload>
          }
          deleteMany: {
            args: Prisma.specializationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.specializationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.specializationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializationPayload>
          }
          aggregate: {
            args: Prisma.SpecializationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialization>
          }
          groupBy: {
            args: Prisma.specializationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecializationGroupByOutputType>[]
          }
          count: {
            args: Prisma.specializationCountArgs<ExtArgs>
            result: $Utils.Optional<SpecializationCountAggregateOutputType> | number
          }
        }
      }
      students: {
        payload: Prisma.$studentsPayload<ExtArgs>
        fields: Prisma.studentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findFirst: {
            args: Prisma.studentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findMany: {
            args: Prisma.studentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          create: {
            args: Prisma.studentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          createMany: {
            args: Prisma.studentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.studentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          update: {
            args: Prisma.studentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          deleteMany: {
            args: Prisma.studentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.studentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.studentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
      subjects: {
        payload: Prisma.$subjectsPayload<ExtArgs>
        fields: Prisma.subjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          findFirst: {
            args: Prisma.subjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          findMany: {
            args: Prisma.subjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>[]
          }
          create: {
            args: Prisma.subjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          createMany: {
            args: Prisma.subjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.subjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          update: {
            args: Prisma.subjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          deleteMany: {
            args: Prisma.subjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.subjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectsPayload>
          }
          aggregate: {
            args: Prisma.SubjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjects>
          }
          groupBy: {
            args: Prisma.subjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.subjectsCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectsCountAggregateOutputType> | number
          }
        }
      }
      teachers: {
        payload: Prisma.$teachersPayload<ExtArgs>
        fields: Prisma.teachersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teachersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teachersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachersPayload>
          }
          findFirst: {
            args: Prisma.teachersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teachersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachersPayload>
          }
          findMany: {
            args: Prisma.teachersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachersPayload>[]
          }
          create: {
            args: Prisma.teachersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachersPayload>
          }
          createMany: {
            args: Prisma.teachersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.teachersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachersPayload>
          }
          update: {
            args: Prisma.teachersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachersPayload>
          }
          deleteMany: {
            args: Prisma.teachersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teachersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teachersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachersPayload>
          }
          aggregate: {
            args: Prisma.TeachersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachers>
          }
          groupBy: {
            args: Prisma.teachersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachersGroupByOutputType>[]
          }
          count: {
            args: Prisma.teachersCountArgs<ExtArgs>
            result: $Utils.Optional<TeachersCountAggregateOutputType> | number
          }
        }
      }
      teachers_jobs: {
        payload: Prisma.$teachers_jobsPayload<ExtArgs>
        fields: Prisma.teachers_jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teachers_jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachers_jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teachers_jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachers_jobsPayload>
          }
          findFirst: {
            args: Prisma.teachers_jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachers_jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teachers_jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachers_jobsPayload>
          }
          findMany: {
            args: Prisma.teachers_jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachers_jobsPayload>[]
          }
          create: {
            args: Prisma.teachers_jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachers_jobsPayload>
          }
          createMany: {
            args: Prisma.teachers_jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.teachers_jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachers_jobsPayload>
          }
          update: {
            args: Prisma.teachers_jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachers_jobsPayload>
          }
          deleteMany: {
            args: Prisma.teachers_jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teachers_jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teachers_jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teachers_jobsPayload>
          }
          aggregate: {
            args: Prisma.Teachers_jobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachers_jobs>
          }
          groupBy: {
            args: Prisma.teachers_jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Teachers_jobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.teachers_jobsCountArgs<ExtArgs>
            result: $Utils.Optional<Teachers_jobsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    classrooms?: classroomsOmit
    degree_plan?: degree_planOmit
    department?: departmentOmit
    duration_plans?: duration_plansOmit
    exam_plan?: exam_planOmit
    hour_plan?: hour_planOmit
    learning_programs?: learning_programsOmit
    program_requirements?: program_requirementsOmit
    results?: resultsOmit
    specialization?: specializationOmit
    students?: studentsOmit
    subjects?: subjectsOmit
    teachers?: teachersOmit
    teachers_jobs?: teachers_jobsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClassroomsCountOutputType
   */

  export type ClassroomsCountOutputType = {
    results: number
  }

  export type ClassroomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | ClassroomsCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * ClassroomsCountOutputType without action
   */
  export type ClassroomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomsCountOutputType
     */
    select?: ClassroomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassroomsCountOutputType without action
   */
  export type ClassroomsCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resultsWhereInput
  }


  /**
   * Count Type Degree_planCountOutputType
   */

  export type Degree_planCountOutputType = {
    subjects: number
  }

  export type Degree_planCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Degree_planCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * Degree_planCountOutputType without action
   */
  export type Degree_planCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree_planCountOutputType
     */
    select?: Degree_planCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Degree_planCountOutputType without action
   */
  export type Degree_planCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectsWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    learning_programs: number
    specialization: number
    teachers_jobs: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learning_programs?: boolean | DepartmentCountOutputTypeCountLearning_programsArgs
    specialization?: boolean | DepartmentCountOutputTypeCountSpecializationArgs
    teachers_jobs?: boolean | DepartmentCountOutputTypeCountTeachers_jobsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountLearning_programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: learning_programsWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountSpecializationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: specializationWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountTeachers_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teachers_jobsWhereInput
  }


  /**
   * Count Type Duration_plansCountOutputType
   */

  export type Duration_plansCountOutputType = {
    classrooms_classrooms_duration_plansToduration_plans: number
  }

  export type Duration_plansCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms_classrooms_duration_plansToduration_plans?: boolean | Duration_plansCountOutputTypeCountClassrooms_classrooms_duration_plansToduration_plansArgs
  }

  // Custom InputTypes
  /**
   * Duration_plansCountOutputType without action
   */
  export type Duration_plansCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duration_plansCountOutputType
     */
    select?: Duration_plansCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Duration_plansCountOutputType without action
   */
  export type Duration_plansCountOutputTypeCountClassrooms_classrooms_duration_plansToduration_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classroomsWhereInput
  }


  /**
   * Count Type Exam_planCountOutputType
   */

  export type Exam_planCountOutputType = {
    subjects: number
  }

  export type Exam_planCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Exam_planCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * Exam_planCountOutputType without action
   */
  export type Exam_planCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_planCountOutputType
     */
    select?: Exam_planCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Exam_planCountOutputType without action
   */
  export type Exam_planCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectsWhereInput
  }


  /**
   * Count Type Hour_planCountOutputType
   */

  export type Hour_planCountOutputType = {
    subjects: number
  }

  export type Hour_planCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Hour_planCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * Hour_planCountOutputType without action
   */
  export type Hour_planCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hour_planCountOutputType
     */
    select?: Hour_planCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Hour_planCountOutputType without action
   */
  export type Hour_planCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectsWhereInput
  }


  /**
   * Count Type Learning_programsCountOutputType
   */

  export type Learning_programsCountOutputType = {
    program_requirements: number
  }

  export type Learning_programsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program_requirements?: boolean | Learning_programsCountOutputTypeCountProgram_requirementsArgs
  }

  // Custom InputTypes
  /**
   * Learning_programsCountOutputType without action
   */
  export type Learning_programsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Learning_programsCountOutputType
     */
    select?: Learning_programsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Learning_programsCountOutputType without action
   */
  export type Learning_programsCountOutputTypeCountProgram_requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: program_requirementsWhereInput
  }


  /**
   * Count Type Program_requirementsCountOutputType
   */

  export type Program_requirementsCountOutputType = {
    subjects: number
  }

  export type Program_requirementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Program_requirementsCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * Program_requirementsCountOutputType without action
   */
  export type Program_requirementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program_requirementsCountOutputType
     */
    select?: Program_requirementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Program_requirementsCountOutputType without action
   */
  export type Program_requirementsCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectsWhereInput
  }


  /**
   * Count Type SpecializationCountOutputType
   */

  export type SpecializationCountOutputType = {
    students: number
  }

  export type SpecializationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | SpecializationCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * SpecializationCountOutputType without action
   */
  export type SpecializationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecializationCountOutputType
     */
    select?: SpecializationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecializationCountOutputType without action
   */
  export type SpecializationCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
  }


  /**
   * Count Type StudentsCountOutputType
   */

  export type StudentsCountOutputType = {
    results: number
  }

  export type StudentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | StudentsCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentsCountOutputType
     */
    select?: StudentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resultsWhereInput
  }


  /**
   * Count Type SubjectsCountOutputType
   */

  export type SubjectsCountOutputType = {
    classrooms: number
  }

  export type SubjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | SubjectsCountOutputTypeCountClassroomsArgs
  }

  // Custom InputTypes
  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectsCountOutputType
     */
    select?: SubjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectsCountOutputType without action
   */
  export type SubjectsCountOutputTypeCountClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classroomsWhereInput
  }


  /**
   * Count Type TeachersCountOutputType
   */

  export type TeachersCountOutputType = {
    classrooms: number
    learning_programs_learning_programs_advisorToteachers: number
    learning_programs_learning_programs_advisor_assistantToteachers: number
    students: number
    teachers_jobs: number
  }

  export type TeachersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | TeachersCountOutputTypeCountClassroomsArgs
    learning_programs_learning_programs_advisorToteachers?: boolean | TeachersCountOutputTypeCountLearning_programs_learning_programs_advisorToteachersArgs
    learning_programs_learning_programs_advisor_assistantToteachers?: boolean | TeachersCountOutputTypeCountLearning_programs_learning_programs_advisor_assistantToteachersArgs
    students?: boolean | TeachersCountOutputTypeCountStudentsArgs
    teachers_jobs?: boolean | TeachersCountOutputTypeCountTeachers_jobsArgs
  }

  // Custom InputTypes
  /**
   * TeachersCountOutputType without action
   */
  export type TeachersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachersCountOutputType
     */
    select?: TeachersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeachersCountOutputType without action
   */
  export type TeachersCountOutputTypeCountClassroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classroomsWhereInput
  }

  /**
   * TeachersCountOutputType without action
   */
  export type TeachersCountOutputTypeCountLearning_programs_learning_programs_advisorToteachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: learning_programsWhereInput
  }

  /**
   * TeachersCountOutputType without action
   */
  export type TeachersCountOutputTypeCountLearning_programs_learning_programs_advisor_assistantToteachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: learning_programsWhereInput
  }

  /**
   * TeachersCountOutputType without action
   */
  export type TeachersCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
  }

  /**
   * TeachersCountOutputType without action
   */
  export type TeachersCountOutputTypeCountTeachers_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teachers_jobsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model classrooms
   */

  export type AggregateClassrooms = {
    _count: ClassroomsCountAggregateOutputType | null
    _avg: ClassroomsAvgAggregateOutputType | null
    _sum: ClassroomsSumAggregateOutputType | null
    _min: ClassroomsMinAggregateOutputType | null
    _max: ClassroomsMaxAggregateOutputType | null
  }

  export type ClassroomsAvgAggregateOutputType = {
    id: number | null
    duration_plans: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type ClassroomsSumAggregateOutputType = {
    id: number | null
    duration_plans: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type ClassroomsMinAggregateOutputType = {
    id: number | null
    duration_plans: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type ClassroomsMaxAggregateOutputType = {
    id: number | null
    duration_plans: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type ClassroomsCountAggregateOutputType = {
    id: number
    duration_plans: number
    subject_id: number
    teacher_id: number
    _all: number
  }


  export type ClassroomsAvgAggregateInputType = {
    id?: true
    duration_plans?: true
    subject_id?: true
    teacher_id?: true
  }

  export type ClassroomsSumAggregateInputType = {
    id?: true
    duration_plans?: true
    subject_id?: true
    teacher_id?: true
  }

  export type ClassroomsMinAggregateInputType = {
    id?: true
    duration_plans?: true
    subject_id?: true
    teacher_id?: true
  }

  export type ClassroomsMaxAggregateInputType = {
    id?: true
    duration_plans?: true
    subject_id?: true
    teacher_id?: true
  }

  export type ClassroomsCountAggregateInputType = {
    id?: true
    duration_plans?: true
    subject_id?: true
    teacher_id?: true
    _all?: true
  }

  export type ClassroomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classrooms to aggregate.
     */
    where?: classroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classrooms to fetch.
     */
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: classroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned classrooms
    **/
    _count?: true | ClassroomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassroomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassroomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomsMaxAggregateInputType
  }

  export type GetClassroomsAggregateType<T extends ClassroomsAggregateArgs> = {
        [P in keyof T & keyof AggregateClassrooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassrooms[P]>
      : GetScalarType<T[P], AggregateClassrooms[P]>
  }




  export type classroomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classroomsWhereInput
    orderBy?: classroomsOrderByWithAggregationInput | classroomsOrderByWithAggregationInput[]
    by: ClassroomsScalarFieldEnum[] | ClassroomsScalarFieldEnum
    having?: classroomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomsCountAggregateInputType | true
    _avg?: ClassroomsAvgAggregateInputType
    _sum?: ClassroomsSumAggregateInputType
    _min?: ClassroomsMinAggregateInputType
    _max?: ClassroomsMaxAggregateInputType
  }

  export type ClassroomsGroupByOutputType = {
    id: number
    duration_plans: number
    subject_id: number
    teacher_id: number | null
    _count: ClassroomsCountAggregateOutputType | null
    _avg: ClassroomsAvgAggregateOutputType | null
    _sum: ClassroomsSumAggregateOutputType | null
    _min: ClassroomsMinAggregateOutputType | null
    _max: ClassroomsMaxAggregateOutputType | null
  }

  type GetClassroomsGroupByPayload<T extends classroomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomsGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomsGroupByOutputType[P]>
        }
      >
    >


  export type classroomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    duration_plans?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    duration_plans_classrooms_duration_plansToduration_plans?: boolean | duration_plansDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
    teachers?: boolean | classrooms$teachersArgs<ExtArgs>
    results?: boolean | classrooms$resultsArgs<ExtArgs>
    _count?: boolean | ClassroomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classrooms"]>



  export type classroomsSelectScalar = {
    id?: boolean
    duration_plans?: boolean
    subject_id?: boolean
    teacher_id?: boolean
  }

  export type classroomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "duration_plans" | "subject_id" | "teacher_id", ExtArgs["result"]["classrooms"]>
  export type classroomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    duration_plans_classrooms_duration_plansToduration_plans?: boolean | duration_plansDefaultArgs<ExtArgs>
    subjects?: boolean | subjectsDefaultArgs<ExtArgs>
    teachers?: boolean | classrooms$teachersArgs<ExtArgs>
    results?: boolean | classrooms$resultsArgs<ExtArgs>
    _count?: boolean | ClassroomsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $classroomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "classrooms"
    objects: {
      duration_plans_classrooms_duration_plansToduration_plans: Prisma.$duration_plansPayload<ExtArgs>
      subjects: Prisma.$subjectsPayload<ExtArgs>
      teachers: Prisma.$teachersPayload<ExtArgs> | null
      results: Prisma.$resultsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      duration_plans: number
      subject_id: number
      teacher_id: number | null
    }, ExtArgs["result"]["classrooms"]>
    composites: {}
  }

  type classroomsGetPayload<S extends boolean | null | undefined | classroomsDefaultArgs> = $Result.GetResult<Prisma.$classroomsPayload, S>

  type classroomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<classroomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomsCountAggregateInputType | true
    }

  export interface classroomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['classrooms'], meta: { name: 'classrooms' } }
    /**
     * Find zero or one Classrooms that matches the filter.
     * @param {classroomsFindUniqueArgs} args - Arguments to find a Classrooms
     * @example
     * // Get one Classrooms
     * const classrooms = await prisma.classrooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classroomsFindUniqueArgs>(args: SelectSubset<T, classroomsFindUniqueArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classrooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classroomsFindUniqueOrThrowArgs} args - Arguments to find a Classrooms
     * @example
     * // Get one Classrooms
     * const classrooms = await prisma.classrooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classroomsFindUniqueOrThrowArgs>(args: SelectSubset<T, classroomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsFindFirstArgs} args - Arguments to find a Classrooms
     * @example
     * // Get one Classrooms
     * const classrooms = await prisma.classrooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classroomsFindFirstArgs>(args?: SelectSubset<T, classroomsFindFirstArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classrooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsFindFirstOrThrowArgs} args - Arguments to find a Classrooms
     * @example
     * // Get one Classrooms
     * const classrooms = await prisma.classrooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classroomsFindFirstOrThrowArgs>(args?: SelectSubset<T, classroomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classrooms
     * const classrooms = await prisma.classrooms.findMany()
     * 
     * // Get first 10 Classrooms
     * const classrooms = await prisma.classrooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomsWithIdOnly = await prisma.classrooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends classroomsFindManyArgs>(args?: SelectSubset<T, classroomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classrooms.
     * @param {classroomsCreateArgs} args - Arguments to create a Classrooms.
     * @example
     * // Create one Classrooms
     * const Classrooms = await prisma.classrooms.create({
     *   data: {
     *     // ... data to create a Classrooms
     *   }
     * })
     * 
     */
    create<T extends classroomsCreateArgs>(args: SelectSubset<T, classroomsCreateArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classrooms.
     * @param {classroomsCreateManyArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classrooms = await prisma.classrooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends classroomsCreateManyArgs>(args?: SelectSubset<T, classroomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Classrooms.
     * @param {classroomsDeleteArgs} args - Arguments to delete one Classrooms.
     * @example
     * // Delete one Classrooms
     * const Classrooms = await prisma.classrooms.delete({
     *   where: {
     *     // ... filter to delete one Classrooms
     *   }
     * })
     * 
     */
    delete<T extends classroomsDeleteArgs>(args: SelectSubset<T, classroomsDeleteArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classrooms.
     * @param {classroomsUpdateArgs} args - Arguments to update one Classrooms.
     * @example
     * // Update one Classrooms
     * const classrooms = await prisma.classrooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends classroomsUpdateArgs>(args: SelectSubset<T, classroomsUpdateArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classrooms.
     * @param {classroomsDeleteManyArgs} args - Arguments to filter Classrooms to delete.
     * @example
     * // Delete a few Classrooms
     * const { count } = await prisma.classrooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends classroomsDeleteManyArgs>(args?: SelectSubset<T, classroomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classrooms
     * const classrooms = await prisma.classrooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends classroomsUpdateManyArgs>(args: SelectSubset<T, classroomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Classrooms.
     * @param {classroomsUpsertArgs} args - Arguments to update or create a Classrooms.
     * @example
     * // Update or create a Classrooms
     * const classrooms = await prisma.classrooms.upsert({
     *   create: {
     *     // ... data to create a Classrooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classrooms we want to update
     *   }
     * })
     */
    upsert<T extends classroomsUpsertArgs>(args: SelectSubset<T, classroomsUpsertArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsCountArgs} args - Arguments to filter Classrooms to count.
     * @example
     * // Count the number of Classrooms
     * const count = await prisma.classrooms.count({
     *   where: {
     *     // ... the filter for the Classrooms we want to count
     *   }
     * })
    **/
    count<T extends classroomsCountArgs>(
      args?: Subset<T, classroomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassroomsAggregateArgs>(args: Subset<T, ClassroomsAggregateArgs>): Prisma.PrismaPromise<GetClassroomsAggregateType<T>>

    /**
     * Group by Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classroomsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends classroomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: classroomsGroupByArgs['orderBy'] }
        : { orderBy?: classroomsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, classroomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the classrooms model
   */
  readonly fields: classroomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for classrooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__classroomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    duration_plans_classrooms_duration_plansToduration_plans<T extends duration_plansDefaultArgs<ExtArgs> = {}>(args?: Subset<T, duration_plansDefaultArgs<ExtArgs>>): Prisma__duration_plansClient<$Result.GetResult<Prisma.$duration_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends subjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectsDefaultArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teachers<T extends classrooms$teachersArgs<ExtArgs> = {}>(args?: Subset<T, classrooms$teachersArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    results<T extends classrooms$resultsArgs<ExtArgs> = {}>(args?: Subset<T, classrooms$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the classrooms model
   */
  interface classroomsFieldRefs {
    readonly id: FieldRef<"classrooms", 'Int'>
    readonly duration_plans: FieldRef<"classrooms", 'Int'>
    readonly subject_id: FieldRef<"classrooms", 'Int'>
    readonly teacher_id: FieldRef<"classrooms", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * classrooms findUnique
   */
  export type classroomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter, which classrooms to fetch.
     */
    where: classroomsWhereUniqueInput
  }

  /**
   * classrooms findUniqueOrThrow
   */
  export type classroomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter, which classrooms to fetch.
     */
    where: classroomsWhereUniqueInput
  }

  /**
   * classrooms findFirst
   */
  export type classroomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter, which classrooms to fetch.
     */
    where?: classroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classrooms to fetch.
     */
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classrooms.
     */
    cursor?: classroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classrooms.
     */
    distinct?: ClassroomsScalarFieldEnum | ClassroomsScalarFieldEnum[]
  }

  /**
   * classrooms findFirstOrThrow
   */
  export type classroomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter, which classrooms to fetch.
     */
    where?: classroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classrooms to fetch.
     */
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classrooms.
     */
    cursor?: classroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classrooms.
     */
    distinct?: ClassroomsScalarFieldEnum | ClassroomsScalarFieldEnum[]
  }

  /**
   * classrooms findMany
   */
  export type classroomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter, which classrooms to fetch.
     */
    where?: classroomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classrooms to fetch.
     */
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing classrooms.
     */
    cursor?: classroomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classrooms.
     */
    skip?: number
    distinct?: ClassroomsScalarFieldEnum | ClassroomsScalarFieldEnum[]
  }

  /**
   * classrooms create
   */
  export type classroomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * The data needed to create a classrooms.
     */
    data: XOR<classroomsCreateInput, classroomsUncheckedCreateInput>
  }

  /**
   * classrooms createMany
   */
  export type classroomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many classrooms.
     */
    data: classroomsCreateManyInput | classroomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * classrooms update
   */
  export type classroomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * The data needed to update a classrooms.
     */
    data: XOR<classroomsUpdateInput, classroomsUncheckedUpdateInput>
    /**
     * Choose, which classrooms to update.
     */
    where: classroomsWhereUniqueInput
  }

  /**
   * classrooms updateMany
   */
  export type classroomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update classrooms.
     */
    data: XOR<classroomsUpdateManyMutationInput, classroomsUncheckedUpdateManyInput>
    /**
     * Filter which classrooms to update
     */
    where?: classroomsWhereInput
    /**
     * Limit how many classrooms to update.
     */
    limit?: number
  }

  /**
   * classrooms upsert
   */
  export type classroomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * The filter to search for the classrooms to update in case it exists.
     */
    where: classroomsWhereUniqueInput
    /**
     * In case the classrooms found by the `where` argument doesn't exist, create a new classrooms with this data.
     */
    create: XOR<classroomsCreateInput, classroomsUncheckedCreateInput>
    /**
     * In case the classrooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<classroomsUpdateInput, classroomsUncheckedUpdateInput>
  }

  /**
   * classrooms delete
   */
  export type classroomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    /**
     * Filter which classrooms to delete.
     */
    where: classroomsWhereUniqueInput
  }

  /**
   * classrooms deleteMany
   */
  export type classroomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classrooms to delete
     */
    where?: classroomsWhereInput
    /**
     * Limit how many classrooms to delete.
     */
    limit?: number
  }

  /**
   * classrooms.teachers
   */
  export type classrooms$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    where?: teachersWhereInput
  }

  /**
   * classrooms.results
   */
  export type classrooms$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    where?: resultsWhereInput
    orderBy?: resultsOrderByWithRelationInput | resultsOrderByWithRelationInput[]
    cursor?: resultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultsScalarFieldEnum | ResultsScalarFieldEnum[]
  }

  /**
   * classrooms without action
   */
  export type classroomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
  }


  /**
   * Model degree_plan
   */

  export type AggregateDegree_plan = {
    _count: Degree_planCountAggregateOutputType | null
    _avg: Degree_planAvgAggregateOutputType | null
    _sum: Degree_planSumAggregateOutputType | null
    _min: Degree_planMinAggregateOutputType | null
    _max: Degree_planMaxAggregateOutputType | null
  }

  export type Degree_planAvgAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
    activity: number | null
  }

  export type Degree_planSumAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
    activity: number | null
  }

  export type Degree_planMinAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
    activity: number | null
  }

  export type Degree_planMaxAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
    activity: number | null
  }

  export type Degree_planCountAggregateOutputType = {
    id: number
    theoretical: number
    practical: number
    activity: number
    _all: number
  }


  export type Degree_planAvgAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    activity?: true
  }

  export type Degree_planSumAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    activity?: true
  }

  export type Degree_planMinAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    activity?: true
  }

  export type Degree_planMaxAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    activity?: true
  }

  export type Degree_planCountAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    activity?: true
    _all?: true
  }

  export type Degree_planAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which degree_plan to aggregate.
     */
    where?: degree_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of degree_plans to fetch.
     */
    orderBy?: degree_planOrderByWithRelationInput | degree_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: degree_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` degree_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` degree_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned degree_plans
    **/
    _count?: true | Degree_planCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Degree_planAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Degree_planSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Degree_planMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Degree_planMaxAggregateInputType
  }

  export type GetDegree_planAggregateType<T extends Degree_planAggregateArgs> = {
        [P in keyof T & keyof AggregateDegree_plan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDegree_plan[P]>
      : GetScalarType<T[P], AggregateDegree_plan[P]>
  }




  export type degree_planGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: degree_planWhereInput
    orderBy?: degree_planOrderByWithAggregationInput | degree_planOrderByWithAggregationInput[]
    by: Degree_planScalarFieldEnum[] | Degree_planScalarFieldEnum
    having?: degree_planScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Degree_planCountAggregateInputType | true
    _avg?: Degree_planAvgAggregateInputType
    _sum?: Degree_planSumAggregateInputType
    _min?: Degree_planMinAggregateInputType
    _max?: Degree_planMaxAggregateInputType
  }

  export type Degree_planGroupByOutputType = {
    id: number
    theoretical: number
    practical: number
    activity: number
    _count: Degree_planCountAggregateOutputType | null
    _avg: Degree_planAvgAggregateOutputType | null
    _sum: Degree_planSumAggregateOutputType | null
    _min: Degree_planMinAggregateOutputType | null
    _max: Degree_planMaxAggregateOutputType | null
  }

  type GetDegree_planGroupByPayload<T extends degree_planGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Degree_planGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Degree_planGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Degree_planGroupByOutputType[P]>
            : GetScalarType<T[P], Degree_planGroupByOutputType[P]>
        }
      >
    >


  export type degree_planSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theoretical?: boolean
    practical?: boolean
    activity?: boolean
    subjects?: boolean | degree_plan$subjectsArgs<ExtArgs>
    _count?: boolean | Degree_planCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["degree_plan"]>



  export type degree_planSelectScalar = {
    id?: boolean
    theoretical?: boolean
    practical?: boolean
    activity?: boolean
  }

  export type degree_planOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "theoretical" | "practical" | "activity", ExtArgs["result"]["degree_plan"]>
  export type degree_planInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | degree_plan$subjectsArgs<ExtArgs>
    _count?: boolean | Degree_planCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $degree_planPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "degree_plan"
    objects: {
      subjects: Prisma.$subjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      theoretical: number
      practical: number
      activity: number
    }, ExtArgs["result"]["degree_plan"]>
    composites: {}
  }

  type degree_planGetPayload<S extends boolean | null | undefined | degree_planDefaultArgs> = $Result.GetResult<Prisma.$degree_planPayload, S>

  type degree_planCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<degree_planFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Degree_planCountAggregateInputType | true
    }

  export interface degree_planDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['degree_plan'], meta: { name: 'degree_plan' } }
    /**
     * Find zero or one Degree_plan that matches the filter.
     * @param {degree_planFindUniqueArgs} args - Arguments to find a Degree_plan
     * @example
     * // Get one Degree_plan
     * const degree_plan = await prisma.degree_plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends degree_planFindUniqueArgs>(args: SelectSubset<T, degree_planFindUniqueArgs<ExtArgs>>): Prisma__degree_planClient<$Result.GetResult<Prisma.$degree_planPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Degree_plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {degree_planFindUniqueOrThrowArgs} args - Arguments to find a Degree_plan
     * @example
     * // Get one Degree_plan
     * const degree_plan = await prisma.degree_plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends degree_planFindUniqueOrThrowArgs>(args: SelectSubset<T, degree_planFindUniqueOrThrowArgs<ExtArgs>>): Prisma__degree_planClient<$Result.GetResult<Prisma.$degree_planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Degree_plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_planFindFirstArgs} args - Arguments to find a Degree_plan
     * @example
     * // Get one Degree_plan
     * const degree_plan = await prisma.degree_plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends degree_planFindFirstArgs>(args?: SelectSubset<T, degree_planFindFirstArgs<ExtArgs>>): Prisma__degree_planClient<$Result.GetResult<Prisma.$degree_planPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Degree_plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_planFindFirstOrThrowArgs} args - Arguments to find a Degree_plan
     * @example
     * // Get one Degree_plan
     * const degree_plan = await prisma.degree_plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends degree_planFindFirstOrThrowArgs>(args?: SelectSubset<T, degree_planFindFirstOrThrowArgs<ExtArgs>>): Prisma__degree_planClient<$Result.GetResult<Prisma.$degree_planPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Degree_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_planFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Degree_plans
     * const degree_plans = await prisma.degree_plan.findMany()
     * 
     * // Get first 10 Degree_plans
     * const degree_plans = await prisma.degree_plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const degree_planWithIdOnly = await prisma.degree_plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends degree_planFindManyArgs>(args?: SelectSubset<T, degree_planFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$degree_planPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Degree_plan.
     * @param {degree_planCreateArgs} args - Arguments to create a Degree_plan.
     * @example
     * // Create one Degree_plan
     * const Degree_plan = await prisma.degree_plan.create({
     *   data: {
     *     // ... data to create a Degree_plan
     *   }
     * })
     * 
     */
    create<T extends degree_planCreateArgs>(args: SelectSubset<T, degree_planCreateArgs<ExtArgs>>): Prisma__degree_planClient<$Result.GetResult<Prisma.$degree_planPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Degree_plans.
     * @param {degree_planCreateManyArgs} args - Arguments to create many Degree_plans.
     * @example
     * // Create many Degree_plans
     * const degree_plan = await prisma.degree_plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends degree_planCreateManyArgs>(args?: SelectSubset<T, degree_planCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Degree_plan.
     * @param {degree_planDeleteArgs} args - Arguments to delete one Degree_plan.
     * @example
     * // Delete one Degree_plan
     * const Degree_plan = await prisma.degree_plan.delete({
     *   where: {
     *     // ... filter to delete one Degree_plan
     *   }
     * })
     * 
     */
    delete<T extends degree_planDeleteArgs>(args: SelectSubset<T, degree_planDeleteArgs<ExtArgs>>): Prisma__degree_planClient<$Result.GetResult<Prisma.$degree_planPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Degree_plan.
     * @param {degree_planUpdateArgs} args - Arguments to update one Degree_plan.
     * @example
     * // Update one Degree_plan
     * const degree_plan = await prisma.degree_plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends degree_planUpdateArgs>(args: SelectSubset<T, degree_planUpdateArgs<ExtArgs>>): Prisma__degree_planClient<$Result.GetResult<Prisma.$degree_planPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Degree_plans.
     * @param {degree_planDeleteManyArgs} args - Arguments to filter Degree_plans to delete.
     * @example
     * // Delete a few Degree_plans
     * const { count } = await prisma.degree_plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends degree_planDeleteManyArgs>(args?: SelectSubset<T, degree_planDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Degree_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_planUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Degree_plans
     * const degree_plan = await prisma.degree_plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends degree_planUpdateManyArgs>(args: SelectSubset<T, degree_planUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Degree_plan.
     * @param {degree_planUpsertArgs} args - Arguments to update or create a Degree_plan.
     * @example
     * // Update or create a Degree_plan
     * const degree_plan = await prisma.degree_plan.upsert({
     *   create: {
     *     // ... data to create a Degree_plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Degree_plan we want to update
     *   }
     * })
     */
    upsert<T extends degree_planUpsertArgs>(args: SelectSubset<T, degree_planUpsertArgs<ExtArgs>>): Prisma__degree_planClient<$Result.GetResult<Prisma.$degree_planPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Degree_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_planCountArgs} args - Arguments to filter Degree_plans to count.
     * @example
     * // Count the number of Degree_plans
     * const count = await prisma.degree_plan.count({
     *   where: {
     *     // ... the filter for the Degree_plans we want to count
     *   }
     * })
    **/
    count<T extends degree_planCountArgs>(
      args?: Subset<T, degree_planCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Degree_planCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Degree_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Degree_planAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Degree_planAggregateArgs>(args: Subset<T, Degree_planAggregateArgs>): Prisma.PrismaPromise<GetDegree_planAggregateType<T>>

    /**
     * Group by Degree_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {degree_planGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends degree_planGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: degree_planGroupByArgs['orderBy'] }
        : { orderBy?: degree_planGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, degree_planGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDegree_planGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the degree_plan model
   */
  readonly fields: degree_planFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for degree_plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__degree_planClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends degree_plan$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, degree_plan$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the degree_plan model
   */
  interface degree_planFieldRefs {
    readonly id: FieldRef<"degree_plan", 'Int'>
    readonly theoretical: FieldRef<"degree_plan", 'Int'>
    readonly practical: FieldRef<"degree_plan", 'Int'>
    readonly activity: FieldRef<"degree_plan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * degree_plan findUnique
   */
  export type degree_planFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
    /**
     * Filter, which degree_plan to fetch.
     */
    where: degree_planWhereUniqueInput
  }

  /**
   * degree_plan findUniqueOrThrow
   */
  export type degree_planFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
    /**
     * Filter, which degree_plan to fetch.
     */
    where: degree_planWhereUniqueInput
  }

  /**
   * degree_plan findFirst
   */
  export type degree_planFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
    /**
     * Filter, which degree_plan to fetch.
     */
    where?: degree_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of degree_plans to fetch.
     */
    orderBy?: degree_planOrderByWithRelationInput | degree_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for degree_plans.
     */
    cursor?: degree_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` degree_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` degree_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of degree_plans.
     */
    distinct?: Degree_planScalarFieldEnum | Degree_planScalarFieldEnum[]
  }

  /**
   * degree_plan findFirstOrThrow
   */
  export type degree_planFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
    /**
     * Filter, which degree_plan to fetch.
     */
    where?: degree_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of degree_plans to fetch.
     */
    orderBy?: degree_planOrderByWithRelationInput | degree_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for degree_plans.
     */
    cursor?: degree_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` degree_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` degree_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of degree_plans.
     */
    distinct?: Degree_planScalarFieldEnum | Degree_planScalarFieldEnum[]
  }

  /**
   * degree_plan findMany
   */
  export type degree_planFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
    /**
     * Filter, which degree_plans to fetch.
     */
    where?: degree_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of degree_plans to fetch.
     */
    orderBy?: degree_planOrderByWithRelationInput | degree_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing degree_plans.
     */
    cursor?: degree_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` degree_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` degree_plans.
     */
    skip?: number
    distinct?: Degree_planScalarFieldEnum | Degree_planScalarFieldEnum[]
  }

  /**
   * degree_plan create
   */
  export type degree_planCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
    /**
     * The data needed to create a degree_plan.
     */
    data: XOR<degree_planCreateInput, degree_planUncheckedCreateInput>
  }

  /**
   * degree_plan createMany
   */
  export type degree_planCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many degree_plans.
     */
    data: degree_planCreateManyInput | degree_planCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * degree_plan update
   */
  export type degree_planUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
    /**
     * The data needed to update a degree_plan.
     */
    data: XOR<degree_planUpdateInput, degree_planUncheckedUpdateInput>
    /**
     * Choose, which degree_plan to update.
     */
    where: degree_planWhereUniqueInput
  }

  /**
   * degree_plan updateMany
   */
  export type degree_planUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update degree_plans.
     */
    data: XOR<degree_planUpdateManyMutationInput, degree_planUncheckedUpdateManyInput>
    /**
     * Filter which degree_plans to update
     */
    where?: degree_planWhereInput
    /**
     * Limit how many degree_plans to update.
     */
    limit?: number
  }

  /**
   * degree_plan upsert
   */
  export type degree_planUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
    /**
     * The filter to search for the degree_plan to update in case it exists.
     */
    where: degree_planWhereUniqueInput
    /**
     * In case the degree_plan found by the `where` argument doesn't exist, create a new degree_plan with this data.
     */
    create: XOR<degree_planCreateInput, degree_planUncheckedCreateInput>
    /**
     * In case the degree_plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<degree_planUpdateInput, degree_planUncheckedUpdateInput>
  }

  /**
   * degree_plan delete
   */
  export type degree_planDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
    /**
     * Filter which degree_plan to delete.
     */
    where: degree_planWhereUniqueInput
  }

  /**
   * degree_plan deleteMany
   */
  export type degree_planDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which degree_plans to delete
     */
    where?: degree_planWhereInput
    /**
     * Limit how many degree_plans to delete.
     */
    limit?: number
  }

  /**
   * degree_plan.subjects
   */
  export type degree_plan$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    where?: subjectsWhereInput
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    cursor?: subjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * degree_plan without action
   */
  export type degree_planDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
  }


  /**
   * Model department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    id: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    depart_code: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    depart_code: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    depart_code: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    id?: true
  }

  export type DepartmentSumAggregateInputType = {
    id?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    depart_code?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    depart_code?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    depart_code?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which department to aggregate.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentWhereInput
    orderBy?: departmentOrderByWithAggregationInput | departmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: departmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: number
    name: string
    depart_code: string
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    depart_code?: boolean
    learning_programs?: boolean | department$learning_programsArgs<ExtArgs>
    specialization?: boolean | department$specializationArgs<ExtArgs>
    teachers_jobs?: boolean | department$teachers_jobsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>



  export type departmentSelectScalar = {
    id?: boolean
    name?: boolean
    depart_code?: boolean
  }

  export type departmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "depart_code", ExtArgs["result"]["department"]>
  export type departmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learning_programs?: boolean | department$learning_programsArgs<ExtArgs>
    specialization?: boolean | department$specializationArgs<ExtArgs>
    teachers_jobs?: boolean | department$teachers_jobsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "department"
    objects: {
      learning_programs: Prisma.$learning_programsPayload<ExtArgs>[]
      specialization: Prisma.$specializationPayload<ExtArgs>[]
      teachers_jobs: Prisma.$teachers_jobsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      depart_code: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type departmentGetPayload<S extends boolean | null | undefined | departmentDefaultArgs> = $Result.GetResult<Prisma.$departmentPayload, S>

  type departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['department'], meta: { name: 'department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {departmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentFindUniqueArgs>(args: SelectSubset<T, departmentFindUniqueArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentFindFirstArgs>(args?: SelectSubset<T, departmentFindFirstArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends departmentFindManyArgs>(args?: SelectSubset<T, departmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {departmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends departmentCreateArgs>(args: SelectSubset<T, departmentCreateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentCreateManyArgs>(args?: SelectSubset<T, departmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {departmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends departmentDeleteArgs>(args: SelectSubset<T, departmentDeleteArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {departmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentUpdateArgs>(args: SelectSubset<T, departmentUpdateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentDeleteManyArgs>(args?: SelectSubset<T, departmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentUpdateManyArgs>(args: SelectSubset<T, departmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {departmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends departmentUpsertArgs>(args: SelectSubset<T, departmentUpsertArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentCountArgs>(
      args?: Subset<T, departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends departmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentGroupByArgs['orderBy'] }
        : { orderBy?: departmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, departmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the department model
   */
  readonly fields: departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    learning_programs<T extends department$learning_programsArgs<ExtArgs> = {}>(args?: Subset<T, department$learning_programsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    specialization<T extends department$specializationArgs<ExtArgs> = {}>(args?: Subset<T, department$specializationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers_jobs<T extends department$teachers_jobsArgs<ExtArgs> = {}>(args?: Subset<T, department$teachers_jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the department model
   */
  interface departmentFieldRefs {
    readonly id: FieldRef<"department", 'Int'>
    readonly name: FieldRef<"department", 'String'>
    readonly depart_code: FieldRef<"department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * department findUnique
   */
  export type departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findUniqueOrThrow
   */
  export type departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findFirst
   */
  export type departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findFirstOrThrow
   */
  export type departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findMany
   */
  export type departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department create
   */
  export type departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to create a department.
     */
    data: XOR<departmentCreateInput, departmentUncheckedCreateInput>
  }

  /**
   * department createMany
   */
  export type departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * department update
   */
  export type departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to update a department.
     */
    data: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
    /**
     * Choose, which department to update.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department updateMany
   */
  export type departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * department upsert
   */
  export type departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The filter to search for the department to update in case it exists.
     */
    where: departmentWhereUniqueInput
    /**
     * In case the department found by the `where` argument doesn't exist, create a new department with this data.
     */
    create: XOR<departmentCreateInput, departmentUncheckedCreateInput>
    /**
     * In case the department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
  }

  /**
   * department delete
   */
  export type departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter which department to delete.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department deleteMany
   */
  export type departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * department.learning_programs
   */
  export type department$learning_programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    where?: learning_programsWhereInput
    orderBy?: learning_programsOrderByWithRelationInput | learning_programsOrderByWithRelationInput[]
    cursor?: learning_programsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Learning_programsScalarFieldEnum | Learning_programsScalarFieldEnum[]
  }

  /**
   * department.specialization
   */
  export type department$specializationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
    where?: specializationWhereInput
    orderBy?: specializationOrderByWithRelationInput | specializationOrderByWithRelationInput[]
    cursor?: specializationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * department.teachers_jobs
   */
  export type department$teachers_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    where?: teachers_jobsWhereInput
    orderBy?: teachers_jobsOrderByWithRelationInput | teachers_jobsOrderByWithRelationInput[]
    cursor?: teachers_jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Teachers_jobsScalarFieldEnum | Teachers_jobsScalarFieldEnum[]
  }

  /**
   * department without action
   */
  export type departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
  }


  /**
   * Model duration_plans
   */

  export type AggregateDuration_plans = {
    _count: Duration_plansCountAggregateOutputType | null
    _avg: Duration_plansAvgAggregateOutputType | null
    _sum: Duration_plansSumAggregateOutputType | null
    _min: Duration_plansMinAggregateOutputType | null
    _max: Duration_plansMaxAggregateOutputType | null
  }

  export type Duration_plansAvgAggregateOutputType = {
    id: number | null
    edu_year: number | null
    semester: number | null
  }

  export type Duration_plansSumAggregateOutputType = {
    id: number | null
    edu_year: number | null
    semester: number | null
  }

  export type Duration_plansMinAggregateOutputType = {
    id: number | null
    edu_year: number | null
    term: $Enums.duration_plans_term | null
    semester: number | null
  }

  export type Duration_plansMaxAggregateOutputType = {
    id: number | null
    edu_year: number | null
    term: $Enums.duration_plans_term | null
    semester: number | null
  }

  export type Duration_plansCountAggregateOutputType = {
    id: number
    edu_year: number
    term: number
    semester: number
    _all: number
  }


  export type Duration_plansAvgAggregateInputType = {
    id?: true
    edu_year?: true
    semester?: true
  }

  export type Duration_plansSumAggregateInputType = {
    id?: true
    edu_year?: true
    semester?: true
  }

  export type Duration_plansMinAggregateInputType = {
    id?: true
    edu_year?: true
    term?: true
    semester?: true
  }

  export type Duration_plansMaxAggregateInputType = {
    id?: true
    edu_year?: true
    term?: true
    semester?: true
  }

  export type Duration_plansCountAggregateInputType = {
    id?: true
    edu_year?: true
    term?: true
    semester?: true
    _all?: true
  }

  export type Duration_plansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which duration_plans to aggregate.
     */
    where?: duration_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duration_plans to fetch.
     */
    orderBy?: duration_plansOrderByWithRelationInput | duration_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: duration_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duration_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duration_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned duration_plans
    **/
    _count?: true | Duration_plansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Duration_plansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Duration_plansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Duration_plansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Duration_plansMaxAggregateInputType
  }

  export type GetDuration_plansAggregateType<T extends Duration_plansAggregateArgs> = {
        [P in keyof T & keyof AggregateDuration_plans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDuration_plans[P]>
      : GetScalarType<T[P], AggregateDuration_plans[P]>
  }




  export type duration_plansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: duration_plansWhereInput
    orderBy?: duration_plansOrderByWithAggregationInput | duration_plansOrderByWithAggregationInput[]
    by: Duration_plansScalarFieldEnum[] | Duration_plansScalarFieldEnum
    having?: duration_plansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Duration_plansCountAggregateInputType | true
    _avg?: Duration_plansAvgAggregateInputType
    _sum?: Duration_plansSumAggregateInputType
    _min?: Duration_plansMinAggregateInputType
    _max?: Duration_plansMaxAggregateInputType
  }

  export type Duration_plansGroupByOutputType = {
    id: number
    edu_year: number
    term: $Enums.duration_plans_term
    semester: number
    _count: Duration_plansCountAggregateOutputType | null
    _avg: Duration_plansAvgAggregateOutputType | null
    _sum: Duration_plansSumAggregateOutputType | null
    _min: Duration_plansMinAggregateOutputType | null
    _max: Duration_plansMaxAggregateOutputType | null
  }

  type GetDuration_plansGroupByPayload<T extends duration_plansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Duration_plansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Duration_plansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Duration_plansGroupByOutputType[P]>
            : GetScalarType<T[P], Duration_plansGroupByOutputType[P]>
        }
      >
    >


  export type duration_plansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    edu_year?: boolean
    term?: boolean
    semester?: boolean
    classrooms_classrooms_duration_plansToduration_plans?: boolean | duration_plans$classrooms_classrooms_duration_plansToduration_plansArgs<ExtArgs>
    _count?: boolean | Duration_plansCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["duration_plans"]>



  export type duration_plansSelectScalar = {
    id?: boolean
    edu_year?: boolean
    term?: boolean
    semester?: boolean
  }

  export type duration_plansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "edu_year" | "term" | "semester", ExtArgs["result"]["duration_plans"]>
  export type duration_plansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms_classrooms_duration_plansToduration_plans?: boolean | duration_plans$classrooms_classrooms_duration_plansToduration_plansArgs<ExtArgs>
    _count?: boolean | Duration_plansCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $duration_plansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "duration_plans"
    objects: {
      classrooms_classrooms_duration_plansToduration_plans: Prisma.$classroomsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      edu_year: number
      term: $Enums.duration_plans_term
      semester: number
    }, ExtArgs["result"]["duration_plans"]>
    composites: {}
  }

  type duration_plansGetPayload<S extends boolean | null | undefined | duration_plansDefaultArgs> = $Result.GetResult<Prisma.$duration_plansPayload, S>

  type duration_plansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<duration_plansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Duration_plansCountAggregateInputType | true
    }

  export interface duration_plansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['duration_plans'], meta: { name: 'duration_plans' } }
    /**
     * Find zero or one Duration_plans that matches the filter.
     * @param {duration_plansFindUniqueArgs} args - Arguments to find a Duration_plans
     * @example
     * // Get one Duration_plans
     * const duration_plans = await prisma.duration_plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends duration_plansFindUniqueArgs>(args: SelectSubset<T, duration_plansFindUniqueArgs<ExtArgs>>): Prisma__duration_plansClient<$Result.GetResult<Prisma.$duration_plansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Duration_plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {duration_plansFindUniqueOrThrowArgs} args - Arguments to find a Duration_plans
     * @example
     * // Get one Duration_plans
     * const duration_plans = await prisma.duration_plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends duration_plansFindUniqueOrThrowArgs>(args: SelectSubset<T, duration_plansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__duration_plansClient<$Result.GetResult<Prisma.$duration_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Duration_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duration_plansFindFirstArgs} args - Arguments to find a Duration_plans
     * @example
     * // Get one Duration_plans
     * const duration_plans = await prisma.duration_plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends duration_plansFindFirstArgs>(args?: SelectSubset<T, duration_plansFindFirstArgs<ExtArgs>>): Prisma__duration_plansClient<$Result.GetResult<Prisma.$duration_plansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Duration_plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duration_plansFindFirstOrThrowArgs} args - Arguments to find a Duration_plans
     * @example
     * // Get one Duration_plans
     * const duration_plans = await prisma.duration_plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends duration_plansFindFirstOrThrowArgs>(args?: SelectSubset<T, duration_plansFindFirstOrThrowArgs<ExtArgs>>): Prisma__duration_plansClient<$Result.GetResult<Prisma.$duration_plansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Duration_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duration_plansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Duration_plans
     * const duration_plans = await prisma.duration_plans.findMany()
     * 
     * // Get first 10 Duration_plans
     * const duration_plans = await prisma.duration_plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const duration_plansWithIdOnly = await prisma.duration_plans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends duration_plansFindManyArgs>(args?: SelectSubset<T, duration_plansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duration_plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Duration_plans.
     * @param {duration_plansCreateArgs} args - Arguments to create a Duration_plans.
     * @example
     * // Create one Duration_plans
     * const Duration_plans = await prisma.duration_plans.create({
     *   data: {
     *     // ... data to create a Duration_plans
     *   }
     * })
     * 
     */
    create<T extends duration_plansCreateArgs>(args: SelectSubset<T, duration_plansCreateArgs<ExtArgs>>): Prisma__duration_plansClient<$Result.GetResult<Prisma.$duration_plansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Duration_plans.
     * @param {duration_plansCreateManyArgs} args - Arguments to create many Duration_plans.
     * @example
     * // Create many Duration_plans
     * const duration_plans = await prisma.duration_plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends duration_plansCreateManyArgs>(args?: SelectSubset<T, duration_plansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Duration_plans.
     * @param {duration_plansDeleteArgs} args - Arguments to delete one Duration_plans.
     * @example
     * // Delete one Duration_plans
     * const Duration_plans = await prisma.duration_plans.delete({
     *   where: {
     *     // ... filter to delete one Duration_plans
     *   }
     * })
     * 
     */
    delete<T extends duration_plansDeleteArgs>(args: SelectSubset<T, duration_plansDeleteArgs<ExtArgs>>): Prisma__duration_plansClient<$Result.GetResult<Prisma.$duration_plansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Duration_plans.
     * @param {duration_plansUpdateArgs} args - Arguments to update one Duration_plans.
     * @example
     * // Update one Duration_plans
     * const duration_plans = await prisma.duration_plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends duration_plansUpdateArgs>(args: SelectSubset<T, duration_plansUpdateArgs<ExtArgs>>): Prisma__duration_plansClient<$Result.GetResult<Prisma.$duration_plansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Duration_plans.
     * @param {duration_plansDeleteManyArgs} args - Arguments to filter Duration_plans to delete.
     * @example
     * // Delete a few Duration_plans
     * const { count } = await prisma.duration_plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends duration_plansDeleteManyArgs>(args?: SelectSubset<T, duration_plansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Duration_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duration_plansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Duration_plans
     * const duration_plans = await prisma.duration_plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends duration_plansUpdateManyArgs>(args: SelectSubset<T, duration_plansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Duration_plans.
     * @param {duration_plansUpsertArgs} args - Arguments to update or create a Duration_plans.
     * @example
     * // Update or create a Duration_plans
     * const duration_plans = await prisma.duration_plans.upsert({
     *   create: {
     *     // ... data to create a Duration_plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Duration_plans we want to update
     *   }
     * })
     */
    upsert<T extends duration_plansUpsertArgs>(args: SelectSubset<T, duration_plansUpsertArgs<ExtArgs>>): Prisma__duration_plansClient<$Result.GetResult<Prisma.$duration_plansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Duration_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duration_plansCountArgs} args - Arguments to filter Duration_plans to count.
     * @example
     * // Count the number of Duration_plans
     * const count = await prisma.duration_plans.count({
     *   where: {
     *     // ... the filter for the Duration_plans we want to count
     *   }
     * })
    **/
    count<T extends duration_plansCountArgs>(
      args?: Subset<T, duration_plansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Duration_plansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Duration_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Duration_plansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Duration_plansAggregateArgs>(args: Subset<T, Duration_plansAggregateArgs>): Prisma.PrismaPromise<GetDuration_plansAggregateType<T>>

    /**
     * Group by Duration_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duration_plansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends duration_plansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: duration_plansGroupByArgs['orderBy'] }
        : { orderBy?: duration_plansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, duration_plansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDuration_plansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the duration_plans model
   */
  readonly fields: duration_plansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for duration_plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__duration_plansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classrooms_classrooms_duration_plansToduration_plans<T extends duration_plans$classrooms_classrooms_duration_plansToduration_plansArgs<ExtArgs> = {}>(args?: Subset<T, duration_plans$classrooms_classrooms_duration_plansToduration_plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the duration_plans model
   */
  interface duration_plansFieldRefs {
    readonly id: FieldRef<"duration_plans", 'Int'>
    readonly edu_year: FieldRef<"duration_plans", 'Int'>
    readonly term: FieldRef<"duration_plans", 'duration_plans_term'>
    readonly semester: FieldRef<"duration_plans", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * duration_plans findUnique
   */
  export type duration_plansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duration_plans
     */
    select?: duration_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duration_plans
     */
    omit?: duration_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duration_plansInclude<ExtArgs> | null
    /**
     * Filter, which duration_plans to fetch.
     */
    where: duration_plansWhereUniqueInput
  }

  /**
   * duration_plans findUniqueOrThrow
   */
  export type duration_plansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duration_plans
     */
    select?: duration_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duration_plans
     */
    omit?: duration_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duration_plansInclude<ExtArgs> | null
    /**
     * Filter, which duration_plans to fetch.
     */
    where: duration_plansWhereUniqueInput
  }

  /**
   * duration_plans findFirst
   */
  export type duration_plansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duration_plans
     */
    select?: duration_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duration_plans
     */
    omit?: duration_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duration_plansInclude<ExtArgs> | null
    /**
     * Filter, which duration_plans to fetch.
     */
    where?: duration_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duration_plans to fetch.
     */
    orderBy?: duration_plansOrderByWithRelationInput | duration_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for duration_plans.
     */
    cursor?: duration_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duration_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duration_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of duration_plans.
     */
    distinct?: Duration_plansScalarFieldEnum | Duration_plansScalarFieldEnum[]
  }

  /**
   * duration_plans findFirstOrThrow
   */
  export type duration_plansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duration_plans
     */
    select?: duration_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duration_plans
     */
    omit?: duration_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duration_plansInclude<ExtArgs> | null
    /**
     * Filter, which duration_plans to fetch.
     */
    where?: duration_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duration_plans to fetch.
     */
    orderBy?: duration_plansOrderByWithRelationInput | duration_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for duration_plans.
     */
    cursor?: duration_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duration_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duration_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of duration_plans.
     */
    distinct?: Duration_plansScalarFieldEnum | Duration_plansScalarFieldEnum[]
  }

  /**
   * duration_plans findMany
   */
  export type duration_plansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duration_plans
     */
    select?: duration_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duration_plans
     */
    omit?: duration_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duration_plansInclude<ExtArgs> | null
    /**
     * Filter, which duration_plans to fetch.
     */
    where?: duration_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duration_plans to fetch.
     */
    orderBy?: duration_plansOrderByWithRelationInput | duration_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing duration_plans.
     */
    cursor?: duration_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duration_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duration_plans.
     */
    skip?: number
    distinct?: Duration_plansScalarFieldEnum | Duration_plansScalarFieldEnum[]
  }

  /**
   * duration_plans create
   */
  export type duration_plansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duration_plans
     */
    select?: duration_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duration_plans
     */
    omit?: duration_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duration_plansInclude<ExtArgs> | null
    /**
     * The data needed to create a duration_plans.
     */
    data: XOR<duration_plansCreateInput, duration_plansUncheckedCreateInput>
  }

  /**
   * duration_plans createMany
   */
  export type duration_plansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many duration_plans.
     */
    data: duration_plansCreateManyInput | duration_plansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * duration_plans update
   */
  export type duration_plansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duration_plans
     */
    select?: duration_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duration_plans
     */
    omit?: duration_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duration_plansInclude<ExtArgs> | null
    /**
     * The data needed to update a duration_plans.
     */
    data: XOR<duration_plansUpdateInput, duration_plansUncheckedUpdateInput>
    /**
     * Choose, which duration_plans to update.
     */
    where: duration_plansWhereUniqueInput
  }

  /**
   * duration_plans updateMany
   */
  export type duration_plansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update duration_plans.
     */
    data: XOR<duration_plansUpdateManyMutationInput, duration_plansUncheckedUpdateManyInput>
    /**
     * Filter which duration_plans to update
     */
    where?: duration_plansWhereInput
    /**
     * Limit how many duration_plans to update.
     */
    limit?: number
  }

  /**
   * duration_plans upsert
   */
  export type duration_plansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duration_plans
     */
    select?: duration_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duration_plans
     */
    omit?: duration_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duration_plansInclude<ExtArgs> | null
    /**
     * The filter to search for the duration_plans to update in case it exists.
     */
    where: duration_plansWhereUniqueInput
    /**
     * In case the duration_plans found by the `where` argument doesn't exist, create a new duration_plans with this data.
     */
    create: XOR<duration_plansCreateInput, duration_plansUncheckedCreateInput>
    /**
     * In case the duration_plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<duration_plansUpdateInput, duration_plansUncheckedUpdateInput>
  }

  /**
   * duration_plans delete
   */
  export type duration_plansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duration_plans
     */
    select?: duration_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duration_plans
     */
    omit?: duration_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duration_plansInclude<ExtArgs> | null
    /**
     * Filter which duration_plans to delete.
     */
    where: duration_plansWhereUniqueInput
  }

  /**
   * duration_plans deleteMany
   */
  export type duration_plansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which duration_plans to delete
     */
    where?: duration_plansWhereInput
    /**
     * Limit how many duration_plans to delete.
     */
    limit?: number
  }

  /**
   * duration_plans.classrooms_classrooms_duration_plansToduration_plans
   */
  export type duration_plans$classrooms_classrooms_duration_plansToduration_plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    where?: classroomsWhereInput
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    cursor?: classroomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomsScalarFieldEnum | ClassroomsScalarFieldEnum[]
  }

  /**
   * duration_plans without action
   */
  export type duration_plansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duration_plans
     */
    select?: duration_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duration_plans
     */
    omit?: duration_plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: duration_plansInclude<ExtArgs> | null
  }


  /**
   * Model exam_plan
   */

  export type AggregateExam_plan = {
    _count: Exam_planCountAggregateOutputType | null
    _avg: Exam_planAvgAggregateOutputType | null
    _sum: Exam_planSumAggregateOutputType | null
    _min: Exam_planMinAggregateOutputType | null
    _max: Exam_planMaxAggregateOutputType | null
  }

  export type Exam_planAvgAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
  }

  export type Exam_planSumAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
  }

  export type Exam_planMinAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
  }

  export type Exam_planMaxAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
  }

  export type Exam_planCountAggregateOutputType = {
    id: number
    theoretical: number
    practical: number
    _all: number
  }


  export type Exam_planAvgAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
  }

  export type Exam_planSumAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
  }

  export type Exam_planMinAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
  }

  export type Exam_planMaxAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
  }

  export type Exam_planCountAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    _all?: true
  }

  export type Exam_planAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exam_plan to aggregate.
     */
    where?: exam_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_plans to fetch.
     */
    orderBy?: exam_planOrderByWithRelationInput | exam_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exam_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exam_plans
    **/
    _count?: true | Exam_planCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Exam_planAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Exam_planSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Exam_planMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Exam_planMaxAggregateInputType
  }

  export type GetExam_planAggregateType<T extends Exam_planAggregateArgs> = {
        [P in keyof T & keyof AggregateExam_plan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam_plan[P]>
      : GetScalarType<T[P], AggregateExam_plan[P]>
  }




  export type exam_planGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exam_planWhereInput
    orderBy?: exam_planOrderByWithAggregationInput | exam_planOrderByWithAggregationInput[]
    by: Exam_planScalarFieldEnum[] | Exam_planScalarFieldEnum
    having?: exam_planScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Exam_planCountAggregateInputType | true
    _avg?: Exam_planAvgAggregateInputType
    _sum?: Exam_planSumAggregateInputType
    _min?: Exam_planMinAggregateInputType
    _max?: Exam_planMaxAggregateInputType
  }

  export type Exam_planGroupByOutputType = {
    id: number
    theoretical: number
    practical: number
    _count: Exam_planCountAggregateOutputType | null
    _avg: Exam_planAvgAggregateOutputType | null
    _sum: Exam_planSumAggregateOutputType | null
    _min: Exam_planMinAggregateOutputType | null
    _max: Exam_planMaxAggregateOutputType | null
  }

  type GetExam_planGroupByPayload<T extends exam_planGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Exam_planGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Exam_planGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Exam_planGroupByOutputType[P]>
            : GetScalarType<T[P], Exam_planGroupByOutputType[P]>
        }
      >
    >


  export type exam_planSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theoretical?: boolean
    practical?: boolean
    subjects?: boolean | exam_plan$subjectsArgs<ExtArgs>
    _count?: boolean | Exam_planCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam_plan"]>



  export type exam_planSelectScalar = {
    id?: boolean
    theoretical?: boolean
    practical?: boolean
  }

  export type exam_planOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "theoretical" | "practical", ExtArgs["result"]["exam_plan"]>
  export type exam_planInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | exam_plan$subjectsArgs<ExtArgs>
    _count?: boolean | Exam_planCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $exam_planPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exam_plan"
    objects: {
      subjects: Prisma.$subjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      theoretical: number
      practical: number
    }, ExtArgs["result"]["exam_plan"]>
    composites: {}
  }

  type exam_planGetPayload<S extends boolean | null | undefined | exam_planDefaultArgs> = $Result.GetResult<Prisma.$exam_planPayload, S>

  type exam_planCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exam_planFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Exam_planCountAggregateInputType | true
    }

  export interface exam_planDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exam_plan'], meta: { name: 'exam_plan' } }
    /**
     * Find zero or one Exam_plan that matches the filter.
     * @param {exam_planFindUniqueArgs} args - Arguments to find a Exam_plan
     * @example
     * // Get one Exam_plan
     * const exam_plan = await prisma.exam_plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exam_planFindUniqueArgs>(args: SelectSubset<T, exam_planFindUniqueArgs<ExtArgs>>): Prisma__exam_planClient<$Result.GetResult<Prisma.$exam_planPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam_plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exam_planFindUniqueOrThrowArgs} args - Arguments to find a Exam_plan
     * @example
     * // Get one Exam_plan
     * const exam_plan = await prisma.exam_plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exam_planFindUniqueOrThrowArgs>(args: SelectSubset<T, exam_planFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exam_planClient<$Result.GetResult<Prisma.$exam_planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam_plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_planFindFirstArgs} args - Arguments to find a Exam_plan
     * @example
     * // Get one Exam_plan
     * const exam_plan = await prisma.exam_plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exam_planFindFirstArgs>(args?: SelectSubset<T, exam_planFindFirstArgs<ExtArgs>>): Prisma__exam_planClient<$Result.GetResult<Prisma.$exam_planPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam_plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_planFindFirstOrThrowArgs} args - Arguments to find a Exam_plan
     * @example
     * // Get one Exam_plan
     * const exam_plan = await prisma.exam_plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exam_planFindFirstOrThrowArgs>(args?: SelectSubset<T, exam_planFindFirstOrThrowArgs<ExtArgs>>): Prisma__exam_planClient<$Result.GetResult<Prisma.$exam_planPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exam_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_planFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exam_plans
     * const exam_plans = await prisma.exam_plan.findMany()
     * 
     * // Get first 10 Exam_plans
     * const exam_plans = await prisma.exam_plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exam_planWithIdOnly = await prisma.exam_plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends exam_planFindManyArgs>(args?: SelectSubset<T, exam_planFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exam_planPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam_plan.
     * @param {exam_planCreateArgs} args - Arguments to create a Exam_plan.
     * @example
     * // Create one Exam_plan
     * const Exam_plan = await prisma.exam_plan.create({
     *   data: {
     *     // ... data to create a Exam_plan
     *   }
     * })
     * 
     */
    create<T extends exam_planCreateArgs>(args: SelectSubset<T, exam_planCreateArgs<ExtArgs>>): Prisma__exam_planClient<$Result.GetResult<Prisma.$exam_planPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exam_plans.
     * @param {exam_planCreateManyArgs} args - Arguments to create many Exam_plans.
     * @example
     * // Create many Exam_plans
     * const exam_plan = await prisma.exam_plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exam_planCreateManyArgs>(args?: SelectSubset<T, exam_planCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exam_plan.
     * @param {exam_planDeleteArgs} args - Arguments to delete one Exam_plan.
     * @example
     * // Delete one Exam_plan
     * const Exam_plan = await prisma.exam_plan.delete({
     *   where: {
     *     // ... filter to delete one Exam_plan
     *   }
     * })
     * 
     */
    delete<T extends exam_planDeleteArgs>(args: SelectSubset<T, exam_planDeleteArgs<ExtArgs>>): Prisma__exam_planClient<$Result.GetResult<Prisma.$exam_planPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam_plan.
     * @param {exam_planUpdateArgs} args - Arguments to update one Exam_plan.
     * @example
     * // Update one Exam_plan
     * const exam_plan = await prisma.exam_plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exam_planUpdateArgs>(args: SelectSubset<T, exam_planUpdateArgs<ExtArgs>>): Prisma__exam_planClient<$Result.GetResult<Prisma.$exam_planPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exam_plans.
     * @param {exam_planDeleteManyArgs} args - Arguments to filter Exam_plans to delete.
     * @example
     * // Delete a few Exam_plans
     * const { count } = await prisma.exam_plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exam_planDeleteManyArgs>(args?: SelectSubset<T, exam_planDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exam_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_planUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exam_plans
     * const exam_plan = await prisma.exam_plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exam_planUpdateManyArgs>(args: SelectSubset<T, exam_planUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam_plan.
     * @param {exam_planUpsertArgs} args - Arguments to update or create a Exam_plan.
     * @example
     * // Update or create a Exam_plan
     * const exam_plan = await prisma.exam_plan.upsert({
     *   create: {
     *     // ... data to create a Exam_plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam_plan we want to update
     *   }
     * })
     */
    upsert<T extends exam_planUpsertArgs>(args: SelectSubset<T, exam_planUpsertArgs<ExtArgs>>): Prisma__exam_planClient<$Result.GetResult<Prisma.$exam_planPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exam_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_planCountArgs} args - Arguments to filter Exam_plans to count.
     * @example
     * // Count the number of Exam_plans
     * const count = await prisma.exam_plan.count({
     *   where: {
     *     // ... the filter for the Exam_plans we want to count
     *   }
     * })
    **/
    count<T extends exam_planCountArgs>(
      args?: Subset<T, exam_planCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Exam_planCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exam_planAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Exam_planAggregateArgs>(args: Subset<T, Exam_planAggregateArgs>): Prisma.PrismaPromise<GetExam_planAggregateType<T>>

    /**
     * Group by Exam_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exam_planGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exam_planGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exam_planGroupByArgs['orderBy'] }
        : { orderBy?: exam_planGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exam_planGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExam_planGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exam_plan model
   */
  readonly fields: exam_planFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exam_plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exam_planClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends exam_plan$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, exam_plan$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exam_plan model
   */
  interface exam_planFieldRefs {
    readonly id: FieldRef<"exam_plan", 'Int'>
    readonly theoretical: FieldRef<"exam_plan", 'Int'>
    readonly practical: FieldRef<"exam_plan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * exam_plan findUnique
   */
  export type exam_planFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
    /**
     * Filter, which exam_plan to fetch.
     */
    where: exam_planWhereUniqueInput
  }

  /**
   * exam_plan findUniqueOrThrow
   */
  export type exam_planFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
    /**
     * Filter, which exam_plan to fetch.
     */
    where: exam_planWhereUniqueInput
  }

  /**
   * exam_plan findFirst
   */
  export type exam_planFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
    /**
     * Filter, which exam_plan to fetch.
     */
    where?: exam_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_plans to fetch.
     */
    orderBy?: exam_planOrderByWithRelationInput | exam_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exam_plans.
     */
    cursor?: exam_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exam_plans.
     */
    distinct?: Exam_planScalarFieldEnum | Exam_planScalarFieldEnum[]
  }

  /**
   * exam_plan findFirstOrThrow
   */
  export type exam_planFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
    /**
     * Filter, which exam_plan to fetch.
     */
    where?: exam_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_plans to fetch.
     */
    orderBy?: exam_planOrderByWithRelationInput | exam_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exam_plans.
     */
    cursor?: exam_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exam_plans.
     */
    distinct?: Exam_planScalarFieldEnum | Exam_planScalarFieldEnum[]
  }

  /**
   * exam_plan findMany
   */
  export type exam_planFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
    /**
     * Filter, which exam_plans to fetch.
     */
    where?: exam_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exam_plans to fetch.
     */
    orderBy?: exam_planOrderByWithRelationInput | exam_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exam_plans.
     */
    cursor?: exam_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exam_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exam_plans.
     */
    skip?: number
    distinct?: Exam_planScalarFieldEnum | Exam_planScalarFieldEnum[]
  }

  /**
   * exam_plan create
   */
  export type exam_planCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
    /**
     * The data needed to create a exam_plan.
     */
    data: XOR<exam_planCreateInput, exam_planUncheckedCreateInput>
  }

  /**
   * exam_plan createMany
   */
  export type exam_planCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exam_plans.
     */
    data: exam_planCreateManyInput | exam_planCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exam_plan update
   */
  export type exam_planUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
    /**
     * The data needed to update a exam_plan.
     */
    data: XOR<exam_planUpdateInput, exam_planUncheckedUpdateInput>
    /**
     * Choose, which exam_plan to update.
     */
    where: exam_planWhereUniqueInput
  }

  /**
   * exam_plan updateMany
   */
  export type exam_planUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exam_plans.
     */
    data: XOR<exam_planUpdateManyMutationInput, exam_planUncheckedUpdateManyInput>
    /**
     * Filter which exam_plans to update
     */
    where?: exam_planWhereInput
    /**
     * Limit how many exam_plans to update.
     */
    limit?: number
  }

  /**
   * exam_plan upsert
   */
  export type exam_planUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
    /**
     * The filter to search for the exam_plan to update in case it exists.
     */
    where: exam_planWhereUniqueInput
    /**
     * In case the exam_plan found by the `where` argument doesn't exist, create a new exam_plan with this data.
     */
    create: XOR<exam_planCreateInput, exam_planUncheckedCreateInput>
    /**
     * In case the exam_plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exam_planUpdateInput, exam_planUncheckedUpdateInput>
  }

  /**
   * exam_plan delete
   */
  export type exam_planDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
    /**
     * Filter which exam_plan to delete.
     */
    where: exam_planWhereUniqueInput
  }

  /**
   * exam_plan deleteMany
   */
  export type exam_planDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exam_plans to delete
     */
    where?: exam_planWhereInput
    /**
     * Limit how many exam_plans to delete.
     */
    limit?: number
  }

  /**
   * exam_plan.subjects
   */
  export type exam_plan$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    where?: subjectsWhereInput
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    cursor?: subjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * exam_plan without action
   */
  export type exam_planDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
  }


  /**
   * Model hour_plan
   */

  export type AggregateHour_plan = {
    _count: Hour_planCountAggregateOutputType | null
    _avg: Hour_planAvgAggregateOutputType | null
    _sum: Hour_planSumAggregateOutputType | null
    _min: Hour_planMinAggregateOutputType | null
    _max: Hour_planMaxAggregateOutputType | null
  }

  export type Hour_planAvgAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
    credit: number | null
  }

  export type Hour_planSumAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
    credit: number | null
  }

  export type Hour_planMinAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
    credit: number | null
  }

  export type Hour_planMaxAggregateOutputType = {
    id: number | null
    theoretical: number | null
    practical: number | null
    credit: number | null
  }

  export type Hour_planCountAggregateOutputType = {
    id: number
    theoretical: number
    practical: number
    credit: number
    _all: number
  }


  export type Hour_planAvgAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    credit?: true
  }

  export type Hour_planSumAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    credit?: true
  }

  export type Hour_planMinAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    credit?: true
  }

  export type Hour_planMaxAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    credit?: true
  }

  export type Hour_planCountAggregateInputType = {
    id?: true
    theoretical?: true
    practical?: true
    credit?: true
    _all?: true
  }

  export type Hour_planAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hour_plan to aggregate.
     */
    where?: hour_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hour_plans to fetch.
     */
    orderBy?: hour_planOrderByWithRelationInput | hour_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hour_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hour_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hour_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hour_plans
    **/
    _count?: true | Hour_planCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hour_planAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hour_planSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hour_planMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hour_planMaxAggregateInputType
  }

  export type GetHour_planAggregateType<T extends Hour_planAggregateArgs> = {
        [P in keyof T & keyof AggregateHour_plan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHour_plan[P]>
      : GetScalarType<T[P], AggregateHour_plan[P]>
  }




  export type hour_planGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hour_planWhereInput
    orderBy?: hour_planOrderByWithAggregationInput | hour_planOrderByWithAggregationInput[]
    by: Hour_planScalarFieldEnum[] | Hour_planScalarFieldEnum
    having?: hour_planScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hour_planCountAggregateInputType | true
    _avg?: Hour_planAvgAggregateInputType
    _sum?: Hour_planSumAggregateInputType
    _min?: Hour_planMinAggregateInputType
    _max?: Hour_planMaxAggregateInputType
  }

  export type Hour_planGroupByOutputType = {
    id: number
    theoretical: number
    practical: number
    credit: number
    _count: Hour_planCountAggregateOutputType | null
    _avg: Hour_planAvgAggregateOutputType | null
    _sum: Hour_planSumAggregateOutputType | null
    _min: Hour_planMinAggregateOutputType | null
    _max: Hour_planMaxAggregateOutputType | null
  }

  type GetHour_planGroupByPayload<T extends hour_planGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hour_planGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hour_planGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hour_planGroupByOutputType[P]>
            : GetScalarType<T[P], Hour_planGroupByOutputType[P]>
        }
      >
    >


  export type hour_planSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theoretical?: boolean
    practical?: boolean
    credit?: boolean
    subjects?: boolean | hour_plan$subjectsArgs<ExtArgs>
    _count?: boolean | Hour_planCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hour_plan"]>



  export type hour_planSelectScalar = {
    id?: boolean
    theoretical?: boolean
    practical?: boolean
    credit?: boolean
  }

  export type hour_planOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "theoretical" | "practical" | "credit", ExtArgs["result"]["hour_plan"]>
  export type hour_planInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | hour_plan$subjectsArgs<ExtArgs>
    _count?: boolean | Hour_planCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $hour_planPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hour_plan"
    objects: {
      subjects: Prisma.$subjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      theoretical: number
      practical: number
      credit: number
    }, ExtArgs["result"]["hour_plan"]>
    composites: {}
  }

  type hour_planGetPayload<S extends boolean | null | undefined | hour_planDefaultArgs> = $Result.GetResult<Prisma.$hour_planPayload, S>

  type hour_planCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hour_planFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hour_planCountAggregateInputType | true
    }

  export interface hour_planDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hour_plan'], meta: { name: 'hour_plan' } }
    /**
     * Find zero or one Hour_plan that matches the filter.
     * @param {hour_planFindUniqueArgs} args - Arguments to find a Hour_plan
     * @example
     * // Get one Hour_plan
     * const hour_plan = await prisma.hour_plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hour_planFindUniqueArgs>(args: SelectSubset<T, hour_planFindUniqueArgs<ExtArgs>>): Prisma__hour_planClient<$Result.GetResult<Prisma.$hour_planPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hour_plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hour_planFindUniqueOrThrowArgs} args - Arguments to find a Hour_plan
     * @example
     * // Get one Hour_plan
     * const hour_plan = await prisma.hour_plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hour_planFindUniqueOrThrowArgs>(args: SelectSubset<T, hour_planFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hour_planClient<$Result.GetResult<Prisma.$hour_planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hour_plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_planFindFirstArgs} args - Arguments to find a Hour_plan
     * @example
     * // Get one Hour_plan
     * const hour_plan = await prisma.hour_plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hour_planFindFirstArgs>(args?: SelectSubset<T, hour_planFindFirstArgs<ExtArgs>>): Prisma__hour_planClient<$Result.GetResult<Prisma.$hour_planPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hour_plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_planFindFirstOrThrowArgs} args - Arguments to find a Hour_plan
     * @example
     * // Get one Hour_plan
     * const hour_plan = await prisma.hour_plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hour_planFindFirstOrThrowArgs>(args?: SelectSubset<T, hour_planFindFirstOrThrowArgs<ExtArgs>>): Prisma__hour_planClient<$Result.GetResult<Prisma.$hour_planPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hour_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_planFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hour_plans
     * const hour_plans = await prisma.hour_plan.findMany()
     * 
     * // Get first 10 Hour_plans
     * const hour_plans = await prisma.hour_plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hour_planWithIdOnly = await prisma.hour_plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hour_planFindManyArgs>(args?: SelectSubset<T, hour_planFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hour_planPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hour_plan.
     * @param {hour_planCreateArgs} args - Arguments to create a Hour_plan.
     * @example
     * // Create one Hour_plan
     * const Hour_plan = await prisma.hour_plan.create({
     *   data: {
     *     // ... data to create a Hour_plan
     *   }
     * })
     * 
     */
    create<T extends hour_planCreateArgs>(args: SelectSubset<T, hour_planCreateArgs<ExtArgs>>): Prisma__hour_planClient<$Result.GetResult<Prisma.$hour_planPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hour_plans.
     * @param {hour_planCreateManyArgs} args - Arguments to create many Hour_plans.
     * @example
     * // Create many Hour_plans
     * const hour_plan = await prisma.hour_plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hour_planCreateManyArgs>(args?: SelectSubset<T, hour_planCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hour_plan.
     * @param {hour_planDeleteArgs} args - Arguments to delete one Hour_plan.
     * @example
     * // Delete one Hour_plan
     * const Hour_plan = await prisma.hour_plan.delete({
     *   where: {
     *     // ... filter to delete one Hour_plan
     *   }
     * })
     * 
     */
    delete<T extends hour_planDeleteArgs>(args: SelectSubset<T, hour_planDeleteArgs<ExtArgs>>): Prisma__hour_planClient<$Result.GetResult<Prisma.$hour_planPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hour_plan.
     * @param {hour_planUpdateArgs} args - Arguments to update one Hour_plan.
     * @example
     * // Update one Hour_plan
     * const hour_plan = await prisma.hour_plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hour_planUpdateArgs>(args: SelectSubset<T, hour_planUpdateArgs<ExtArgs>>): Prisma__hour_planClient<$Result.GetResult<Prisma.$hour_planPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hour_plans.
     * @param {hour_planDeleteManyArgs} args - Arguments to filter Hour_plans to delete.
     * @example
     * // Delete a few Hour_plans
     * const { count } = await prisma.hour_plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hour_planDeleteManyArgs>(args?: SelectSubset<T, hour_planDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hour_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_planUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hour_plans
     * const hour_plan = await prisma.hour_plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hour_planUpdateManyArgs>(args: SelectSubset<T, hour_planUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hour_plan.
     * @param {hour_planUpsertArgs} args - Arguments to update or create a Hour_plan.
     * @example
     * // Update or create a Hour_plan
     * const hour_plan = await prisma.hour_plan.upsert({
     *   create: {
     *     // ... data to create a Hour_plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hour_plan we want to update
     *   }
     * })
     */
    upsert<T extends hour_planUpsertArgs>(args: SelectSubset<T, hour_planUpsertArgs<ExtArgs>>): Prisma__hour_planClient<$Result.GetResult<Prisma.$hour_planPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hour_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_planCountArgs} args - Arguments to filter Hour_plans to count.
     * @example
     * // Count the number of Hour_plans
     * const count = await prisma.hour_plan.count({
     *   where: {
     *     // ... the filter for the Hour_plans we want to count
     *   }
     * })
    **/
    count<T extends hour_planCountArgs>(
      args?: Subset<T, hour_planCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hour_planCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hour_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hour_planAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hour_planAggregateArgs>(args: Subset<T, Hour_planAggregateArgs>): Prisma.PrismaPromise<GetHour_planAggregateType<T>>

    /**
     * Group by Hour_plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hour_planGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hour_planGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hour_planGroupByArgs['orderBy'] }
        : { orderBy?: hour_planGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hour_planGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHour_planGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hour_plan model
   */
  readonly fields: hour_planFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hour_plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hour_planClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends hour_plan$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, hour_plan$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hour_plan model
   */
  interface hour_planFieldRefs {
    readonly id: FieldRef<"hour_plan", 'Int'>
    readonly theoretical: FieldRef<"hour_plan", 'Int'>
    readonly practical: FieldRef<"hour_plan", 'Int'>
    readonly credit: FieldRef<"hour_plan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hour_plan findUnique
   */
  export type hour_planFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
    /**
     * Filter, which hour_plan to fetch.
     */
    where: hour_planWhereUniqueInput
  }

  /**
   * hour_plan findUniqueOrThrow
   */
  export type hour_planFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
    /**
     * Filter, which hour_plan to fetch.
     */
    where: hour_planWhereUniqueInput
  }

  /**
   * hour_plan findFirst
   */
  export type hour_planFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
    /**
     * Filter, which hour_plan to fetch.
     */
    where?: hour_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hour_plans to fetch.
     */
    orderBy?: hour_planOrderByWithRelationInput | hour_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hour_plans.
     */
    cursor?: hour_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hour_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hour_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hour_plans.
     */
    distinct?: Hour_planScalarFieldEnum | Hour_planScalarFieldEnum[]
  }

  /**
   * hour_plan findFirstOrThrow
   */
  export type hour_planFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
    /**
     * Filter, which hour_plan to fetch.
     */
    where?: hour_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hour_plans to fetch.
     */
    orderBy?: hour_planOrderByWithRelationInput | hour_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hour_plans.
     */
    cursor?: hour_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hour_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hour_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hour_plans.
     */
    distinct?: Hour_planScalarFieldEnum | Hour_planScalarFieldEnum[]
  }

  /**
   * hour_plan findMany
   */
  export type hour_planFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
    /**
     * Filter, which hour_plans to fetch.
     */
    where?: hour_planWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hour_plans to fetch.
     */
    orderBy?: hour_planOrderByWithRelationInput | hour_planOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hour_plans.
     */
    cursor?: hour_planWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hour_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hour_plans.
     */
    skip?: number
    distinct?: Hour_planScalarFieldEnum | Hour_planScalarFieldEnum[]
  }

  /**
   * hour_plan create
   */
  export type hour_planCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
    /**
     * The data needed to create a hour_plan.
     */
    data?: XOR<hour_planCreateInput, hour_planUncheckedCreateInput>
  }

  /**
   * hour_plan createMany
   */
  export type hour_planCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hour_plans.
     */
    data: hour_planCreateManyInput | hour_planCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hour_plan update
   */
  export type hour_planUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
    /**
     * The data needed to update a hour_plan.
     */
    data: XOR<hour_planUpdateInput, hour_planUncheckedUpdateInput>
    /**
     * Choose, which hour_plan to update.
     */
    where: hour_planWhereUniqueInput
  }

  /**
   * hour_plan updateMany
   */
  export type hour_planUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hour_plans.
     */
    data: XOR<hour_planUpdateManyMutationInput, hour_planUncheckedUpdateManyInput>
    /**
     * Filter which hour_plans to update
     */
    where?: hour_planWhereInput
    /**
     * Limit how many hour_plans to update.
     */
    limit?: number
  }

  /**
   * hour_plan upsert
   */
  export type hour_planUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
    /**
     * The filter to search for the hour_plan to update in case it exists.
     */
    where: hour_planWhereUniqueInput
    /**
     * In case the hour_plan found by the `where` argument doesn't exist, create a new hour_plan with this data.
     */
    create: XOR<hour_planCreateInput, hour_planUncheckedCreateInput>
    /**
     * In case the hour_plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hour_planUpdateInput, hour_planUncheckedUpdateInput>
  }

  /**
   * hour_plan delete
   */
  export type hour_planDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
    /**
     * Filter which hour_plan to delete.
     */
    where: hour_planWhereUniqueInput
  }

  /**
   * hour_plan deleteMany
   */
  export type hour_planDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hour_plans to delete
     */
    where?: hour_planWhereInput
    /**
     * Limit how many hour_plans to delete.
     */
    limit?: number
  }

  /**
   * hour_plan.subjects
   */
  export type hour_plan$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    where?: subjectsWhereInput
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    cursor?: subjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * hour_plan without action
   */
  export type hour_planDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
  }


  /**
   * Model learning_programs
   */

  export type AggregateLearning_programs = {
    _count: Learning_programsCountAggregateOutputType | null
    _avg: Learning_programsAvgAggregateOutputType | null
    _sum: Learning_programsSumAggregateOutputType | null
    _min: Learning_programsMinAggregateOutputType | null
    _max: Learning_programsMaxAggregateOutputType | null
  }

  export type Learning_programsAvgAggregateOutputType = {
    id: number | null
    subject_hours: number | null
    paper_hours: number | null
    depart_id: number | null
    advisor: number | null
    advisor_assistant: number | null
  }

  export type Learning_programsSumAggregateOutputType = {
    id: number | null
    subject_hours: number | null
    paper_hours: number | null
    depart_id: number | null
    advisor: number | null
    advisor_assistant: number | null
  }

  export type Learning_programsMinAggregateOutputType = {
    id: number | null
    name: string | null
    subject_hours: number | null
    paper_hours: number | null
    program_code: string | null
    depart_id: number | null
    advisor: number | null
    advisor_assistant: number | null
  }

  export type Learning_programsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    subject_hours: number | null
    paper_hours: number | null
    program_code: string | null
    depart_id: number | null
    advisor: number | null
    advisor_assistant: number | null
  }

  export type Learning_programsCountAggregateOutputType = {
    id: number
    name: number
    subject_hours: number
    paper_hours: number
    program_code: number
    depart_id: number
    advisor: number
    advisor_assistant: number
    _all: number
  }


  export type Learning_programsAvgAggregateInputType = {
    id?: true
    subject_hours?: true
    paper_hours?: true
    depart_id?: true
    advisor?: true
    advisor_assistant?: true
  }

  export type Learning_programsSumAggregateInputType = {
    id?: true
    subject_hours?: true
    paper_hours?: true
    depart_id?: true
    advisor?: true
    advisor_assistant?: true
  }

  export type Learning_programsMinAggregateInputType = {
    id?: true
    name?: true
    subject_hours?: true
    paper_hours?: true
    program_code?: true
    depart_id?: true
    advisor?: true
    advisor_assistant?: true
  }

  export type Learning_programsMaxAggregateInputType = {
    id?: true
    name?: true
    subject_hours?: true
    paper_hours?: true
    program_code?: true
    depart_id?: true
    advisor?: true
    advisor_assistant?: true
  }

  export type Learning_programsCountAggregateInputType = {
    id?: true
    name?: true
    subject_hours?: true
    paper_hours?: true
    program_code?: true
    depart_id?: true
    advisor?: true
    advisor_assistant?: true
    _all?: true
  }

  export type Learning_programsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which learning_programs to aggregate.
     */
    where?: learning_programsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of learning_programs to fetch.
     */
    orderBy?: learning_programsOrderByWithRelationInput | learning_programsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: learning_programsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` learning_programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` learning_programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned learning_programs
    **/
    _count?: true | Learning_programsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Learning_programsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Learning_programsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Learning_programsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Learning_programsMaxAggregateInputType
  }

  export type GetLearning_programsAggregateType<T extends Learning_programsAggregateArgs> = {
        [P in keyof T & keyof AggregateLearning_programs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearning_programs[P]>
      : GetScalarType<T[P], AggregateLearning_programs[P]>
  }




  export type learning_programsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: learning_programsWhereInput
    orderBy?: learning_programsOrderByWithAggregationInput | learning_programsOrderByWithAggregationInput[]
    by: Learning_programsScalarFieldEnum[] | Learning_programsScalarFieldEnum
    having?: learning_programsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Learning_programsCountAggregateInputType | true
    _avg?: Learning_programsAvgAggregateInputType
    _sum?: Learning_programsSumAggregateInputType
    _min?: Learning_programsMinAggregateInputType
    _max?: Learning_programsMaxAggregateInputType
  }

  export type Learning_programsGroupByOutputType = {
    id: number
    name: string
    subject_hours: number
    paper_hours: number
    program_code: string
    depart_id: number
    advisor: number | null
    advisor_assistant: number | null
    _count: Learning_programsCountAggregateOutputType | null
    _avg: Learning_programsAvgAggregateOutputType | null
    _sum: Learning_programsSumAggregateOutputType | null
    _min: Learning_programsMinAggregateOutputType | null
    _max: Learning_programsMaxAggregateOutputType | null
  }

  type GetLearning_programsGroupByPayload<T extends learning_programsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Learning_programsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Learning_programsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Learning_programsGroupByOutputType[P]>
            : GetScalarType<T[P], Learning_programsGroupByOutputType[P]>
        }
      >
    >


  export type learning_programsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject_hours?: boolean
    paper_hours?: boolean
    program_code?: boolean
    depart_id?: boolean
    advisor?: boolean
    advisor_assistant?: boolean
    department?: boolean | departmentDefaultArgs<ExtArgs>
    teachers_learning_programs_advisorToteachers?: boolean | learning_programs$teachers_learning_programs_advisorToteachersArgs<ExtArgs>
    teachers_learning_programs_advisor_assistantToteachers?: boolean | learning_programs$teachers_learning_programs_advisor_assistantToteachersArgs<ExtArgs>
    program_requirements?: boolean | learning_programs$program_requirementsArgs<ExtArgs>
    _count?: boolean | Learning_programsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learning_programs"]>



  export type learning_programsSelectScalar = {
    id?: boolean
    name?: boolean
    subject_hours?: boolean
    paper_hours?: boolean
    program_code?: boolean
    depart_id?: boolean
    advisor?: boolean
    advisor_assistant?: boolean
  }

  export type learning_programsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subject_hours" | "paper_hours" | "program_code" | "depart_id" | "advisor" | "advisor_assistant", ExtArgs["result"]["learning_programs"]>
  export type learning_programsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | departmentDefaultArgs<ExtArgs>
    teachers_learning_programs_advisorToteachers?: boolean | learning_programs$teachers_learning_programs_advisorToteachersArgs<ExtArgs>
    teachers_learning_programs_advisor_assistantToteachers?: boolean | learning_programs$teachers_learning_programs_advisor_assistantToteachersArgs<ExtArgs>
    program_requirements?: boolean | learning_programs$program_requirementsArgs<ExtArgs>
    _count?: boolean | Learning_programsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $learning_programsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "learning_programs"
    objects: {
      department: Prisma.$departmentPayload<ExtArgs>
      teachers_learning_programs_advisorToteachers: Prisma.$teachersPayload<ExtArgs> | null
      teachers_learning_programs_advisor_assistantToteachers: Prisma.$teachersPayload<ExtArgs> | null
      program_requirements: Prisma.$program_requirementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      subject_hours: number
      paper_hours: number
      program_code: string
      depart_id: number
      advisor: number | null
      advisor_assistant: number | null
    }, ExtArgs["result"]["learning_programs"]>
    composites: {}
  }

  type learning_programsGetPayload<S extends boolean | null | undefined | learning_programsDefaultArgs> = $Result.GetResult<Prisma.$learning_programsPayload, S>

  type learning_programsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<learning_programsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Learning_programsCountAggregateInputType | true
    }

  export interface learning_programsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['learning_programs'], meta: { name: 'learning_programs' } }
    /**
     * Find zero or one Learning_programs that matches the filter.
     * @param {learning_programsFindUniqueArgs} args - Arguments to find a Learning_programs
     * @example
     * // Get one Learning_programs
     * const learning_programs = await prisma.learning_programs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends learning_programsFindUniqueArgs>(args: SelectSubset<T, learning_programsFindUniqueArgs<ExtArgs>>): Prisma__learning_programsClient<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Learning_programs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {learning_programsFindUniqueOrThrowArgs} args - Arguments to find a Learning_programs
     * @example
     * // Get one Learning_programs
     * const learning_programs = await prisma.learning_programs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends learning_programsFindUniqueOrThrowArgs>(args: SelectSubset<T, learning_programsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__learning_programsClient<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Learning_programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_programsFindFirstArgs} args - Arguments to find a Learning_programs
     * @example
     * // Get one Learning_programs
     * const learning_programs = await prisma.learning_programs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends learning_programsFindFirstArgs>(args?: SelectSubset<T, learning_programsFindFirstArgs<ExtArgs>>): Prisma__learning_programsClient<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Learning_programs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_programsFindFirstOrThrowArgs} args - Arguments to find a Learning_programs
     * @example
     * // Get one Learning_programs
     * const learning_programs = await prisma.learning_programs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends learning_programsFindFirstOrThrowArgs>(args?: SelectSubset<T, learning_programsFindFirstOrThrowArgs<ExtArgs>>): Prisma__learning_programsClient<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Learning_programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_programsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Learning_programs
     * const learning_programs = await prisma.learning_programs.findMany()
     * 
     * // Get first 10 Learning_programs
     * const learning_programs = await prisma.learning_programs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learning_programsWithIdOnly = await prisma.learning_programs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends learning_programsFindManyArgs>(args?: SelectSubset<T, learning_programsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Learning_programs.
     * @param {learning_programsCreateArgs} args - Arguments to create a Learning_programs.
     * @example
     * // Create one Learning_programs
     * const Learning_programs = await prisma.learning_programs.create({
     *   data: {
     *     // ... data to create a Learning_programs
     *   }
     * })
     * 
     */
    create<T extends learning_programsCreateArgs>(args: SelectSubset<T, learning_programsCreateArgs<ExtArgs>>): Prisma__learning_programsClient<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Learning_programs.
     * @param {learning_programsCreateManyArgs} args - Arguments to create many Learning_programs.
     * @example
     * // Create many Learning_programs
     * const learning_programs = await prisma.learning_programs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends learning_programsCreateManyArgs>(args?: SelectSubset<T, learning_programsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Learning_programs.
     * @param {learning_programsDeleteArgs} args - Arguments to delete one Learning_programs.
     * @example
     * // Delete one Learning_programs
     * const Learning_programs = await prisma.learning_programs.delete({
     *   where: {
     *     // ... filter to delete one Learning_programs
     *   }
     * })
     * 
     */
    delete<T extends learning_programsDeleteArgs>(args: SelectSubset<T, learning_programsDeleteArgs<ExtArgs>>): Prisma__learning_programsClient<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Learning_programs.
     * @param {learning_programsUpdateArgs} args - Arguments to update one Learning_programs.
     * @example
     * // Update one Learning_programs
     * const learning_programs = await prisma.learning_programs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends learning_programsUpdateArgs>(args: SelectSubset<T, learning_programsUpdateArgs<ExtArgs>>): Prisma__learning_programsClient<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Learning_programs.
     * @param {learning_programsDeleteManyArgs} args - Arguments to filter Learning_programs to delete.
     * @example
     * // Delete a few Learning_programs
     * const { count } = await prisma.learning_programs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends learning_programsDeleteManyArgs>(args?: SelectSubset<T, learning_programsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Learning_programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_programsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Learning_programs
     * const learning_programs = await prisma.learning_programs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends learning_programsUpdateManyArgs>(args: SelectSubset<T, learning_programsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Learning_programs.
     * @param {learning_programsUpsertArgs} args - Arguments to update or create a Learning_programs.
     * @example
     * // Update or create a Learning_programs
     * const learning_programs = await prisma.learning_programs.upsert({
     *   create: {
     *     // ... data to create a Learning_programs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Learning_programs we want to update
     *   }
     * })
     */
    upsert<T extends learning_programsUpsertArgs>(args: SelectSubset<T, learning_programsUpsertArgs<ExtArgs>>): Prisma__learning_programsClient<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Learning_programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_programsCountArgs} args - Arguments to filter Learning_programs to count.
     * @example
     * // Count the number of Learning_programs
     * const count = await prisma.learning_programs.count({
     *   where: {
     *     // ... the filter for the Learning_programs we want to count
     *   }
     * })
    **/
    count<T extends learning_programsCountArgs>(
      args?: Subset<T, learning_programsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Learning_programsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Learning_programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Learning_programsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Learning_programsAggregateArgs>(args: Subset<T, Learning_programsAggregateArgs>): Prisma.PrismaPromise<GetLearning_programsAggregateType<T>>

    /**
     * Group by Learning_programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learning_programsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends learning_programsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: learning_programsGroupByArgs['orderBy'] }
        : { orderBy?: learning_programsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, learning_programsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearning_programsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the learning_programs model
   */
  readonly fields: learning_programsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for learning_programs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__learning_programsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends departmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, departmentDefaultArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teachers_learning_programs_advisorToteachers<T extends learning_programs$teachers_learning_programs_advisorToteachersArgs<ExtArgs> = {}>(args?: Subset<T, learning_programs$teachers_learning_programs_advisorToteachersArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teachers_learning_programs_advisor_assistantToteachers<T extends learning_programs$teachers_learning_programs_advisor_assistantToteachersArgs<ExtArgs> = {}>(args?: Subset<T, learning_programs$teachers_learning_programs_advisor_assistantToteachersArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    program_requirements<T extends learning_programs$program_requirementsArgs<ExtArgs> = {}>(args?: Subset<T, learning_programs$program_requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the learning_programs model
   */
  interface learning_programsFieldRefs {
    readonly id: FieldRef<"learning_programs", 'Int'>
    readonly name: FieldRef<"learning_programs", 'String'>
    readonly subject_hours: FieldRef<"learning_programs", 'Int'>
    readonly paper_hours: FieldRef<"learning_programs", 'Int'>
    readonly program_code: FieldRef<"learning_programs", 'String'>
    readonly depart_id: FieldRef<"learning_programs", 'Int'>
    readonly advisor: FieldRef<"learning_programs", 'Int'>
    readonly advisor_assistant: FieldRef<"learning_programs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * learning_programs findUnique
   */
  export type learning_programsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    /**
     * Filter, which learning_programs to fetch.
     */
    where: learning_programsWhereUniqueInput
  }

  /**
   * learning_programs findUniqueOrThrow
   */
  export type learning_programsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    /**
     * Filter, which learning_programs to fetch.
     */
    where: learning_programsWhereUniqueInput
  }

  /**
   * learning_programs findFirst
   */
  export type learning_programsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    /**
     * Filter, which learning_programs to fetch.
     */
    where?: learning_programsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of learning_programs to fetch.
     */
    orderBy?: learning_programsOrderByWithRelationInput | learning_programsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for learning_programs.
     */
    cursor?: learning_programsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` learning_programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` learning_programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of learning_programs.
     */
    distinct?: Learning_programsScalarFieldEnum | Learning_programsScalarFieldEnum[]
  }

  /**
   * learning_programs findFirstOrThrow
   */
  export type learning_programsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    /**
     * Filter, which learning_programs to fetch.
     */
    where?: learning_programsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of learning_programs to fetch.
     */
    orderBy?: learning_programsOrderByWithRelationInput | learning_programsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for learning_programs.
     */
    cursor?: learning_programsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` learning_programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` learning_programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of learning_programs.
     */
    distinct?: Learning_programsScalarFieldEnum | Learning_programsScalarFieldEnum[]
  }

  /**
   * learning_programs findMany
   */
  export type learning_programsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    /**
     * Filter, which learning_programs to fetch.
     */
    where?: learning_programsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of learning_programs to fetch.
     */
    orderBy?: learning_programsOrderByWithRelationInput | learning_programsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing learning_programs.
     */
    cursor?: learning_programsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` learning_programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` learning_programs.
     */
    skip?: number
    distinct?: Learning_programsScalarFieldEnum | Learning_programsScalarFieldEnum[]
  }

  /**
   * learning_programs create
   */
  export type learning_programsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    /**
     * The data needed to create a learning_programs.
     */
    data: XOR<learning_programsCreateInput, learning_programsUncheckedCreateInput>
  }

  /**
   * learning_programs createMany
   */
  export type learning_programsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many learning_programs.
     */
    data: learning_programsCreateManyInput | learning_programsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * learning_programs update
   */
  export type learning_programsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    /**
     * The data needed to update a learning_programs.
     */
    data: XOR<learning_programsUpdateInput, learning_programsUncheckedUpdateInput>
    /**
     * Choose, which learning_programs to update.
     */
    where: learning_programsWhereUniqueInput
  }

  /**
   * learning_programs updateMany
   */
  export type learning_programsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update learning_programs.
     */
    data: XOR<learning_programsUpdateManyMutationInput, learning_programsUncheckedUpdateManyInput>
    /**
     * Filter which learning_programs to update
     */
    where?: learning_programsWhereInput
    /**
     * Limit how many learning_programs to update.
     */
    limit?: number
  }

  /**
   * learning_programs upsert
   */
  export type learning_programsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    /**
     * The filter to search for the learning_programs to update in case it exists.
     */
    where: learning_programsWhereUniqueInput
    /**
     * In case the learning_programs found by the `where` argument doesn't exist, create a new learning_programs with this data.
     */
    create: XOR<learning_programsCreateInput, learning_programsUncheckedCreateInput>
    /**
     * In case the learning_programs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<learning_programsUpdateInput, learning_programsUncheckedUpdateInput>
  }

  /**
   * learning_programs delete
   */
  export type learning_programsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    /**
     * Filter which learning_programs to delete.
     */
    where: learning_programsWhereUniqueInput
  }

  /**
   * learning_programs deleteMany
   */
  export type learning_programsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which learning_programs to delete
     */
    where?: learning_programsWhereInput
    /**
     * Limit how many learning_programs to delete.
     */
    limit?: number
  }

  /**
   * learning_programs.teachers_learning_programs_advisorToteachers
   */
  export type learning_programs$teachers_learning_programs_advisorToteachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    where?: teachersWhereInput
  }

  /**
   * learning_programs.teachers_learning_programs_advisor_assistantToteachers
   */
  export type learning_programs$teachers_learning_programs_advisor_assistantToteachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    where?: teachersWhereInput
  }

  /**
   * learning_programs.program_requirements
   */
  export type learning_programs$program_requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    where?: program_requirementsWhereInput
    orderBy?: program_requirementsOrderByWithRelationInput | program_requirementsOrderByWithRelationInput[]
    cursor?: program_requirementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Program_requirementsScalarFieldEnum | Program_requirementsScalarFieldEnum[]
  }

  /**
   * learning_programs without action
   */
  export type learning_programsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
  }


  /**
   * Model program_requirements
   */

  export type AggregateProgram_requirements = {
    _count: Program_requirementsCountAggregateOutputType | null
    _avg: Program_requirementsAvgAggregateOutputType | null
    _sum: Program_requirementsSumAggregateOutputType | null
    _min: Program_requirementsMinAggregateOutputType | null
    _max: Program_requirementsMaxAggregateOutputType | null
  }

  export type Program_requirementsAvgAggregateOutputType = {
    id: number | null
    credit_hour: number | null
    program_id: number | null
  }

  export type Program_requirementsSumAggregateOutputType = {
    id: number | null
    credit_hour: number | null
    program_id: number | null
  }

  export type Program_requirementsMinAggregateOutputType = {
    id: number | null
    name: string | null
    credit_hour: number | null
    type: $Enums.program_requirements_type | null
    require_code: string | null
    program_id: number | null
  }

  export type Program_requirementsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    credit_hour: number | null
    type: $Enums.program_requirements_type | null
    require_code: string | null
    program_id: number | null
  }

  export type Program_requirementsCountAggregateOutputType = {
    id: number
    name: number
    credit_hour: number
    type: number
    require_code: number
    program_id: number
    _all: number
  }


  export type Program_requirementsAvgAggregateInputType = {
    id?: true
    credit_hour?: true
    program_id?: true
  }

  export type Program_requirementsSumAggregateInputType = {
    id?: true
    credit_hour?: true
    program_id?: true
  }

  export type Program_requirementsMinAggregateInputType = {
    id?: true
    name?: true
    credit_hour?: true
    type?: true
    require_code?: true
    program_id?: true
  }

  export type Program_requirementsMaxAggregateInputType = {
    id?: true
    name?: true
    credit_hour?: true
    type?: true
    require_code?: true
    program_id?: true
  }

  export type Program_requirementsCountAggregateInputType = {
    id?: true
    name?: true
    credit_hour?: true
    type?: true
    require_code?: true
    program_id?: true
    _all?: true
  }

  export type Program_requirementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which program_requirements to aggregate.
     */
    where?: program_requirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of program_requirements to fetch.
     */
    orderBy?: program_requirementsOrderByWithRelationInput | program_requirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: program_requirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` program_requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` program_requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned program_requirements
    **/
    _count?: true | Program_requirementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Program_requirementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Program_requirementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Program_requirementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Program_requirementsMaxAggregateInputType
  }

  export type GetProgram_requirementsAggregateType<T extends Program_requirementsAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram_requirements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram_requirements[P]>
      : GetScalarType<T[P], AggregateProgram_requirements[P]>
  }




  export type program_requirementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: program_requirementsWhereInput
    orderBy?: program_requirementsOrderByWithAggregationInput | program_requirementsOrderByWithAggregationInput[]
    by: Program_requirementsScalarFieldEnum[] | Program_requirementsScalarFieldEnum
    having?: program_requirementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Program_requirementsCountAggregateInputType | true
    _avg?: Program_requirementsAvgAggregateInputType
    _sum?: Program_requirementsSumAggregateInputType
    _min?: Program_requirementsMinAggregateInputType
    _max?: Program_requirementsMaxAggregateInputType
  }

  export type Program_requirementsGroupByOutputType = {
    id: number
    name: string
    credit_hour: number
    type: $Enums.program_requirements_type
    require_code: string
    program_id: number
    _count: Program_requirementsCountAggregateOutputType | null
    _avg: Program_requirementsAvgAggregateOutputType | null
    _sum: Program_requirementsSumAggregateOutputType | null
    _min: Program_requirementsMinAggregateOutputType | null
    _max: Program_requirementsMaxAggregateOutputType | null
  }

  type GetProgram_requirementsGroupByPayload<T extends program_requirementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Program_requirementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Program_requirementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Program_requirementsGroupByOutputType[P]>
            : GetScalarType<T[P], Program_requirementsGroupByOutputType[P]>
        }
      >
    >


  export type program_requirementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    credit_hour?: boolean
    type?: boolean
    require_code?: boolean
    program_id?: boolean
    learning_programs?: boolean | learning_programsDefaultArgs<ExtArgs>
    subjects?: boolean | program_requirements$subjectsArgs<ExtArgs>
    _count?: boolean | Program_requirementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program_requirements"]>



  export type program_requirementsSelectScalar = {
    id?: boolean
    name?: boolean
    credit_hour?: boolean
    type?: boolean
    require_code?: boolean
    program_id?: boolean
  }

  export type program_requirementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "credit_hour" | "type" | "require_code" | "program_id", ExtArgs["result"]["program_requirements"]>
  export type program_requirementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learning_programs?: boolean | learning_programsDefaultArgs<ExtArgs>
    subjects?: boolean | program_requirements$subjectsArgs<ExtArgs>
    _count?: boolean | Program_requirementsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $program_requirementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "program_requirements"
    objects: {
      learning_programs: Prisma.$learning_programsPayload<ExtArgs>
      subjects: Prisma.$subjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      credit_hour: number
      type: $Enums.program_requirements_type
      require_code: string
      program_id: number
    }, ExtArgs["result"]["program_requirements"]>
    composites: {}
  }

  type program_requirementsGetPayload<S extends boolean | null | undefined | program_requirementsDefaultArgs> = $Result.GetResult<Prisma.$program_requirementsPayload, S>

  type program_requirementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<program_requirementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Program_requirementsCountAggregateInputType | true
    }

  export interface program_requirementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['program_requirements'], meta: { name: 'program_requirements' } }
    /**
     * Find zero or one Program_requirements that matches the filter.
     * @param {program_requirementsFindUniqueArgs} args - Arguments to find a Program_requirements
     * @example
     * // Get one Program_requirements
     * const program_requirements = await prisma.program_requirements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends program_requirementsFindUniqueArgs>(args: SelectSubset<T, program_requirementsFindUniqueArgs<ExtArgs>>): Prisma__program_requirementsClient<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program_requirements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {program_requirementsFindUniqueOrThrowArgs} args - Arguments to find a Program_requirements
     * @example
     * // Get one Program_requirements
     * const program_requirements = await prisma.program_requirements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends program_requirementsFindUniqueOrThrowArgs>(args: SelectSubset<T, program_requirementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__program_requirementsClient<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program_requirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_requirementsFindFirstArgs} args - Arguments to find a Program_requirements
     * @example
     * // Get one Program_requirements
     * const program_requirements = await prisma.program_requirements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends program_requirementsFindFirstArgs>(args?: SelectSubset<T, program_requirementsFindFirstArgs<ExtArgs>>): Prisma__program_requirementsClient<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program_requirements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_requirementsFindFirstOrThrowArgs} args - Arguments to find a Program_requirements
     * @example
     * // Get one Program_requirements
     * const program_requirements = await prisma.program_requirements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends program_requirementsFindFirstOrThrowArgs>(args?: SelectSubset<T, program_requirementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__program_requirementsClient<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Program_requirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_requirementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Program_requirements
     * const program_requirements = await prisma.program_requirements.findMany()
     * 
     * // Get first 10 Program_requirements
     * const program_requirements = await prisma.program_requirements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const program_requirementsWithIdOnly = await prisma.program_requirements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends program_requirementsFindManyArgs>(args?: SelectSubset<T, program_requirementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program_requirements.
     * @param {program_requirementsCreateArgs} args - Arguments to create a Program_requirements.
     * @example
     * // Create one Program_requirements
     * const Program_requirements = await prisma.program_requirements.create({
     *   data: {
     *     // ... data to create a Program_requirements
     *   }
     * })
     * 
     */
    create<T extends program_requirementsCreateArgs>(args: SelectSubset<T, program_requirementsCreateArgs<ExtArgs>>): Prisma__program_requirementsClient<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Program_requirements.
     * @param {program_requirementsCreateManyArgs} args - Arguments to create many Program_requirements.
     * @example
     * // Create many Program_requirements
     * const program_requirements = await prisma.program_requirements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends program_requirementsCreateManyArgs>(args?: SelectSubset<T, program_requirementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Program_requirements.
     * @param {program_requirementsDeleteArgs} args - Arguments to delete one Program_requirements.
     * @example
     * // Delete one Program_requirements
     * const Program_requirements = await prisma.program_requirements.delete({
     *   where: {
     *     // ... filter to delete one Program_requirements
     *   }
     * })
     * 
     */
    delete<T extends program_requirementsDeleteArgs>(args: SelectSubset<T, program_requirementsDeleteArgs<ExtArgs>>): Prisma__program_requirementsClient<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program_requirements.
     * @param {program_requirementsUpdateArgs} args - Arguments to update one Program_requirements.
     * @example
     * // Update one Program_requirements
     * const program_requirements = await prisma.program_requirements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends program_requirementsUpdateArgs>(args: SelectSubset<T, program_requirementsUpdateArgs<ExtArgs>>): Prisma__program_requirementsClient<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Program_requirements.
     * @param {program_requirementsDeleteManyArgs} args - Arguments to filter Program_requirements to delete.
     * @example
     * // Delete a few Program_requirements
     * const { count } = await prisma.program_requirements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends program_requirementsDeleteManyArgs>(args?: SelectSubset<T, program_requirementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Program_requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_requirementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Program_requirements
     * const program_requirements = await prisma.program_requirements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends program_requirementsUpdateManyArgs>(args: SelectSubset<T, program_requirementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Program_requirements.
     * @param {program_requirementsUpsertArgs} args - Arguments to update or create a Program_requirements.
     * @example
     * // Update or create a Program_requirements
     * const program_requirements = await prisma.program_requirements.upsert({
     *   create: {
     *     // ... data to create a Program_requirements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program_requirements we want to update
     *   }
     * })
     */
    upsert<T extends program_requirementsUpsertArgs>(args: SelectSubset<T, program_requirementsUpsertArgs<ExtArgs>>): Prisma__program_requirementsClient<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Program_requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_requirementsCountArgs} args - Arguments to filter Program_requirements to count.
     * @example
     * // Count the number of Program_requirements
     * const count = await prisma.program_requirements.count({
     *   where: {
     *     // ... the filter for the Program_requirements we want to count
     *   }
     * })
    **/
    count<T extends program_requirementsCountArgs>(
      args?: Subset<T, program_requirementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Program_requirementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program_requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Program_requirementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Program_requirementsAggregateArgs>(args: Subset<T, Program_requirementsAggregateArgs>): Prisma.PrismaPromise<GetProgram_requirementsAggregateType<T>>

    /**
     * Group by Program_requirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {program_requirementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends program_requirementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: program_requirementsGroupByArgs['orderBy'] }
        : { orderBy?: program_requirementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, program_requirementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgram_requirementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the program_requirements model
   */
  readonly fields: program_requirementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for program_requirements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__program_requirementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    learning_programs<T extends learning_programsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, learning_programsDefaultArgs<ExtArgs>>): Prisma__learning_programsClient<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subjects<T extends program_requirements$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, program_requirements$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the program_requirements model
   */
  interface program_requirementsFieldRefs {
    readonly id: FieldRef<"program_requirements", 'Int'>
    readonly name: FieldRef<"program_requirements", 'String'>
    readonly credit_hour: FieldRef<"program_requirements", 'Int'>
    readonly type: FieldRef<"program_requirements", 'program_requirements_type'>
    readonly require_code: FieldRef<"program_requirements", 'String'>
    readonly program_id: FieldRef<"program_requirements", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * program_requirements findUnique
   */
  export type program_requirementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    /**
     * Filter, which program_requirements to fetch.
     */
    where: program_requirementsWhereUniqueInput
  }

  /**
   * program_requirements findUniqueOrThrow
   */
  export type program_requirementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    /**
     * Filter, which program_requirements to fetch.
     */
    where: program_requirementsWhereUniqueInput
  }

  /**
   * program_requirements findFirst
   */
  export type program_requirementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    /**
     * Filter, which program_requirements to fetch.
     */
    where?: program_requirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of program_requirements to fetch.
     */
    orderBy?: program_requirementsOrderByWithRelationInput | program_requirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for program_requirements.
     */
    cursor?: program_requirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` program_requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` program_requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of program_requirements.
     */
    distinct?: Program_requirementsScalarFieldEnum | Program_requirementsScalarFieldEnum[]
  }

  /**
   * program_requirements findFirstOrThrow
   */
  export type program_requirementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    /**
     * Filter, which program_requirements to fetch.
     */
    where?: program_requirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of program_requirements to fetch.
     */
    orderBy?: program_requirementsOrderByWithRelationInput | program_requirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for program_requirements.
     */
    cursor?: program_requirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` program_requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` program_requirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of program_requirements.
     */
    distinct?: Program_requirementsScalarFieldEnum | Program_requirementsScalarFieldEnum[]
  }

  /**
   * program_requirements findMany
   */
  export type program_requirementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    /**
     * Filter, which program_requirements to fetch.
     */
    where?: program_requirementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of program_requirements to fetch.
     */
    orderBy?: program_requirementsOrderByWithRelationInput | program_requirementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing program_requirements.
     */
    cursor?: program_requirementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` program_requirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` program_requirements.
     */
    skip?: number
    distinct?: Program_requirementsScalarFieldEnum | Program_requirementsScalarFieldEnum[]
  }

  /**
   * program_requirements create
   */
  export type program_requirementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    /**
     * The data needed to create a program_requirements.
     */
    data: XOR<program_requirementsCreateInput, program_requirementsUncheckedCreateInput>
  }

  /**
   * program_requirements createMany
   */
  export type program_requirementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many program_requirements.
     */
    data: program_requirementsCreateManyInput | program_requirementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * program_requirements update
   */
  export type program_requirementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    /**
     * The data needed to update a program_requirements.
     */
    data: XOR<program_requirementsUpdateInput, program_requirementsUncheckedUpdateInput>
    /**
     * Choose, which program_requirements to update.
     */
    where: program_requirementsWhereUniqueInput
  }

  /**
   * program_requirements updateMany
   */
  export type program_requirementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update program_requirements.
     */
    data: XOR<program_requirementsUpdateManyMutationInput, program_requirementsUncheckedUpdateManyInput>
    /**
     * Filter which program_requirements to update
     */
    where?: program_requirementsWhereInput
    /**
     * Limit how many program_requirements to update.
     */
    limit?: number
  }

  /**
   * program_requirements upsert
   */
  export type program_requirementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    /**
     * The filter to search for the program_requirements to update in case it exists.
     */
    where: program_requirementsWhereUniqueInput
    /**
     * In case the program_requirements found by the `where` argument doesn't exist, create a new program_requirements with this data.
     */
    create: XOR<program_requirementsCreateInput, program_requirementsUncheckedCreateInput>
    /**
     * In case the program_requirements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<program_requirementsUpdateInput, program_requirementsUncheckedUpdateInput>
  }

  /**
   * program_requirements delete
   */
  export type program_requirementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    /**
     * Filter which program_requirements to delete.
     */
    where: program_requirementsWhereUniqueInput
  }

  /**
   * program_requirements deleteMany
   */
  export type program_requirementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which program_requirements to delete
     */
    where?: program_requirementsWhereInput
    /**
     * Limit how many program_requirements to delete.
     */
    limit?: number
  }

  /**
   * program_requirements.subjects
   */
  export type program_requirements$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    where?: subjectsWhereInput
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    cursor?: subjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * program_requirements without action
   */
  export type program_requirementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
  }


  /**
   * Model results
   */

  export type AggregateResults = {
    _count: ResultsCountAggregateOutputType | null
    _avg: ResultsAvgAggregateOutputType | null
    _sum: ResultsSumAggregateOutputType | null
    _min: ResultsMinAggregateOutputType | null
    _max: ResultsMaxAggregateOutputType | null
  }

  export type ResultsAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    classroom_id: number | null
  }

  export type ResultsSumAggregateOutputType = {
    id: number | null
    student_id: number | null
    classroom_id: number | null
  }

  export type ResultsMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    classroom_id: number | null
    st_status: $Enums.results_st_status | null
  }

  export type ResultsMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    classroom_id: number | null
    st_status: $Enums.results_st_status | null
  }

  export type ResultsCountAggregateOutputType = {
    id: number
    student_id: number
    classroom_id: number
    st_status: number
    _all: number
  }


  export type ResultsAvgAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
  }

  export type ResultsSumAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
  }

  export type ResultsMinAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    st_status?: true
  }

  export type ResultsMaxAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    st_status?: true
  }

  export type ResultsCountAggregateInputType = {
    id?: true
    student_id?: true
    classroom_id?: true
    st_status?: true
    _all?: true
  }

  export type ResultsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which results to aggregate.
     */
    where?: resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of results to fetch.
     */
    orderBy?: resultsOrderByWithRelationInput | resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned results
    **/
    _count?: true | ResultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultsMaxAggregateInputType
  }

  export type GetResultsAggregateType<T extends ResultsAggregateArgs> = {
        [P in keyof T & keyof AggregateResults]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResults[P]>
      : GetScalarType<T[P], AggregateResults[P]>
  }




  export type resultsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resultsWhereInput
    orderBy?: resultsOrderByWithAggregationInput | resultsOrderByWithAggregationInput[]
    by: ResultsScalarFieldEnum[] | ResultsScalarFieldEnum
    having?: resultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultsCountAggregateInputType | true
    _avg?: ResultsAvgAggregateInputType
    _sum?: ResultsSumAggregateInputType
    _min?: ResultsMinAggregateInputType
    _max?: ResultsMaxAggregateInputType
  }

  export type ResultsGroupByOutputType = {
    id: number
    student_id: number
    classroom_id: number
    st_status: $Enums.results_st_status
    _count: ResultsCountAggregateOutputType | null
    _avg: ResultsAvgAggregateOutputType | null
    _sum: ResultsSumAggregateOutputType | null
    _min: ResultsMinAggregateOutputType | null
    _max: ResultsMaxAggregateOutputType | null
  }

  type GetResultsGroupByPayload<T extends resultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultsGroupByOutputType[P]>
            : GetScalarType<T[P], ResultsGroupByOutputType[P]>
        }
      >
    >


  export type resultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    classroom_id?: boolean
    st_status?: boolean
    students?: boolean | studentsDefaultArgs<ExtArgs>
    classrooms?: boolean | classroomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["results"]>



  export type resultsSelectScalar = {
    id?: boolean
    student_id?: boolean
    classroom_id?: boolean
    st_status?: boolean
  }

  export type resultsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "classroom_id" | "st_status", ExtArgs["result"]["results"]>
  export type resultsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | studentsDefaultArgs<ExtArgs>
    classrooms?: boolean | classroomsDefaultArgs<ExtArgs>
  }

  export type $resultsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "results"
    objects: {
      students: Prisma.$studentsPayload<ExtArgs>
      classrooms: Prisma.$classroomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number
      classroom_id: number
      st_status: $Enums.results_st_status
    }, ExtArgs["result"]["results"]>
    composites: {}
  }

  type resultsGetPayload<S extends boolean | null | undefined | resultsDefaultArgs> = $Result.GetResult<Prisma.$resultsPayload, S>

  type resultsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<resultsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultsCountAggregateInputType | true
    }

  export interface resultsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['results'], meta: { name: 'results' } }
    /**
     * Find zero or one Results that matches the filter.
     * @param {resultsFindUniqueArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends resultsFindUniqueArgs>(args: SelectSubset<T, resultsFindUniqueArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Results that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {resultsFindUniqueOrThrowArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends resultsFindUniqueOrThrowArgs>(args: SelectSubset<T, resultsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsFindFirstArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends resultsFindFirstArgs>(args?: SelectSubset<T, resultsFindFirstArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Results that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsFindFirstOrThrowArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends resultsFindFirstOrThrowArgs>(args?: SelectSubset<T, resultsFindFirstOrThrowArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.results.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.results.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultsWithIdOnly = await prisma.results.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends resultsFindManyArgs>(args?: SelectSubset<T, resultsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Results.
     * @param {resultsCreateArgs} args - Arguments to create a Results.
     * @example
     * // Create one Results
     * const Results = await prisma.results.create({
     *   data: {
     *     // ... data to create a Results
     *   }
     * })
     * 
     */
    create<T extends resultsCreateArgs>(args: SelectSubset<T, resultsCreateArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {resultsCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const results = await prisma.results.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends resultsCreateManyArgs>(args?: SelectSubset<T, resultsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Results.
     * @param {resultsDeleteArgs} args - Arguments to delete one Results.
     * @example
     * // Delete one Results
     * const Results = await prisma.results.delete({
     *   where: {
     *     // ... filter to delete one Results
     *   }
     * })
     * 
     */
    delete<T extends resultsDeleteArgs>(args: SelectSubset<T, resultsDeleteArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Results.
     * @param {resultsUpdateArgs} args - Arguments to update one Results.
     * @example
     * // Update one Results
     * const results = await prisma.results.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends resultsUpdateArgs>(args: SelectSubset<T, resultsUpdateArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {resultsDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.results.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends resultsDeleteManyArgs>(args?: SelectSubset<T, resultsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const results = await prisma.results.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends resultsUpdateManyArgs>(args: SelectSubset<T, resultsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Results.
     * @param {resultsUpsertArgs} args - Arguments to update or create a Results.
     * @example
     * // Update or create a Results
     * const results = await prisma.results.upsert({
     *   create: {
     *     // ... data to create a Results
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Results we want to update
     *   }
     * })
     */
    upsert<T extends resultsUpsertArgs>(args: SelectSubset<T, resultsUpsertArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.results.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends resultsCountArgs>(
      args?: Subset<T, resultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultsAggregateArgs>(args: Subset<T, ResultsAggregateArgs>): Prisma.PrismaPromise<GetResultsAggregateType<T>>

    /**
     * Group by Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends resultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: resultsGroupByArgs['orderBy'] }
        : { orderBy?: resultsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, resultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the results model
   */
  readonly fields: resultsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for results.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__resultsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends studentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentsDefaultArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classrooms<T extends classroomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, classroomsDefaultArgs<ExtArgs>>): Prisma__classroomsClient<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the results model
   */
  interface resultsFieldRefs {
    readonly id: FieldRef<"results", 'Int'>
    readonly student_id: FieldRef<"results", 'Int'>
    readonly classroom_id: FieldRef<"results", 'Int'>
    readonly st_status: FieldRef<"results", 'results_st_status'>
  }
    

  // Custom InputTypes
  /**
   * results findUnique
   */
  export type resultsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    /**
     * Filter, which results to fetch.
     */
    where: resultsWhereUniqueInput
  }

  /**
   * results findUniqueOrThrow
   */
  export type resultsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    /**
     * Filter, which results to fetch.
     */
    where: resultsWhereUniqueInput
  }

  /**
   * results findFirst
   */
  export type resultsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    /**
     * Filter, which results to fetch.
     */
    where?: resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of results to fetch.
     */
    orderBy?: resultsOrderByWithRelationInput | resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for results.
     */
    cursor?: resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of results.
     */
    distinct?: ResultsScalarFieldEnum | ResultsScalarFieldEnum[]
  }

  /**
   * results findFirstOrThrow
   */
  export type resultsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    /**
     * Filter, which results to fetch.
     */
    where?: resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of results to fetch.
     */
    orderBy?: resultsOrderByWithRelationInput | resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for results.
     */
    cursor?: resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of results.
     */
    distinct?: ResultsScalarFieldEnum | ResultsScalarFieldEnum[]
  }

  /**
   * results findMany
   */
  export type resultsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    /**
     * Filter, which results to fetch.
     */
    where?: resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of results to fetch.
     */
    orderBy?: resultsOrderByWithRelationInput | resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing results.
     */
    cursor?: resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` results.
     */
    skip?: number
    distinct?: ResultsScalarFieldEnum | ResultsScalarFieldEnum[]
  }

  /**
   * results create
   */
  export type resultsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    /**
     * The data needed to create a results.
     */
    data: XOR<resultsCreateInput, resultsUncheckedCreateInput>
  }

  /**
   * results createMany
   */
  export type resultsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many results.
     */
    data: resultsCreateManyInput | resultsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * results update
   */
  export type resultsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    /**
     * The data needed to update a results.
     */
    data: XOR<resultsUpdateInput, resultsUncheckedUpdateInput>
    /**
     * Choose, which results to update.
     */
    where: resultsWhereUniqueInput
  }

  /**
   * results updateMany
   */
  export type resultsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update results.
     */
    data: XOR<resultsUpdateManyMutationInput, resultsUncheckedUpdateManyInput>
    /**
     * Filter which results to update
     */
    where?: resultsWhereInput
    /**
     * Limit how many results to update.
     */
    limit?: number
  }

  /**
   * results upsert
   */
  export type resultsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    /**
     * The filter to search for the results to update in case it exists.
     */
    where: resultsWhereUniqueInput
    /**
     * In case the results found by the `where` argument doesn't exist, create a new results with this data.
     */
    create: XOR<resultsCreateInput, resultsUncheckedCreateInput>
    /**
     * In case the results was found with the provided `where` argument, update it with this data.
     */
    update: XOR<resultsUpdateInput, resultsUncheckedUpdateInput>
  }

  /**
   * results delete
   */
  export type resultsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    /**
     * Filter which results to delete.
     */
    where: resultsWhereUniqueInput
  }

  /**
   * results deleteMany
   */
  export type resultsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which results to delete
     */
    where?: resultsWhereInput
    /**
     * Limit how many results to delete.
     */
    limit?: number
  }

  /**
   * results without action
   */
  export type resultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
  }


  /**
   * Model specialization
   */

  export type AggregateSpecialization = {
    _count: SpecializationCountAggregateOutputType | null
    _avg: SpecializationAvgAggregateOutputType | null
    _sum: SpecializationSumAggregateOutputType | null
    _min: SpecializationMinAggregateOutputType | null
    _max: SpecializationMaxAggregateOutputType | null
  }

  export type SpecializationAvgAggregateOutputType = {
    id: number | null
    depart_id: number | null
  }

  export type SpecializationSumAggregateOutputType = {
    id: number | null
    depart_id: number | null
  }

  export type SpecializationMinAggregateOutputType = {
    id: number | null
    name: string | null
    depart_id: number | null
  }

  export type SpecializationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    depart_id: number | null
  }

  export type SpecializationCountAggregateOutputType = {
    id: number
    name: number
    depart_id: number
    _all: number
  }


  export type SpecializationAvgAggregateInputType = {
    id?: true
    depart_id?: true
  }

  export type SpecializationSumAggregateInputType = {
    id?: true
    depart_id?: true
  }

  export type SpecializationMinAggregateInputType = {
    id?: true
    name?: true
    depart_id?: true
  }

  export type SpecializationMaxAggregateInputType = {
    id?: true
    name?: true
    depart_id?: true
  }

  export type SpecializationCountAggregateInputType = {
    id?: true
    name?: true
    depart_id?: true
    _all?: true
  }

  export type SpecializationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specialization to aggregate.
     */
    where?: specializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specializations to fetch.
     */
    orderBy?: specializationOrderByWithRelationInput | specializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: specializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned specializations
    **/
    _count?: true | SpecializationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecializationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecializationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecializationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecializationMaxAggregateInputType
  }

  export type GetSpecializationAggregateType<T extends SpecializationAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialization[P]>
      : GetScalarType<T[P], AggregateSpecialization[P]>
  }




  export type specializationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: specializationWhereInput
    orderBy?: specializationOrderByWithAggregationInput | specializationOrderByWithAggregationInput[]
    by: SpecializationScalarFieldEnum[] | SpecializationScalarFieldEnum
    having?: specializationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecializationCountAggregateInputType | true
    _avg?: SpecializationAvgAggregateInputType
    _sum?: SpecializationSumAggregateInputType
    _min?: SpecializationMinAggregateInputType
    _max?: SpecializationMaxAggregateInputType
  }

  export type SpecializationGroupByOutputType = {
    id: number
    name: string
    depart_id: number
    _count: SpecializationCountAggregateOutputType | null
    _avg: SpecializationAvgAggregateOutputType | null
    _sum: SpecializationSumAggregateOutputType | null
    _min: SpecializationMinAggregateOutputType | null
    _max: SpecializationMaxAggregateOutputType | null
  }

  type GetSpecializationGroupByPayload<T extends specializationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecializationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecializationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecializationGroupByOutputType[P]>
            : GetScalarType<T[P], SpecializationGroupByOutputType[P]>
        }
      >
    >


  export type specializationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    depart_id?: boolean
    department?: boolean | departmentDefaultArgs<ExtArgs>
    students?: boolean | specialization$studentsArgs<ExtArgs>
    _count?: boolean | SpecializationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialization"]>



  export type specializationSelectScalar = {
    id?: boolean
    name?: boolean
    depart_id?: boolean
  }

  export type specializationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "depart_id", ExtArgs["result"]["specialization"]>
  export type specializationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | departmentDefaultArgs<ExtArgs>
    students?: boolean | specialization$studentsArgs<ExtArgs>
    _count?: boolean | SpecializationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $specializationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "specialization"
    objects: {
      department: Prisma.$departmentPayload<ExtArgs>
      students: Prisma.$studentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      depart_id: number
    }, ExtArgs["result"]["specialization"]>
    composites: {}
  }

  type specializationGetPayload<S extends boolean | null | undefined | specializationDefaultArgs> = $Result.GetResult<Prisma.$specializationPayload, S>

  type specializationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<specializationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecializationCountAggregateInputType | true
    }

  export interface specializationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['specialization'], meta: { name: 'specialization' } }
    /**
     * Find zero or one Specialization that matches the filter.
     * @param {specializationFindUniqueArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends specializationFindUniqueArgs>(args: SelectSubset<T, specializationFindUniqueArgs<ExtArgs>>): Prisma__specializationClient<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {specializationFindUniqueOrThrowArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends specializationFindUniqueOrThrowArgs>(args: SelectSubset<T, specializationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__specializationClient<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializationFindFirstArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends specializationFindFirstArgs>(args?: SelectSubset<T, specializationFindFirstArgs<ExtArgs>>): Prisma__specializationClient<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializationFindFirstOrThrowArgs} args - Arguments to find a Specialization
     * @example
     * // Get one Specialization
     * const specialization = await prisma.specialization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends specializationFindFirstOrThrowArgs>(args?: SelectSubset<T, specializationFindFirstOrThrowArgs<ExtArgs>>): Prisma__specializationClient<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specializations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specializations
     * const specializations = await prisma.specialization.findMany()
     * 
     * // Get first 10 Specializations
     * const specializations = await prisma.specialization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specializationWithIdOnly = await prisma.specialization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends specializationFindManyArgs>(args?: SelectSubset<T, specializationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialization.
     * @param {specializationCreateArgs} args - Arguments to create a Specialization.
     * @example
     * // Create one Specialization
     * const Specialization = await prisma.specialization.create({
     *   data: {
     *     // ... data to create a Specialization
     *   }
     * })
     * 
     */
    create<T extends specializationCreateArgs>(args: SelectSubset<T, specializationCreateArgs<ExtArgs>>): Prisma__specializationClient<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specializations.
     * @param {specializationCreateManyArgs} args - Arguments to create many Specializations.
     * @example
     * // Create many Specializations
     * const specialization = await prisma.specialization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends specializationCreateManyArgs>(args?: SelectSubset<T, specializationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Specialization.
     * @param {specializationDeleteArgs} args - Arguments to delete one Specialization.
     * @example
     * // Delete one Specialization
     * const Specialization = await prisma.specialization.delete({
     *   where: {
     *     // ... filter to delete one Specialization
     *   }
     * })
     * 
     */
    delete<T extends specializationDeleteArgs>(args: SelectSubset<T, specializationDeleteArgs<ExtArgs>>): Prisma__specializationClient<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialization.
     * @param {specializationUpdateArgs} args - Arguments to update one Specialization.
     * @example
     * // Update one Specialization
     * const specialization = await prisma.specialization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends specializationUpdateArgs>(args: SelectSubset<T, specializationUpdateArgs<ExtArgs>>): Prisma__specializationClient<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specializations.
     * @param {specializationDeleteManyArgs} args - Arguments to filter Specializations to delete.
     * @example
     * // Delete a few Specializations
     * const { count } = await prisma.specialization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends specializationDeleteManyArgs>(args?: SelectSubset<T, specializationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specializations
     * const specialization = await prisma.specialization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends specializationUpdateManyArgs>(args: SelectSubset<T, specializationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Specialization.
     * @param {specializationUpsertArgs} args - Arguments to update or create a Specialization.
     * @example
     * // Update or create a Specialization
     * const specialization = await prisma.specialization.upsert({
     *   create: {
     *     // ... data to create a Specialization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialization we want to update
     *   }
     * })
     */
    upsert<T extends specializationUpsertArgs>(args: SelectSubset<T, specializationUpsertArgs<ExtArgs>>): Prisma__specializationClient<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializationCountArgs} args - Arguments to filter Specializations to count.
     * @example
     * // Count the number of Specializations
     * const count = await prisma.specialization.count({
     *   where: {
     *     // ... the filter for the Specializations we want to count
     *   }
     * })
    **/
    count<T extends specializationCountArgs>(
      args?: Subset<T, specializationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecializationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecializationAggregateArgs>(args: Subset<T, SpecializationAggregateArgs>): Prisma.PrismaPromise<GetSpecializationAggregateType<T>>

    /**
     * Group by Specialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends specializationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: specializationGroupByArgs['orderBy'] }
        : { orderBy?: specializationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, specializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecializationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the specialization model
   */
  readonly fields: specializationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for specialization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__specializationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends departmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, departmentDefaultArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends specialization$studentsArgs<ExtArgs> = {}>(args?: Subset<T, specialization$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the specialization model
   */
  interface specializationFieldRefs {
    readonly id: FieldRef<"specialization", 'Int'>
    readonly name: FieldRef<"specialization", 'String'>
    readonly depart_id: FieldRef<"specialization", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * specialization findUnique
   */
  export type specializationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
    /**
     * Filter, which specialization to fetch.
     */
    where: specializationWhereUniqueInput
  }

  /**
   * specialization findUniqueOrThrow
   */
  export type specializationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
    /**
     * Filter, which specialization to fetch.
     */
    where: specializationWhereUniqueInput
  }

  /**
   * specialization findFirst
   */
  export type specializationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
    /**
     * Filter, which specialization to fetch.
     */
    where?: specializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specializations to fetch.
     */
    orderBy?: specializationOrderByWithRelationInput | specializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specializations.
     */
    cursor?: specializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specializations.
     */
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * specialization findFirstOrThrow
   */
  export type specializationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
    /**
     * Filter, which specialization to fetch.
     */
    where?: specializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specializations to fetch.
     */
    orderBy?: specializationOrderByWithRelationInput | specializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specializations.
     */
    cursor?: specializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specializations.
     */
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * specialization findMany
   */
  export type specializationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
    /**
     * Filter, which specializations to fetch.
     */
    where?: specializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specializations to fetch.
     */
    orderBy?: specializationOrderByWithRelationInput | specializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing specializations.
     */
    cursor?: specializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specializations.
     */
    skip?: number
    distinct?: SpecializationScalarFieldEnum | SpecializationScalarFieldEnum[]
  }

  /**
   * specialization create
   */
  export type specializationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
    /**
     * The data needed to create a specialization.
     */
    data: XOR<specializationCreateInput, specializationUncheckedCreateInput>
  }

  /**
   * specialization createMany
   */
  export type specializationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many specializations.
     */
    data: specializationCreateManyInput | specializationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * specialization update
   */
  export type specializationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
    /**
     * The data needed to update a specialization.
     */
    data: XOR<specializationUpdateInput, specializationUncheckedUpdateInput>
    /**
     * Choose, which specialization to update.
     */
    where: specializationWhereUniqueInput
  }

  /**
   * specialization updateMany
   */
  export type specializationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update specializations.
     */
    data: XOR<specializationUpdateManyMutationInput, specializationUncheckedUpdateManyInput>
    /**
     * Filter which specializations to update
     */
    where?: specializationWhereInput
    /**
     * Limit how many specializations to update.
     */
    limit?: number
  }

  /**
   * specialization upsert
   */
  export type specializationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
    /**
     * The filter to search for the specialization to update in case it exists.
     */
    where: specializationWhereUniqueInput
    /**
     * In case the specialization found by the `where` argument doesn't exist, create a new specialization with this data.
     */
    create: XOR<specializationCreateInput, specializationUncheckedCreateInput>
    /**
     * In case the specialization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<specializationUpdateInput, specializationUncheckedUpdateInput>
  }

  /**
   * specialization delete
   */
  export type specializationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
    /**
     * Filter which specialization to delete.
     */
    where: specializationWhereUniqueInput
  }

  /**
   * specialization deleteMany
   */
  export type specializationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specializations to delete
     */
    where?: specializationWhereInput
    /**
     * Limit how many specializations to delete.
     */
    limit?: number
  }

  /**
   * specialization.students
   */
  export type specialization$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    cursor?: studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * specialization without action
   */
  export type specializationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specialization
     */
    select?: specializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specialization
     */
    omit?: specializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializationInclude<ExtArgs> | null
  }


  /**
   * Model students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsAvgAggregateOutputType = {
    id: number | null
    advisor: number | null
    specialization_id: number | null
  }

  export type StudentsSumAggregateOutputType = {
    id: number | null
    advisor: number | null
    specialization_id: number | null
  }

  export type StudentsMinAggregateOutputType = {
    id: number | null
    name: string | null
    registered_at: Date | null
    student_code: string | null
    national_n: string | null
    phone: string | null
    nation_phone: string | null
    advisor: number | null
    specialization_id: number | null
  }

  export type StudentsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    registered_at: Date | null
    student_code: string | null
    national_n: string | null
    phone: string | null
    nation_phone: string | null
    advisor: number | null
    specialization_id: number | null
  }

  export type StudentsCountAggregateOutputType = {
    id: number
    name: number
    registered_at: number
    student_code: number
    national_n: number
    phone: number
    nation_phone: number
    advisor: number
    specialization_id: number
    _all: number
  }


  export type StudentsAvgAggregateInputType = {
    id?: true
    advisor?: true
    specialization_id?: true
  }

  export type StudentsSumAggregateInputType = {
    id?: true
    advisor?: true
    specialization_id?: true
  }

  export type StudentsMinAggregateInputType = {
    id?: true
    name?: true
    registered_at?: true
    student_code?: true
    national_n?: true
    phone?: true
    nation_phone?: true
    advisor?: true
    specialization_id?: true
  }

  export type StudentsMaxAggregateInputType = {
    id?: true
    name?: true
    registered_at?: true
    student_code?: true
    national_n?: true
    phone?: true
    nation_phone?: true
    advisor?: true
    specialization_id?: true
  }

  export type StudentsCountAggregateInputType = {
    id?: true
    name?: true
    registered_at?: true
    student_code?: true
    national_n?: true
    phone?: true
    nation_phone?: true
    advisor?: true
    specialization_id?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to aggregate.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type studentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithAggregationInput | studentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: studentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _avg?: StudentsAvgAggregateInputType
    _sum?: StudentsSumAggregateInputType
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    id: number
    name: string
    registered_at: Date | null
    student_code: string
    national_n: string | null
    phone: string | null
    nation_phone: string | null
    advisor: number | null
    specialization_id: number
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends studentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type studentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    registered_at?: boolean
    student_code?: boolean
    national_n?: boolean
    phone?: boolean
    nation_phone?: boolean
    advisor?: boolean
    specialization_id?: boolean
    results?: boolean | students$resultsArgs<ExtArgs>
    teachers?: boolean | students$teachersArgs<ExtArgs>
    specialization?: boolean | specializationDefaultArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>



  export type studentsSelectScalar = {
    id?: boolean
    name?: boolean
    registered_at?: boolean
    student_code?: boolean
    national_n?: boolean
    phone?: boolean
    nation_phone?: boolean
    advisor?: boolean
    specialization_id?: boolean
  }

  export type studentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "registered_at" | "student_code" | "national_n" | "phone" | "nation_phone" | "advisor" | "specialization_id", ExtArgs["result"]["students"]>
  export type studentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | students$resultsArgs<ExtArgs>
    teachers?: boolean | students$teachersArgs<ExtArgs>
    specialization?: boolean | specializationDefaultArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $studentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "students"
    objects: {
      results: Prisma.$resultsPayload<ExtArgs>[]
      teachers: Prisma.$teachersPayload<ExtArgs> | null
      specialization: Prisma.$specializationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      registered_at: Date | null
      student_code: string
      national_n: string | null
      phone: string | null
      nation_phone: string | null
      advisor: number | null
      specialization_id: number
    }, ExtArgs["result"]["students"]>
    composites: {}
  }

  type studentsGetPayload<S extends boolean | null | undefined | studentsDefaultArgs> = $Result.GetResult<Prisma.$studentsPayload, S>

  type studentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface studentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['students'], meta: { name: 'students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {studentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentsFindUniqueArgs>(args: SelectSubset<T, studentsFindUniqueArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentsFindUniqueOrThrowArgs>(args: SelectSubset<T, studentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentsFindFirstArgs>(args?: SelectSubset<T, studentsFindFirstArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentsFindFirstOrThrowArgs>(args?: SelectSubset<T, studentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends studentsFindManyArgs>(args?: SelectSubset<T, studentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Students.
     * @param {studentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
     */
    create<T extends studentsCreateArgs>(args: SelectSubset<T, studentsCreateArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentsCreateManyArgs>(args?: SelectSubset<T, studentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Students.
     * @param {studentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
     */
    delete<T extends studentsDeleteArgs>(args: SelectSubset<T, studentsDeleteArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Students.
     * @param {studentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentsUpdateArgs>(args: SelectSubset<T, studentsUpdateArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentsDeleteManyArgs>(args?: SelectSubset<T, studentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentsUpdateManyArgs>(args: SelectSubset<T, studentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Students.
     * @param {studentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends studentsUpsertArgs>(args: SelectSubset<T, studentsUpsertArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentsCountArgs>(
      args?: Subset<T, studentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends studentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentsGroupByArgs['orderBy'] }
        : { orderBy?: studentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the students model
   */
  readonly fields: studentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    results<T extends students$resultsArgs<ExtArgs> = {}>(args?: Subset<T, students$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends students$teachersArgs<ExtArgs> = {}>(args?: Subset<T, students$teachersArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    specialization<T extends specializationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, specializationDefaultArgs<ExtArgs>>): Prisma__specializationClient<$Result.GetResult<Prisma.$specializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the students model
   */
  interface studentsFieldRefs {
    readonly id: FieldRef<"students", 'Int'>
    readonly name: FieldRef<"students", 'String'>
    readonly registered_at: FieldRef<"students", 'DateTime'>
    readonly student_code: FieldRef<"students", 'String'>
    readonly national_n: FieldRef<"students", 'String'>
    readonly phone: FieldRef<"students", 'String'>
    readonly nation_phone: FieldRef<"students", 'String'>
    readonly advisor: FieldRef<"students", 'Int'>
    readonly specialization_id: FieldRef<"students", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * students findUnique
   */
  export type studentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findUniqueOrThrow
   */
  export type studentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findFirst
   */
  export type studentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students findFirstOrThrow
   */
  export type studentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students findMany
   */
  export type studentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students create
   */
  export type studentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to create a students.
     */
    data: XOR<studentsCreateInput, studentsUncheckedCreateInput>
  }

  /**
   * students createMany
   */
  export type studentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentsCreateManyInput | studentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * students update
   */
  export type studentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The data needed to update a students.
     */
    data: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
    /**
     * Choose, which students to update.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students updateMany
   */
  export type studentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * students upsert
   */
  export type studentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * The filter to search for the students to update in case it exists.
     */
    where: studentsWhereUniqueInput
    /**
     * In case the students found by the `where` argument doesn't exist, create a new students with this data.
     */
    create: XOR<studentsCreateInput, studentsUncheckedCreateInput>
    /**
     * In case the students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
  }

  /**
   * students delete
   */
  export type studentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    /**
     * Filter which students to delete.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students deleteMany
   */
  export type studentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * students.results
   */
  export type students$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultsInclude<ExtArgs> | null
    where?: resultsWhereInput
    orderBy?: resultsOrderByWithRelationInput | resultsOrderByWithRelationInput[]
    cursor?: resultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultsScalarFieldEnum | ResultsScalarFieldEnum[]
  }

  /**
   * students.teachers
   */
  export type students$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    where?: teachersWhereInput
  }

  /**
   * students without action
   */
  export type studentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
  }


  /**
   * Model subjects
   */

  export type AggregateSubjects = {
    _count: SubjectsCountAggregateOutputType | null
    _avg: SubjectsAvgAggregateOutputType | null
    _sum: SubjectsSumAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  export type SubjectsAvgAggregateOutputType = {
    id: number | null
    hours_id: number | null
    exams_id: number | null
    degrees_id: number | null
    require_id: number | null
  }

  export type SubjectsSumAggregateOutputType = {
    id: number | null
    hours_id: number | null
    exams_id: number | null
    degrees_id: number | null
    require_id: number | null
  }

  export type SubjectsMinAggregateOutputType = {
    id: number | null
    name: string | null
    subject_code: string | null
    hours_id: number | null
    exams_id: number | null
    degrees_id: number | null
    require_id: number | null
  }

  export type SubjectsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    subject_code: string | null
    hours_id: number | null
    exams_id: number | null
    degrees_id: number | null
    require_id: number | null
  }

  export type SubjectsCountAggregateOutputType = {
    id: number
    name: number
    subject_code: number
    hours_id: number
    exams_id: number
    degrees_id: number
    require_id: number
    _all: number
  }


  export type SubjectsAvgAggregateInputType = {
    id?: true
    hours_id?: true
    exams_id?: true
    degrees_id?: true
    require_id?: true
  }

  export type SubjectsSumAggregateInputType = {
    id?: true
    hours_id?: true
    exams_id?: true
    degrees_id?: true
    require_id?: true
  }

  export type SubjectsMinAggregateInputType = {
    id?: true
    name?: true
    subject_code?: true
    hours_id?: true
    exams_id?: true
    degrees_id?: true
    require_id?: true
  }

  export type SubjectsMaxAggregateInputType = {
    id?: true
    name?: true
    subject_code?: true
    hours_id?: true
    exams_id?: true
    degrees_id?: true
    require_id?: true
  }

  export type SubjectsCountAggregateInputType = {
    id?: true
    name?: true
    subject_code?: true
    hours_id?: true
    exams_id?: true
    degrees_id?: true
    require_id?: true
    _all?: true
  }

  export type SubjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to aggregate.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subjects
    **/
    _count?: true | SubjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectsMaxAggregateInputType
  }

  export type GetSubjectsAggregateType<T extends SubjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjects[P]>
      : GetScalarType<T[P], AggregateSubjects[P]>
  }




  export type subjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectsWhereInput
    orderBy?: subjectsOrderByWithAggregationInput | subjectsOrderByWithAggregationInput[]
    by: SubjectsScalarFieldEnum[] | SubjectsScalarFieldEnum
    having?: subjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectsCountAggregateInputType | true
    _avg?: SubjectsAvgAggregateInputType
    _sum?: SubjectsSumAggregateInputType
    _min?: SubjectsMinAggregateInputType
    _max?: SubjectsMaxAggregateInputType
  }

  export type SubjectsGroupByOutputType = {
    id: number
    name: string
    subject_code: string
    hours_id: number | null
    exams_id: number | null
    degrees_id: number | null
    require_id: number | null
    _count: SubjectsCountAggregateOutputType | null
    _avg: SubjectsAvgAggregateOutputType | null
    _sum: SubjectsSumAggregateOutputType | null
    _min: SubjectsMinAggregateOutputType | null
    _max: SubjectsMaxAggregateOutputType | null
  }

  type GetSubjectsGroupByPayload<T extends subjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectsGroupByOutputType[P]>
        }
      >
    >


  export type subjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject_code?: boolean
    hours_id?: boolean
    exams_id?: boolean
    degrees_id?: boolean
    require_id?: boolean
    classrooms?: boolean | subjects$classroomsArgs<ExtArgs>
    hour_plan?: boolean | subjects$hour_planArgs<ExtArgs>
    exam_plan?: boolean | subjects$exam_planArgs<ExtArgs>
    degree_plan?: boolean | subjects$degree_planArgs<ExtArgs>
    program_requirements?: boolean | subjects$program_requirementsArgs<ExtArgs>
    _count?: boolean | SubjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjects"]>



  export type subjectsSelectScalar = {
    id?: boolean
    name?: boolean
    subject_code?: boolean
    hours_id?: boolean
    exams_id?: boolean
    degrees_id?: boolean
    require_id?: boolean
  }

  export type subjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subject_code" | "hours_id" | "exams_id" | "degrees_id" | "require_id", ExtArgs["result"]["subjects"]>
  export type subjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | subjects$classroomsArgs<ExtArgs>
    hour_plan?: boolean | subjects$hour_planArgs<ExtArgs>
    exam_plan?: boolean | subjects$exam_planArgs<ExtArgs>
    degree_plan?: boolean | subjects$degree_planArgs<ExtArgs>
    program_requirements?: boolean | subjects$program_requirementsArgs<ExtArgs>
    _count?: boolean | SubjectsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $subjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subjects"
    objects: {
      classrooms: Prisma.$classroomsPayload<ExtArgs>[]
      hour_plan: Prisma.$hour_planPayload<ExtArgs> | null
      exam_plan: Prisma.$exam_planPayload<ExtArgs> | null
      degree_plan: Prisma.$degree_planPayload<ExtArgs> | null
      program_requirements: Prisma.$program_requirementsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      subject_code: string
      hours_id: number | null
      exams_id: number | null
      degrees_id: number | null
      require_id: number | null
    }, ExtArgs["result"]["subjects"]>
    composites: {}
  }

  type subjectsGetPayload<S extends boolean | null | undefined | subjectsDefaultArgs> = $Result.GetResult<Prisma.$subjectsPayload, S>

  type subjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectsCountAggregateInputType | true
    }

  export interface subjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subjects'], meta: { name: 'subjects' } }
    /**
     * Find zero or one Subjects that matches the filter.
     * @param {subjectsFindUniqueArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subjectsFindUniqueArgs>(args: SelectSubset<T, subjectsFindUniqueArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subjects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subjectsFindUniqueOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, subjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsFindFirstArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subjectsFindFirstArgs>(args?: SelectSubset<T, subjectsFindFirstArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subjects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsFindFirstOrThrowArgs} args - Arguments to find a Subjects
     * @example
     * // Get one Subjects
     * const subjects = await prisma.subjects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, subjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subjects.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subjects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectsWithIdOnly = await prisma.subjects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subjectsFindManyArgs>(args?: SelectSubset<T, subjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subjects.
     * @param {subjectsCreateArgs} args - Arguments to create a Subjects.
     * @example
     * // Create one Subjects
     * const Subjects = await prisma.subjects.create({
     *   data: {
     *     // ... data to create a Subjects
     *   }
     * })
     * 
     */
    create<T extends subjectsCreateArgs>(args: SelectSubset<T, subjectsCreateArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {subjectsCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subjects = await prisma.subjects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subjectsCreateManyArgs>(args?: SelectSubset<T, subjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subjects.
     * @param {subjectsDeleteArgs} args - Arguments to delete one Subjects.
     * @example
     * // Delete one Subjects
     * const Subjects = await prisma.subjects.delete({
     *   where: {
     *     // ... filter to delete one Subjects
     *   }
     * })
     * 
     */
    delete<T extends subjectsDeleteArgs>(args: SelectSubset<T, subjectsDeleteArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subjects.
     * @param {subjectsUpdateArgs} args - Arguments to update one Subjects.
     * @example
     * // Update one Subjects
     * const subjects = await prisma.subjects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subjectsUpdateArgs>(args: SelectSubset<T, subjectsUpdateArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {subjectsDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subjects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subjectsDeleteManyArgs>(args?: SelectSubset<T, subjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subjects = await prisma.subjects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subjectsUpdateManyArgs>(args: SelectSubset<T, subjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subjects.
     * @param {subjectsUpsertArgs} args - Arguments to update or create a Subjects.
     * @example
     * // Update or create a Subjects
     * const subjects = await prisma.subjects.upsert({
     *   create: {
     *     // ... data to create a Subjects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subjects we want to update
     *   }
     * })
     */
    upsert<T extends subjectsUpsertArgs>(args: SelectSubset<T, subjectsUpsertArgs<ExtArgs>>): Prisma__subjectsClient<$Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subjects.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends subjectsCountArgs>(
      args?: Subset<T, subjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectsAggregateArgs>(args: Subset<T, SubjectsAggregateArgs>): Prisma.PrismaPromise<GetSubjectsAggregateType<T>>

    /**
     * Group by Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subjectsGroupByArgs['orderBy'] }
        : { orderBy?: subjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subjects model
   */
  readonly fields: subjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subjects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classrooms<T extends subjects$classroomsArgs<ExtArgs> = {}>(args?: Subset<T, subjects$classroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hour_plan<T extends subjects$hour_planArgs<ExtArgs> = {}>(args?: Subset<T, subjects$hour_planArgs<ExtArgs>>): Prisma__hour_planClient<$Result.GetResult<Prisma.$hour_planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    exam_plan<T extends subjects$exam_planArgs<ExtArgs> = {}>(args?: Subset<T, subjects$exam_planArgs<ExtArgs>>): Prisma__exam_planClient<$Result.GetResult<Prisma.$exam_planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    degree_plan<T extends subjects$degree_planArgs<ExtArgs> = {}>(args?: Subset<T, subjects$degree_planArgs<ExtArgs>>): Prisma__degree_planClient<$Result.GetResult<Prisma.$degree_planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    program_requirements<T extends subjects$program_requirementsArgs<ExtArgs> = {}>(args?: Subset<T, subjects$program_requirementsArgs<ExtArgs>>): Prisma__program_requirementsClient<$Result.GetResult<Prisma.$program_requirementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subjects model
   */
  interface subjectsFieldRefs {
    readonly id: FieldRef<"subjects", 'Int'>
    readonly name: FieldRef<"subjects", 'String'>
    readonly subject_code: FieldRef<"subjects", 'String'>
    readonly hours_id: FieldRef<"subjects", 'Int'>
    readonly exams_id: FieldRef<"subjects", 'Int'>
    readonly degrees_id: FieldRef<"subjects", 'Int'>
    readonly require_id: FieldRef<"subjects", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * subjects findUnique
   */
  export type subjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects findUniqueOrThrow
   */
  export type subjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects findFirst
   */
  export type subjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * subjects findFirstOrThrow
   */
  export type subjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * subjects findMany
   */
  export type subjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectsOrderByWithRelationInput | subjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subjects.
     */
    cursor?: subjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    distinct?: SubjectsScalarFieldEnum | SubjectsScalarFieldEnum[]
  }

  /**
   * subjects create
   */
  export type subjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a subjects.
     */
    data: XOR<subjectsCreateInput, subjectsUncheckedCreateInput>
  }

  /**
   * subjects createMany
   */
  export type subjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subjects.
     */
    data: subjectsCreateManyInput | subjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subjects update
   */
  export type subjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a subjects.
     */
    data: XOR<subjectsUpdateInput, subjectsUncheckedUpdateInput>
    /**
     * Choose, which subjects to update.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects updateMany
   */
  export type subjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectsUpdateManyMutationInput, subjectsUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectsWhereInput
    /**
     * Limit how many subjects to update.
     */
    limit?: number
  }

  /**
   * subjects upsert
   */
  export type subjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the subjects to update in case it exists.
     */
    where: subjectsWhereUniqueInput
    /**
     * In case the subjects found by the `where` argument doesn't exist, create a new subjects with this data.
     */
    create: XOR<subjectsCreateInput, subjectsUncheckedCreateInput>
    /**
     * In case the subjects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subjectsUpdateInput, subjectsUncheckedUpdateInput>
  }

  /**
   * subjects delete
   */
  export type subjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
    /**
     * Filter which subjects to delete.
     */
    where: subjectsWhereUniqueInput
  }

  /**
   * subjects deleteMany
   */
  export type subjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to delete
     */
    where?: subjectsWhereInput
    /**
     * Limit how many subjects to delete.
     */
    limit?: number
  }

  /**
   * subjects.classrooms
   */
  export type subjects$classroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    where?: classroomsWhereInput
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    cursor?: classroomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomsScalarFieldEnum | ClassroomsScalarFieldEnum[]
  }

  /**
   * subjects.hour_plan
   */
  export type subjects$hour_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hour_plan
     */
    select?: hour_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hour_plan
     */
    omit?: hour_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: hour_planInclude<ExtArgs> | null
    where?: hour_planWhereInput
  }

  /**
   * subjects.exam_plan
   */
  export type subjects$exam_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam_plan
     */
    select?: exam_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exam_plan
     */
    omit?: exam_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exam_planInclude<ExtArgs> | null
    where?: exam_planWhereInput
  }

  /**
   * subjects.degree_plan
   */
  export type subjects$degree_planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the degree_plan
     */
    select?: degree_planSelect<ExtArgs> | null
    /**
     * Omit specific fields from the degree_plan
     */
    omit?: degree_planOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: degree_planInclude<ExtArgs> | null
    where?: degree_planWhereInput
  }

  /**
   * subjects.program_requirements
   */
  export type subjects$program_requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program_requirements
     */
    select?: program_requirementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program_requirements
     */
    omit?: program_requirementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: program_requirementsInclude<ExtArgs> | null
    where?: program_requirementsWhereInput
  }

  /**
   * subjects without action
   */
  export type subjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subjects
     */
    select?: subjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subjects
     */
    omit?: subjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectsInclude<ExtArgs> | null
  }


  /**
   * Model teachers
   */

  export type AggregateTeachers = {
    _count: TeachersCountAggregateOutputType | null
    _avg: TeachersAvgAggregateOutputType | null
    _sum: TeachersSumAggregateOutputType | null
    _min: TeachersMinAggregateOutputType | null
    _max: TeachersMaxAggregateOutputType | null
  }

  export type TeachersAvgAggregateOutputType = {
    id: number | null
  }

  export type TeachersSumAggregateOutputType = {
    id: number | null
  }

  export type TeachersMinAggregateOutputType = {
    id: number | null
    name: string | null
    degree: $Enums.teachers_degree | null
  }

  export type TeachersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    degree: $Enums.teachers_degree | null
  }

  export type TeachersCountAggregateOutputType = {
    id: number
    name: number
    degree: number
    _all: number
  }


  export type TeachersAvgAggregateInputType = {
    id?: true
  }

  export type TeachersSumAggregateInputType = {
    id?: true
  }

  export type TeachersMinAggregateInputType = {
    id?: true
    name?: true
    degree?: true
  }

  export type TeachersMaxAggregateInputType = {
    id?: true
    name?: true
    degree?: true
  }

  export type TeachersCountAggregateInputType = {
    id?: true
    name?: true
    degree?: true
    _all?: true
  }

  export type TeachersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to aggregate.
     */
    where?: teachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teachersOrderByWithRelationInput | teachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teachers
    **/
    _count?: true | TeachersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeachersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeachersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachersMaxAggregateInputType
  }

  export type GetTeachersAggregateType<T extends TeachersAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachers[P]>
      : GetScalarType<T[P], AggregateTeachers[P]>
  }




  export type teachersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teachersWhereInput
    orderBy?: teachersOrderByWithAggregationInput | teachersOrderByWithAggregationInput[]
    by: TeachersScalarFieldEnum[] | TeachersScalarFieldEnum
    having?: teachersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachersCountAggregateInputType | true
    _avg?: TeachersAvgAggregateInputType
    _sum?: TeachersSumAggregateInputType
    _min?: TeachersMinAggregateInputType
    _max?: TeachersMaxAggregateInputType
  }

  export type TeachersGroupByOutputType = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    _count: TeachersCountAggregateOutputType | null
    _avg: TeachersAvgAggregateOutputType | null
    _sum: TeachersSumAggregateOutputType | null
    _min: TeachersMinAggregateOutputType | null
    _max: TeachersMaxAggregateOutputType | null
  }

  type GetTeachersGroupByPayload<T extends teachersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachersGroupByOutputType[P]>
            : GetScalarType<T[P], TeachersGroupByOutputType[P]>
        }
      >
    >


  export type teachersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    degree?: boolean
    classrooms?: boolean | teachers$classroomsArgs<ExtArgs>
    learning_programs_learning_programs_advisorToteachers?: boolean | teachers$learning_programs_learning_programs_advisorToteachersArgs<ExtArgs>
    learning_programs_learning_programs_advisor_assistantToteachers?: boolean | teachers$learning_programs_learning_programs_advisor_assistantToteachersArgs<ExtArgs>
    students?: boolean | teachers$studentsArgs<ExtArgs>
    teachers_jobs?: boolean | teachers$teachers_jobsArgs<ExtArgs>
    _count?: boolean | TeachersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachers"]>



  export type teachersSelectScalar = {
    id?: boolean
    name?: boolean
    degree?: boolean
  }

  export type teachersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "degree", ExtArgs["result"]["teachers"]>
  export type teachersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classrooms?: boolean | teachers$classroomsArgs<ExtArgs>
    learning_programs_learning_programs_advisorToteachers?: boolean | teachers$learning_programs_learning_programs_advisorToteachersArgs<ExtArgs>
    learning_programs_learning_programs_advisor_assistantToteachers?: boolean | teachers$learning_programs_learning_programs_advisor_assistantToteachersArgs<ExtArgs>
    students?: boolean | teachers$studentsArgs<ExtArgs>
    teachers_jobs?: boolean | teachers$teachers_jobsArgs<ExtArgs>
    _count?: boolean | TeachersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $teachersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teachers"
    objects: {
      classrooms: Prisma.$classroomsPayload<ExtArgs>[]
      learning_programs_learning_programs_advisorToteachers: Prisma.$learning_programsPayload<ExtArgs>[]
      learning_programs_learning_programs_advisor_assistantToteachers: Prisma.$learning_programsPayload<ExtArgs>[]
      students: Prisma.$studentsPayload<ExtArgs>[]
      teachers_jobs: Prisma.$teachers_jobsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      degree: $Enums.teachers_degree
    }, ExtArgs["result"]["teachers"]>
    composites: {}
  }

  type teachersGetPayload<S extends boolean | null | undefined | teachersDefaultArgs> = $Result.GetResult<Prisma.$teachersPayload, S>

  type teachersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teachersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachersCountAggregateInputType | true
    }

  export interface teachersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teachers'], meta: { name: 'teachers' } }
    /**
     * Find zero or one Teachers that matches the filter.
     * @param {teachersFindUniqueArgs} args - Arguments to find a Teachers
     * @example
     * // Get one Teachers
     * const teachers = await prisma.teachers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teachersFindUniqueArgs>(args: SelectSubset<T, teachersFindUniqueArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teachers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teachersFindUniqueOrThrowArgs} args - Arguments to find a Teachers
     * @example
     * // Get one Teachers
     * const teachers = await prisma.teachers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teachersFindUniqueOrThrowArgs>(args: SelectSubset<T, teachersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachersFindFirstArgs} args - Arguments to find a Teachers
     * @example
     * // Get one Teachers
     * const teachers = await prisma.teachers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teachersFindFirstArgs>(args?: SelectSubset<T, teachersFindFirstArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teachers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachersFindFirstOrThrowArgs} args - Arguments to find a Teachers
     * @example
     * // Get one Teachers
     * const teachers = await prisma.teachers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teachersFindFirstOrThrowArgs>(args?: SelectSubset<T, teachersFindFirstOrThrowArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teachers.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teachers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachersWithIdOnly = await prisma.teachers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teachersFindManyArgs>(args?: SelectSubset<T, teachersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teachers.
     * @param {teachersCreateArgs} args - Arguments to create a Teachers.
     * @example
     * // Create one Teachers
     * const Teachers = await prisma.teachers.create({
     *   data: {
     *     // ... data to create a Teachers
     *   }
     * })
     * 
     */
    create<T extends teachersCreateArgs>(args: SelectSubset<T, teachersCreateArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {teachersCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teachers = await prisma.teachers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teachersCreateManyArgs>(args?: SelectSubset<T, teachersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teachers.
     * @param {teachersDeleteArgs} args - Arguments to delete one Teachers.
     * @example
     * // Delete one Teachers
     * const Teachers = await prisma.teachers.delete({
     *   where: {
     *     // ... filter to delete one Teachers
     *   }
     * })
     * 
     */
    delete<T extends teachersDeleteArgs>(args: SelectSubset<T, teachersDeleteArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teachers.
     * @param {teachersUpdateArgs} args - Arguments to update one Teachers.
     * @example
     * // Update one Teachers
     * const teachers = await prisma.teachers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teachersUpdateArgs>(args: SelectSubset<T, teachersUpdateArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {teachersDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teachers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teachersDeleteManyArgs>(args?: SelectSubset<T, teachersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teachers = await prisma.teachers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teachersUpdateManyArgs>(args: SelectSubset<T, teachersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teachers.
     * @param {teachersUpsertArgs} args - Arguments to update or create a Teachers.
     * @example
     * // Update or create a Teachers
     * const teachers = await prisma.teachers.upsert({
     *   create: {
     *     // ... data to create a Teachers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teachers we want to update
     *   }
     * })
     */
    upsert<T extends teachersUpsertArgs>(args: SelectSubset<T, teachersUpsertArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachersCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teachers.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends teachersCountArgs>(
      args?: Subset<T, teachersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeachersAggregateArgs>(args: Subset<T, TeachersAggregateArgs>): Prisma.PrismaPromise<GetTeachersAggregateType<T>>

    /**
     * Group by Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teachersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teachersGroupByArgs['orderBy'] }
        : { orderBy?: teachersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teachersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teachers model
   */
  readonly fields: teachersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teachers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teachersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classrooms<T extends teachers$classroomsArgs<ExtArgs> = {}>(args?: Subset<T, teachers$classroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classroomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learning_programs_learning_programs_advisorToteachers<T extends teachers$learning_programs_learning_programs_advisorToteachersArgs<ExtArgs> = {}>(args?: Subset<T, teachers$learning_programs_learning_programs_advisorToteachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learning_programs_learning_programs_advisor_assistantToteachers<T extends teachers$learning_programs_learning_programs_advisor_assistantToteachersArgs<ExtArgs> = {}>(args?: Subset<T, teachers$learning_programs_learning_programs_advisor_assistantToteachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$learning_programsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends teachers$studentsArgs<ExtArgs> = {}>(args?: Subset<T, teachers$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers_jobs<T extends teachers$teachers_jobsArgs<ExtArgs> = {}>(args?: Subset<T, teachers$teachers_jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teachers model
   */
  interface teachersFieldRefs {
    readonly id: FieldRef<"teachers", 'Int'>
    readonly name: FieldRef<"teachers", 'String'>
    readonly degree: FieldRef<"teachers", 'teachers_degree'>
  }
    

  // Custom InputTypes
  /**
   * teachers findUnique
   */
  export type teachersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    /**
     * Filter, which teachers to fetch.
     */
    where: teachersWhereUniqueInput
  }

  /**
   * teachers findUniqueOrThrow
   */
  export type teachersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    /**
     * Filter, which teachers to fetch.
     */
    where: teachersWhereUniqueInput
  }

  /**
   * teachers findFirst
   */
  export type teachersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    /**
     * Filter, which teachers to fetch.
     */
    where?: teachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teachersOrderByWithRelationInput | teachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeachersScalarFieldEnum | TeachersScalarFieldEnum[]
  }

  /**
   * teachers findFirstOrThrow
   */
  export type teachersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    /**
     * Filter, which teachers to fetch.
     */
    where?: teachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teachersOrderByWithRelationInput | teachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeachersScalarFieldEnum | TeachersScalarFieldEnum[]
  }

  /**
   * teachers findMany
   */
  export type teachersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    /**
     * Filter, which teachers to fetch.
     */
    where?: teachersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teachersOrderByWithRelationInput | teachersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teachers.
     */
    cursor?: teachersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    distinct?: TeachersScalarFieldEnum | TeachersScalarFieldEnum[]
  }

  /**
   * teachers create
   */
  export type teachersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    /**
     * The data needed to create a teachers.
     */
    data: XOR<teachersCreateInput, teachersUncheckedCreateInput>
  }

  /**
   * teachers createMany
   */
  export type teachersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers.
     */
    data: teachersCreateManyInput | teachersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teachers update
   */
  export type teachersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    /**
     * The data needed to update a teachers.
     */
    data: XOR<teachersUpdateInput, teachersUncheckedUpdateInput>
    /**
     * Choose, which teachers to update.
     */
    where: teachersWhereUniqueInput
  }

  /**
   * teachers updateMany
   */
  export type teachersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers.
     */
    data: XOR<teachersUpdateManyMutationInput, teachersUncheckedUpdateManyInput>
    /**
     * Filter which teachers to update
     */
    where?: teachersWhereInput
    /**
     * Limit how many teachers to update.
     */
    limit?: number
  }

  /**
   * teachers upsert
   */
  export type teachersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    /**
     * The filter to search for the teachers to update in case it exists.
     */
    where: teachersWhereUniqueInput
    /**
     * In case the teachers found by the `where` argument doesn't exist, create a new teachers with this data.
     */
    create: XOR<teachersCreateInput, teachersUncheckedCreateInput>
    /**
     * In case the teachers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teachersUpdateInput, teachersUncheckedUpdateInput>
  }

  /**
   * teachers delete
   */
  export type teachersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
    /**
     * Filter which teachers to delete.
     */
    where: teachersWhereUniqueInput
  }

  /**
   * teachers deleteMany
   */
  export type teachersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to delete
     */
    where?: teachersWhereInput
    /**
     * Limit how many teachers to delete.
     */
    limit?: number
  }

  /**
   * teachers.classrooms
   */
  export type teachers$classroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classrooms
     */
    select?: classroomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classrooms
     */
    omit?: classroomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: classroomsInclude<ExtArgs> | null
    where?: classroomsWhereInput
    orderBy?: classroomsOrderByWithRelationInput | classroomsOrderByWithRelationInput[]
    cursor?: classroomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassroomsScalarFieldEnum | ClassroomsScalarFieldEnum[]
  }

  /**
   * teachers.learning_programs_learning_programs_advisorToteachers
   */
  export type teachers$learning_programs_learning_programs_advisorToteachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    where?: learning_programsWhereInput
    orderBy?: learning_programsOrderByWithRelationInput | learning_programsOrderByWithRelationInput[]
    cursor?: learning_programsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Learning_programsScalarFieldEnum | Learning_programsScalarFieldEnum[]
  }

  /**
   * teachers.learning_programs_learning_programs_advisor_assistantToteachers
   */
  export type teachers$learning_programs_learning_programs_advisor_assistantToteachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learning_programs
     */
    select?: learning_programsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the learning_programs
     */
    omit?: learning_programsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: learning_programsInclude<ExtArgs> | null
    where?: learning_programsWhereInput
    orderBy?: learning_programsOrderByWithRelationInput | learning_programsOrderByWithRelationInput[]
    cursor?: learning_programsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Learning_programsScalarFieldEnum | Learning_programsScalarFieldEnum[]
  }

  /**
   * teachers.students
   */
  export type teachers$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentsInclude<ExtArgs> | null
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    cursor?: studentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * teachers.teachers_jobs
   */
  export type teachers$teachers_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    where?: teachers_jobsWhereInput
    orderBy?: teachers_jobsOrderByWithRelationInput | teachers_jobsOrderByWithRelationInput[]
    cursor?: teachers_jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Teachers_jobsScalarFieldEnum | Teachers_jobsScalarFieldEnum[]
  }

  /**
   * teachers without action
   */
  export type teachersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers
     */
    select?: teachersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers
     */
    omit?: teachersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachersInclude<ExtArgs> | null
  }


  /**
   * Model teachers_jobs
   */

  export type AggregateTeachers_jobs = {
    _count: Teachers_jobsCountAggregateOutputType | null
    _avg: Teachers_jobsAvgAggregateOutputType | null
    _sum: Teachers_jobsSumAggregateOutputType | null
    _min: Teachers_jobsMinAggregateOutputType | null
    _max: Teachers_jobsMaxAggregateOutputType | null
  }

  export type Teachers_jobsAvgAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    depart_id: number | null
  }

  export type Teachers_jobsSumAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    depart_id: number | null
  }

  export type Teachers_jobsMinAggregateOutputType = {
    id: number | null
    jobs: string | null
    teacher_id: number | null
    depart_id: number | null
  }

  export type Teachers_jobsMaxAggregateOutputType = {
    id: number | null
    jobs: string | null
    teacher_id: number | null
    depart_id: number | null
  }

  export type Teachers_jobsCountAggregateOutputType = {
    id: number
    jobs: number
    teacher_id: number
    depart_id: number
    _all: number
  }


  export type Teachers_jobsAvgAggregateInputType = {
    id?: true
    teacher_id?: true
    depart_id?: true
  }

  export type Teachers_jobsSumAggregateInputType = {
    id?: true
    teacher_id?: true
    depart_id?: true
  }

  export type Teachers_jobsMinAggregateInputType = {
    id?: true
    jobs?: true
    teacher_id?: true
    depart_id?: true
  }

  export type Teachers_jobsMaxAggregateInputType = {
    id?: true
    jobs?: true
    teacher_id?: true
    depart_id?: true
  }

  export type Teachers_jobsCountAggregateInputType = {
    id?: true
    jobs?: true
    teacher_id?: true
    depart_id?: true
    _all?: true
  }

  export type Teachers_jobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers_jobs to aggregate.
     */
    where?: teachers_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers_jobs to fetch.
     */
    orderBy?: teachers_jobsOrderByWithRelationInput | teachers_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teachers_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teachers_jobs
    **/
    _count?: true | Teachers_jobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Teachers_jobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Teachers_jobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Teachers_jobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Teachers_jobsMaxAggregateInputType
  }

  export type GetTeachers_jobsAggregateType<T extends Teachers_jobsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachers_jobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachers_jobs[P]>
      : GetScalarType<T[P], AggregateTeachers_jobs[P]>
  }




  export type teachers_jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teachers_jobsWhereInput
    orderBy?: teachers_jobsOrderByWithAggregationInput | teachers_jobsOrderByWithAggregationInput[]
    by: Teachers_jobsScalarFieldEnum[] | Teachers_jobsScalarFieldEnum
    having?: teachers_jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Teachers_jobsCountAggregateInputType | true
    _avg?: Teachers_jobsAvgAggregateInputType
    _sum?: Teachers_jobsSumAggregateInputType
    _min?: Teachers_jobsMinAggregateInputType
    _max?: Teachers_jobsMaxAggregateInputType
  }

  export type Teachers_jobsGroupByOutputType = {
    id: number
    jobs: string
    teacher_id: number
    depart_id: number
    _count: Teachers_jobsCountAggregateOutputType | null
    _avg: Teachers_jobsAvgAggregateOutputType | null
    _sum: Teachers_jobsSumAggregateOutputType | null
    _min: Teachers_jobsMinAggregateOutputType | null
    _max: Teachers_jobsMaxAggregateOutputType | null
  }

  type GetTeachers_jobsGroupByPayload<T extends teachers_jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Teachers_jobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Teachers_jobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Teachers_jobsGroupByOutputType[P]>
            : GetScalarType<T[P], Teachers_jobsGroupByOutputType[P]>
        }
      >
    >


  export type teachers_jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobs?: boolean
    teacher_id?: boolean
    depart_id?: boolean
    teachers?: boolean | teachersDefaultArgs<ExtArgs>
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachers_jobs"]>



  export type teachers_jobsSelectScalar = {
    id?: boolean
    jobs?: boolean
    teacher_id?: boolean
    depart_id?: boolean
  }

  export type teachers_jobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobs" | "teacher_id" | "depart_id", ExtArgs["result"]["teachers_jobs"]>
  export type teachers_jobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | teachersDefaultArgs<ExtArgs>
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }

  export type $teachers_jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teachers_jobs"
    objects: {
      teachers: Prisma.$teachersPayload<ExtArgs>
      department: Prisma.$departmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobs: string
      teacher_id: number
      depart_id: number
    }, ExtArgs["result"]["teachers_jobs"]>
    composites: {}
  }

  type teachers_jobsGetPayload<S extends boolean | null | undefined | teachers_jobsDefaultArgs> = $Result.GetResult<Prisma.$teachers_jobsPayload, S>

  type teachers_jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teachers_jobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Teachers_jobsCountAggregateInputType | true
    }

  export interface teachers_jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teachers_jobs'], meta: { name: 'teachers_jobs' } }
    /**
     * Find zero or one Teachers_jobs that matches the filter.
     * @param {teachers_jobsFindUniqueArgs} args - Arguments to find a Teachers_jobs
     * @example
     * // Get one Teachers_jobs
     * const teachers_jobs = await prisma.teachers_jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teachers_jobsFindUniqueArgs>(args: SelectSubset<T, teachers_jobsFindUniqueArgs<ExtArgs>>): Prisma__teachers_jobsClient<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teachers_jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teachers_jobsFindUniqueOrThrowArgs} args - Arguments to find a Teachers_jobs
     * @example
     * // Get one Teachers_jobs
     * const teachers_jobs = await prisma.teachers_jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teachers_jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, teachers_jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teachers_jobsClient<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teachers_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachers_jobsFindFirstArgs} args - Arguments to find a Teachers_jobs
     * @example
     * // Get one Teachers_jobs
     * const teachers_jobs = await prisma.teachers_jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teachers_jobsFindFirstArgs>(args?: SelectSubset<T, teachers_jobsFindFirstArgs<ExtArgs>>): Prisma__teachers_jobsClient<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teachers_jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachers_jobsFindFirstOrThrowArgs} args - Arguments to find a Teachers_jobs
     * @example
     * // Get one Teachers_jobs
     * const teachers_jobs = await prisma.teachers_jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teachers_jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, teachers_jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__teachers_jobsClient<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachers_jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers_jobs
     * const teachers_jobs = await prisma.teachers_jobs.findMany()
     * 
     * // Get first 10 Teachers_jobs
     * const teachers_jobs = await prisma.teachers_jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachers_jobsWithIdOnly = await prisma.teachers_jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teachers_jobsFindManyArgs>(args?: SelectSubset<T, teachers_jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teachers_jobs.
     * @param {teachers_jobsCreateArgs} args - Arguments to create a Teachers_jobs.
     * @example
     * // Create one Teachers_jobs
     * const Teachers_jobs = await prisma.teachers_jobs.create({
     *   data: {
     *     // ... data to create a Teachers_jobs
     *   }
     * })
     * 
     */
    create<T extends teachers_jobsCreateArgs>(args: SelectSubset<T, teachers_jobsCreateArgs<ExtArgs>>): Prisma__teachers_jobsClient<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers_jobs.
     * @param {teachers_jobsCreateManyArgs} args - Arguments to create many Teachers_jobs.
     * @example
     * // Create many Teachers_jobs
     * const teachers_jobs = await prisma.teachers_jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teachers_jobsCreateManyArgs>(args?: SelectSubset<T, teachers_jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teachers_jobs.
     * @param {teachers_jobsDeleteArgs} args - Arguments to delete one Teachers_jobs.
     * @example
     * // Delete one Teachers_jobs
     * const Teachers_jobs = await prisma.teachers_jobs.delete({
     *   where: {
     *     // ... filter to delete one Teachers_jobs
     *   }
     * })
     * 
     */
    delete<T extends teachers_jobsDeleteArgs>(args: SelectSubset<T, teachers_jobsDeleteArgs<ExtArgs>>): Prisma__teachers_jobsClient<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teachers_jobs.
     * @param {teachers_jobsUpdateArgs} args - Arguments to update one Teachers_jobs.
     * @example
     * // Update one Teachers_jobs
     * const teachers_jobs = await prisma.teachers_jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teachers_jobsUpdateArgs>(args: SelectSubset<T, teachers_jobsUpdateArgs<ExtArgs>>): Prisma__teachers_jobsClient<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers_jobs.
     * @param {teachers_jobsDeleteManyArgs} args - Arguments to filter Teachers_jobs to delete.
     * @example
     * // Delete a few Teachers_jobs
     * const { count } = await prisma.teachers_jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teachers_jobsDeleteManyArgs>(args?: SelectSubset<T, teachers_jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachers_jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers_jobs
     * const teachers_jobs = await prisma.teachers_jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teachers_jobsUpdateManyArgs>(args: SelectSubset<T, teachers_jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teachers_jobs.
     * @param {teachers_jobsUpsertArgs} args - Arguments to update or create a Teachers_jobs.
     * @example
     * // Update or create a Teachers_jobs
     * const teachers_jobs = await prisma.teachers_jobs.upsert({
     *   create: {
     *     // ... data to create a Teachers_jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teachers_jobs we want to update
     *   }
     * })
     */
    upsert<T extends teachers_jobsUpsertArgs>(args: SelectSubset<T, teachers_jobsUpsertArgs<ExtArgs>>): Prisma__teachers_jobsClient<$Result.GetResult<Prisma.$teachers_jobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachers_jobsCountArgs} args - Arguments to filter Teachers_jobs to count.
     * @example
     * // Count the number of Teachers_jobs
     * const count = await prisma.teachers_jobs.count({
     *   where: {
     *     // ... the filter for the Teachers_jobs we want to count
     *   }
     * })
    **/
    count<T extends teachers_jobsCountArgs>(
      args?: Subset<T, teachers_jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Teachers_jobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teachers_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teachers_jobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Teachers_jobsAggregateArgs>(args: Subset<T, Teachers_jobsAggregateArgs>): Prisma.PrismaPromise<GetTeachers_jobsAggregateType<T>>

    /**
     * Group by Teachers_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teachers_jobsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teachers_jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teachers_jobsGroupByArgs['orderBy'] }
        : { orderBy?: teachers_jobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teachers_jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachers_jobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teachers_jobs model
   */
  readonly fields: teachers_jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teachers_jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teachers_jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teachers<T extends teachersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teachersDefaultArgs<ExtArgs>>): Prisma__teachersClient<$Result.GetResult<Prisma.$teachersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends departmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, departmentDefaultArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teachers_jobs model
   */
  interface teachers_jobsFieldRefs {
    readonly id: FieldRef<"teachers_jobs", 'Int'>
    readonly jobs: FieldRef<"teachers_jobs", 'String'>
    readonly teacher_id: FieldRef<"teachers_jobs", 'Int'>
    readonly depart_id: FieldRef<"teachers_jobs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * teachers_jobs findUnique
   */
  export type teachers_jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    /**
     * Filter, which teachers_jobs to fetch.
     */
    where: teachers_jobsWhereUniqueInput
  }

  /**
   * teachers_jobs findUniqueOrThrow
   */
  export type teachers_jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    /**
     * Filter, which teachers_jobs to fetch.
     */
    where: teachers_jobsWhereUniqueInput
  }

  /**
   * teachers_jobs findFirst
   */
  export type teachers_jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    /**
     * Filter, which teachers_jobs to fetch.
     */
    where?: teachers_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers_jobs to fetch.
     */
    orderBy?: teachers_jobsOrderByWithRelationInput | teachers_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers_jobs.
     */
    cursor?: teachers_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers_jobs.
     */
    distinct?: Teachers_jobsScalarFieldEnum | Teachers_jobsScalarFieldEnum[]
  }

  /**
   * teachers_jobs findFirstOrThrow
   */
  export type teachers_jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    /**
     * Filter, which teachers_jobs to fetch.
     */
    where?: teachers_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers_jobs to fetch.
     */
    orderBy?: teachers_jobsOrderByWithRelationInput | teachers_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers_jobs.
     */
    cursor?: teachers_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers_jobs.
     */
    distinct?: Teachers_jobsScalarFieldEnum | Teachers_jobsScalarFieldEnum[]
  }

  /**
   * teachers_jobs findMany
   */
  export type teachers_jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    /**
     * Filter, which teachers_jobs to fetch.
     */
    where?: teachers_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers_jobs to fetch.
     */
    orderBy?: teachers_jobsOrderByWithRelationInput | teachers_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teachers_jobs.
     */
    cursor?: teachers_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers_jobs.
     */
    skip?: number
    distinct?: Teachers_jobsScalarFieldEnum | Teachers_jobsScalarFieldEnum[]
  }

  /**
   * teachers_jobs create
   */
  export type teachers_jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    /**
     * The data needed to create a teachers_jobs.
     */
    data: XOR<teachers_jobsCreateInput, teachers_jobsUncheckedCreateInput>
  }

  /**
   * teachers_jobs createMany
   */
  export type teachers_jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers_jobs.
     */
    data: teachers_jobsCreateManyInput | teachers_jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teachers_jobs update
   */
  export type teachers_jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    /**
     * The data needed to update a teachers_jobs.
     */
    data: XOR<teachers_jobsUpdateInput, teachers_jobsUncheckedUpdateInput>
    /**
     * Choose, which teachers_jobs to update.
     */
    where: teachers_jobsWhereUniqueInput
  }

  /**
   * teachers_jobs updateMany
   */
  export type teachers_jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers_jobs.
     */
    data: XOR<teachers_jobsUpdateManyMutationInput, teachers_jobsUncheckedUpdateManyInput>
    /**
     * Filter which teachers_jobs to update
     */
    where?: teachers_jobsWhereInput
    /**
     * Limit how many teachers_jobs to update.
     */
    limit?: number
  }

  /**
   * teachers_jobs upsert
   */
  export type teachers_jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    /**
     * The filter to search for the teachers_jobs to update in case it exists.
     */
    where: teachers_jobsWhereUniqueInput
    /**
     * In case the teachers_jobs found by the `where` argument doesn't exist, create a new teachers_jobs with this data.
     */
    create: XOR<teachers_jobsCreateInput, teachers_jobsUncheckedCreateInput>
    /**
     * In case the teachers_jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teachers_jobsUpdateInput, teachers_jobsUncheckedUpdateInput>
  }

  /**
   * teachers_jobs delete
   */
  export type teachers_jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
    /**
     * Filter which teachers_jobs to delete.
     */
    where: teachers_jobsWhereUniqueInput
  }

  /**
   * teachers_jobs deleteMany
   */
  export type teachers_jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers_jobs to delete
     */
    where?: teachers_jobsWhereInput
    /**
     * Limit how many teachers_jobs to delete.
     */
    limit?: number
  }

  /**
   * teachers_jobs without action
   */
  export type teachers_jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teachers_jobs
     */
    select?: teachers_jobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teachers_jobs
     */
    omit?: teachers_jobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teachers_jobsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClassroomsScalarFieldEnum: {
    id: 'id',
    duration_plans: 'duration_plans',
    subject_id: 'subject_id',
    teacher_id: 'teacher_id'
  };

  export type ClassroomsScalarFieldEnum = (typeof ClassroomsScalarFieldEnum)[keyof typeof ClassroomsScalarFieldEnum]


  export const Degree_planScalarFieldEnum: {
    id: 'id',
    theoretical: 'theoretical',
    practical: 'practical',
    activity: 'activity'
  };

  export type Degree_planScalarFieldEnum = (typeof Degree_planScalarFieldEnum)[keyof typeof Degree_planScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    depart_code: 'depart_code'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const Duration_plansScalarFieldEnum: {
    id: 'id',
    edu_year: 'edu_year',
    term: 'term',
    semester: 'semester'
  };

  export type Duration_plansScalarFieldEnum = (typeof Duration_plansScalarFieldEnum)[keyof typeof Duration_plansScalarFieldEnum]


  export const Exam_planScalarFieldEnum: {
    id: 'id',
    theoretical: 'theoretical',
    practical: 'practical'
  };

  export type Exam_planScalarFieldEnum = (typeof Exam_planScalarFieldEnum)[keyof typeof Exam_planScalarFieldEnum]


  export const Hour_planScalarFieldEnum: {
    id: 'id',
    theoretical: 'theoretical',
    practical: 'practical',
    credit: 'credit'
  };

  export type Hour_planScalarFieldEnum = (typeof Hour_planScalarFieldEnum)[keyof typeof Hour_planScalarFieldEnum]


  export const Learning_programsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject_hours: 'subject_hours',
    paper_hours: 'paper_hours',
    program_code: 'program_code',
    depart_id: 'depart_id',
    advisor: 'advisor',
    advisor_assistant: 'advisor_assistant'
  };

  export type Learning_programsScalarFieldEnum = (typeof Learning_programsScalarFieldEnum)[keyof typeof Learning_programsScalarFieldEnum]


  export const Program_requirementsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    credit_hour: 'credit_hour',
    type: 'type',
    require_code: 'require_code',
    program_id: 'program_id'
  };

  export type Program_requirementsScalarFieldEnum = (typeof Program_requirementsScalarFieldEnum)[keyof typeof Program_requirementsScalarFieldEnum]


  export const ResultsScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    classroom_id: 'classroom_id',
    st_status: 'st_status'
  };

  export type ResultsScalarFieldEnum = (typeof ResultsScalarFieldEnum)[keyof typeof ResultsScalarFieldEnum]


  export const SpecializationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    depart_id: 'depart_id'
  };

  export type SpecializationScalarFieldEnum = (typeof SpecializationScalarFieldEnum)[keyof typeof SpecializationScalarFieldEnum]


  export const StudentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    registered_at: 'registered_at',
    student_code: 'student_code',
    national_n: 'national_n',
    phone: 'phone',
    nation_phone: 'nation_phone',
    advisor: 'advisor',
    specialization_id: 'specialization_id'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const SubjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject_code: 'subject_code',
    hours_id: 'hours_id',
    exams_id: 'exams_id',
    degrees_id: 'degrees_id',
    require_id: 'require_id'
  };

  export type SubjectsScalarFieldEnum = (typeof SubjectsScalarFieldEnum)[keyof typeof SubjectsScalarFieldEnum]


  export const TeachersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    degree: 'degree'
  };

  export type TeachersScalarFieldEnum = (typeof TeachersScalarFieldEnum)[keyof typeof TeachersScalarFieldEnum]


  export const Teachers_jobsScalarFieldEnum: {
    id: 'id',
    jobs: 'jobs',
    teacher_id: 'teacher_id',
    depart_id: 'depart_id'
  };

  export type Teachers_jobsScalarFieldEnum = (typeof Teachers_jobsScalarFieldEnum)[keyof typeof Teachers_jobsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const departmentOrderByRelevanceFieldEnum: {
    name: 'name',
    depart_code: 'depart_code'
  };

  export type departmentOrderByRelevanceFieldEnum = (typeof departmentOrderByRelevanceFieldEnum)[keyof typeof departmentOrderByRelevanceFieldEnum]


  export const learning_programsOrderByRelevanceFieldEnum: {
    name: 'name',
    program_code: 'program_code'
  };

  export type learning_programsOrderByRelevanceFieldEnum = (typeof learning_programsOrderByRelevanceFieldEnum)[keyof typeof learning_programsOrderByRelevanceFieldEnum]


  export const program_requirementsOrderByRelevanceFieldEnum: {
    name: 'name',
    require_code: 'require_code'
  };

  export type program_requirementsOrderByRelevanceFieldEnum = (typeof program_requirementsOrderByRelevanceFieldEnum)[keyof typeof program_requirementsOrderByRelevanceFieldEnum]


  export const specializationOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type specializationOrderByRelevanceFieldEnum = (typeof specializationOrderByRelevanceFieldEnum)[keyof typeof specializationOrderByRelevanceFieldEnum]


  export const studentsOrderByRelevanceFieldEnum: {
    name: 'name',
    student_code: 'student_code',
    national_n: 'national_n',
    phone: 'phone',
    nation_phone: 'nation_phone'
  };

  export type studentsOrderByRelevanceFieldEnum = (typeof studentsOrderByRelevanceFieldEnum)[keyof typeof studentsOrderByRelevanceFieldEnum]


  export const subjectsOrderByRelevanceFieldEnum: {
    name: 'name',
    subject_code: 'subject_code'
  };

  export type subjectsOrderByRelevanceFieldEnum = (typeof subjectsOrderByRelevanceFieldEnum)[keyof typeof subjectsOrderByRelevanceFieldEnum]


  export const teachersOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type teachersOrderByRelevanceFieldEnum = (typeof teachersOrderByRelevanceFieldEnum)[keyof typeof teachersOrderByRelevanceFieldEnum]


  export const teachers_jobsOrderByRelevanceFieldEnum: {
    jobs: 'jobs'
  };

  export type teachers_jobsOrderByRelevanceFieldEnum = (typeof teachers_jobsOrderByRelevanceFieldEnum)[keyof typeof teachers_jobsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'duration_plans_term'
   */
  export type Enumduration_plans_termFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'duration_plans_term'>
    


  /**
   * Reference to a field of type 'program_requirements_type'
   */
  export type Enumprogram_requirements_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'program_requirements_type'>
    


  /**
   * Reference to a field of type 'results_st_status'
   */
  export type Enumresults_st_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'results_st_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'teachers_degree'
   */
  export type Enumteachers_degreeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'teachers_degree'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type classroomsWhereInput = {
    AND?: classroomsWhereInput | classroomsWhereInput[]
    OR?: classroomsWhereInput[]
    NOT?: classroomsWhereInput | classroomsWhereInput[]
    id?: IntFilter<"classrooms"> | number
    duration_plans?: IntFilter<"classrooms"> | number
    subject_id?: IntFilter<"classrooms"> | number
    teacher_id?: IntNullableFilter<"classrooms"> | number | null
    duration_plans_classrooms_duration_plansToduration_plans?: XOR<Duration_plansScalarRelationFilter, duration_plansWhereInput>
    subjects?: XOR<SubjectsScalarRelationFilter, subjectsWhereInput>
    teachers?: XOR<TeachersNullableScalarRelationFilter, teachersWhereInput> | null
    results?: ResultsListRelationFilter
  }

  export type classroomsOrderByWithRelationInput = {
    id?: SortOrder
    duration_plans?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrderInput | SortOrder
    duration_plans_classrooms_duration_plansToduration_plans?: duration_plansOrderByWithRelationInput
    subjects?: subjectsOrderByWithRelationInput
    teachers?: teachersOrderByWithRelationInput
    results?: resultsOrderByRelationAggregateInput
  }

  export type classroomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: classroomsWhereInput | classroomsWhereInput[]
    OR?: classroomsWhereInput[]
    NOT?: classroomsWhereInput | classroomsWhereInput[]
    duration_plans?: IntFilter<"classrooms"> | number
    subject_id?: IntFilter<"classrooms"> | number
    teacher_id?: IntNullableFilter<"classrooms"> | number | null
    duration_plans_classrooms_duration_plansToduration_plans?: XOR<Duration_plansScalarRelationFilter, duration_plansWhereInput>
    subjects?: XOR<SubjectsScalarRelationFilter, subjectsWhereInput>
    teachers?: XOR<TeachersNullableScalarRelationFilter, teachersWhereInput> | null
    results?: ResultsListRelationFilter
  }, "id">

  export type classroomsOrderByWithAggregationInput = {
    id?: SortOrder
    duration_plans?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrderInput | SortOrder
    _count?: classroomsCountOrderByAggregateInput
    _avg?: classroomsAvgOrderByAggregateInput
    _max?: classroomsMaxOrderByAggregateInput
    _min?: classroomsMinOrderByAggregateInput
    _sum?: classroomsSumOrderByAggregateInput
  }

  export type classroomsScalarWhereWithAggregatesInput = {
    AND?: classroomsScalarWhereWithAggregatesInput | classroomsScalarWhereWithAggregatesInput[]
    OR?: classroomsScalarWhereWithAggregatesInput[]
    NOT?: classroomsScalarWhereWithAggregatesInput | classroomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"classrooms"> | number
    duration_plans?: IntWithAggregatesFilter<"classrooms"> | number
    subject_id?: IntWithAggregatesFilter<"classrooms"> | number
    teacher_id?: IntNullableWithAggregatesFilter<"classrooms"> | number | null
  }

  export type degree_planWhereInput = {
    AND?: degree_planWhereInput | degree_planWhereInput[]
    OR?: degree_planWhereInput[]
    NOT?: degree_planWhereInput | degree_planWhereInput[]
    id?: IntFilter<"degree_plan"> | number
    theoretical?: IntFilter<"degree_plan"> | number
    practical?: IntFilter<"degree_plan"> | number
    activity?: IntFilter<"degree_plan"> | number
    subjects?: SubjectsListRelationFilter
  }

  export type degree_planOrderByWithRelationInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    activity?: SortOrder
    subjects?: subjectsOrderByRelationAggregateInput
  }

  export type degree_planWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: degree_planWhereInput | degree_planWhereInput[]
    OR?: degree_planWhereInput[]
    NOT?: degree_planWhereInput | degree_planWhereInput[]
    theoretical?: IntFilter<"degree_plan"> | number
    practical?: IntFilter<"degree_plan"> | number
    activity?: IntFilter<"degree_plan"> | number
    subjects?: SubjectsListRelationFilter
  }, "id">

  export type degree_planOrderByWithAggregationInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    activity?: SortOrder
    _count?: degree_planCountOrderByAggregateInput
    _avg?: degree_planAvgOrderByAggregateInput
    _max?: degree_planMaxOrderByAggregateInput
    _min?: degree_planMinOrderByAggregateInput
    _sum?: degree_planSumOrderByAggregateInput
  }

  export type degree_planScalarWhereWithAggregatesInput = {
    AND?: degree_planScalarWhereWithAggregatesInput | degree_planScalarWhereWithAggregatesInput[]
    OR?: degree_planScalarWhereWithAggregatesInput[]
    NOT?: degree_planScalarWhereWithAggregatesInput | degree_planScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"degree_plan"> | number
    theoretical?: IntWithAggregatesFilter<"degree_plan"> | number
    practical?: IntWithAggregatesFilter<"degree_plan"> | number
    activity?: IntWithAggregatesFilter<"degree_plan"> | number
  }

  export type departmentWhereInput = {
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    id?: IntFilter<"department"> | number
    name?: StringFilter<"department"> | string
    depart_code?: StringFilter<"department"> | string
    learning_programs?: Learning_programsListRelationFilter
    specialization?: SpecializationListRelationFilter
    teachers_jobs?: Teachers_jobsListRelationFilter
  }

  export type departmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    depart_code?: SortOrder
    learning_programs?: learning_programsOrderByRelationAggregateInput
    specialization?: specializationOrderByRelationAggregateInput
    teachers_jobs?: teachers_jobsOrderByRelationAggregateInput
    _relevance?: departmentOrderByRelevanceInput
  }

  export type departmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    name?: StringFilter<"department"> | string
    depart_code?: StringFilter<"department"> | string
    learning_programs?: Learning_programsListRelationFilter
    specialization?: SpecializationListRelationFilter
    teachers_jobs?: Teachers_jobsListRelationFilter
  }, "id">

  export type departmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    depart_code?: SortOrder
    _count?: departmentCountOrderByAggregateInput
    _avg?: departmentAvgOrderByAggregateInput
    _max?: departmentMaxOrderByAggregateInput
    _min?: departmentMinOrderByAggregateInput
    _sum?: departmentSumOrderByAggregateInput
  }

  export type departmentScalarWhereWithAggregatesInput = {
    AND?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    OR?: departmentScalarWhereWithAggregatesInput[]
    NOT?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"department"> | number
    name?: StringWithAggregatesFilter<"department"> | string
    depart_code?: StringWithAggregatesFilter<"department"> | string
  }

  export type duration_plansWhereInput = {
    AND?: duration_plansWhereInput | duration_plansWhereInput[]
    OR?: duration_plansWhereInput[]
    NOT?: duration_plansWhereInput | duration_plansWhereInput[]
    id?: IntFilter<"duration_plans"> | number
    edu_year?: IntFilter<"duration_plans"> | number
    term?: Enumduration_plans_termFilter<"duration_plans"> | $Enums.duration_plans_term
    semester?: IntFilter<"duration_plans"> | number
    classrooms_classrooms_duration_plansToduration_plans?: ClassroomsListRelationFilter
  }

  export type duration_plansOrderByWithRelationInput = {
    id?: SortOrder
    edu_year?: SortOrder
    term?: SortOrder
    semester?: SortOrder
    classrooms_classrooms_duration_plansToduration_plans?: classroomsOrderByRelationAggregateInput
  }

  export type duration_plansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: duration_plansWhereInput | duration_plansWhereInput[]
    OR?: duration_plansWhereInput[]
    NOT?: duration_plansWhereInput | duration_plansWhereInput[]
    edu_year?: IntFilter<"duration_plans"> | number
    term?: Enumduration_plans_termFilter<"duration_plans"> | $Enums.duration_plans_term
    semester?: IntFilter<"duration_plans"> | number
    classrooms_classrooms_duration_plansToduration_plans?: ClassroomsListRelationFilter
  }, "id">

  export type duration_plansOrderByWithAggregationInput = {
    id?: SortOrder
    edu_year?: SortOrder
    term?: SortOrder
    semester?: SortOrder
    _count?: duration_plansCountOrderByAggregateInput
    _avg?: duration_plansAvgOrderByAggregateInput
    _max?: duration_plansMaxOrderByAggregateInput
    _min?: duration_plansMinOrderByAggregateInput
    _sum?: duration_plansSumOrderByAggregateInput
  }

  export type duration_plansScalarWhereWithAggregatesInput = {
    AND?: duration_plansScalarWhereWithAggregatesInput | duration_plansScalarWhereWithAggregatesInput[]
    OR?: duration_plansScalarWhereWithAggregatesInput[]
    NOT?: duration_plansScalarWhereWithAggregatesInput | duration_plansScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"duration_plans"> | number
    edu_year?: IntWithAggregatesFilter<"duration_plans"> | number
    term?: Enumduration_plans_termWithAggregatesFilter<"duration_plans"> | $Enums.duration_plans_term
    semester?: IntWithAggregatesFilter<"duration_plans"> | number
  }

  export type exam_planWhereInput = {
    AND?: exam_planWhereInput | exam_planWhereInput[]
    OR?: exam_planWhereInput[]
    NOT?: exam_planWhereInput | exam_planWhereInput[]
    id?: IntFilter<"exam_plan"> | number
    theoretical?: IntFilter<"exam_plan"> | number
    practical?: IntFilter<"exam_plan"> | number
    subjects?: SubjectsListRelationFilter
  }

  export type exam_planOrderByWithRelationInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    subjects?: subjectsOrderByRelationAggregateInput
  }

  export type exam_planWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: exam_planWhereInput | exam_planWhereInput[]
    OR?: exam_planWhereInput[]
    NOT?: exam_planWhereInput | exam_planWhereInput[]
    theoretical?: IntFilter<"exam_plan"> | number
    practical?: IntFilter<"exam_plan"> | number
    subjects?: SubjectsListRelationFilter
  }, "id">

  export type exam_planOrderByWithAggregationInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    _count?: exam_planCountOrderByAggregateInput
    _avg?: exam_planAvgOrderByAggregateInput
    _max?: exam_planMaxOrderByAggregateInput
    _min?: exam_planMinOrderByAggregateInput
    _sum?: exam_planSumOrderByAggregateInput
  }

  export type exam_planScalarWhereWithAggregatesInput = {
    AND?: exam_planScalarWhereWithAggregatesInput | exam_planScalarWhereWithAggregatesInput[]
    OR?: exam_planScalarWhereWithAggregatesInput[]
    NOT?: exam_planScalarWhereWithAggregatesInput | exam_planScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"exam_plan"> | number
    theoretical?: IntWithAggregatesFilter<"exam_plan"> | number
    practical?: IntWithAggregatesFilter<"exam_plan"> | number
  }

  export type hour_planWhereInput = {
    AND?: hour_planWhereInput | hour_planWhereInput[]
    OR?: hour_planWhereInput[]
    NOT?: hour_planWhereInput | hour_planWhereInput[]
    id?: IntFilter<"hour_plan"> | number
    theoretical?: IntFilter<"hour_plan"> | number
    practical?: IntFilter<"hour_plan"> | number
    credit?: IntFilter<"hour_plan"> | number
    subjects?: SubjectsListRelationFilter
  }

  export type hour_planOrderByWithRelationInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    credit?: SortOrder
    subjects?: subjectsOrderByRelationAggregateInput
  }

  export type hour_planWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hour_planWhereInput | hour_planWhereInput[]
    OR?: hour_planWhereInput[]
    NOT?: hour_planWhereInput | hour_planWhereInput[]
    theoretical?: IntFilter<"hour_plan"> | number
    practical?: IntFilter<"hour_plan"> | number
    credit?: IntFilter<"hour_plan"> | number
    subjects?: SubjectsListRelationFilter
  }, "id">

  export type hour_planOrderByWithAggregationInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    credit?: SortOrder
    _count?: hour_planCountOrderByAggregateInput
    _avg?: hour_planAvgOrderByAggregateInput
    _max?: hour_planMaxOrderByAggregateInput
    _min?: hour_planMinOrderByAggregateInput
    _sum?: hour_planSumOrderByAggregateInput
  }

  export type hour_planScalarWhereWithAggregatesInput = {
    AND?: hour_planScalarWhereWithAggregatesInput | hour_planScalarWhereWithAggregatesInput[]
    OR?: hour_planScalarWhereWithAggregatesInput[]
    NOT?: hour_planScalarWhereWithAggregatesInput | hour_planScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hour_plan"> | number
    theoretical?: IntWithAggregatesFilter<"hour_plan"> | number
    practical?: IntWithAggregatesFilter<"hour_plan"> | number
    credit?: IntWithAggregatesFilter<"hour_plan"> | number
  }

  export type learning_programsWhereInput = {
    AND?: learning_programsWhereInput | learning_programsWhereInput[]
    OR?: learning_programsWhereInput[]
    NOT?: learning_programsWhereInput | learning_programsWhereInput[]
    id?: IntFilter<"learning_programs"> | number
    name?: StringFilter<"learning_programs"> | string
    subject_hours?: IntFilter<"learning_programs"> | number
    paper_hours?: IntFilter<"learning_programs"> | number
    program_code?: StringFilter<"learning_programs"> | string
    depart_id?: IntFilter<"learning_programs"> | number
    advisor?: IntNullableFilter<"learning_programs"> | number | null
    advisor_assistant?: IntNullableFilter<"learning_programs"> | number | null
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
    teachers_learning_programs_advisorToteachers?: XOR<TeachersNullableScalarRelationFilter, teachersWhereInput> | null
    teachers_learning_programs_advisor_assistantToteachers?: XOR<TeachersNullableScalarRelationFilter, teachersWhereInput> | null
    program_requirements?: Program_requirementsListRelationFilter
  }

  export type learning_programsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject_hours?: SortOrder
    paper_hours?: SortOrder
    program_code?: SortOrder
    depart_id?: SortOrder
    advisor?: SortOrderInput | SortOrder
    advisor_assistant?: SortOrderInput | SortOrder
    department?: departmentOrderByWithRelationInput
    teachers_learning_programs_advisorToteachers?: teachersOrderByWithRelationInput
    teachers_learning_programs_advisor_assistantToteachers?: teachersOrderByWithRelationInput
    program_requirements?: program_requirementsOrderByRelationAggregateInput
    _relevance?: learning_programsOrderByRelevanceInput
  }

  export type learning_programsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: learning_programsWhereInput | learning_programsWhereInput[]
    OR?: learning_programsWhereInput[]
    NOT?: learning_programsWhereInput | learning_programsWhereInput[]
    name?: StringFilter<"learning_programs"> | string
    subject_hours?: IntFilter<"learning_programs"> | number
    paper_hours?: IntFilter<"learning_programs"> | number
    program_code?: StringFilter<"learning_programs"> | string
    depart_id?: IntFilter<"learning_programs"> | number
    advisor?: IntNullableFilter<"learning_programs"> | number | null
    advisor_assistant?: IntNullableFilter<"learning_programs"> | number | null
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
    teachers_learning_programs_advisorToteachers?: XOR<TeachersNullableScalarRelationFilter, teachersWhereInput> | null
    teachers_learning_programs_advisor_assistantToteachers?: XOR<TeachersNullableScalarRelationFilter, teachersWhereInput> | null
    program_requirements?: Program_requirementsListRelationFilter
  }, "id">

  export type learning_programsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject_hours?: SortOrder
    paper_hours?: SortOrder
    program_code?: SortOrder
    depart_id?: SortOrder
    advisor?: SortOrderInput | SortOrder
    advisor_assistant?: SortOrderInput | SortOrder
    _count?: learning_programsCountOrderByAggregateInput
    _avg?: learning_programsAvgOrderByAggregateInput
    _max?: learning_programsMaxOrderByAggregateInput
    _min?: learning_programsMinOrderByAggregateInput
    _sum?: learning_programsSumOrderByAggregateInput
  }

  export type learning_programsScalarWhereWithAggregatesInput = {
    AND?: learning_programsScalarWhereWithAggregatesInput | learning_programsScalarWhereWithAggregatesInput[]
    OR?: learning_programsScalarWhereWithAggregatesInput[]
    NOT?: learning_programsScalarWhereWithAggregatesInput | learning_programsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"learning_programs"> | number
    name?: StringWithAggregatesFilter<"learning_programs"> | string
    subject_hours?: IntWithAggregatesFilter<"learning_programs"> | number
    paper_hours?: IntWithAggregatesFilter<"learning_programs"> | number
    program_code?: StringWithAggregatesFilter<"learning_programs"> | string
    depart_id?: IntWithAggregatesFilter<"learning_programs"> | number
    advisor?: IntNullableWithAggregatesFilter<"learning_programs"> | number | null
    advisor_assistant?: IntNullableWithAggregatesFilter<"learning_programs"> | number | null
  }

  export type program_requirementsWhereInput = {
    AND?: program_requirementsWhereInput | program_requirementsWhereInput[]
    OR?: program_requirementsWhereInput[]
    NOT?: program_requirementsWhereInput | program_requirementsWhereInput[]
    id?: IntFilter<"program_requirements"> | number
    name?: StringFilter<"program_requirements"> | string
    credit_hour?: IntFilter<"program_requirements"> | number
    type?: Enumprogram_requirements_typeFilter<"program_requirements"> | $Enums.program_requirements_type
    require_code?: StringFilter<"program_requirements"> | string
    program_id?: IntFilter<"program_requirements"> | number
    learning_programs?: XOR<Learning_programsScalarRelationFilter, learning_programsWhereInput>
    subjects?: SubjectsListRelationFilter
  }

  export type program_requirementsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    credit_hour?: SortOrder
    type?: SortOrder
    require_code?: SortOrder
    program_id?: SortOrder
    learning_programs?: learning_programsOrderByWithRelationInput
    subjects?: subjectsOrderByRelationAggregateInput
    _relevance?: program_requirementsOrderByRelevanceInput
  }

  export type program_requirementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: program_requirementsWhereInput | program_requirementsWhereInput[]
    OR?: program_requirementsWhereInput[]
    NOT?: program_requirementsWhereInput | program_requirementsWhereInput[]
    name?: StringFilter<"program_requirements"> | string
    credit_hour?: IntFilter<"program_requirements"> | number
    type?: Enumprogram_requirements_typeFilter<"program_requirements"> | $Enums.program_requirements_type
    require_code?: StringFilter<"program_requirements"> | string
    program_id?: IntFilter<"program_requirements"> | number
    learning_programs?: XOR<Learning_programsScalarRelationFilter, learning_programsWhereInput>
    subjects?: SubjectsListRelationFilter
  }, "id">

  export type program_requirementsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    credit_hour?: SortOrder
    type?: SortOrder
    require_code?: SortOrder
    program_id?: SortOrder
    _count?: program_requirementsCountOrderByAggregateInput
    _avg?: program_requirementsAvgOrderByAggregateInput
    _max?: program_requirementsMaxOrderByAggregateInput
    _min?: program_requirementsMinOrderByAggregateInput
    _sum?: program_requirementsSumOrderByAggregateInput
  }

  export type program_requirementsScalarWhereWithAggregatesInput = {
    AND?: program_requirementsScalarWhereWithAggregatesInput | program_requirementsScalarWhereWithAggregatesInput[]
    OR?: program_requirementsScalarWhereWithAggregatesInput[]
    NOT?: program_requirementsScalarWhereWithAggregatesInput | program_requirementsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"program_requirements"> | number
    name?: StringWithAggregatesFilter<"program_requirements"> | string
    credit_hour?: IntWithAggregatesFilter<"program_requirements"> | number
    type?: Enumprogram_requirements_typeWithAggregatesFilter<"program_requirements"> | $Enums.program_requirements_type
    require_code?: StringWithAggregatesFilter<"program_requirements"> | string
    program_id?: IntWithAggregatesFilter<"program_requirements"> | number
  }

  export type resultsWhereInput = {
    AND?: resultsWhereInput | resultsWhereInput[]
    OR?: resultsWhereInput[]
    NOT?: resultsWhereInput | resultsWhereInput[]
    id?: IntFilter<"results"> | number
    student_id?: IntFilter<"results"> | number
    classroom_id?: IntFilter<"results"> | number
    st_status?: Enumresults_st_statusFilter<"results"> | $Enums.results_st_status
    students?: XOR<StudentsScalarRelationFilter, studentsWhereInput>
    classrooms?: XOR<ClassroomsScalarRelationFilter, classroomsWhereInput>
  }

  export type resultsOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    st_status?: SortOrder
    students?: studentsOrderByWithRelationInput
    classrooms?: classroomsOrderByWithRelationInput
  }

  export type resultsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: resultsWhereInput | resultsWhereInput[]
    OR?: resultsWhereInput[]
    NOT?: resultsWhereInput | resultsWhereInput[]
    student_id?: IntFilter<"results"> | number
    classroom_id?: IntFilter<"results"> | number
    st_status?: Enumresults_st_statusFilter<"results"> | $Enums.results_st_status
    students?: XOR<StudentsScalarRelationFilter, studentsWhereInput>
    classrooms?: XOR<ClassroomsScalarRelationFilter, classroomsWhereInput>
  }, "id">

  export type resultsOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    st_status?: SortOrder
    _count?: resultsCountOrderByAggregateInput
    _avg?: resultsAvgOrderByAggregateInput
    _max?: resultsMaxOrderByAggregateInput
    _min?: resultsMinOrderByAggregateInput
    _sum?: resultsSumOrderByAggregateInput
  }

  export type resultsScalarWhereWithAggregatesInput = {
    AND?: resultsScalarWhereWithAggregatesInput | resultsScalarWhereWithAggregatesInput[]
    OR?: resultsScalarWhereWithAggregatesInput[]
    NOT?: resultsScalarWhereWithAggregatesInput | resultsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"results"> | number
    student_id?: IntWithAggregatesFilter<"results"> | number
    classroom_id?: IntWithAggregatesFilter<"results"> | number
    st_status?: Enumresults_st_statusWithAggregatesFilter<"results"> | $Enums.results_st_status
  }

  export type specializationWhereInput = {
    AND?: specializationWhereInput | specializationWhereInput[]
    OR?: specializationWhereInput[]
    NOT?: specializationWhereInput | specializationWhereInput[]
    id?: IntFilter<"specialization"> | number
    name?: StringFilter<"specialization"> | string
    depart_id?: IntFilter<"specialization"> | number
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
    students?: StudentsListRelationFilter
  }

  export type specializationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    depart_id?: SortOrder
    department?: departmentOrderByWithRelationInput
    students?: studentsOrderByRelationAggregateInput
    _relevance?: specializationOrderByRelevanceInput
  }

  export type specializationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: specializationWhereInput | specializationWhereInput[]
    OR?: specializationWhereInput[]
    NOT?: specializationWhereInput | specializationWhereInput[]
    name?: StringFilter<"specialization"> | string
    depart_id?: IntFilter<"specialization"> | number
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
    students?: StudentsListRelationFilter
  }, "id">

  export type specializationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    depart_id?: SortOrder
    _count?: specializationCountOrderByAggregateInput
    _avg?: specializationAvgOrderByAggregateInput
    _max?: specializationMaxOrderByAggregateInput
    _min?: specializationMinOrderByAggregateInput
    _sum?: specializationSumOrderByAggregateInput
  }

  export type specializationScalarWhereWithAggregatesInput = {
    AND?: specializationScalarWhereWithAggregatesInput | specializationScalarWhereWithAggregatesInput[]
    OR?: specializationScalarWhereWithAggregatesInput[]
    NOT?: specializationScalarWhereWithAggregatesInput | specializationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"specialization"> | number
    name?: StringWithAggregatesFilter<"specialization"> | string
    depart_id?: IntWithAggregatesFilter<"specialization"> | number
  }

  export type studentsWhereInput = {
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    id?: IntFilter<"students"> | number
    name?: StringFilter<"students"> | string
    registered_at?: DateTimeNullableFilter<"students"> | Date | string | null
    student_code?: StringFilter<"students"> | string
    national_n?: StringNullableFilter<"students"> | string | null
    phone?: StringNullableFilter<"students"> | string | null
    nation_phone?: StringNullableFilter<"students"> | string | null
    advisor?: IntNullableFilter<"students"> | number | null
    specialization_id?: IntFilter<"students"> | number
    results?: ResultsListRelationFilter
    teachers?: XOR<TeachersNullableScalarRelationFilter, teachersWhereInput> | null
    specialization?: XOR<SpecializationScalarRelationFilter, specializationWhereInput>
  }

  export type studentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    registered_at?: SortOrderInput | SortOrder
    student_code?: SortOrder
    national_n?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    nation_phone?: SortOrderInput | SortOrder
    advisor?: SortOrderInput | SortOrder
    specialization_id?: SortOrder
    results?: resultsOrderByRelationAggregateInput
    teachers?: teachersOrderByWithRelationInput
    specialization?: specializationOrderByWithRelationInput
    _relevance?: studentsOrderByRelevanceInput
  }

  export type studentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    student_code?: string
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    name?: StringFilter<"students"> | string
    registered_at?: DateTimeNullableFilter<"students"> | Date | string | null
    national_n?: StringNullableFilter<"students"> | string | null
    phone?: StringNullableFilter<"students"> | string | null
    nation_phone?: StringNullableFilter<"students"> | string | null
    advisor?: IntNullableFilter<"students"> | number | null
    specialization_id?: IntFilter<"students"> | number
    results?: ResultsListRelationFilter
    teachers?: XOR<TeachersNullableScalarRelationFilter, teachersWhereInput> | null
    specialization?: XOR<SpecializationScalarRelationFilter, specializationWhereInput>
  }, "id" | "student_code">

  export type studentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    registered_at?: SortOrderInput | SortOrder
    student_code?: SortOrder
    national_n?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    nation_phone?: SortOrderInput | SortOrder
    advisor?: SortOrderInput | SortOrder
    specialization_id?: SortOrder
    _count?: studentsCountOrderByAggregateInput
    _avg?: studentsAvgOrderByAggregateInput
    _max?: studentsMaxOrderByAggregateInput
    _min?: studentsMinOrderByAggregateInput
    _sum?: studentsSumOrderByAggregateInput
  }

  export type studentsScalarWhereWithAggregatesInput = {
    AND?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    OR?: studentsScalarWhereWithAggregatesInput[]
    NOT?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"students"> | number
    name?: StringWithAggregatesFilter<"students"> | string
    registered_at?: DateTimeNullableWithAggregatesFilter<"students"> | Date | string | null
    student_code?: StringWithAggregatesFilter<"students"> | string
    national_n?: StringNullableWithAggregatesFilter<"students"> | string | null
    phone?: StringNullableWithAggregatesFilter<"students"> | string | null
    nation_phone?: StringNullableWithAggregatesFilter<"students"> | string | null
    advisor?: IntNullableWithAggregatesFilter<"students"> | number | null
    specialization_id?: IntWithAggregatesFilter<"students"> | number
  }

  export type subjectsWhereInput = {
    AND?: subjectsWhereInput | subjectsWhereInput[]
    OR?: subjectsWhereInput[]
    NOT?: subjectsWhereInput | subjectsWhereInput[]
    id?: IntFilter<"subjects"> | number
    name?: StringFilter<"subjects"> | string
    subject_code?: StringFilter<"subjects"> | string
    hours_id?: IntNullableFilter<"subjects"> | number | null
    exams_id?: IntNullableFilter<"subjects"> | number | null
    degrees_id?: IntNullableFilter<"subjects"> | number | null
    require_id?: IntNullableFilter<"subjects"> | number | null
    classrooms?: ClassroomsListRelationFilter
    hour_plan?: XOR<Hour_planNullableScalarRelationFilter, hour_planWhereInput> | null
    exam_plan?: XOR<Exam_planNullableScalarRelationFilter, exam_planWhereInput> | null
    degree_plan?: XOR<Degree_planNullableScalarRelationFilter, degree_planWhereInput> | null
    program_requirements?: XOR<Program_requirementsNullableScalarRelationFilter, program_requirementsWhereInput> | null
  }

  export type subjectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject_code?: SortOrder
    hours_id?: SortOrderInput | SortOrder
    exams_id?: SortOrderInput | SortOrder
    degrees_id?: SortOrderInput | SortOrder
    require_id?: SortOrderInput | SortOrder
    classrooms?: classroomsOrderByRelationAggregateInput
    hour_plan?: hour_planOrderByWithRelationInput
    exam_plan?: exam_planOrderByWithRelationInput
    degree_plan?: degree_planOrderByWithRelationInput
    program_requirements?: program_requirementsOrderByWithRelationInput
    _relevance?: subjectsOrderByRelevanceInput
  }

  export type subjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: subjectsWhereInput | subjectsWhereInput[]
    OR?: subjectsWhereInput[]
    NOT?: subjectsWhereInput | subjectsWhereInput[]
    name?: StringFilter<"subjects"> | string
    subject_code?: StringFilter<"subjects"> | string
    hours_id?: IntNullableFilter<"subjects"> | number | null
    exams_id?: IntNullableFilter<"subjects"> | number | null
    degrees_id?: IntNullableFilter<"subjects"> | number | null
    require_id?: IntNullableFilter<"subjects"> | number | null
    classrooms?: ClassroomsListRelationFilter
    hour_plan?: XOR<Hour_planNullableScalarRelationFilter, hour_planWhereInput> | null
    exam_plan?: XOR<Exam_planNullableScalarRelationFilter, exam_planWhereInput> | null
    degree_plan?: XOR<Degree_planNullableScalarRelationFilter, degree_planWhereInput> | null
    program_requirements?: XOR<Program_requirementsNullableScalarRelationFilter, program_requirementsWhereInput> | null
  }, "id">

  export type subjectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject_code?: SortOrder
    hours_id?: SortOrderInput | SortOrder
    exams_id?: SortOrderInput | SortOrder
    degrees_id?: SortOrderInput | SortOrder
    require_id?: SortOrderInput | SortOrder
    _count?: subjectsCountOrderByAggregateInput
    _avg?: subjectsAvgOrderByAggregateInput
    _max?: subjectsMaxOrderByAggregateInput
    _min?: subjectsMinOrderByAggregateInput
    _sum?: subjectsSumOrderByAggregateInput
  }

  export type subjectsScalarWhereWithAggregatesInput = {
    AND?: subjectsScalarWhereWithAggregatesInput | subjectsScalarWhereWithAggregatesInput[]
    OR?: subjectsScalarWhereWithAggregatesInput[]
    NOT?: subjectsScalarWhereWithAggregatesInput | subjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subjects"> | number
    name?: StringWithAggregatesFilter<"subjects"> | string
    subject_code?: StringWithAggregatesFilter<"subjects"> | string
    hours_id?: IntNullableWithAggregatesFilter<"subjects"> | number | null
    exams_id?: IntNullableWithAggregatesFilter<"subjects"> | number | null
    degrees_id?: IntNullableWithAggregatesFilter<"subjects"> | number | null
    require_id?: IntNullableWithAggregatesFilter<"subjects"> | number | null
  }

  export type teachersWhereInput = {
    AND?: teachersWhereInput | teachersWhereInput[]
    OR?: teachersWhereInput[]
    NOT?: teachersWhereInput | teachersWhereInput[]
    id?: IntFilter<"teachers"> | number
    name?: StringFilter<"teachers"> | string
    degree?: Enumteachers_degreeFilter<"teachers"> | $Enums.teachers_degree
    classrooms?: ClassroomsListRelationFilter
    learning_programs_learning_programs_advisorToteachers?: Learning_programsListRelationFilter
    learning_programs_learning_programs_advisor_assistantToteachers?: Learning_programsListRelationFilter
    students?: StudentsListRelationFilter
    teachers_jobs?: Teachers_jobsListRelationFilter
  }

  export type teachersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    classrooms?: classroomsOrderByRelationAggregateInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsOrderByRelationAggregateInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsOrderByRelationAggregateInput
    students?: studentsOrderByRelationAggregateInput
    teachers_jobs?: teachers_jobsOrderByRelationAggregateInput
    _relevance?: teachersOrderByRelevanceInput
  }

  export type teachersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: teachersWhereInput | teachersWhereInput[]
    OR?: teachersWhereInput[]
    NOT?: teachersWhereInput | teachersWhereInput[]
    name?: StringFilter<"teachers"> | string
    degree?: Enumteachers_degreeFilter<"teachers"> | $Enums.teachers_degree
    classrooms?: ClassroomsListRelationFilter
    learning_programs_learning_programs_advisorToteachers?: Learning_programsListRelationFilter
    learning_programs_learning_programs_advisor_assistantToteachers?: Learning_programsListRelationFilter
    students?: StudentsListRelationFilter
    teachers_jobs?: Teachers_jobsListRelationFilter
  }, "id">

  export type teachersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    _count?: teachersCountOrderByAggregateInput
    _avg?: teachersAvgOrderByAggregateInput
    _max?: teachersMaxOrderByAggregateInput
    _min?: teachersMinOrderByAggregateInput
    _sum?: teachersSumOrderByAggregateInput
  }

  export type teachersScalarWhereWithAggregatesInput = {
    AND?: teachersScalarWhereWithAggregatesInput | teachersScalarWhereWithAggregatesInput[]
    OR?: teachersScalarWhereWithAggregatesInput[]
    NOT?: teachersScalarWhereWithAggregatesInput | teachersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teachers"> | number
    name?: StringWithAggregatesFilter<"teachers"> | string
    degree?: Enumteachers_degreeWithAggregatesFilter<"teachers"> | $Enums.teachers_degree
  }

  export type teachers_jobsWhereInput = {
    AND?: teachers_jobsWhereInput | teachers_jobsWhereInput[]
    OR?: teachers_jobsWhereInput[]
    NOT?: teachers_jobsWhereInput | teachers_jobsWhereInput[]
    id?: IntFilter<"teachers_jobs"> | number
    jobs?: StringFilter<"teachers_jobs"> | string
    teacher_id?: IntFilter<"teachers_jobs"> | number
    depart_id?: IntFilter<"teachers_jobs"> | number
    teachers?: XOR<TeachersScalarRelationFilter, teachersWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
  }

  export type teachers_jobsOrderByWithRelationInput = {
    id?: SortOrder
    jobs?: SortOrder
    teacher_id?: SortOrder
    depart_id?: SortOrder
    teachers?: teachersOrderByWithRelationInput
    department?: departmentOrderByWithRelationInput
    _relevance?: teachers_jobsOrderByRelevanceInput
  }

  export type teachers_jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: teachers_jobsWhereInput | teachers_jobsWhereInput[]
    OR?: teachers_jobsWhereInput[]
    NOT?: teachers_jobsWhereInput | teachers_jobsWhereInput[]
    jobs?: StringFilter<"teachers_jobs"> | string
    teacher_id?: IntFilter<"teachers_jobs"> | number
    depart_id?: IntFilter<"teachers_jobs"> | number
    teachers?: XOR<TeachersScalarRelationFilter, teachersWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
  }, "id">

  export type teachers_jobsOrderByWithAggregationInput = {
    id?: SortOrder
    jobs?: SortOrder
    teacher_id?: SortOrder
    depart_id?: SortOrder
    _count?: teachers_jobsCountOrderByAggregateInput
    _avg?: teachers_jobsAvgOrderByAggregateInput
    _max?: teachers_jobsMaxOrderByAggregateInput
    _min?: teachers_jobsMinOrderByAggregateInput
    _sum?: teachers_jobsSumOrderByAggregateInput
  }

  export type teachers_jobsScalarWhereWithAggregatesInput = {
    AND?: teachers_jobsScalarWhereWithAggregatesInput | teachers_jobsScalarWhereWithAggregatesInput[]
    OR?: teachers_jobsScalarWhereWithAggregatesInput[]
    NOT?: teachers_jobsScalarWhereWithAggregatesInput | teachers_jobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teachers_jobs"> | number
    jobs?: StringWithAggregatesFilter<"teachers_jobs"> | string
    teacher_id?: IntWithAggregatesFilter<"teachers_jobs"> | number
    depart_id?: IntWithAggregatesFilter<"teachers_jobs"> | number
  }

  export type classroomsCreateInput = {
    duration_plans_classrooms_duration_plansToduration_plans: duration_plansCreateNestedOneWithoutClassrooms_classrooms_duration_plansToduration_plansInput
    subjects: subjectsCreateNestedOneWithoutClassroomsInput
    teachers?: teachersCreateNestedOneWithoutClassroomsInput
    results?: resultsCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsUncheckedCreateInput = {
    id?: number
    duration_plans: number
    subject_id: number
    teacher_id?: number | null
    results?: resultsUncheckedCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsUpdateInput = {
    duration_plans_classrooms_duration_plansToduration_plans?: duration_plansUpdateOneRequiredWithoutClassrooms_classrooms_duration_plansToduration_plansNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutClassroomsNestedInput
    teachers?: teachersUpdateOneWithoutClassroomsNestedInput
    results?: resultsUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    duration_plans?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: NullableIntFieldUpdateOperationsInput | number | null
    results?: resultsUncheckedUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsCreateManyInput = {
    id?: number
    duration_plans: number
    subject_id: number
    teacher_id?: number | null
  }

  export type classroomsUpdateManyMutationInput = {

  }

  export type classroomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    duration_plans?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type degree_planCreateInput = {
    theoretical: number
    practical: number
    activity: number
    subjects?: subjectsCreateNestedManyWithoutDegree_planInput
  }

  export type degree_planUncheckedCreateInput = {
    id?: number
    theoretical: number
    practical: number
    activity: number
    subjects?: subjectsUncheckedCreateNestedManyWithoutDegree_planInput
  }

  export type degree_planUpdateInput = {
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    activity?: IntFieldUpdateOperationsInput | number
    subjects?: subjectsUpdateManyWithoutDegree_planNestedInput
  }

  export type degree_planUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    activity?: IntFieldUpdateOperationsInput | number
    subjects?: subjectsUncheckedUpdateManyWithoutDegree_planNestedInput
  }

  export type degree_planCreateManyInput = {
    id?: number
    theoretical: number
    practical: number
    activity: number
  }

  export type degree_planUpdateManyMutationInput = {
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    activity?: IntFieldUpdateOperationsInput | number
  }

  export type degree_planUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    activity?: IntFieldUpdateOperationsInput | number
  }

  export type departmentCreateInput = {
    name: string
    depart_code: string
    learning_programs?: learning_programsCreateNestedManyWithoutDepartmentInput
    specialization?: specializationCreateNestedManyWithoutDepartmentInput
    teachers_jobs?: teachers_jobsCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateInput = {
    id?: number
    name: string
    depart_code: string
    learning_programs?: learning_programsUncheckedCreateNestedManyWithoutDepartmentInput
    specialization?: specializationUncheckedCreateNestedManyWithoutDepartmentInput
    teachers_jobs?: teachers_jobsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    depart_code?: StringFieldUpdateOperationsInput | string
    learning_programs?: learning_programsUpdateManyWithoutDepartmentNestedInput
    specialization?: specializationUpdateManyWithoutDepartmentNestedInput
    teachers_jobs?: teachers_jobsUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    depart_code?: StringFieldUpdateOperationsInput | string
    learning_programs?: learning_programsUncheckedUpdateManyWithoutDepartmentNestedInput
    specialization?: specializationUncheckedUpdateManyWithoutDepartmentNestedInput
    teachers_jobs?: teachers_jobsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentCreateManyInput = {
    id?: number
    name: string
    depart_code: string
  }

  export type departmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    depart_code?: StringFieldUpdateOperationsInput | string
  }

  export type departmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    depart_code?: StringFieldUpdateOperationsInput | string
  }

  export type duration_plansCreateInput = {
    edu_year: number
    term: $Enums.duration_plans_term
    semester?: number
    classrooms_classrooms_duration_plansToduration_plans?: classroomsCreateNestedManyWithoutDuration_plans_classrooms_duration_plansToduration_plansInput
  }

  export type duration_plansUncheckedCreateInput = {
    id?: number
    edu_year: number
    term: $Enums.duration_plans_term
    semester?: number
    classrooms_classrooms_duration_plansToduration_plans?: classroomsUncheckedCreateNestedManyWithoutDuration_plans_classrooms_duration_plansToduration_plansInput
  }

  export type duration_plansUpdateInput = {
    edu_year?: IntFieldUpdateOperationsInput | number
    term?: Enumduration_plans_termFieldUpdateOperationsInput | $Enums.duration_plans_term
    semester?: IntFieldUpdateOperationsInput | number
    classrooms_classrooms_duration_plansToduration_plans?: classroomsUpdateManyWithoutDuration_plans_classrooms_duration_plansToduration_plansNestedInput
  }

  export type duration_plansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    edu_year?: IntFieldUpdateOperationsInput | number
    term?: Enumduration_plans_termFieldUpdateOperationsInput | $Enums.duration_plans_term
    semester?: IntFieldUpdateOperationsInput | number
    classrooms_classrooms_duration_plansToduration_plans?: classroomsUncheckedUpdateManyWithoutDuration_plans_classrooms_duration_plansToduration_plansNestedInput
  }

  export type duration_plansCreateManyInput = {
    id?: number
    edu_year: number
    term: $Enums.duration_plans_term
    semester?: number
  }

  export type duration_plansUpdateManyMutationInput = {
    edu_year?: IntFieldUpdateOperationsInput | number
    term?: Enumduration_plans_termFieldUpdateOperationsInput | $Enums.duration_plans_term
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type duration_plansUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    edu_year?: IntFieldUpdateOperationsInput | number
    term?: Enumduration_plans_termFieldUpdateOperationsInput | $Enums.duration_plans_term
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type exam_planCreateInput = {
    theoretical: number
    practical: number
    subjects?: subjectsCreateNestedManyWithoutExam_planInput
  }

  export type exam_planUncheckedCreateInput = {
    id?: number
    theoretical: number
    practical: number
    subjects?: subjectsUncheckedCreateNestedManyWithoutExam_planInput
  }

  export type exam_planUpdateInput = {
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    subjects?: subjectsUpdateManyWithoutExam_planNestedInput
  }

  export type exam_planUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    subjects?: subjectsUncheckedUpdateManyWithoutExam_planNestedInput
  }

  export type exam_planCreateManyInput = {
    id?: number
    theoretical: number
    practical: number
  }

  export type exam_planUpdateManyMutationInput = {
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
  }

  export type exam_planUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
  }

  export type hour_planCreateInput = {
    theoretical?: number
    practical?: number
    credit?: number
    subjects?: subjectsCreateNestedManyWithoutHour_planInput
  }

  export type hour_planUncheckedCreateInput = {
    id?: number
    theoretical?: number
    practical?: number
    credit?: number
    subjects?: subjectsUncheckedCreateNestedManyWithoutHour_planInput
  }

  export type hour_planUpdateInput = {
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    credit?: IntFieldUpdateOperationsInput | number
    subjects?: subjectsUpdateManyWithoutHour_planNestedInput
  }

  export type hour_planUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    credit?: IntFieldUpdateOperationsInput | number
    subjects?: subjectsUncheckedUpdateManyWithoutHour_planNestedInput
  }

  export type hour_planCreateManyInput = {
    id?: number
    theoretical?: number
    practical?: number
    credit?: number
  }

  export type hour_planUpdateManyMutationInput = {
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    credit?: IntFieldUpdateOperationsInput | number
  }

  export type hour_planUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    credit?: IntFieldUpdateOperationsInput | number
  }

  export type learning_programsCreateInput = {
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    department: departmentCreateNestedOneWithoutLearning_programsInput
    teachers_learning_programs_advisorToteachers?: teachersCreateNestedOneWithoutLearning_programs_learning_programs_advisorToteachersInput
    teachers_learning_programs_advisor_assistantToteachers?: teachersCreateNestedOneWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput
    program_requirements?: program_requirementsCreateNestedManyWithoutLearning_programsInput
  }

  export type learning_programsUncheckedCreateInput = {
    id?: number
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    depart_id: number
    advisor?: number | null
    advisor_assistant?: number | null
    program_requirements?: program_requirementsUncheckedCreateNestedManyWithoutLearning_programsInput
  }

  export type learning_programsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutLearning_programsNestedInput
    teachers_learning_programs_advisorToteachers?: teachersUpdateOneWithoutLearning_programs_learning_programs_advisorToteachersNestedInput
    teachers_learning_programs_advisor_assistantToteachers?: teachersUpdateOneWithoutLearning_programs_learning_programs_advisor_assistantToteachersNestedInput
    program_requirements?: program_requirementsUpdateManyWithoutLearning_programsNestedInput
  }

  export type learning_programsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
    advisor_assistant?: NullableIntFieldUpdateOperationsInput | number | null
    program_requirements?: program_requirementsUncheckedUpdateManyWithoutLearning_programsNestedInput
  }

  export type learning_programsCreateManyInput = {
    id?: number
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    depart_id: number
    advisor?: number | null
    advisor_assistant?: number | null
  }

  export type learning_programsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
  }

  export type learning_programsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
    advisor_assistant?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type program_requirementsCreateInput = {
    name: string
    credit_hour?: number
    type: $Enums.program_requirements_type
    require_code: string
    learning_programs: learning_programsCreateNestedOneWithoutProgram_requirementsInput
    subjects?: subjectsCreateNestedManyWithoutProgram_requirementsInput
  }

  export type program_requirementsUncheckedCreateInput = {
    id?: number
    name: string
    credit_hour?: number
    type: $Enums.program_requirements_type
    require_code: string
    program_id: number
    subjects?: subjectsUncheckedCreateNestedManyWithoutProgram_requirementsInput
  }

  export type program_requirementsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    credit_hour?: IntFieldUpdateOperationsInput | number
    type?: Enumprogram_requirements_typeFieldUpdateOperationsInput | $Enums.program_requirements_type
    require_code?: StringFieldUpdateOperationsInput | string
    learning_programs?: learning_programsUpdateOneRequiredWithoutProgram_requirementsNestedInput
    subjects?: subjectsUpdateManyWithoutProgram_requirementsNestedInput
  }

  export type program_requirementsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credit_hour?: IntFieldUpdateOperationsInput | number
    type?: Enumprogram_requirements_typeFieldUpdateOperationsInput | $Enums.program_requirements_type
    require_code?: StringFieldUpdateOperationsInput | string
    program_id?: IntFieldUpdateOperationsInput | number
    subjects?: subjectsUncheckedUpdateManyWithoutProgram_requirementsNestedInput
  }

  export type program_requirementsCreateManyInput = {
    id?: number
    name: string
    credit_hour?: number
    type: $Enums.program_requirements_type
    require_code: string
    program_id: number
  }

  export type program_requirementsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    credit_hour?: IntFieldUpdateOperationsInput | number
    type?: Enumprogram_requirements_typeFieldUpdateOperationsInput | $Enums.program_requirements_type
    require_code?: StringFieldUpdateOperationsInput | string
  }

  export type program_requirementsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credit_hour?: IntFieldUpdateOperationsInput | number
    type?: Enumprogram_requirements_typeFieldUpdateOperationsInput | $Enums.program_requirements_type
    require_code?: StringFieldUpdateOperationsInput | string
    program_id?: IntFieldUpdateOperationsInput | number
  }

  export type resultsCreateInput = {
    st_status: $Enums.results_st_status
    students: studentsCreateNestedOneWithoutResultsInput
    classrooms: classroomsCreateNestedOneWithoutResultsInput
  }

  export type resultsUncheckedCreateInput = {
    id?: number
    student_id: number
    classroom_id: number
    st_status: $Enums.results_st_status
  }

  export type resultsUpdateInput = {
    st_status?: Enumresults_st_statusFieldUpdateOperationsInput | $Enums.results_st_status
    students?: studentsUpdateOneRequiredWithoutResultsNestedInput
    classrooms?: classroomsUpdateOneRequiredWithoutResultsNestedInput
  }

  export type resultsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    classroom_id?: IntFieldUpdateOperationsInput | number
    st_status?: Enumresults_st_statusFieldUpdateOperationsInput | $Enums.results_st_status
  }

  export type resultsCreateManyInput = {
    id?: number
    student_id: number
    classroom_id: number
    st_status: $Enums.results_st_status
  }

  export type resultsUpdateManyMutationInput = {
    st_status?: Enumresults_st_statusFieldUpdateOperationsInput | $Enums.results_st_status
  }

  export type resultsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    classroom_id?: IntFieldUpdateOperationsInput | number
    st_status?: Enumresults_st_statusFieldUpdateOperationsInput | $Enums.results_st_status
  }

  export type specializationCreateInput = {
    name: string
    department: departmentCreateNestedOneWithoutSpecializationInput
    students?: studentsCreateNestedManyWithoutSpecializationInput
  }

  export type specializationUncheckedCreateInput = {
    id?: number
    name: string
    depart_id: number
    students?: studentsUncheckedCreateNestedManyWithoutSpecializationInput
  }

  export type specializationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutSpecializationNestedInput
    students?: studentsUpdateManyWithoutSpecializationNestedInput
  }

  export type specializationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
    students?: studentsUncheckedUpdateManyWithoutSpecializationNestedInput
  }

  export type specializationCreateManyInput = {
    id?: number
    name: string
    depart_id: number
  }

  export type specializationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type specializationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
  }

  export type studentsCreateInput = {
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    results?: resultsCreateNestedManyWithoutStudentsInput
    teachers?: teachersCreateNestedOneWithoutStudentsInput
    specialization: specializationCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateInput = {
    id?: number
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    advisor?: number | null
    specialization_id: number
    results?: resultsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    results?: resultsUpdateManyWithoutStudentsNestedInput
    teachers?: teachersUpdateOneWithoutStudentsNestedInput
    specialization?: specializationUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
    specialization_id?: IntFieldUpdateOperationsInput | number
    results?: resultsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsCreateManyInput = {
    id?: number
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    advisor?: number | null
    specialization_id: number
  }

  export type studentsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
    specialization_id?: IntFieldUpdateOperationsInput | number
  }

  export type subjectsCreateInput = {
    name: string
    subject_code: string
    classrooms?: classroomsCreateNestedManyWithoutSubjectsInput
    hour_plan?: hour_planCreateNestedOneWithoutSubjectsInput
    exam_plan?: exam_planCreateNestedOneWithoutSubjectsInput
    degree_plan?: degree_planCreateNestedOneWithoutSubjectsInput
    program_requirements?: program_requirementsCreateNestedOneWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateInput = {
    id?: number
    name: string
    subject_code: string
    hours_id?: number | null
    exams_id?: number | null
    degrees_id?: number | null
    require_id?: number | null
    classrooms?: classroomsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    classrooms?: classroomsUpdateManyWithoutSubjectsNestedInput
    hour_plan?: hour_planUpdateOneWithoutSubjectsNestedInput
    exam_plan?: exam_planUpdateOneWithoutSubjectsNestedInput
    degree_plan?: degree_planUpdateOneWithoutSubjectsNestedInput
    program_requirements?: program_requirementsUpdateOneWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    hours_id?: NullableIntFieldUpdateOperationsInput | number | null
    exams_id?: NullableIntFieldUpdateOperationsInput | number | null
    degrees_id?: NullableIntFieldUpdateOperationsInput | number | null
    require_id?: NullableIntFieldUpdateOperationsInput | number | null
    classrooms?: classroomsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsCreateManyInput = {
    id?: number
    name: string
    subject_code: string
    hours_id?: number | null
    exams_id?: number | null
    degrees_id?: number | null
    require_id?: number | null
  }

  export type subjectsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
  }

  export type subjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    hours_id?: NullableIntFieldUpdateOperationsInput | number | null
    exams_id?: NullableIntFieldUpdateOperationsInput | number | null
    degrees_id?: NullableIntFieldUpdateOperationsInput | number | null
    require_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type teachersCreateInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    classrooms?: classroomsCreateNestedManyWithoutTeachersInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput
    students?: studentsCreateNestedManyWithoutTeachersInput
    teachers_jobs?: teachers_jobsCreateNestedManyWithoutTeachersInput
  }

  export type teachersUncheckedCreateInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    classrooms?: classroomsUncheckedCreateNestedManyWithoutTeachersInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput
    students?: studentsUncheckedCreateNestedManyWithoutTeachersInput
    teachers_jobs?: teachers_jobsUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type teachersUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    classrooms?: classroomsUpdateManyWithoutTeachersNestedInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput
    students?: studentsUpdateManyWithoutTeachersNestedInput
    teachers_jobs?: teachers_jobsUpdateManyWithoutTeachersNestedInput
  }

  export type teachersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    classrooms?: classroomsUncheckedUpdateManyWithoutTeachersNestedInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput
    students?: studentsUncheckedUpdateManyWithoutTeachersNestedInput
    teachers_jobs?: teachers_jobsUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type teachersCreateManyInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
  }

  export type teachersUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
  }

  export type teachersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
  }

  export type teachers_jobsCreateInput = {
    jobs: string
    teachers: teachersCreateNestedOneWithoutTeachers_jobsInput
    department: departmentCreateNestedOneWithoutTeachers_jobsInput
  }

  export type teachers_jobsUncheckedCreateInput = {
    id?: number
    jobs: string
    teacher_id: number
    depart_id: number
  }

  export type teachers_jobsUpdateInput = {
    jobs?: StringFieldUpdateOperationsInput | string
    teachers?: teachersUpdateOneRequiredWithoutTeachers_jobsNestedInput
    department?: departmentUpdateOneRequiredWithoutTeachers_jobsNestedInput
  }

  export type teachers_jobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobs?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
    depart_id?: IntFieldUpdateOperationsInput | number
  }

  export type teachers_jobsCreateManyInput = {
    id?: number
    jobs: string
    teacher_id: number
    depart_id: number
  }

  export type teachers_jobsUpdateManyMutationInput = {
    jobs?: StringFieldUpdateOperationsInput | string
  }

  export type teachers_jobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobs?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
    depart_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Duration_plansScalarRelationFilter = {
    is?: duration_plansWhereInput
    isNot?: duration_plansWhereInput
  }

  export type SubjectsScalarRelationFilter = {
    is?: subjectsWhereInput
    isNot?: subjectsWhereInput
  }

  export type TeachersNullableScalarRelationFilter = {
    is?: teachersWhereInput | null
    isNot?: teachersWhereInput | null
  }

  export type ResultsListRelationFilter = {
    every?: resultsWhereInput
    some?: resultsWhereInput
    none?: resultsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type resultsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type classroomsCountOrderByAggregateInput = {
    id?: SortOrder
    duration_plans?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type classroomsAvgOrderByAggregateInput = {
    id?: SortOrder
    duration_plans?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type classroomsMaxOrderByAggregateInput = {
    id?: SortOrder
    duration_plans?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type classroomsMinOrderByAggregateInput = {
    id?: SortOrder
    duration_plans?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type classroomsSumOrderByAggregateInput = {
    id?: SortOrder
    duration_plans?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SubjectsListRelationFilter = {
    every?: subjectsWhereInput
    some?: subjectsWhereInput
    none?: subjectsWhereInput
  }

  export type subjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type degree_planCountOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    activity?: SortOrder
  }

  export type degree_planAvgOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    activity?: SortOrder
  }

  export type degree_planMaxOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    activity?: SortOrder
  }

  export type degree_planMinOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    activity?: SortOrder
  }

  export type degree_planSumOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    activity?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Learning_programsListRelationFilter = {
    every?: learning_programsWhereInput
    some?: learning_programsWhereInput
    none?: learning_programsWhereInput
  }

  export type SpecializationListRelationFilter = {
    every?: specializationWhereInput
    some?: specializationWhereInput
    none?: specializationWhereInput
  }

  export type Teachers_jobsListRelationFilter = {
    every?: teachers_jobsWhereInput
    some?: teachers_jobsWhereInput
    none?: teachers_jobsWhereInput
  }

  export type learning_programsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type specializationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teachers_jobsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departmentOrderByRelevanceInput = {
    fields: departmentOrderByRelevanceFieldEnum | departmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type departmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    depart_code?: SortOrder
  }

  export type departmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type departmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    depart_code?: SortOrder
  }

  export type departmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    depart_code?: SortOrder
  }

  export type departmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumduration_plans_termFilter<$PrismaModel = never> = {
    equals?: $Enums.duration_plans_term | Enumduration_plans_termFieldRefInput<$PrismaModel>
    in?: $Enums.duration_plans_term[]
    notIn?: $Enums.duration_plans_term[]
    not?: NestedEnumduration_plans_termFilter<$PrismaModel> | $Enums.duration_plans_term
  }

  export type ClassroomsListRelationFilter = {
    every?: classroomsWhereInput
    some?: classroomsWhereInput
    none?: classroomsWhereInput
  }

  export type classroomsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type duration_plansCountOrderByAggregateInput = {
    id?: SortOrder
    edu_year?: SortOrder
    term?: SortOrder
    semester?: SortOrder
  }

  export type duration_plansAvgOrderByAggregateInput = {
    id?: SortOrder
    edu_year?: SortOrder
    semester?: SortOrder
  }

  export type duration_plansMaxOrderByAggregateInput = {
    id?: SortOrder
    edu_year?: SortOrder
    term?: SortOrder
    semester?: SortOrder
  }

  export type duration_plansMinOrderByAggregateInput = {
    id?: SortOrder
    edu_year?: SortOrder
    term?: SortOrder
    semester?: SortOrder
  }

  export type duration_plansSumOrderByAggregateInput = {
    id?: SortOrder
    edu_year?: SortOrder
    semester?: SortOrder
  }

  export type Enumduration_plans_termWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.duration_plans_term | Enumduration_plans_termFieldRefInput<$PrismaModel>
    in?: $Enums.duration_plans_term[]
    notIn?: $Enums.duration_plans_term[]
    not?: NestedEnumduration_plans_termWithAggregatesFilter<$PrismaModel> | $Enums.duration_plans_term
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumduration_plans_termFilter<$PrismaModel>
    _max?: NestedEnumduration_plans_termFilter<$PrismaModel>
  }

  export type exam_planCountOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
  }

  export type exam_planAvgOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
  }

  export type exam_planMaxOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
  }

  export type exam_planMinOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
  }

  export type exam_planSumOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
  }

  export type hour_planCountOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    credit?: SortOrder
  }

  export type hour_planAvgOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    credit?: SortOrder
  }

  export type hour_planMaxOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    credit?: SortOrder
  }

  export type hour_planMinOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    credit?: SortOrder
  }

  export type hour_planSumOrderByAggregateInput = {
    id?: SortOrder
    theoretical?: SortOrder
    practical?: SortOrder
    credit?: SortOrder
  }

  export type DepartmentScalarRelationFilter = {
    is?: departmentWhereInput
    isNot?: departmentWhereInput
  }

  export type Program_requirementsListRelationFilter = {
    every?: program_requirementsWhereInput
    some?: program_requirementsWhereInput
    none?: program_requirementsWhereInput
  }

  export type program_requirementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type learning_programsOrderByRelevanceInput = {
    fields: learning_programsOrderByRelevanceFieldEnum | learning_programsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type learning_programsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject_hours?: SortOrder
    paper_hours?: SortOrder
    program_code?: SortOrder
    depart_id?: SortOrder
    advisor?: SortOrder
    advisor_assistant?: SortOrder
  }

  export type learning_programsAvgOrderByAggregateInput = {
    id?: SortOrder
    subject_hours?: SortOrder
    paper_hours?: SortOrder
    depart_id?: SortOrder
    advisor?: SortOrder
    advisor_assistant?: SortOrder
  }

  export type learning_programsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject_hours?: SortOrder
    paper_hours?: SortOrder
    program_code?: SortOrder
    depart_id?: SortOrder
    advisor?: SortOrder
    advisor_assistant?: SortOrder
  }

  export type learning_programsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject_hours?: SortOrder
    paper_hours?: SortOrder
    program_code?: SortOrder
    depart_id?: SortOrder
    advisor?: SortOrder
    advisor_assistant?: SortOrder
  }

  export type learning_programsSumOrderByAggregateInput = {
    id?: SortOrder
    subject_hours?: SortOrder
    paper_hours?: SortOrder
    depart_id?: SortOrder
    advisor?: SortOrder
    advisor_assistant?: SortOrder
  }

  export type Enumprogram_requirements_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.program_requirements_type | Enumprogram_requirements_typeFieldRefInput<$PrismaModel>
    in?: $Enums.program_requirements_type[]
    notIn?: $Enums.program_requirements_type[]
    not?: NestedEnumprogram_requirements_typeFilter<$PrismaModel> | $Enums.program_requirements_type
  }

  export type Learning_programsScalarRelationFilter = {
    is?: learning_programsWhereInput
    isNot?: learning_programsWhereInput
  }

  export type program_requirementsOrderByRelevanceInput = {
    fields: program_requirementsOrderByRelevanceFieldEnum | program_requirementsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type program_requirementsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credit_hour?: SortOrder
    type?: SortOrder
    require_code?: SortOrder
    program_id?: SortOrder
  }

  export type program_requirementsAvgOrderByAggregateInput = {
    id?: SortOrder
    credit_hour?: SortOrder
    program_id?: SortOrder
  }

  export type program_requirementsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credit_hour?: SortOrder
    type?: SortOrder
    require_code?: SortOrder
    program_id?: SortOrder
  }

  export type program_requirementsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    credit_hour?: SortOrder
    type?: SortOrder
    require_code?: SortOrder
    program_id?: SortOrder
  }

  export type program_requirementsSumOrderByAggregateInput = {
    id?: SortOrder
    credit_hour?: SortOrder
    program_id?: SortOrder
  }

  export type Enumprogram_requirements_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.program_requirements_type | Enumprogram_requirements_typeFieldRefInput<$PrismaModel>
    in?: $Enums.program_requirements_type[]
    notIn?: $Enums.program_requirements_type[]
    not?: NestedEnumprogram_requirements_typeWithAggregatesFilter<$PrismaModel> | $Enums.program_requirements_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprogram_requirements_typeFilter<$PrismaModel>
    _max?: NestedEnumprogram_requirements_typeFilter<$PrismaModel>
  }

  export type Enumresults_st_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.results_st_status | Enumresults_st_statusFieldRefInput<$PrismaModel>
    in?: $Enums.results_st_status[]
    notIn?: $Enums.results_st_status[]
    not?: NestedEnumresults_st_statusFilter<$PrismaModel> | $Enums.results_st_status
  }

  export type StudentsScalarRelationFilter = {
    is?: studentsWhereInput
    isNot?: studentsWhereInput
  }

  export type ClassroomsScalarRelationFilter = {
    is?: classroomsWhereInput
    isNot?: classroomsWhereInput
  }

  export type resultsCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    st_status?: SortOrder
  }

  export type resultsAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
  }

  export type resultsMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    st_status?: SortOrder
  }

  export type resultsMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
    st_status?: SortOrder
  }

  export type resultsSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    classroom_id?: SortOrder
  }

  export type Enumresults_st_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.results_st_status | Enumresults_st_statusFieldRefInput<$PrismaModel>
    in?: $Enums.results_st_status[]
    notIn?: $Enums.results_st_status[]
    not?: NestedEnumresults_st_statusWithAggregatesFilter<$PrismaModel> | $Enums.results_st_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumresults_st_statusFilter<$PrismaModel>
    _max?: NestedEnumresults_st_statusFilter<$PrismaModel>
  }

  export type StudentsListRelationFilter = {
    every?: studentsWhereInput
    some?: studentsWhereInput
    none?: studentsWhereInput
  }

  export type studentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type specializationOrderByRelevanceInput = {
    fields: specializationOrderByRelevanceFieldEnum | specializationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type specializationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    depart_id?: SortOrder
  }

  export type specializationAvgOrderByAggregateInput = {
    id?: SortOrder
    depart_id?: SortOrder
  }

  export type specializationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    depart_id?: SortOrder
  }

  export type specializationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    depart_id?: SortOrder
  }

  export type specializationSumOrderByAggregateInput = {
    id?: SortOrder
    depart_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SpecializationScalarRelationFilter = {
    is?: specializationWhereInput
    isNot?: specializationWhereInput
  }

  export type studentsOrderByRelevanceInput = {
    fields: studentsOrderByRelevanceFieldEnum | studentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type studentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    registered_at?: SortOrder
    student_code?: SortOrder
    national_n?: SortOrder
    phone?: SortOrder
    nation_phone?: SortOrder
    advisor?: SortOrder
    specialization_id?: SortOrder
  }

  export type studentsAvgOrderByAggregateInput = {
    id?: SortOrder
    advisor?: SortOrder
    specialization_id?: SortOrder
  }

  export type studentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    registered_at?: SortOrder
    student_code?: SortOrder
    national_n?: SortOrder
    phone?: SortOrder
    nation_phone?: SortOrder
    advisor?: SortOrder
    specialization_id?: SortOrder
  }

  export type studentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    registered_at?: SortOrder
    student_code?: SortOrder
    national_n?: SortOrder
    phone?: SortOrder
    nation_phone?: SortOrder
    advisor?: SortOrder
    specialization_id?: SortOrder
  }

  export type studentsSumOrderByAggregateInput = {
    id?: SortOrder
    advisor?: SortOrder
    specialization_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Hour_planNullableScalarRelationFilter = {
    is?: hour_planWhereInput | null
    isNot?: hour_planWhereInput | null
  }

  export type Exam_planNullableScalarRelationFilter = {
    is?: exam_planWhereInput | null
    isNot?: exam_planWhereInput | null
  }

  export type Degree_planNullableScalarRelationFilter = {
    is?: degree_planWhereInput | null
    isNot?: degree_planWhereInput | null
  }

  export type Program_requirementsNullableScalarRelationFilter = {
    is?: program_requirementsWhereInput | null
    isNot?: program_requirementsWhereInput | null
  }

  export type subjectsOrderByRelevanceInput = {
    fields: subjectsOrderByRelevanceFieldEnum | subjectsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type subjectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject_code?: SortOrder
    hours_id?: SortOrder
    exams_id?: SortOrder
    degrees_id?: SortOrder
    require_id?: SortOrder
  }

  export type subjectsAvgOrderByAggregateInput = {
    id?: SortOrder
    hours_id?: SortOrder
    exams_id?: SortOrder
    degrees_id?: SortOrder
    require_id?: SortOrder
  }

  export type subjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject_code?: SortOrder
    hours_id?: SortOrder
    exams_id?: SortOrder
    degrees_id?: SortOrder
    require_id?: SortOrder
  }

  export type subjectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject_code?: SortOrder
    hours_id?: SortOrder
    exams_id?: SortOrder
    degrees_id?: SortOrder
    require_id?: SortOrder
  }

  export type subjectsSumOrderByAggregateInput = {
    id?: SortOrder
    hours_id?: SortOrder
    exams_id?: SortOrder
    degrees_id?: SortOrder
    require_id?: SortOrder
  }

  export type Enumteachers_degreeFilter<$PrismaModel = never> = {
    equals?: $Enums.teachers_degree | Enumteachers_degreeFieldRefInput<$PrismaModel>
    in?: $Enums.teachers_degree[]
    notIn?: $Enums.teachers_degree[]
    not?: NestedEnumteachers_degreeFilter<$PrismaModel> | $Enums.teachers_degree
  }

  export type teachersOrderByRelevanceInput = {
    fields: teachersOrderByRelevanceFieldEnum | teachersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type teachersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    degree?: SortOrder
  }

  export type teachersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type teachersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    degree?: SortOrder
  }

  export type teachersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    degree?: SortOrder
  }

  export type teachersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumteachers_degreeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.teachers_degree | Enumteachers_degreeFieldRefInput<$PrismaModel>
    in?: $Enums.teachers_degree[]
    notIn?: $Enums.teachers_degree[]
    not?: NestedEnumteachers_degreeWithAggregatesFilter<$PrismaModel> | $Enums.teachers_degree
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumteachers_degreeFilter<$PrismaModel>
    _max?: NestedEnumteachers_degreeFilter<$PrismaModel>
  }

  export type TeachersScalarRelationFilter = {
    is?: teachersWhereInput
    isNot?: teachersWhereInput
  }

  export type teachers_jobsOrderByRelevanceInput = {
    fields: teachers_jobsOrderByRelevanceFieldEnum | teachers_jobsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type teachers_jobsCountOrderByAggregateInput = {
    id?: SortOrder
    jobs?: SortOrder
    teacher_id?: SortOrder
    depart_id?: SortOrder
  }

  export type teachers_jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    depart_id?: SortOrder
  }

  export type teachers_jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    jobs?: SortOrder
    teacher_id?: SortOrder
    depart_id?: SortOrder
  }

  export type teachers_jobsMinOrderByAggregateInput = {
    id?: SortOrder
    jobs?: SortOrder
    teacher_id?: SortOrder
    depart_id?: SortOrder
  }

  export type teachers_jobsSumOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    depart_id?: SortOrder
  }

  export type duration_plansCreateNestedOneWithoutClassrooms_classrooms_duration_plansToduration_plansInput = {
    create?: XOR<duration_plansCreateWithoutClassrooms_classrooms_duration_plansToduration_plansInput, duration_plansUncheckedCreateWithoutClassrooms_classrooms_duration_plansToduration_plansInput>
    connectOrCreate?: duration_plansCreateOrConnectWithoutClassrooms_classrooms_duration_plansToduration_plansInput
    connect?: duration_plansWhereUniqueInput
  }

  export type subjectsCreateNestedOneWithoutClassroomsInput = {
    create?: XOR<subjectsCreateWithoutClassroomsInput, subjectsUncheckedCreateWithoutClassroomsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutClassroomsInput
    connect?: subjectsWhereUniqueInput
  }

  export type teachersCreateNestedOneWithoutClassroomsInput = {
    create?: XOR<teachersCreateWithoutClassroomsInput, teachersUncheckedCreateWithoutClassroomsInput>
    connectOrCreate?: teachersCreateOrConnectWithoutClassroomsInput
    connect?: teachersWhereUniqueInput
  }

  export type resultsCreateNestedManyWithoutClassroomsInput = {
    create?: XOR<resultsCreateWithoutClassroomsInput, resultsUncheckedCreateWithoutClassroomsInput> | resultsCreateWithoutClassroomsInput[] | resultsUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: resultsCreateOrConnectWithoutClassroomsInput | resultsCreateOrConnectWithoutClassroomsInput[]
    createMany?: resultsCreateManyClassroomsInputEnvelope
    connect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
  }

  export type resultsUncheckedCreateNestedManyWithoutClassroomsInput = {
    create?: XOR<resultsCreateWithoutClassroomsInput, resultsUncheckedCreateWithoutClassroomsInput> | resultsCreateWithoutClassroomsInput[] | resultsUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: resultsCreateOrConnectWithoutClassroomsInput | resultsCreateOrConnectWithoutClassroomsInput[]
    createMany?: resultsCreateManyClassroomsInputEnvelope
    connect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
  }

  export type duration_plansUpdateOneRequiredWithoutClassrooms_classrooms_duration_plansToduration_plansNestedInput = {
    create?: XOR<duration_plansCreateWithoutClassrooms_classrooms_duration_plansToduration_plansInput, duration_plansUncheckedCreateWithoutClassrooms_classrooms_duration_plansToduration_plansInput>
    connectOrCreate?: duration_plansCreateOrConnectWithoutClassrooms_classrooms_duration_plansToduration_plansInput
    upsert?: duration_plansUpsertWithoutClassrooms_classrooms_duration_plansToduration_plansInput
    connect?: duration_plansWhereUniqueInput
    update?: XOR<XOR<duration_plansUpdateToOneWithWhereWithoutClassrooms_classrooms_duration_plansToduration_plansInput, duration_plansUpdateWithoutClassrooms_classrooms_duration_plansToduration_plansInput>, duration_plansUncheckedUpdateWithoutClassrooms_classrooms_duration_plansToduration_plansInput>
  }

  export type subjectsUpdateOneRequiredWithoutClassroomsNestedInput = {
    create?: XOR<subjectsCreateWithoutClassroomsInput, subjectsUncheckedCreateWithoutClassroomsInput>
    connectOrCreate?: subjectsCreateOrConnectWithoutClassroomsInput
    upsert?: subjectsUpsertWithoutClassroomsInput
    connect?: subjectsWhereUniqueInput
    update?: XOR<XOR<subjectsUpdateToOneWithWhereWithoutClassroomsInput, subjectsUpdateWithoutClassroomsInput>, subjectsUncheckedUpdateWithoutClassroomsInput>
  }

  export type teachersUpdateOneWithoutClassroomsNestedInput = {
    create?: XOR<teachersCreateWithoutClassroomsInput, teachersUncheckedCreateWithoutClassroomsInput>
    connectOrCreate?: teachersCreateOrConnectWithoutClassroomsInput
    upsert?: teachersUpsertWithoutClassroomsInput
    disconnect?: teachersWhereInput | boolean
    delete?: teachersWhereInput | boolean
    connect?: teachersWhereUniqueInput
    update?: XOR<XOR<teachersUpdateToOneWithWhereWithoutClassroomsInput, teachersUpdateWithoutClassroomsInput>, teachersUncheckedUpdateWithoutClassroomsInput>
  }

  export type resultsUpdateManyWithoutClassroomsNestedInput = {
    create?: XOR<resultsCreateWithoutClassroomsInput, resultsUncheckedCreateWithoutClassroomsInput> | resultsCreateWithoutClassroomsInput[] | resultsUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: resultsCreateOrConnectWithoutClassroomsInput | resultsCreateOrConnectWithoutClassroomsInput[]
    upsert?: resultsUpsertWithWhereUniqueWithoutClassroomsInput | resultsUpsertWithWhereUniqueWithoutClassroomsInput[]
    createMany?: resultsCreateManyClassroomsInputEnvelope
    set?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    disconnect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    delete?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    connect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    update?: resultsUpdateWithWhereUniqueWithoutClassroomsInput | resultsUpdateWithWhereUniqueWithoutClassroomsInput[]
    updateMany?: resultsUpdateManyWithWhereWithoutClassroomsInput | resultsUpdateManyWithWhereWithoutClassroomsInput[]
    deleteMany?: resultsScalarWhereInput | resultsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type resultsUncheckedUpdateManyWithoutClassroomsNestedInput = {
    create?: XOR<resultsCreateWithoutClassroomsInput, resultsUncheckedCreateWithoutClassroomsInput> | resultsCreateWithoutClassroomsInput[] | resultsUncheckedCreateWithoutClassroomsInput[]
    connectOrCreate?: resultsCreateOrConnectWithoutClassroomsInput | resultsCreateOrConnectWithoutClassroomsInput[]
    upsert?: resultsUpsertWithWhereUniqueWithoutClassroomsInput | resultsUpsertWithWhereUniqueWithoutClassroomsInput[]
    createMany?: resultsCreateManyClassroomsInputEnvelope
    set?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    disconnect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    delete?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    connect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    update?: resultsUpdateWithWhereUniqueWithoutClassroomsInput | resultsUpdateWithWhereUniqueWithoutClassroomsInput[]
    updateMany?: resultsUpdateManyWithWhereWithoutClassroomsInput | resultsUpdateManyWithWhereWithoutClassroomsInput[]
    deleteMany?: resultsScalarWhereInput | resultsScalarWhereInput[]
  }

  export type subjectsCreateNestedManyWithoutDegree_planInput = {
    create?: XOR<subjectsCreateWithoutDegree_planInput, subjectsUncheckedCreateWithoutDegree_planInput> | subjectsCreateWithoutDegree_planInput[] | subjectsUncheckedCreateWithoutDegree_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutDegree_planInput | subjectsCreateOrConnectWithoutDegree_planInput[]
    createMany?: subjectsCreateManyDegree_planInputEnvelope
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
  }

  export type subjectsUncheckedCreateNestedManyWithoutDegree_planInput = {
    create?: XOR<subjectsCreateWithoutDegree_planInput, subjectsUncheckedCreateWithoutDegree_planInput> | subjectsCreateWithoutDegree_planInput[] | subjectsUncheckedCreateWithoutDegree_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutDegree_planInput | subjectsCreateOrConnectWithoutDegree_planInput[]
    createMany?: subjectsCreateManyDegree_planInputEnvelope
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
  }

  export type subjectsUpdateManyWithoutDegree_planNestedInput = {
    create?: XOR<subjectsCreateWithoutDegree_planInput, subjectsUncheckedCreateWithoutDegree_planInput> | subjectsCreateWithoutDegree_planInput[] | subjectsUncheckedCreateWithoutDegree_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutDegree_planInput | subjectsCreateOrConnectWithoutDegree_planInput[]
    upsert?: subjectsUpsertWithWhereUniqueWithoutDegree_planInput | subjectsUpsertWithWhereUniqueWithoutDegree_planInput[]
    createMany?: subjectsCreateManyDegree_planInputEnvelope
    set?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    disconnect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    delete?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    update?: subjectsUpdateWithWhereUniqueWithoutDegree_planInput | subjectsUpdateWithWhereUniqueWithoutDegree_planInput[]
    updateMany?: subjectsUpdateManyWithWhereWithoutDegree_planInput | subjectsUpdateManyWithWhereWithoutDegree_planInput[]
    deleteMany?: subjectsScalarWhereInput | subjectsScalarWhereInput[]
  }

  export type subjectsUncheckedUpdateManyWithoutDegree_planNestedInput = {
    create?: XOR<subjectsCreateWithoutDegree_planInput, subjectsUncheckedCreateWithoutDegree_planInput> | subjectsCreateWithoutDegree_planInput[] | subjectsUncheckedCreateWithoutDegree_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutDegree_planInput | subjectsCreateOrConnectWithoutDegree_planInput[]
    upsert?: subjectsUpsertWithWhereUniqueWithoutDegree_planInput | subjectsUpsertWithWhereUniqueWithoutDegree_planInput[]
    createMany?: subjectsCreateManyDegree_planInputEnvelope
    set?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    disconnect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    delete?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    update?: subjectsUpdateWithWhereUniqueWithoutDegree_planInput | subjectsUpdateWithWhereUniqueWithoutDegree_planInput[]
    updateMany?: subjectsUpdateManyWithWhereWithoutDegree_planInput | subjectsUpdateManyWithWhereWithoutDegree_planInput[]
    deleteMany?: subjectsScalarWhereInput | subjectsScalarWhereInput[]
  }

  export type learning_programsCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<learning_programsCreateWithoutDepartmentInput, learning_programsUncheckedCreateWithoutDepartmentInput> | learning_programsCreateWithoutDepartmentInput[] | learning_programsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutDepartmentInput | learning_programsCreateOrConnectWithoutDepartmentInput[]
    createMany?: learning_programsCreateManyDepartmentInputEnvelope
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
  }

  export type specializationCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<specializationCreateWithoutDepartmentInput, specializationUncheckedCreateWithoutDepartmentInput> | specializationCreateWithoutDepartmentInput[] | specializationUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: specializationCreateOrConnectWithoutDepartmentInput | specializationCreateOrConnectWithoutDepartmentInput[]
    createMany?: specializationCreateManyDepartmentInputEnvelope
    connect?: specializationWhereUniqueInput | specializationWhereUniqueInput[]
  }

  export type teachers_jobsCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<teachers_jobsCreateWithoutDepartmentInput, teachers_jobsUncheckedCreateWithoutDepartmentInput> | teachers_jobsCreateWithoutDepartmentInput[] | teachers_jobsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: teachers_jobsCreateOrConnectWithoutDepartmentInput | teachers_jobsCreateOrConnectWithoutDepartmentInput[]
    createMany?: teachers_jobsCreateManyDepartmentInputEnvelope
    connect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
  }

  export type learning_programsUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<learning_programsCreateWithoutDepartmentInput, learning_programsUncheckedCreateWithoutDepartmentInput> | learning_programsCreateWithoutDepartmentInput[] | learning_programsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutDepartmentInput | learning_programsCreateOrConnectWithoutDepartmentInput[]
    createMany?: learning_programsCreateManyDepartmentInputEnvelope
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
  }

  export type specializationUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<specializationCreateWithoutDepartmentInput, specializationUncheckedCreateWithoutDepartmentInput> | specializationCreateWithoutDepartmentInput[] | specializationUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: specializationCreateOrConnectWithoutDepartmentInput | specializationCreateOrConnectWithoutDepartmentInput[]
    createMany?: specializationCreateManyDepartmentInputEnvelope
    connect?: specializationWhereUniqueInput | specializationWhereUniqueInput[]
  }

  export type teachers_jobsUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<teachers_jobsCreateWithoutDepartmentInput, teachers_jobsUncheckedCreateWithoutDepartmentInput> | teachers_jobsCreateWithoutDepartmentInput[] | teachers_jobsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: teachers_jobsCreateOrConnectWithoutDepartmentInput | teachers_jobsCreateOrConnectWithoutDepartmentInput[]
    createMany?: teachers_jobsCreateManyDepartmentInputEnvelope
    connect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type learning_programsUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<learning_programsCreateWithoutDepartmentInput, learning_programsUncheckedCreateWithoutDepartmentInput> | learning_programsCreateWithoutDepartmentInput[] | learning_programsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutDepartmentInput | learning_programsCreateOrConnectWithoutDepartmentInput[]
    upsert?: learning_programsUpsertWithWhereUniqueWithoutDepartmentInput | learning_programsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: learning_programsCreateManyDepartmentInputEnvelope
    set?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    disconnect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    delete?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    update?: learning_programsUpdateWithWhereUniqueWithoutDepartmentInput | learning_programsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: learning_programsUpdateManyWithWhereWithoutDepartmentInput | learning_programsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: learning_programsScalarWhereInput | learning_programsScalarWhereInput[]
  }

  export type specializationUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<specializationCreateWithoutDepartmentInput, specializationUncheckedCreateWithoutDepartmentInput> | specializationCreateWithoutDepartmentInput[] | specializationUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: specializationCreateOrConnectWithoutDepartmentInput | specializationCreateOrConnectWithoutDepartmentInput[]
    upsert?: specializationUpsertWithWhereUniqueWithoutDepartmentInput | specializationUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: specializationCreateManyDepartmentInputEnvelope
    set?: specializationWhereUniqueInput | specializationWhereUniqueInput[]
    disconnect?: specializationWhereUniqueInput | specializationWhereUniqueInput[]
    delete?: specializationWhereUniqueInput | specializationWhereUniqueInput[]
    connect?: specializationWhereUniqueInput | specializationWhereUniqueInput[]
    update?: specializationUpdateWithWhereUniqueWithoutDepartmentInput | specializationUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: specializationUpdateManyWithWhereWithoutDepartmentInput | specializationUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: specializationScalarWhereInput | specializationScalarWhereInput[]
  }

  export type teachers_jobsUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<teachers_jobsCreateWithoutDepartmentInput, teachers_jobsUncheckedCreateWithoutDepartmentInput> | teachers_jobsCreateWithoutDepartmentInput[] | teachers_jobsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: teachers_jobsCreateOrConnectWithoutDepartmentInput | teachers_jobsCreateOrConnectWithoutDepartmentInput[]
    upsert?: teachers_jobsUpsertWithWhereUniqueWithoutDepartmentInput | teachers_jobsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: teachers_jobsCreateManyDepartmentInputEnvelope
    set?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    disconnect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    delete?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    connect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    update?: teachers_jobsUpdateWithWhereUniqueWithoutDepartmentInput | teachers_jobsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: teachers_jobsUpdateManyWithWhereWithoutDepartmentInput | teachers_jobsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: teachers_jobsScalarWhereInput | teachers_jobsScalarWhereInput[]
  }

  export type learning_programsUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<learning_programsCreateWithoutDepartmentInput, learning_programsUncheckedCreateWithoutDepartmentInput> | learning_programsCreateWithoutDepartmentInput[] | learning_programsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutDepartmentInput | learning_programsCreateOrConnectWithoutDepartmentInput[]
    upsert?: learning_programsUpsertWithWhereUniqueWithoutDepartmentInput | learning_programsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: learning_programsCreateManyDepartmentInputEnvelope
    set?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    disconnect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    delete?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    update?: learning_programsUpdateWithWhereUniqueWithoutDepartmentInput | learning_programsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: learning_programsUpdateManyWithWhereWithoutDepartmentInput | learning_programsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: learning_programsScalarWhereInput | learning_programsScalarWhereInput[]
  }

  export type specializationUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<specializationCreateWithoutDepartmentInput, specializationUncheckedCreateWithoutDepartmentInput> | specializationCreateWithoutDepartmentInput[] | specializationUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: specializationCreateOrConnectWithoutDepartmentInput | specializationCreateOrConnectWithoutDepartmentInput[]
    upsert?: specializationUpsertWithWhereUniqueWithoutDepartmentInput | specializationUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: specializationCreateManyDepartmentInputEnvelope
    set?: specializationWhereUniqueInput | specializationWhereUniqueInput[]
    disconnect?: specializationWhereUniqueInput | specializationWhereUniqueInput[]
    delete?: specializationWhereUniqueInput | specializationWhereUniqueInput[]
    connect?: specializationWhereUniqueInput | specializationWhereUniqueInput[]
    update?: specializationUpdateWithWhereUniqueWithoutDepartmentInput | specializationUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: specializationUpdateManyWithWhereWithoutDepartmentInput | specializationUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: specializationScalarWhereInput | specializationScalarWhereInput[]
  }

  export type teachers_jobsUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<teachers_jobsCreateWithoutDepartmentInput, teachers_jobsUncheckedCreateWithoutDepartmentInput> | teachers_jobsCreateWithoutDepartmentInput[] | teachers_jobsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: teachers_jobsCreateOrConnectWithoutDepartmentInput | teachers_jobsCreateOrConnectWithoutDepartmentInput[]
    upsert?: teachers_jobsUpsertWithWhereUniqueWithoutDepartmentInput | teachers_jobsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: teachers_jobsCreateManyDepartmentInputEnvelope
    set?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    disconnect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    delete?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    connect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    update?: teachers_jobsUpdateWithWhereUniqueWithoutDepartmentInput | teachers_jobsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: teachers_jobsUpdateManyWithWhereWithoutDepartmentInput | teachers_jobsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: teachers_jobsScalarWhereInput | teachers_jobsScalarWhereInput[]
  }

  export type classroomsCreateNestedManyWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    create?: XOR<classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput, classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput> | classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[] | classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsCreateOrConnectWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    createMany?: classroomsCreateManyDuration_plans_classrooms_duration_plansToduration_plansInputEnvelope
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
  }

  export type classroomsUncheckedCreateNestedManyWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    create?: XOR<classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput, classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput> | classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[] | classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsCreateOrConnectWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    createMany?: classroomsCreateManyDuration_plans_classrooms_duration_plansToduration_plansInputEnvelope
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
  }

  export type Enumduration_plans_termFieldUpdateOperationsInput = {
    set?: $Enums.duration_plans_term
  }

  export type classroomsUpdateManyWithoutDuration_plans_classrooms_duration_plansToduration_plansNestedInput = {
    create?: XOR<classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput, classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput> | classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[] | classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsCreateOrConnectWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    upsert?: classroomsUpsertWithWhereUniqueWithoutDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsUpsertWithWhereUniqueWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    createMany?: classroomsCreateManyDuration_plans_classrooms_duration_plansToduration_plansInputEnvelope
    set?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    disconnect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    delete?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    update?: classroomsUpdateWithWhereUniqueWithoutDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsUpdateWithWhereUniqueWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    updateMany?: classroomsUpdateManyWithWhereWithoutDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsUpdateManyWithWhereWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    deleteMany?: classroomsScalarWhereInput | classroomsScalarWhereInput[]
  }

  export type classroomsUncheckedUpdateManyWithoutDuration_plans_classrooms_duration_plansToduration_plansNestedInput = {
    create?: XOR<classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput, classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput> | classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[] | classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsCreateOrConnectWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    upsert?: classroomsUpsertWithWhereUniqueWithoutDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsUpsertWithWhereUniqueWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    createMany?: classroomsCreateManyDuration_plans_classrooms_duration_plansToduration_plansInputEnvelope
    set?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    disconnect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    delete?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    update?: classroomsUpdateWithWhereUniqueWithoutDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsUpdateWithWhereUniqueWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    updateMany?: classroomsUpdateManyWithWhereWithoutDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsUpdateManyWithWhereWithoutDuration_plans_classrooms_duration_plansToduration_plansInput[]
    deleteMany?: classroomsScalarWhereInput | classroomsScalarWhereInput[]
  }

  export type subjectsCreateNestedManyWithoutExam_planInput = {
    create?: XOR<subjectsCreateWithoutExam_planInput, subjectsUncheckedCreateWithoutExam_planInput> | subjectsCreateWithoutExam_planInput[] | subjectsUncheckedCreateWithoutExam_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutExam_planInput | subjectsCreateOrConnectWithoutExam_planInput[]
    createMany?: subjectsCreateManyExam_planInputEnvelope
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
  }

  export type subjectsUncheckedCreateNestedManyWithoutExam_planInput = {
    create?: XOR<subjectsCreateWithoutExam_planInput, subjectsUncheckedCreateWithoutExam_planInput> | subjectsCreateWithoutExam_planInput[] | subjectsUncheckedCreateWithoutExam_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutExam_planInput | subjectsCreateOrConnectWithoutExam_planInput[]
    createMany?: subjectsCreateManyExam_planInputEnvelope
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
  }

  export type subjectsUpdateManyWithoutExam_planNestedInput = {
    create?: XOR<subjectsCreateWithoutExam_planInput, subjectsUncheckedCreateWithoutExam_planInput> | subjectsCreateWithoutExam_planInput[] | subjectsUncheckedCreateWithoutExam_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutExam_planInput | subjectsCreateOrConnectWithoutExam_planInput[]
    upsert?: subjectsUpsertWithWhereUniqueWithoutExam_planInput | subjectsUpsertWithWhereUniqueWithoutExam_planInput[]
    createMany?: subjectsCreateManyExam_planInputEnvelope
    set?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    disconnect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    delete?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    update?: subjectsUpdateWithWhereUniqueWithoutExam_planInput | subjectsUpdateWithWhereUniqueWithoutExam_planInput[]
    updateMany?: subjectsUpdateManyWithWhereWithoutExam_planInput | subjectsUpdateManyWithWhereWithoutExam_planInput[]
    deleteMany?: subjectsScalarWhereInput | subjectsScalarWhereInput[]
  }

  export type subjectsUncheckedUpdateManyWithoutExam_planNestedInput = {
    create?: XOR<subjectsCreateWithoutExam_planInput, subjectsUncheckedCreateWithoutExam_planInput> | subjectsCreateWithoutExam_planInput[] | subjectsUncheckedCreateWithoutExam_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutExam_planInput | subjectsCreateOrConnectWithoutExam_planInput[]
    upsert?: subjectsUpsertWithWhereUniqueWithoutExam_planInput | subjectsUpsertWithWhereUniqueWithoutExam_planInput[]
    createMany?: subjectsCreateManyExam_planInputEnvelope
    set?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    disconnect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    delete?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    update?: subjectsUpdateWithWhereUniqueWithoutExam_planInput | subjectsUpdateWithWhereUniqueWithoutExam_planInput[]
    updateMany?: subjectsUpdateManyWithWhereWithoutExam_planInput | subjectsUpdateManyWithWhereWithoutExam_planInput[]
    deleteMany?: subjectsScalarWhereInput | subjectsScalarWhereInput[]
  }

  export type subjectsCreateNestedManyWithoutHour_planInput = {
    create?: XOR<subjectsCreateWithoutHour_planInput, subjectsUncheckedCreateWithoutHour_planInput> | subjectsCreateWithoutHour_planInput[] | subjectsUncheckedCreateWithoutHour_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutHour_planInput | subjectsCreateOrConnectWithoutHour_planInput[]
    createMany?: subjectsCreateManyHour_planInputEnvelope
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
  }

  export type subjectsUncheckedCreateNestedManyWithoutHour_planInput = {
    create?: XOR<subjectsCreateWithoutHour_planInput, subjectsUncheckedCreateWithoutHour_planInput> | subjectsCreateWithoutHour_planInput[] | subjectsUncheckedCreateWithoutHour_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutHour_planInput | subjectsCreateOrConnectWithoutHour_planInput[]
    createMany?: subjectsCreateManyHour_planInputEnvelope
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
  }

  export type subjectsUpdateManyWithoutHour_planNestedInput = {
    create?: XOR<subjectsCreateWithoutHour_planInput, subjectsUncheckedCreateWithoutHour_planInput> | subjectsCreateWithoutHour_planInput[] | subjectsUncheckedCreateWithoutHour_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutHour_planInput | subjectsCreateOrConnectWithoutHour_planInput[]
    upsert?: subjectsUpsertWithWhereUniqueWithoutHour_planInput | subjectsUpsertWithWhereUniqueWithoutHour_planInput[]
    createMany?: subjectsCreateManyHour_planInputEnvelope
    set?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    disconnect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    delete?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    update?: subjectsUpdateWithWhereUniqueWithoutHour_planInput | subjectsUpdateWithWhereUniqueWithoutHour_planInput[]
    updateMany?: subjectsUpdateManyWithWhereWithoutHour_planInput | subjectsUpdateManyWithWhereWithoutHour_planInput[]
    deleteMany?: subjectsScalarWhereInput | subjectsScalarWhereInput[]
  }

  export type subjectsUncheckedUpdateManyWithoutHour_planNestedInput = {
    create?: XOR<subjectsCreateWithoutHour_planInput, subjectsUncheckedCreateWithoutHour_planInput> | subjectsCreateWithoutHour_planInput[] | subjectsUncheckedCreateWithoutHour_planInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutHour_planInput | subjectsCreateOrConnectWithoutHour_planInput[]
    upsert?: subjectsUpsertWithWhereUniqueWithoutHour_planInput | subjectsUpsertWithWhereUniqueWithoutHour_planInput[]
    createMany?: subjectsCreateManyHour_planInputEnvelope
    set?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    disconnect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    delete?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    update?: subjectsUpdateWithWhereUniqueWithoutHour_planInput | subjectsUpdateWithWhereUniqueWithoutHour_planInput[]
    updateMany?: subjectsUpdateManyWithWhereWithoutHour_planInput | subjectsUpdateManyWithWhereWithoutHour_planInput[]
    deleteMany?: subjectsScalarWhereInput | subjectsScalarWhereInput[]
  }

  export type departmentCreateNestedOneWithoutLearning_programsInput = {
    create?: XOR<departmentCreateWithoutLearning_programsInput, departmentUncheckedCreateWithoutLearning_programsInput>
    connectOrCreate?: departmentCreateOrConnectWithoutLearning_programsInput
    connect?: departmentWhereUniqueInput
  }

  export type teachersCreateNestedOneWithoutLearning_programs_learning_programs_advisorToteachersInput = {
    create?: XOR<teachersCreateWithoutLearning_programs_learning_programs_advisorToteachersInput, teachersUncheckedCreateWithoutLearning_programs_learning_programs_advisorToteachersInput>
    connectOrCreate?: teachersCreateOrConnectWithoutLearning_programs_learning_programs_advisorToteachersInput
    connect?: teachersWhereUniqueInput
  }

  export type teachersCreateNestedOneWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput = {
    create?: XOR<teachersCreateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput, teachersUncheckedCreateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput>
    connectOrCreate?: teachersCreateOrConnectWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput
    connect?: teachersWhereUniqueInput
  }

  export type program_requirementsCreateNestedManyWithoutLearning_programsInput = {
    create?: XOR<program_requirementsCreateWithoutLearning_programsInput, program_requirementsUncheckedCreateWithoutLearning_programsInput> | program_requirementsCreateWithoutLearning_programsInput[] | program_requirementsUncheckedCreateWithoutLearning_programsInput[]
    connectOrCreate?: program_requirementsCreateOrConnectWithoutLearning_programsInput | program_requirementsCreateOrConnectWithoutLearning_programsInput[]
    createMany?: program_requirementsCreateManyLearning_programsInputEnvelope
    connect?: program_requirementsWhereUniqueInput | program_requirementsWhereUniqueInput[]
  }

  export type program_requirementsUncheckedCreateNestedManyWithoutLearning_programsInput = {
    create?: XOR<program_requirementsCreateWithoutLearning_programsInput, program_requirementsUncheckedCreateWithoutLearning_programsInput> | program_requirementsCreateWithoutLearning_programsInput[] | program_requirementsUncheckedCreateWithoutLearning_programsInput[]
    connectOrCreate?: program_requirementsCreateOrConnectWithoutLearning_programsInput | program_requirementsCreateOrConnectWithoutLearning_programsInput[]
    createMany?: program_requirementsCreateManyLearning_programsInputEnvelope
    connect?: program_requirementsWhereUniqueInput | program_requirementsWhereUniqueInput[]
  }

  export type departmentUpdateOneRequiredWithoutLearning_programsNestedInput = {
    create?: XOR<departmentCreateWithoutLearning_programsInput, departmentUncheckedCreateWithoutLearning_programsInput>
    connectOrCreate?: departmentCreateOrConnectWithoutLearning_programsInput
    upsert?: departmentUpsertWithoutLearning_programsInput
    connect?: departmentWhereUniqueInput
    update?: XOR<XOR<departmentUpdateToOneWithWhereWithoutLearning_programsInput, departmentUpdateWithoutLearning_programsInput>, departmentUncheckedUpdateWithoutLearning_programsInput>
  }

  export type teachersUpdateOneWithoutLearning_programs_learning_programs_advisorToteachersNestedInput = {
    create?: XOR<teachersCreateWithoutLearning_programs_learning_programs_advisorToteachersInput, teachersUncheckedCreateWithoutLearning_programs_learning_programs_advisorToteachersInput>
    connectOrCreate?: teachersCreateOrConnectWithoutLearning_programs_learning_programs_advisorToteachersInput
    upsert?: teachersUpsertWithoutLearning_programs_learning_programs_advisorToteachersInput
    disconnect?: teachersWhereInput | boolean
    delete?: teachersWhereInput | boolean
    connect?: teachersWhereUniqueInput
    update?: XOR<XOR<teachersUpdateToOneWithWhereWithoutLearning_programs_learning_programs_advisorToteachersInput, teachersUpdateWithoutLearning_programs_learning_programs_advisorToteachersInput>, teachersUncheckedUpdateWithoutLearning_programs_learning_programs_advisorToteachersInput>
  }

  export type teachersUpdateOneWithoutLearning_programs_learning_programs_advisor_assistantToteachersNestedInput = {
    create?: XOR<teachersCreateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput, teachersUncheckedCreateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput>
    connectOrCreate?: teachersCreateOrConnectWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput
    upsert?: teachersUpsertWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput
    disconnect?: teachersWhereInput | boolean
    delete?: teachersWhereInput | boolean
    connect?: teachersWhereUniqueInput
    update?: XOR<XOR<teachersUpdateToOneWithWhereWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput, teachersUpdateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput>, teachersUncheckedUpdateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput>
  }

  export type program_requirementsUpdateManyWithoutLearning_programsNestedInput = {
    create?: XOR<program_requirementsCreateWithoutLearning_programsInput, program_requirementsUncheckedCreateWithoutLearning_programsInput> | program_requirementsCreateWithoutLearning_programsInput[] | program_requirementsUncheckedCreateWithoutLearning_programsInput[]
    connectOrCreate?: program_requirementsCreateOrConnectWithoutLearning_programsInput | program_requirementsCreateOrConnectWithoutLearning_programsInput[]
    upsert?: program_requirementsUpsertWithWhereUniqueWithoutLearning_programsInput | program_requirementsUpsertWithWhereUniqueWithoutLearning_programsInput[]
    createMany?: program_requirementsCreateManyLearning_programsInputEnvelope
    set?: program_requirementsWhereUniqueInput | program_requirementsWhereUniqueInput[]
    disconnect?: program_requirementsWhereUniqueInput | program_requirementsWhereUniqueInput[]
    delete?: program_requirementsWhereUniqueInput | program_requirementsWhereUniqueInput[]
    connect?: program_requirementsWhereUniqueInput | program_requirementsWhereUniqueInput[]
    update?: program_requirementsUpdateWithWhereUniqueWithoutLearning_programsInput | program_requirementsUpdateWithWhereUniqueWithoutLearning_programsInput[]
    updateMany?: program_requirementsUpdateManyWithWhereWithoutLearning_programsInput | program_requirementsUpdateManyWithWhereWithoutLearning_programsInput[]
    deleteMany?: program_requirementsScalarWhereInput | program_requirementsScalarWhereInput[]
  }

  export type program_requirementsUncheckedUpdateManyWithoutLearning_programsNestedInput = {
    create?: XOR<program_requirementsCreateWithoutLearning_programsInput, program_requirementsUncheckedCreateWithoutLearning_programsInput> | program_requirementsCreateWithoutLearning_programsInput[] | program_requirementsUncheckedCreateWithoutLearning_programsInput[]
    connectOrCreate?: program_requirementsCreateOrConnectWithoutLearning_programsInput | program_requirementsCreateOrConnectWithoutLearning_programsInput[]
    upsert?: program_requirementsUpsertWithWhereUniqueWithoutLearning_programsInput | program_requirementsUpsertWithWhereUniqueWithoutLearning_programsInput[]
    createMany?: program_requirementsCreateManyLearning_programsInputEnvelope
    set?: program_requirementsWhereUniqueInput | program_requirementsWhereUniqueInput[]
    disconnect?: program_requirementsWhereUniqueInput | program_requirementsWhereUniqueInput[]
    delete?: program_requirementsWhereUniqueInput | program_requirementsWhereUniqueInput[]
    connect?: program_requirementsWhereUniqueInput | program_requirementsWhereUniqueInput[]
    update?: program_requirementsUpdateWithWhereUniqueWithoutLearning_programsInput | program_requirementsUpdateWithWhereUniqueWithoutLearning_programsInput[]
    updateMany?: program_requirementsUpdateManyWithWhereWithoutLearning_programsInput | program_requirementsUpdateManyWithWhereWithoutLearning_programsInput[]
    deleteMany?: program_requirementsScalarWhereInput | program_requirementsScalarWhereInput[]
  }

  export type learning_programsCreateNestedOneWithoutProgram_requirementsInput = {
    create?: XOR<learning_programsCreateWithoutProgram_requirementsInput, learning_programsUncheckedCreateWithoutProgram_requirementsInput>
    connectOrCreate?: learning_programsCreateOrConnectWithoutProgram_requirementsInput
    connect?: learning_programsWhereUniqueInput
  }

  export type subjectsCreateNestedManyWithoutProgram_requirementsInput = {
    create?: XOR<subjectsCreateWithoutProgram_requirementsInput, subjectsUncheckedCreateWithoutProgram_requirementsInput> | subjectsCreateWithoutProgram_requirementsInput[] | subjectsUncheckedCreateWithoutProgram_requirementsInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutProgram_requirementsInput | subjectsCreateOrConnectWithoutProgram_requirementsInput[]
    createMany?: subjectsCreateManyProgram_requirementsInputEnvelope
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
  }

  export type subjectsUncheckedCreateNestedManyWithoutProgram_requirementsInput = {
    create?: XOR<subjectsCreateWithoutProgram_requirementsInput, subjectsUncheckedCreateWithoutProgram_requirementsInput> | subjectsCreateWithoutProgram_requirementsInput[] | subjectsUncheckedCreateWithoutProgram_requirementsInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutProgram_requirementsInput | subjectsCreateOrConnectWithoutProgram_requirementsInput[]
    createMany?: subjectsCreateManyProgram_requirementsInputEnvelope
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
  }

  export type Enumprogram_requirements_typeFieldUpdateOperationsInput = {
    set?: $Enums.program_requirements_type
  }

  export type learning_programsUpdateOneRequiredWithoutProgram_requirementsNestedInput = {
    create?: XOR<learning_programsCreateWithoutProgram_requirementsInput, learning_programsUncheckedCreateWithoutProgram_requirementsInput>
    connectOrCreate?: learning_programsCreateOrConnectWithoutProgram_requirementsInput
    upsert?: learning_programsUpsertWithoutProgram_requirementsInput
    connect?: learning_programsWhereUniqueInput
    update?: XOR<XOR<learning_programsUpdateToOneWithWhereWithoutProgram_requirementsInput, learning_programsUpdateWithoutProgram_requirementsInput>, learning_programsUncheckedUpdateWithoutProgram_requirementsInput>
  }

  export type subjectsUpdateManyWithoutProgram_requirementsNestedInput = {
    create?: XOR<subjectsCreateWithoutProgram_requirementsInput, subjectsUncheckedCreateWithoutProgram_requirementsInput> | subjectsCreateWithoutProgram_requirementsInput[] | subjectsUncheckedCreateWithoutProgram_requirementsInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutProgram_requirementsInput | subjectsCreateOrConnectWithoutProgram_requirementsInput[]
    upsert?: subjectsUpsertWithWhereUniqueWithoutProgram_requirementsInput | subjectsUpsertWithWhereUniqueWithoutProgram_requirementsInput[]
    createMany?: subjectsCreateManyProgram_requirementsInputEnvelope
    set?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    disconnect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    delete?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    update?: subjectsUpdateWithWhereUniqueWithoutProgram_requirementsInput | subjectsUpdateWithWhereUniqueWithoutProgram_requirementsInput[]
    updateMany?: subjectsUpdateManyWithWhereWithoutProgram_requirementsInput | subjectsUpdateManyWithWhereWithoutProgram_requirementsInput[]
    deleteMany?: subjectsScalarWhereInput | subjectsScalarWhereInput[]
  }

  export type subjectsUncheckedUpdateManyWithoutProgram_requirementsNestedInput = {
    create?: XOR<subjectsCreateWithoutProgram_requirementsInput, subjectsUncheckedCreateWithoutProgram_requirementsInput> | subjectsCreateWithoutProgram_requirementsInput[] | subjectsUncheckedCreateWithoutProgram_requirementsInput[]
    connectOrCreate?: subjectsCreateOrConnectWithoutProgram_requirementsInput | subjectsCreateOrConnectWithoutProgram_requirementsInput[]
    upsert?: subjectsUpsertWithWhereUniqueWithoutProgram_requirementsInput | subjectsUpsertWithWhereUniqueWithoutProgram_requirementsInput[]
    createMany?: subjectsCreateManyProgram_requirementsInputEnvelope
    set?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    disconnect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    delete?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    connect?: subjectsWhereUniqueInput | subjectsWhereUniqueInput[]
    update?: subjectsUpdateWithWhereUniqueWithoutProgram_requirementsInput | subjectsUpdateWithWhereUniqueWithoutProgram_requirementsInput[]
    updateMany?: subjectsUpdateManyWithWhereWithoutProgram_requirementsInput | subjectsUpdateManyWithWhereWithoutProgram_requirementsInput[]
    deleteMany?: subjectsScalarWhereInput | subjectsScalarWhereInput[]
  }

  export type studentsCreateNestedOneWithoutResultsInput = {
    create?: XOR<studentsCreateWithoutResultsInput, studentsUncheckedCreateWithoutResultsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutResultsInput
    connect?: studentsWhereUniqueInput
  }

  export type classroomsCreateNestedOneWithoutResultsInput = {
    create?: XOR<classroomsCreateWithoutResultsInput, classroomsUncheckedCreateWithoutResultsInput>
    connectOrCreate?: classroomsCreateOrConnectWithoutResultsInput
    connect?: classroomsWhereUniqueInput
  }

  export type Enumresults_st_statusFieldUpdateOperationsInput = {
    set?: $Enums.results_st_status
  }

  export type studentsUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<studentsCreateWithoutResultsInput, studentsUncheckedCreateWithoutResultsInput>
    connectOrCreate?: studentsCreateOrConnectWithoutResultsInput
    upsert?: studentsUpsertWithoutResultsInput
    connect?: studentsWhereUniqueInput
    update?: XOR<XOR<studentsUpdateToOneWithWhereWithoutResultsInput, studentsUpdateWithoutResultsInput>, studentsUncheckedUpdateWithoutResultsInput>
  }

  export type classroomsUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<classroomsCreateWithoutResultsInput, classroomsUncheckedCreateWithoutResultsInput>
    connectOrCreate?: classroomsCreateOrConnectWithoutResultsInput
    upsert?: classroomsUpsertWithoutResultsInput
    connect?: classroomsWhereUniqueInput
    update?: XOR<XOR<classroomsUpdateToOneWithWhereWithoutResultsInput, classroomsUpdateWithoutResultsInput>, classroomsUncheckedUpdateWithoutResultsInput>
  }

  export type departmentCreateNestedOneWithoutSpecializationInput = {
    create?: XOR<departmentCreateWithoutSpecializationInput, departmentUncheckedCreateWithoutSpecializationInput>
    connectOrCreate?: departmentCreateOrConnectWithoutSpecializationInput
    connect?: departmentWhereUniqueInput
  }

  export type studentsCreateNestedManyWithoutSpecializationInput = {
    create?: XOR<studentsCreateWithoutSpecializationInput, studentsUncheckedCreateWithoutSpecializationInput> | studentsCreateWithoutSpecializationInput[] | studentsUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSpecializationInput | studentsCreateOrConnectWithoutSpecializationInput[]
    createMany?: studentsCreateManySpecializationInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type studentsUncheckedCreateNestedManyWithoutSpecializationInput = {
    create?: XOR<studentsCreateWithoutSpecializationInput, studentsUncheckedCreateWithoutSpecializationInput> | studentsCreateWithoutSpecializationInput[] | studentsUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSpecializationInput | studentsCreateOrConnectWithoutSpecializationInput[]
    createMany?: studentsCreateManySpecializationInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type departmentUpdateOneRequiredWithoutSpecializationNestedInput = {
    create?: XOR<departmentCreateWithoutSpecializationInput, departmentUncheckedCreateWithoutSpecializationInput>
    connectOrCreate?: departmentCreateOrConnectWithoutSpecializationInput
    upsert?: departmentUpsertWithoutSpecializationInput
    connect?: departmentWhereUniqueInput
    update?: XOR<XOR<departmentUpdateToOneWithWhereWithoutSpecializationInput, departmentUpdateWithoutSpecializationInput>, departmentUncheckedUpdateWithoutSpecializationInput>
  }

  export type studentsUpdateManyWithoutSpecializationNestedInput = {
    create?: XOR<studentsCreateWithoutSpecializationInput, studentsUncheckedCreateWithoutSpecializationInput> | studentsCreateWithoutSpecializationInput[] | studentsUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSpecializationInput | studentsCreateOrConnectWithoutSpecializationInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutSpecializationInput | studentsUpsertWithWhereUniqueWithoutSpecializationInput[]
    createMany?: studentsCreateManySpecializationInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutSpecializationInput | studentsUpdateWithWhereUniqueWithoutSpecializationInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutSpecializationInput | studentsUpdateManyWithWhereWithoutSpecializationInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type studentsUncheckedUpdateManyWithoutSpecializationNestedInput = {
    create?: XOR<studentsCreateWithoutSpecializationInput, studentsUncheckedCreateWithoutSpecializationInput> | studentsCreateWithoutSpecializationInput[] | studentsUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutSpecializationInput | studentsCreateOrConnectWithoutSpecializationInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutSpecializationInput | studentsUpsertWithWhereUniqueWithoutSpecializationInput[]
    createMany?: studentsCreateManySpecializationInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutSpecializationInput | studentsUpdateWithWhereUniqueWithoutSpecializationInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutSpecializationInput | studentsUpdateManyWithWhereWithoutSpecializationInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type resultsCreateNestedManyWithoutStudentsInput = {
    create?: XOR<resultsCreateWithoutStudentsInput, resultsUncheckedCreateWithoutStudentsInput> | resultsCreateWithoutStudentsInput[] | resultsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: resultsCreateOrConnectWithoutStudentsInput | resultsCreateOrConnectWithoutStudentsInput[]
    createMany?: resultsCreateManyStudentsInputEnvelope
    connect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
  }

  export type teachersCreateNestedOneWithoutStudentsInput = {
    create?: XOR<teachersCreateWithoutStudentsInput, teachersUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: teachersCreateOrConnectWithoutStudentsInput
    connect?: teachersWhereUniqueInput
  }

  export type specializationCreateNestedOneWithoutStudentsInput = {
    create?: XOR<specializationCreateWithoutStudentsInput, specializationUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: specializationCreateOrConnectWithoutStudentsInput
    connect?: specializationWhereUniqueInput
  }

  export type resultsUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<resultsCreateWithoutStudentsInput, resultsUncheckedCreateWithoutStudentsInput> | resultsCreateWithoutStudentsInput[] | resultsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: resultsCreateOrConnectWithoutStudentsInput | resultsCreateOrConnectWithoutStudentsInput[]
    createMany?: resultsCreateManyStudentsInputEnvelope
    connect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type resultsUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<resultsCreateWithoutStudentsInput, resultsUncheckedCreateWithoutStudentsInput> | resultsCreateWithoutStudentsInput[] | resultsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: resultsCreateOrConnectWithoutStudentsInput | resultsCreateOrConnectWithoutStudentsInput[]
    upsert?: resultsUpsertWithWhereUniqueWithoutStudentsInput | resultsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: resultsCreateManyStudentsInputEnvelope
    set?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    disconnect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    delete?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    connect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    update?: resultsUpdateWithWhereUniqueWithoutStudentsInput | resultsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: resultsUpdateManyWithWhereWithoutStudentsInput | resultsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: resultsScalarWhereInput | resultsScalarWhereInput[]
  }

  export type teachersUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<teachersCreateWithoutStudentsInput, teachersUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: teachersCreateOrConnectWithoutStudentsInput
    upsert?: teachersUpsertWithoutStudentsInput
    disconnect?: teachersWhereInput | boolean
    delete?: teachersWhereInput | boolean
    connect?: teachersWhereUniqueInput
    update?: XOR<XOR<teachersUpdateToOneWithWhereWithoutStudentsInput, teachersUpdateWithoutStudentsInput>, teachersUncheckedUpdateWithoutStudentsInput>
  }

  export type specializationUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<specializationCreateWithoutStudentsInput, specializationUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: specializationCreateOrConnectWithoutStudentsInput
    upsert?: specializationUpsertWithoutStudentsInput
    connect?: specializationWhereUniqueInput
    update?: XOR<XOR<specializationUpdateToOneWithWhereWithoutStudentsInput, specializationUpdateWithoutStudentsInput>, specializationUncheckedUpdateWithoutStudentsInput>
  }

  export type resultsUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<resultsCreateWithoutStudentsInput, resultsUncheckedCreateWithoutStudentsInput> | resultsCreateWithoutStudentsInput[] | resultsUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: resultsCreateOrConnectWithoutStudentsInput | resultsCreateOrConnectWithoutStudentsInput[]
    upsert?: resultsUpsertWithWhereUniqueWithoutStudentsInput | resultsUpsertWithWhereUniqueWithoutStudentsInput[]
    createMany?: resultsCreateManyStudentsInputEnvelope
    set?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    disconnect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    delete?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    connect?: resultsWhereUniqueInput | resultsWhereUniqueInput[]
    update?: resultsUpdateWithWhereUniqueWithoutStudentsInput | resultsUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: resultsUpdateManyWithWhereWithoutStudentsInput | resultsUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: resultsScalarWhereInput | resultsScalarWhereInput[]
  }

  export type classroomsCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<classroomsCreateWithoutSubjectsInput, classroomsUncheckedCreateWithoutSubjectsInput> | classroomsCreateWithoutSubjectsInput[] | classroomsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutSubjectsInput | classroomsCreateOrConnectWithoutSubjectsInput[]
    createMany?: classroomsCreateManySubjectsInputEnvelope
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
  }

  export type hour_planCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<hour_planCreateWithoutSubjectsInput, hour_planUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: hour_planCreateOrConnectWithoutSubjectsInput
    connect?: hour_planWhereUniqueInput
  }

  export type exam_planCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<exam_planCreateWithoutSubjectsInput, exam_planUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: exam_planCreateOrConnectWithoutSubjectsInput
    connect?: exam_planWhereUniqueInput
  }

  export type degree_planCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<degree_planCreateWithoutSubjectsInput, degree_planUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: degree_planCreateOrConnectWithoutSubjectsInput
    connect?: degree_planWhereUniqueInput
  }

  export type program_requirementsCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<program_requirementsCreateWithoutSubjectsInput, program_requirementsUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: program_requirementsCreateOrConnectWithoutSubjectsInput
    connect?: program_requirementsWhereUniqueInput
  }

  export type classroomsUncheckedCreateNestedManyWithoutSubjectsInput = {
    create?: XOR<classroomsCreateWithoutSubjectsInput, classroomsUncheckedCreateWithoutSubjectsInput> | classroomsCreateWithoutSubjectsInput[] | classroomsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutSubjectsInput | classroomsCreateOrConnectWithoutSubjectsInput[]
    createMany?: classroomsCreateManySubjectsInputEnvelope
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
  }

  export type classroomsUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<classroomsCreateWithoutSubjectsInput, classroomsUncheckedCreateWithoutSubjectsInput> | classroomsCreateWithoutSubjectsInput[] | classroomsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutSubjectsInput | classroomsCreateOrConnectWithoutSubjectsInput[]
    upsert?: classroomsUpsertWithWhereUniqueWithoutSubjectsInput | classroomsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: classroomsCreateManySubjectsInputEnvelope
    set?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    disconnect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    delete?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    update?: classroomsUpdateWithWhereUniqueWithoutSubjectsInput | classroomsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: classroomsUpdateManyWithWhereWithoutSubjectsInput | classroomsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: classroomsScalarWhereInput | classroomsScalarWhereInput[]
  }

  export type hour_planUpdateOneWithoutSubjectsNestedInput = {
    create?: XOR<hour_planCreateWithoutSubjectsInput, hour_planUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: hour_planCreateOrConnectWithoutSubjectsInput
    upsert?: hour_planUpsertWithoutSubjectsInput
    disconnect?: hour_planWhereInput | boolean
    delete?: hour_planWhereInput | boolean
    connect?: hour_planWhereUniqueInput
    update?: XOR<XOR<hour_planUpdateToOneWithWhereWithoutSubjectsInput, hour_planUpdateWithoutSubjectsInput>, hour_planUncheckedUpdateWithoutSubjectsInput>
  }

  export type exam_planUpdateOneWithoutSubjectsNestedInput = {
    create?: XOR<exam_planCreateWithoutSubjectsInput, exam_planUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: exam_planCreateOrConnectWithoutSubjectsInput
    upsert?: exam_planUpsertWithoutSubjectsInput
    disconnect?: exam_planWhereInput | boolean
    delete?: exam_planWhereInput | boolean
    connect?: exam_planWhereUniqueInput
    update?: XOR<XOR<exam_planUpdateToOneWithWhereWithoutSubjectsInput, exam_planUpdateWithoutSubjectsInput>, exam_planUncheckedUpdateWithoutSubjectsInput>
  }

  export type degree_planUpdateOneWithoutSubjectsNestedInput = {
    create?: XOR<degree_planCreateWithoutSubjectsInput, degree_planUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: degree_planCreateOrConnectWithoutSubjectsInput
    upsert?: degree_planUpsertWithoutSubjectsInput
    disconnect?: degree_planWhereInput | boolean
    delete?: degree_planWhereInput | boolean
    connect?: degree_planWhereUniqueInput
    update?: XOR<XOR<degree_planUpdateToOneWithWhereWithoutSubjectsInput, degree_planUpdateWithoutSubjectsInput>, degree_planUncheckedUpdateWithoutSubjectsInput>
  }

  export type program_requirementsUpdateOneWithoutSubjectsNestedInput = {
    create?: XOR<program_requirementsCreateWithoutSubjectsInput, program_requirementsUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: program_requirementsCreateOrConnectWithoutSubjectsInput
    upsert?: program_requirementsUpsertWithoutSubjectsInput
    disconnect?: program_requirementsWhereInput | boolean
    delete?: program_requirementsWhereInput | boolean
    connect?: program_requirementsWhereUniqueInput
    update?: XOR<XOR<program_requirementsUpdateToOneWithWhereWithoutSubjectsInput, program_requirementsUpdateWithoutSubjectsInput>, program_requirementsUncheckedUpdateWithoutSubjectsInput>
  }

  export type classroomsUncheckedUpdateManyWithoutSubjectsNestedInput = {
    create?: XOR<classroomsCreateWithoutSubjectsInput, classroomsUncheckedCreateWithoutSubjectsInput> | classroomsCreateWithoutSubjectsInput[] | classroomsUncheckedCreateWithoutSubjectsInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutSubjectsInput | classroomsCreateOrConnectWithoutSubjectsInput[]
    upsert?: classroomsUpsertWithWhereUniqueWithoutSubjectsInput | classroomsUpsertWithWhereUniqueWithoutSubjectsInput[]
    createMany?: classroomsCreateManySubjectsInputEnvelope
    set?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    disconnect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    delete?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    update?: classroomsUpdateWithWhereUniqueWithoutSubjectsInput | classroomsUpdateWithWhereUniqueWithoutSubjectsInput[]
    updateMany?: classroomsUpdateManyWithWhereWithoutSubjectsInput | classroomsUpdateManyWithWhereWithoutSubjectsInput[]
    deleteMany?: classroomsScalarWhereInput | classroomsScalarWhereInput[]
  }

  export type classroomsCreateNestedManyWithoutTeachersInput = {
    create?: XOR<classroomsCreateWithoutTeachersInput, classroomsUncheckedCreateWithoutTeachersInput> | classroomsCreateWithoutTeachersInput[] | classroomsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutTeachersInput | classroomsCreateOrConnectWithoutTeachersInput[]
    createMany?: classroomsCreateManyTeachersInputEnvelope
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
  }

  export type learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput = {
    create?: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput> | learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput[] | learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisorToteachersInput | learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisorToteachersInput[]
    createMany?: learning_programsCreateManyTeachers_learning_programs_advisorToteachersInputEnvelope
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
  }

  export type learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    create?: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput> | learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput[] | learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    createMany?: learning_programsCreateManyTeachers_learning_programs_advisor_assistantToteachersInputEnvelope
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
  }

  export type studentsCreateNestedManyWithoutTeachersInput = {
    create?: XOR<studentsCreateWithoutTeachersInput, studentsUncheckedCreateWithoutTeachersInput> | studentsCreateWithoutTeachersInput[] | studentsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutTeachersInput | studentsCreateOrConnectWithoutTeachersInput[]
    createMany?: studentsCreateManyTeachersInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type teachers_jobsCreateNestedManyWithoutTeachersInput = {
    create?: XOR<teachers_jobsCreateWithoutTeachersInput, teachers_jobsUncheckedCreateWithoutTeachersInput> | teachers_jobsCreateWithoutTeachersInput[] | teachers_jobsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: teachers_jobsCreateOrConnectWithoutTeachersInput | teachers_jobsCreateOrConnectWithoutTeachersInput[]
    createMany?: teachers_jobsCreateManyTeachersInputEnvelope
    connect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
  }

  export type classroomsUncheckedCreateNestedManyWithoutTeachersInput = {
    create?: XOR<classroomsCreateWithoutTeachersInput, classroomsUncheckedCreateWithoutTeachersInput> | classroomsCreateWithoutTeachersInput[] | classroomsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutTeachersInput | classroomsCreateOrConnectWithoutTeachersInput[]
    createMany?: classroomsCreateManyTeachersInputEnvelope
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
  }

  export type learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput = {
    create?: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput> | learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput[] | learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisorToteachersInput | learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisorToteachersInput[]
    createMany?: learning_programsCreateManyTeachers_learning_programs_advisorToteachersInputEnvelope
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
  }

  export type learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    create?: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput> | learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput[] | learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    createMany?: learning_programsCreateManyTeachers_learning_programs_advisor_assistantToteachersInputEnvelope
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
  }

  export type studentsUncheckedCreateNestedManyWithoutTeachersInput = {
    create?: XOR<studentsCreateWithoutTeachersInput, studentsUncheckedCreateWithoutTeachersInput> | studentsCreateWithoutTeachersInput[] | studentsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutTeachersInput | studentsCreateOrConnectWithoutTeachersInput[]
    createMany?: studentsCreateManyTeachersInputEnvelope
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
  }

  export type teachers_jobsUncheckedCreateNestedManyWithoutTeachersInput = {
    create?: XOR<teachers_jobsCreateWithoutTeachersInput, teachers_jobsUncheckedCreateWithoutTeachersInput> | teachers_jobsCreateWithoutTeachersInput[] | teachers_jobsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: teachers_jobsCreateOrConnectWithoutTeachersInput | teachers_jobsCreateOrConnectWithoutTeachersInput[]
    createMany?: teachers_jobsCreateManyTeachersInputEnvelope
    connect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
  }

  export type Enumteachers_degreeFieldUpdateOperationsInput = {
    set?: $Enums.teachers_degree
  }

  export type classroomsUpdateManyWithoutTeachersNestedInput = {
    create?: XOR<classroomsCreateWithoutTeachersInput, classroomsUncheckedCreateWithoutTeachersInput> | classroomsCreateWithoutTeachersInput[] | classroomsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutTeachersInput | classroomsCreateOrConnectWithoutTeachersInput[]
    upsert?: classroomsUpsertWithWhereUniqueWithoutTeachersInput | classroomsUpsertWithWhereUniqueWithoutTeachersInput[]
    createMany?: classroomsCreateManyTeachersInputEnvelope
    set?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    disconnect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    delete?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    update?: classroomsUpdateWithWhereUniqueWithoutTeachersInput | classroomsUpdateWithWhereUniqueWithoutTeachersInput[]
    updateMany?: classroomsUpdateManyWithWhereWithoutTeachersInput | classroomsUpdateManyWithWhereWithoutTeachersInput[]
    deleteMany?: classroomsScalarWhereInput | classroomsScalarWhereInput[]
  }

  export type learning_programsUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput = {
    create?: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput> | learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput[] | learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisorToteachersInput | learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisorToteachersInput[]
    upsert?: learning_programsUpsertWithWhereUniqueWithoutTeachers_learning_programs_advisorToteachersInput | learning_programsUpsertWithWhereUniqueWithoutTeachers_learning_programs_advisorToteachersInput[]
    createMany?: learning_programsCreateManyTeachers_learning_programs_advisorToteachersInputEnvelope
    set?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    disconnect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    delete?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    update?: learning_programsUpdateWithWhereUniqueWithoutTeachers_learning_programs_advisorToteachersInput | learning_programsUpdateWithWhereUniqueWithoutTeachers_learning_programs_advisorToteachersInput[]
    updateMany?: learning_programsUpdateManyWithWhereWithoutTeachers_learning_programs_advisorToteachersInput | learning_programsUpdateManyWithWhereWithoutTeachers_learning_programs_advisorToteachersInput[]
    deleteMany?: learning_programsScalarWhereInput | learning_programsScalarWhereInput[]
  }

  export type learning_programsUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput = {
    create?: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput> | learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput[] | learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    upsert?: learning_programsUpsertWithWhereUniqueWithoutTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsUpsertWithWhereUniqueWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    createMany?: learning_programsCreateManyTeachers_learning_programs_advisor_assistantToteachersInputEnvelope
    set?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    disconnect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    delete?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    update?: learning_programsUpdateWithWhereUniqueWithoutTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsUpdateWithWhereUniqueWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    updateMany?: learning_programsUpdateManyWithWhereWithoutTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsUpdateManyWithWhereWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    deleteMany?: learning_programsScalarWhereInput | learning_programsScalarWhereInput[]
  }

  export type studentsUpdateManyWithoutTeachersNestedInput = {
    create?: XOR<studentsCreateWithoutTeachersInput, studentsUncheckedCreateWithoutTeachersInput> | studentsCreateWithoutTeachersInput[] | studentsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutTeachersInput | studentsCreateOrConnectWithoutTeachersInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutTeachersInput | studentsUpsertWithWhereUniqueWithoutTeachersInput[]
    createMany?: studentsCreateManyTeachersInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutTeachersInput | studentsUpdateWithWhereUniqueWithoutTeachersInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutTeachersInput | studentsUpdateManyWithWhereWithoutTeachersInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type teachers_jobsUpdateManyWithoutTeachersNestedInput = {
    create?: XOR<teachers_jobsCreateWithoutTeachersInput, teachers_jobsUncheckedCreateWithoutTeachersInput> | teachers_jobsCreateWithoutTeachersInput[] | teachers_jobsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: teachers_jobsCreateOrConnectWithoutTeachersInput | teachers_jobsCreateOrConnectWithoutTeachersInput[]
    upsert?: teachers_jobsUpsertWithWhereUniqueWithoutTeachersInput | teachers_jobsUpsertWithWhereUniqueWithoutTeachersInput[]
    createMany?: teachers_jobsCreateManyTeachersInputEnvelope
    set?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    disconnect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    delete?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    connect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    update?: teachers_jobsUpdateWithWhereUniqueWithoutTeachersInput | teachers_jobsUpdateWithWhereUniqueWithoutTeachersInput[]
    updateMany?: teachers_jobsUpdateManyWithWhereWithoutTeachersInput | teachers_jobsUpdateManyWithWhereWithoutTeachersInput[]
    deleteMany?: teachers_jobsScalarWhereInput | teachers_jobsScalarWhereInput[]
  }

  export type classroomsUncheckedUpdateManyWithoutTeachersNestedInput = {
    create?: XOR<classroomsCreateWithoutTeachersInput, classroomsUncheckedCreateWithoutTeachersInput> | classroomsCreateWithoutTeachersInput[] | classroomsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: classroomsCreateOrConnectWithoutTeachersInput | classroomsCreateOrConnectWithoutTeachersInput[]
    upsert?: classroomsUpsertWithWhereUniqueWithoutTeachersInput | classroomsUpsertWithWhereUniqueWithoutTeachersInput[]
    createMany?: classroomsCreateManyTeachersInputEnvelope
    set?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    disconnect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    delete?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    connect?: classroomsWhereUniqueInput | classroomsWhereUniqueInput[]
    update?: classroomsUpdateWithWhereUniqueWithoutTeachersInput | classroomsUpdateWithWhereUniqueWithoutTeachersInput[]
    updateMany?: classroomsUpdateManyWithWhereWithoutTeachersInput | classroomsUpdateManyWithWhereWithoutTeachersInput[]
    deleteMany?: classroomsScalarWhereInput | classroomsScalarWhereInput[]
  }

  export type learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput = {
    create?: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput> | learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput[] | learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisorToteachersInput | learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisorToteachersInput[]
    upsert?: learning_programsUpsertWithWhereUniqueWithoutTeachers_learning_programs_advisorToteachersInput | learning_programsUpsertWithWhereUniqueWithoutTeachers_learning_programs_advisorToteachersInput[]
    createMany?: learning_programsCreateManyTeachers_learning_programs_advisorToteachersInputEnvelope
    set?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    disconnect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    delete?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    update?: learning_programsUpdateWithWhereUniqueWithoutTeachers_learning_programs_advisorToteachersInput | learning_programsUpdateWithWhereUniqueWithoutTeachers_learning_programs_advisorToteachersInput[]
    updateMany?: learning_programsUpdateManyWithWhereWithoutTeachers_learning_programs_advisorToteachersInput | learning_programsUpdateManyWithWhereWithoutTeachers_learning_programs_advisorToteachersInput[]
    deleteMany?: learning_programsScalarWhereInput | learning_programsScalarWhereInput[]
  }

  export type learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput = {
    create?: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput> | learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput[] | learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    connectOrCreate?: learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    upsert?: learning_programsUpsertWithWhereUniqueWithoutTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsUpsertWithWhereUniqueWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    createMany?: learning_programsCreateManyTeachers_learning_programs_advisor_assistantToteachersInputEnvelope
    set?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    disconnect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    delete?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    connect?: learning_programsWhereUniqueInput | learning_programsWhereUniqueInput[]
    update?: learning_programsUpdateWithWhereUniqueWithoutTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsUpdateWithWhereUniqueWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    updateMany?: learning_programsUpdateManyWithWhereWithoutTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsUpdateManyWithWhereWithoutTeachers_learning_programs_advisor_assistantToteachersInput[]
    deleteMany?: learning_programsScalarWhereInput | learning_programsScalarWhereInput[]
  }

  export type studentsUncheckedUpdateManyWithoutTeachersNestedInput = {
    create?: XOR<studentsCreateWithoutTeachersInput, studentsUncheckedCreateWithoutTeachersInput> | studentsCreateWithoutTeachersInput[] | studentsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: studentsCreateOrConnectWithoutTeachersInput | studentsCreateOrConnectWithoutTeachersInput[]
    upsert?: studentsUpsertWithWhereUniqueWithoutTeachersInput | studentsUpsertWithWhereUniqueWithoutTeachersInput[]
    createMany?: studentsCreateManyTeachersInputEnvelope
    set?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    disconnect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    delete?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    connect?: studentsWhereUniqueInput | studentsWhereUniqueInput[]
    update?: studentsUpdateWithWhereUniqueWithoutTeachersInput | studentsUpdateWithWhereUniqueWithoutTeachersInput[]
    updateMany?: studentsUpdateManyWithWhereWithoutTeachersInput | studentsUpdateManyWithWhereWithoutTeachersInput[]
    deleteMany?: studentsScalarWhereInput | studentsScalarWhereInput[]
  }

  export type teachers_jobsUncheckedUpdateManyWithoutTeachersNestedInput = {
    create?: XOR<teachers_jobsCreateWithoutTeachersInput, teachers_jobsUncheckedCreateWithoutTeachersInput> | teachers_jobsCreateWithoutTeachersInput[] | teachers_jobsUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: teachers_jobsCreateOrConnectWithoutTeachersInput | teachers_jobsCreateOrConnectWithoutTeachersInput[]
    upsert?: teachers_jobsUpsertWithWhereUniqueWithoutTeachersInput | teachers_jobsUpsertWithWhereUniqueWithoutTeachersInput[]
    createMany?: teachers_jobsCreateManyTeachersInputEnvelope
    set?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    disconnect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    delete?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    connect?: teachers_jobsWhereUniqueInput | teachers_jobsWhereUniqueInput[]
    update?: teachers_jobsUpdateWithWhereUniqueWithoutTeachersInput | teachers_jobsUpdateWithWhereUniqueWithoutTeachersInput[]
    updateMany?: teachers_jobsUpdateManyWithWhereWithoutTeachersInput | teachers_jobsUpdateManyWithWhereWithoutTeachersInput[]
    deleteMany?: teachers_jobsScalarWhereInput | teachers_jobsScalarWhereInput[]
  }

  export type teachersCreateNestedOneWithoutTeachers_jobsInput = {
    create?: XOR<teachersCreateWithoutTeachers_jobsInput, teachersUncheckedCreateWithoutTeachers_jobsInput>
    connectOrCreate?: teachersCreateOrConnectWithoutTeachers_jobsInput
    connect?: teachersWhereUniqueInput
  }

  export type departmentCreateNestedOneWithoutTeachers_jobsInput = {
    create?: XOR<departmentCreateWithoutTeachers_jobsInput, departmentUncheckedCreateWithoutTeachers_jobsInput>
    connectOrCreate?: departmentCreateOrConnectWithoutTeachers_jobsInput
    connect?: departmentWhereUniqueInput
  }

  export type teachersUpdateOneRequiredWithoutTeachers_jobsNestedInput = {
    create?: XOR<teachersCreateWithoutTeachers_jobsInput, teachersUncheckedCreateWithoutTeachers_jobsInput>
    connectOrCreate?: teachersCreateOrConnectWithoutTeachers_jobsInput
    upsert?: teachersUpsertWithoutTeachers_jobsInput
    connect?: teachersWhereUniqueInput
    update?: XOR<XOR<teachersUpdateToOneWithWhereWithoutTeachers_jobsInput, teachersUpdateWithoutTeachers_jobsInput>, teachersUncheckedUpdateWithoutTeachers_jobsInput>
  }

  export type departmentUpdateOneRequiredWithoutTeachers_jobsNestedInput = {
    create?: XOR<departmentCreateWithoutTeachers_jobsInput, departmentUncheckedCreateWithoutTeachers_jobsInput>
    connectOrCreate?: departmentCreateOrConnectWithoutTeachers_jobsInput
    upsert?: departmentUpsertWithoutTeachers_jobsInput
    connect?: departmentWhereUniqueInput
    update?: XOR<XOR<departmentUpdateToOneWithWhereWithoutTeachers_jobsInput, departmentUpdateWithoutTeachers_jobsInput>, departmentUncheckedUpdateWithoutTeachers_jobsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumduration_plans_termFilter<$PrismaModel = never> = {
    equals?: $Enums.duration_plans_term | Enumduration_plans_termFieldRefInput<$PrismaModel>
    in?: $Enums.duration_plans_term[]
    notIn?: $Enums.duration_plans_term[]
    not?: NestedEnumduration_plans_termFilter<$PrismaModel> | $Enums.duration_plans_term
  }

  export type NestedEnumduration_plans_termWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.duration_plans_term | Enumduration_plans_termFieldRefInput<$PrismaModel>
    in?: $Enums.duration_plans_term[]
    notIn?: $Enums.duration_plans_term[]
    not?: NestedEnumduration_plans_termWithAggregatesFilter<$PrismaModel> | $Enums.duration_plans_term
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumduration_plans_termFilter<$PrismaModel>
    _max?: NestedEnumduration_plans_termFilter<$PrismaModel>
  }

  export type NestedEnumprogram_requirements_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.program_requirements_type | Enumprogram_requirements_typeFieldRefInput<$PrismaModel>
    in?: $Enums.program_requirements_type[]
    notIn?: $Enums.program_requirements_type[]
    not?: NestedEnumprogram_requirements_typeFilter<$PrismaModel> | $Enums.program_requirements_type
  }

  export type NestedEnumprogram_requirements_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.program_requirements_type | Enumprogram_requirements_typeFieldRefInput<$PrismaModel>
    in?: $Enums.program_requirements_type[]
    notIn?: $Enums.program_requirements_type[]
    not?: NestedEnumprogram_requirements_typeWithAggregatesFilter<$PrismaModel> | $Enums.program_requirements_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprogram_requirements_typeFilter<$PrismaModel>
    _max?: NestedEnumprogram_requirements_typeFilter<$PrismaModel>
  }

  export type NestedEnumresults_st_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.results_st_status | Enumresults_st_statusFieldRefInput<$PrismaModel>
    in?: $Enums.results_st_status[]
    notIn?: $Enums.results_st_status[]
    not?: NestedEnumresults_st_statusFilter<$PrismaModel> | $Enums.results_st_status
  }

  export type NestedEnumresults_st_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.results_st_status | Enumresults_st_statusFieldRefInput<$PrismaModel>
    in?: $Enums.results_st_status[]
    notIn?: $Enums.results_st_status[]
    not?: NestedEnumresults_st_statusWithAggregatesFilter<$PrismaModel> | $Enums.results_st_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumresults_st_statusFilter<$PrismaModel>
    _max?: NestedEnumresults_st_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumteachers_degreeFilter<$PrismaModel = never> = {
    equals?: $Enums.teachers_degree | Enumteachers_degreeFieldRefInput<$PrismaModel>
    in?: $Enums.teachers_degree[]
    notIn?: $Enums.teachers_degree[]
    not?: NestedEnumteachers_degreeFilter<$PrismaModel> | $Enums.teachers_degree
  }

  export type NestedEnumteachers_degreeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.teachers_degree | Enumteachers_degreeFieldRefInput<$PrismaModel>
    in?: $Enums.teachers_degree[]
    notIn?: $Enums.teachers_degree[]
    not?: NestedEnumteachers_degreeWithAggregatesFilter<$PrismaModel> | $Enums.teachers_degree
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumteachers_degreeFilter<$PrismaModel>
    _max?: NestedEnumteachers_degreeFilter<$PrismaModel>
  }

  export type duration_plansCreateWithoutClassrooms_classrooms_duration_plansToduration_plansInput = {
    edu_year: number
    term: $Enums.duration_plans_term
    semester?: number
  }

  export type duration_plansUncheckedCreateWithoutClassrooms_classrooms_duration_plansToduration_plansInput = {
    id?: number
    edu_year: number
    term: $Enums.duration_plans_term
    semester?: number
  }

  export type duration_plansCreateOrConnectWithoutClassrooms_classrooms_duration_plansToduration_plansInput = {
    where: duration_plansWhereUniqueInput
    create: XOR<duration_plansCreateWithoutClassrooms_classrooms_duration_plansToduration_plansInput, duration_plansUncheckedCreateWithoutClassrooms_classrooms_duration_plansToduration_plansInput>
  }

  export type subjectsCreateWithoutClassroomsInput = {
    name: string
    subject_code: string
    hour_plan?: hour_planCreateNestedOneWithoutSubjectsInput
    exam_plan?: exam_planCreateNestedOneWithoutSubjectsInput
    degree_plan?: degree_planCreateNestedOneWithoutSubjectsInput
    program_requirements?: program_requirementsCreateNestedOneWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateWithoutClassroomsInput = {
    id?: number
    name: string
    subject_code: string
    hours_id?: number | null
    exams_id?: number | null
    degrees_id?: number | null
    require_id?: number | null
  }

  export type subjectsCreateOrConnectWithoutClassroomsInput = {
    where: subjectsWhereUniqueInput
    create: XOR<subjectsCreateWithoutClassroomsInput, subjectsUncheckedCreateWithoutClassroomsInput>
  }

  export type teachersCreateWithoutClassroomsInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    learning_programs_learning_programs_advisorToteachers?: learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput
    students?: studentsCreateNestedManyWithoutTeachersInput
    teachers_jobs?: teachers_jobsCreateNestedManyWithoutTeachersInput
  }

  export type teachersUncheckedCreateWithoutClassroomsInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    learning_programs_learning_programs_advisorToteachers?: learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput
    students?: studentsUncheckedCreateNestedManyWithoutTeachersInput
    teachers_jobs?: teachers_jobsUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type teachersCreateOrConnectWithoutClassroomsInput = {
    where: teachersWhereUniqueInput
    create: XOR<teachersCreateWithoutClassroomsInput, teachersUncheckedCreateWithoutClassroomsInput>
  }

  export type resultsCreateWithoutClassroomsInput = {
    st_status: $Enums.results_st_status
    students: studentsCreateNestedOneWithoutResultsInput
  }

  export type resultsUncheckedCreateWithoutClassroomsInput = {
    id?: number
    student_id: number
    st_status: $Enums.results_st_status
  }

  export type resultsCreateOrConnectWithoutClassroomsInput = {
    where: resultsWhereUniqueInput
    create: XOR<resultsCreateWithoutClassroomsInput, resultsUncheckedCreateWithoutClassroomsInput>
  }

  export type resultsCreateManyClassroomsInputEnvelope = {
    data: resultsCreateManyClassroomsInput | resultsCreateManyClassroomsInput[]
    skipDuplicates?: boolean
  }

  export type duration_plansUpsertWithoutClassrooms_classrooms_duration_plansToduration_plansInput = {
    update: XOR<duration_plansUpdateWithoutClassrooms_classrooms_duration_plansToduration_plansInput, duration_plansUncheckedUpdateWithoutClassrooms_classrooms_duration_plansToduration_plansInput>
    create: XOR<duration_plansCreateWithoutClassrooms_classrooms_duration_plansToduration_plansInput, duration_plansUncheckedCreateWithoutClassrooms_classrooms_duration_plansToduration_plansInput>
    where?: duration_plansWhereInput
  }

  export type duration_plansUpdateToOneWithWhereWithoutClassrooms_classrooms_duration_plansToduration_plansInput = {
    where?: duration_plansWhereInput
    data: XOR<duration_plansUpdateWithoutClassrooms_classrooms_duration_plansToduration_plansInput, duration_plansUncheckedUpdateWithoutClassrooms_classrooms_duration_plansToduration_plansInput>
  }

  export type duration_plansUpdateWithoutClassrooms_classrooms_duration_plansToduration_plansInput = {
    edu_year?: IntFieldUpdateOperationsInput | number
    term?: Enumduration_plans_termFieldUpdateOperationsInput | $Enums.duration_plans_term
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type duration_plansUncheckedUpdateWithoutClassrooms_classrooms_duration_plansToduration_plansInput = {
    id?: IntFieldUpdateOperationsInput | number
    edu_year?: IntFieldUpdateOperationsInput | number
    term?: Enumduration_plans_termFieldUpdateOperationsInput | $Enums.duration_plans_term
    semester?: IntFieldUpdateOperationsInput | number
  }

  export type subjectsUpsertWithoutClassroomsInput = {
    update: XOR<subjectsUpdateWithoutClassroomsInput, subjectsUncheckedUpdateWithoutClassroomsInput>
    create: XOR<subjectsCreateWithoutClassroomsInput, subjectsUncheckedCreateWithoutClassroomsInput>
    where?: subjectsWhereInput
  }

  export type subjectsUpdateToOneWithWhereWithoutClassroomsInput = {
    where?: subjectsWhereInput
    data: XOR<subjectsUpdateWithoutClassroomsInput, subjectsUncheckedUpdateWithoutClassroomsInput>
  }

  export type subjectsUpdateWithoutClassroomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    hour_plan?: hour_planUpdateOneWithoutSubjectsNestedInput
    exam_plan?: exam_planUpdateOneWithoutSubjectsNestedInput
    degree_plan?: degree_planUpdateOneWithoutSubjectsNestedInput
    program_requirements?: program_requirementsUpdateOneWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    hours_id?: NullableIntFieldUpdateOperationsInput | number | null
    exams_id?: NullableIntFieldUpdateOperationsInput | number | null
    degrees_id?: NullableIntFieldUpdateOperationsInput | number | null
    require_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type teachersUpsertWithoutClassroomsInput = {
    update: XOR<teachersUpdateWithoutClassroomsInput, teachersUncheckedUpdateWithoutClassroomsInput>
    create: XOR<teachersCreateWithoutClassroomsInput, teachersUncheckedCreateWithoutClassroomsInput>
    where?: teachersWhereInput
  }

  export type teachersUpdateToOneWithWhereWithoutClassroomsInput = {
    where?: teachersWhereInput
    data: XOR<teachersUpdateWithoutClassroomsInput, teachersUncheckedUpdateWithoutClassroomsInput>
  }

  export type teachersUpdateWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    learning_programs_learning_programs_advisorToteachers?: learning_programsUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput
    students?: studentsUpdateManyWithoutTeachersNestedInput
    teachers_jobs?: teachers_jobsUpdateManyWithoutTeachersNestedInput
  }

  export type teachersUncheckedUpdateWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    learning_programs_learning_programs_advisorToteachers?: learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput
    students?: studentsUncheckedUpdateManyWithoutTeachersNestedInput
    teachers_jobs?: teachers_jobsUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type resultsUpsertWithWhereUniqueWithoutClassroomsInput = {
    where: resultsWhereUniqueInput
    update: XOR<resultsUpdateWithoutClassroomsInput, resultsUncheckedUpdateWithoutClassroomsInput>
    create: XOR<resultsCreateWithoutClassroomsInput, resultsUncheckedCreateWithoutClassroomsInput>
  }

  export type resultsUpdateWithWhereUniqueWithoutClassroomsInput = {
    where: resultsWhereUniqueInput
    data: XOR<resultsUpdateWithoutClassroomsInput, resultsUncheckedUpdateWithoutClassroomsInput>
  }

  export type resultsUpdateManyWithWhereWithoutClassroomsInput = {
    where: resultsScalarWhereInput
    data: XOR<resultsUpdateManyMutationInput, resultsUncheckedUpdateManyWithoutClassroomsInput>
  }

  export type resultsScalarWhereInput = {
    AND?: resultsScalarWhereInput | resultsScalarWhereInput[]
    OR?: resultsScalarWhereInput[]
    NOT?: resultsScalarWhereInput | resultsScalarWhereInput[]
    id?: IntFilter<"results"> | number
    student_id?: IntFilter<"results"> | number
    classroom_id?: IntFilter<"results"> | number
    st_status?: Enumresults_st_statusFilter<"results"> | $Enums.results_st_status
  }

  export type subjectsCreateWithoutDegree_planInput = {
    name: string
    subject_code: string
    classrooms?: classroomsCreateNestedManyWithoutSubjectsInput
    hour_plan?: hour_planCreateNestedOneWithoutSubjectsInput
    exam_plan?: exam_planCreateNestedOneWithoutSubjectsInput
    program_requirements?: program_requirementsCreateNestedOneWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateWithoutDegree_planInput = {
    id?: number
    name: string
    subject_code: string
    hours_id?: number | null
    exams_id?: number | null
    require_id?: number | null
    classrooms?: classroomsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsCreateOrConnectWithoutDegree_planInput = {
    where: subjectsWhereUniqueInput
    create: XOR<subjectsCreateWithoutDegree_planInput, subjectsUncheckedCreateWithoutDegree_planInput>
  }

  export type subjectsCreateManyDegree_planInputEnvelope = {
    data: subjectsCreateManyDegree_planInput | subjectsCreateManyDegree_planInput[]
    skipDuplicates?: boolean
  }

  export type subjectsUpsertWithWhereUniqueWithoutDegree_planInput = {
    where: subjectsWhereUniqueInput
    update: XOR<subjectsUpdateWithoutDegree_planInput, subjectsUncheckedUpdateWithoutDegree_planInput>
    create: XOR<subjectsCreateWithoutDegree_planInput, subjectsUncheckedCreateWithoutDegree_planInput>
  }

  export type subjectsUpdateWithWhereUniqueWithoutDegree_planInput = {
    where: subjectsWhereUniqueInput
    data: XOR<subjectsUpdateWithoutDegree_planInput, subjectsUncheckedUpdateWithoutDegree_planInput>
  }

  export type subjectsUpdateManyWithWhereWithoutDegree_planInput = {
    where: subjectsScalarWhereInput
    data: XOR<subjectsUpdateManyMutationInput, subjectsUncheckedUpdateManyWithoutDegree_planInput>
  }

  export type subjectsScalarWhereInput = {
    AND?: subjectsScalarWhereInput | subjectsScalarWhereInput[]
    OR?: subjectsScalarWhereInput[]
    NOT?: subjectsScalarWhereInput | subjectsScalarWhereInput[]
    id?: IntFilter<"subjects"> | number
    name?: StringFilter<"subjects"> | string
    subject_code?: StringFilter<"subjects"> | string
    hours_id?: IntNullableFilter<"subjects"> | number | null
    exams_id?: IntNullableFilter<"subjects"> | number | null
    degrees_id?: IntNullableFilter<"subjects"> | number | null
    require_id?: IntNullableFilter<"subjects"> | number | null
  }

  export type learning_programsCreateWithoutDepartmentInput = {
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    teachers_learning_programs_advisorToteachers?: teachersCreateNestedOneWithoutLearning_programs_learning_programs_advisorToteachersInput
    teachers_learning_programs_advisor_assistantToteachers?: teachersCreateNestedOneWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput
    program_requirements?: program_requirementsCreateNestedManyWithoutLearning_programsInput
  }

  export type learning_programsUncheckedCreateWithoutDepartmentInput = {
    id?: number
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    advisor?: number | null
    advisor_assistant?: number | null
    program_requirements?: program_requirementsUncheckedCreateNestedManyWithoutLearning_programsInput
  }

  export type learning_programsCreateOrConnectWithoutDepartmentInput = {
    where: learning_programsWhereUniqueInput
    create: XOR<learning_programsCreateWithoutDepartmentInput, learning_programsUncheckedCreateWithoutDepartmentInput>
  }

  export type learning_programsCreateManyDepartmentInputEnvelope = {
    data: learning_programsCreateManyDepartmentInput | learning_programsCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type specializationCreateWithoutDepartmentInput = {
    name: string
    students?: studentsCreateNestedManyWithoutSpecializationInput
  }

  export type specializationUncheckedCreateWithoutDepartmentInput = {
    id?: number
    name: string
    students?: studentsUncheckedCreateNestedManyWithoutSpecializationInput
  }

  export type specializationCreateOrConnectWithoutDepartmentInput = {
    where: specializationWhereUniqueInput
    create: XOR<specializationCreateWithoutDepartmentInput, specializationUncheckedCreateWithoutDepartmentInput>
  }

  export type specializationCreateManyDepartmentInputEnvelope = {
    data: specializationCreateManyDepartmentInput | specializationCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type teachers_jobsCreateWithoutDepartmentInput = {
    jobs: string
    teachers: teachersCreateNestedOneWithoutTeachers_jobsInput
  }

  export type teachers_jobsUncheckedCreateWithoutDepartmentInput = {
    id?: number
    jobs: string
    teacher_id: number
  }

  export type teachers_jobsCreateOrConnectWithoutDepartmentInput = {
    where: teachers_jobsWhereUniqueInput
    create: XOR<teachers_jobsCreateWithoutDepartmentInput, teachers_jobsUncheckedCreateWithoutDepartmentInput>
  }

  export type teachers_jobsCreateManyDepartmentInputEnvelope = {
    data: teachers_jobsCreateManyDepartmentInput | teachers_jobsCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type learning_programsUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: learning_programsWhereUniqueInput
    update: XOR<learning_programsUpdateWithoutDepartmentInput, learning_programsUncheckedUpdateWithoutDepartmentInput>
    create: XOR<learning_programsCreateWithoutDepartmentInput, learning_programsUncheckedCreateWithoutDepartmentInput>
  }

  export type learning_programsUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: learning_programsWhereUniqueInput
    data: XOR<learning_programsUpdateWithoutDepartmentInput, learning_programsUncheckedUpdateWithoutDepartmentInput>
  }

  export type learning_programsUpdateManyWithWhereWithoutDepartmentInput = {
    where: learning_programsScalarWhereInput
    data: XOR<learning_programsUpdateManyMutationInput, learning_programsUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type learning_programsScalarWhereInput = {
    AND?: learning_programsScalarWhereInput | learning_programsScalarWhereInput[]
    OR?: learning_programsScalarWhereInput[]
    NOT?: learning_programsScalarWhereInput | learning_programsScalarWhereInput[]
    id?: IntFilter<"learning_programs"> | number
    name?: StringFilter<"learning_programs"> | string
    subject_hours?: IntFilter<"learning_programs"> | number
    paper_hours?: IntFilter<"learning_programs"> | number
    program_code?: StringFilter<"learning_programs"> | string
    depart_id?: IntFilter<"learning_programs"> | number
    advisor?: IntNullableFilter<"learning_programs"> | number | null
    advisor_assistant?: IntNullableFilter<"learning_programs"> | number | null
  }

  export type specializationUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: specializationWhereUniqueInput
    update: XOR<specializationUpdateWithoutDepartmentInput, specializationUncheckedUpdateWithoutDepartmentInput>
    create: XOR<specializationCreateWithoutDepartmentInput, specializationUncheckedCreateWithoutDepartmentInput>
  }

  export type specializationUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: specializationWhereUniqueInput
    data: XOR<specializationUpdateWithoutDepartmentInput, specializationUncheckedUpdateWithoutDepartmentInput>
  }

  export type specializationUpdateManyWithWhereWithoutDepartmentInput = {
    where: specializationScalarWhereInput
    data: XOR<specializationUpdateManyMutationInput, specializationUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type specializationScalarWhereInput = {
    AND?: specializationScalarWhereInput | specializationScalarWhereInput[]
    OR?: specializationScalarWhereInput[]
    NOT?: specializationScalarWhereInput | specializationScalarWhereInput[]
    id?: IntFilter<"specialization"> | number
    name?: StringFilter<"specialization"> | string
    depart_id?: IntFilter<"specialization"> | number
  }

  export type teachers_jobsUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: teachers_jobsWhereUniqueInput
    update: XOR<teachers_jobsUpdateWithoutDepartmentInput, teachers_jobsUncheckedUpdateWithoutDepartmentInput>
    create: XOR<teachers_jobsCreateWithoutDepartmentInput, teachers_jobsUncheckedCreateWithoutDepartmentInput>
  }

  export type teachers_jobsUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: teachers_jobsWhereUniqueInput
    data: XOR<teachers_jobsUpdateWithoutDepartmentInput, teachers_jobsUncheckedUpdateWithoutDepartmentInput>
  }

  export type teachers_jobsUpdateManyWithWhereWithoutDepartmentInput = {
    where: teachers_jobsScalarWhereInput
    data: XOR<teachers_jobsUpdateManyMutationInput, teachers_jobsUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type teachers_jobsScalarWhereInput = {
    AND?: teachers_jobsScalarWhereInput | teachers_jobsScalarWhereInput[]
    OR?: teachers_jobsScalarWhereInput[]
    NOT?: teachers_jobsScalarWhereInput | teachers_jobsScalarWhereInput[]
    id?: IntFilter<"teachers_jobs"> | number
    jobs?: StringFilter<"teachers_jobs"> | string
    teacher_id?: IntFilter<"teachers_jobs"> | number
    depart_id?: IntFilter<"teachers_jobs"> | number
  }

  export type classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    subjects: subjectsCreateNestedOneWithoutClassroomsInput
    teachers?: teachersCreateNestedOneWithoutClassroomsInput
    results?: resultsCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    id?: number
    subject_id: number
    teacher_id?: number | null
    results?: resultsUncheckedCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsCreateOrConnectWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    where: classroomsWhereUniqueInput
    create: XOR<classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput, classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput>
  }

  export type classroomsCreateManyDuration_plans_classrooms_duration_plansToduration_plansInputEnvelope = {
    data: classroomsCreateManyDuration_plans_classrooms_duration_plansToduration_plansInput | classroomsCreateManyDuration_plans_classrooms_duration_plansToduration_plansInput[]
    skipDuplicates?: boolean
  }

  export type classroomsUpsertWithWhereUniqueWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    where: classroomsWhereUniqueInput
    update: XOR<classroomsUpdateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput, classroomsUncheckedUpdateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput>
    create: XOR<classroomsCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput, classroomsUncheckedCreateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput>
  }

  export type classroomsUpdateWithWhereUniqueWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    where: classroomsWhereUniqueInput
    data: XOR<classroomsUpdateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput, classroomsUncheckedUpdateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput>
  }

  export type classroomsUpdateManyWithWhereWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    where: classroomsScalarWhereInput
    data: XOR<classroomsUpdateManyMutationInput, classroomsUncheckedUpdateManyWithoutDuration_plans_classrooms_duration_plansToduration_plansInput>
  }

  export type classroomsScalarWhereInput = {
    AND?: classroomsScalarWhereInput | classroomsScalarWhereInput[]
    OR?: classroomsScalarWhereInput[]
    NOT?: classroomsScalarWhereInput | classroomsScalarWhereInput[]
    id?: IntFilter<"classrooms"> | number
    duration_plans?: IntFilter<"classrooms"> | number
    subject_id?: IntFilter<"classrooms"> | number
    teacher_id?: IntNullableFilter<"classrooms"> | number | null
  }

  export type subjectsCreateWithoutExam_planInput = {
    name: string
    subject_code: string
    classrooms?: classroomsCreateNestedManyWithoutSubjectsInput
    hour_plan?: hour_planCreateNestedOneWithoutSubjectsInput
    degree_plan?: degree_planCreateNestedOneWithoutSubjectsInput
    program_requirements?: program_requirementsCreateNestedOneWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateWithoutExam_planInput = {
    id?: number
    name: string
    subject_code: string
    hours_id?: number | null
    degrees_id?: number | null
    require_id?: number | null
    classrooms?: classroomsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsCreateOrConnectWithoutExam_planInput = {
    where: subjectsWhereUniqueInput
    create: XOR<subjectsCreateWithoutExam_planInput, subjectsUncheckedCreateWithoutExam_planInput>
  }

  export type subjectsCreateManyExam_planInputEnvelope = {
    data: subjectsCreateManyExam_planInput | subjectsCreateManyExam_planInput[]
    skipDuplicates?: boolean
  }

  export type subjectsUpsertWithWhereUniqueWithoutExam_planInput = {
    where: subjectsWhereUniqueInput
    update: XOR<subjectsUpdateWithoutExam_planInput, subjectsUncheckedUpdateWithoutExam_planInput>
    create: XOR<subjectsCreateWithoutExam_planInput, subjectsUncheckedCreateWithoutExam_planInput>
  }

  export type subjectsUpdateWithWhereUniqueWithoutExam_planInput = {
    where: subjectsWhereUniqueInput
    data: XOR<subjectsUpdateWithoutExam_planInput, subjectsUncheckedUpdateWithoutExam_planInput>
  }

  export type subjectsUpdateManyWithWhereWithoutExam_planInput = {
    where: subjectsScalarWhereInput
    data: XOR<subjectsUpdateManyMutationInput, subjectsUncheckedUpdateManyWithoutExam_planInput>
  }

  export type subjectsCreateWithoutHour_planInput = {
    name: string
    subject_code: string
    classrooms?: classroomsCreateNestedManyWithoutSubjectsInput
    exam_plan?: exam_planCreateNestedOneWithoutSubjectsInput
    degree_plan?: degree_planCreateNestedOneWithoutSubjectsInput
    program_requirements?: program_requirementsCreateNestedOneWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateWithoutHour_planInput = {
    id?: number
    name: string
    subject_code: string
    exams_id?: number | null
    degrees_id?: number | null
    require_id?: number | null
    classrooms?: classroomsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsCreateOrConnectWithoutHour_planInput = {
    where: subjectsWhereUniqueInput
    create: XOR<subjectsCreateWithoutHour_planInput, subjectsUncheckedCreateWithoutHour_planInput>
  }

  export type subjectsCreateManyHour_planInputEnvelope = {
    data: subjectsCreateManyHour_planInput | subjectsCreateManyHour_planInput[]
    skipDuplicates?: boolean
  }

  export type subjectsUpsertWithWhereUniqueWithoutHour_planInput = {
    where: subjectsWhereUniqueInput
    update: XOR<subjectsUpdateWithoutHour_planInput, subjectsUncheckedUpdateWithoutHour_planInput>
    create: XOR<subjectsCreateWithoutHour_planInput, subjectsUncheckedCreateWithoutHour_planInput>
  }

  export type subjectsUpdateWithWhereUniqueWithoutHour_planInput = {
    where: subjectsWhereUniqueInput
    data: XOR<subjectsUpdateWithoutHour_planInput, subjectsUncheckedUpdateWithoutHour_planInput>
  }

  export type subjectsUpdateManyWithWhereWithoutHour_planInput = {
    where: subjectsScalarWhereInput
    data: XOR<subjectsUpdateManyMutationInput, subjectsUncheckedUpdateManyWithoutHour_planInput>
  }

  export type departmentCreateWithoutLearning_programsInput = {
    name: string
    depart_code: string
    specialization?: specializationCreateNestedManyWithoutDepartmentInput
    teachers_jobs?: teachers_jobsCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateWithoutLearning_programsInput = {
    id?: number
    name: string
    depart_code: string
    specialization?: specializationUncheckedCreateNestedManyWithoutDepartmentInput
    teachers_jobs?: teachers_jobsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentCreateOrConnectWithoutLearning_programsInput = {
    where: departmentWhereUniqueInput
    create: XOR<departmentCreateWithoutLearning_programsInput, departmentUncheckedCreateWithoutLearning_programsInput>
  }

  export type teachersCreateWithoutLearning_programs_learning_programs_advisorToteachersInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    classrooms?: classroomsCreateNestedManyWithoutTeachersInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput
    students?: studentsCreateNestedManyWithoutTeachersInput
    teachers_jobs?: teachers_jobsCreateNestedManyWithoutTeachersInput
  }

  export type teachersUncheckedCreateWithoutLearning_programs_learning_programs_advisorToteachersInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    classrooms?: classroomsUncheckedCreateNestedManyWithoutTeachersInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput
    students?: studentsUncheckedCreateNestedManyWithoutTeachersInput
    teachers_jobs?: teachers_jobsUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type teachersCreateOrConnectWithoutLearning_programs_learning_programs_advisorToteachersInput = {
    where: teachersWhereUniqueInput
    create: XOR<teachersCreateWithoutLearning_programs_learning_programs_advisorToteachersInput, teachersUncheckedCreateWithoutLearning_programs_learning_programs_advisorToteachersInput>
  }

  export type teachersCreateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    classrooms?: classroomsCreateNestedManyWithoutTeachersInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput
    students?: studentsCreateNestedManyWithoutTeachersInput
    teachers_jobs?: teachers_jobsCreateNestedManyWithoutTeachersInput
  }

  export type teachersUncheckedCreateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    classrooms?: classroomsUncheckedCreateNestedManyWithoutTeachersInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput
    students?: studentsUncheckedCreateNestedManyWithoutTeachersInput
    teachers_jobs?: teachers_jobsUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type teachersCreateOrConnectWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput = {
    where: teachersWhereUniqueInput
    create: XOR<teachersCreateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput, teachersUncheckedCreateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput>
  }

  export type program_requirementsCreateWithoutLearning_programsInput = {
    name: string
    credit_hour?: number
    type: $Enums.program_requirements_type
    require_code: string
    subjects?: subjectsCreateNestedManyWithoutProgram_requirementsInput
  }

  export type program_requirementsUncheckedCreateWithoutLearning_programsInput = {
    id?: number
    name: string
    credit_hour?: number
    type: $Enums.program_requirements_type
    require_code: string
    subjects?: subjectsUncheckedCreateNestedManyWithoutProgram_requirementsInput
  }

  export type program_requirementsCreateOrConnectWithoutLearning_programsInput = {
    where: program_requirementsWhereUniqueInput
    create: XOR<program_requirementsCreateWithoutLearning_programsInput, program_requirementsUncheckedCreateWithoutLearning_programsInput>
  }

  export type program_requirementsCreateManyLearning_programsInputEnvelope = {
    data: program_requirementsCreateManyLearning_programsInput | program_requirementsCreateManyLearning_programsInput[]
    skipDuplicates?: boolean
  }

  export type departmentUpsertWithoutLearning_programsInput = {
    update: XOR<departmentUpdateWithoutLearning_programsInput, departmentUncheckedUpdateWithoutLearning_programsInput>
    create: XOR<departmentCreateWithoutLearning_programsInput, departmentUncheckedCreateWithoutLearning_programsInput>
    where?: departmentWhereInput
  }

  export type departmentUpdateToOneWithWhereWithoutLearning_programsInput = {
    where?: departmentWhereInput
    data: XOR<departmentUpdateWithoutLearning_programsInput, departmentUncheckedUpdateWithoutLearning_programsInput>
  }

  export type departmentUpdateWithoutLearning_programsInput = {
    name?: StringFieldUpdateOperationsInput | string
    depart_code?: StringFieldUpdateOperationsInput | string
    specialization?: specializationUpdateManyWithoutDepartmentNestedInput
    teachers_jobs?: teachers_jobsUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateWithoutLearning_programsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    depart_code?: StringFieldUpdateOperationsInput | string
    specialization?: specializationUncheckedUpdateManyWithoutDepartmentNestedInput
    teachers_jobs?: teachers_jobsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type teachersUpsertWithoutLearning_programs_learning_programs_advisorToteachersInput = {
    update: XOR<teachersUpdateWithoutLearning_programs_learning_programs_advisorToteachersInput, teachersUncheckedUpdateWithoutLearning_programs_learning_programs_advisorToteachersInput>
    create: XOR<teachersCreateWithoutLearning_programs_learning_programs_advisorToteachersInput, teachersUncheckedCreateWithoutLearning_programs_learning_programs_advisorToteachersInput>
    where?: teachersWhereInput
  }

  export type teachersUpdateToOneWithWhereWithoutLearning_programs_learning_programs_advisorToteachersInput = {
    where?: teachersWhereInput
    data: XOR<teachersUpdateWithoutLearning_programs_learning_programs_advisorToteachersInput, teachersUncheckedUpdateWithoutLearning_programs_learning_programs_advisorToteachersInput>
  }

  export type teachersUpdateWithoutLearning_programs_learning_programs_advisorToteachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    classrooms?: classroomsUpdateManyWithoutTeachersNestedInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput
    students?: studentsUpdateManyWithoutTeachersNestedInput
    teachers_jobs?: teachers_jobsUpdateManyWithoutTeachersNestedInput
  }

  export type teachersUncheckedUpdateWithoutLearning_programs_learning_programs_advisorToteachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    classrooms?: classroomsUncheckedUpdateManyWithoutTeachersNestedInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput
    students?: studentsUncheckedUpdateManyWithoutTeachersNestedInput
    teachers_jobs?: teachers_jobsUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type teachersUpsertWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput = {
    update: XOR<teachersUpdateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput, teachersUncheckedUpdateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput>
    create: XOR<teachersCreateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput, teachersUncheckedCreateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput>
    where?: teachersWhereInput
  }

  export type teachersUpdateToOneWithWhereWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput = {
    where?: teachersWhereInput
    data: XOR<teachersUpdateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput, teachersUncheckedUpdateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput>
  }

  export type teachersUpdateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    classrooms?: classroomsUpdateManyWithoutTeachersNestedInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput
    students?: studentsUpdateManyWithoutTeachersNestedInput
    teachers_jobs?: teachers_jobsUpdateManyWithoutTeachersNestedInput
  }

  export type teachersUncheckedUpdateWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    classrooms?: classroomsUncheckedUpdateManyWithoutTeachersNestedInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput
    students?: studentsUncheckedUpdateManyWithoutTeachersNestedInput
    teachers_jobs?: teachers_jobsUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type program_requirementsUpsertWithWhereUniqueWithoutLearning_programsInput = {
    where: program_requirementsWhereUniqueInput
    update: XOR<program_requirementsUpdateWithoutLearning_programsInput, program_requirementsUncheckedUpdateWithoutLearning_programsInput>
    create: XOR<program_requirementsCreateWithoutLearning_programsInput, program_requirementsUncheckedCreateWithoutLearning_programsInput>
  }

  export type program_requirementsUpdateWithWhereUniqueWithoutLearning_programsInput = {
    where: program_requirementsWhereUniqueInput
    data: XOR<program_requirementsUpdateWithoutLearning_programsInput, program_requirementsUncheckedUpdateWithoutLearning_programsInput>
  }

  export type program_requirementsUpdateManyWithWhereWithoutLearning_programsInput = {
    where: program_requirementsScalarWhereInput
    data: XOR<program_requirementsUpdateManyMutationInput, program_requirementsUncheckedUpdateManyWithoutLearning_programsInput>
  }

  export type program_requirementsScalarWhereInput = {
    AND?: program_requirementsScalarWhereInput | program_requirementsScalarWhereInput[]
    OR?: program_requirementsScalarWhereInput[]
    NOT?: program_requirementsScalarWhereInput | program_requirementsScalarWhereInput[]
    id?: IntFilter<"program_requirements"> | number
    name?: StringFilter<"program_requirements"> | string
    credit_hour?: IntFilter<"program_requirements"> | number
    type?: Enumprogram_requirements_typeFilter<"program_requirements"> | $Enums.program_requirements_type
    require_code?: StringFilter<"program_requirements"> | string
    program_id?: IntFilter<"program_requirements"> | number
  }

  export type learning_programsCreateWithoutProgram_requirementsInput = {
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    department: departmentCreateNestedOneWithoutLearning_programsInput
    teachers_learning_programs_advisorToteachers?: teachersCreateNestedOneWithoutLearning_programs_learning_programs_advisorToteachersInput
    teachers_learning_programs_advisor_assistantToteachers?: teachersCreateNestedOneWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput
  }

  export type learning_programsUncheckedCreateWithoutProgram_requirementsInput = {
    id?: number
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    depart_id: number
    advisor?: number | null
    advisor_assistant?: number | null
  }

  export type learning_programsCreateOrConnectWithoutProgram_requirementsInput = {
    where: learning_programsWhereUniqueInput
    create: XOR<learning_programsCreateWithoutProgram_requirementsInput, learning_programsUncheckedCreateWithoutProgram_requirementsInput>
  }

  export type subjectsCreateWithoutProgram_requirementsInput = {
    name: string
    subject_code: string
    classrooms?: classroomsCreateNestedManyWithoutSubjectsInput
    hour_plan?: hour_planCreateNestedOneWithoutSubjectsInput
    exam_plan?: exam_planCreateNestedOneWithoutSubjectsInput
    degree_plan?: degree_planCreateNestedOneWithoutSubjectsInput
  }

  export type subjectsUncheckedCreateWithoutProgram_requirementsInput = {
    id?: number
    name: string
    subject_code: string
    hours_id?: number | null
    exams_id?: number | null
    degrees_id?: number | null
    classrooms?: classroomsUncheckedCreateNestedManyWithoutSubjectsInput
  }

  export type subjectsCreateOrConnectWithoutProgram_requirementsInput = {
    where: subjectsWhereUniqueInput
    create: XOR<subjectsCreateWithoutProgram_requirementsInput, subjectsUncheckedCreateWithoutProgram_requirementsInput>
  }

  export type subjectsCreateManyProgram_requirementsInputEnvelope = {
    data: subjectsCreateManyProgram_requirementsInput | subjectsCreateManyProgram_requirementsInput[]
    skipDuplicates?: boolean
  }

  export type learning_programsUpsertWithoutProgram_requirementsInput = {
    update: XOR<learning_programsUpdateWithoutProgram_requirementsInput, learning_programsUncheckedUpdateWithoutProgram_requirementsInput>
    create: XOR<learning_programsCreateWithoutProgram_requirementsInput, learning_programsUncheckedCreateWithoutProgram_requirementsInput>
    where?: learning_programsWhereInput
  }

  export type learning_programsUpdateToOneWithWhereWithoutProgram_requirementsInput = {
    where?: learning_programsWhereInput
    data: XOR<learning_programsUpdateWithoutProgram_requirementsInput, learning_programsUncheckedUpdateWithoutProgram_requirementsInput>
  }

  export type learning_programsUpdateWithoutProgram_requirementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutLearning_programsNestedInput
    teachers_learning_programs_advisorToteachers?: teachersUpdateOneWithoutLearning_programs_learning_programs_advisorToteachersNestedInput
    teachers_learning_programs_advisor_assistantToteachers?: teachersUpdateOneWithoutLearning_programs_learning_programs_advisor_assistantToteachersNestedInput
  }

  export type learning_programsUncheckedUpdateWithoutProgram_requirementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
    advisor_assistant?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type subjectsUpsertWithWhereUniqueWithoutProgram_requirementsInput = {
    where: subjectsWhereUniqueInput
    update: XOR<subjectsUpdateWithoutProgram_requirementsInput, subjectsUncheckedUpdateWithoutProgram_requirementsInput>
    create: XOR<subjectsCreateWithoutProgram_requirementsInput, subjectsUncheckedCreateWithoutProgram_requirementsInput>
  }

  export type subjectsUpdateWithWhereUniqueWithoutProgram_requirementsInput = {
    where: subjectsWhereUniqueInput
    data: XOR<subjectsUpdateWithoutProgram_requirementsInput, subjectsUncheckedUpdateWithoutProgram_requirementsInput>
  }

  export type subjectsUpdateManyWithWhereWithoutProgram_requirementsInput = {
    where: subjectsScalarWhereInput
    data: XOR<subjectsUpdateManyMutationInput, subjectsUncheckedUpdateManyWithoutProgram_requirementsInput>
  }

  export type studentsCreateWithoutResultsInput = {
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    teachers?: teachersCreateNestedOneWithoutStudentsInput
    specialization: specializationCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutResultsInput = {
    id?: number
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    advisor?: number | null
    specialization_id: number
  }

  export type studentsCreateOrConnectWithoutResultsInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutResultsInput, studentsUncheckedCreateWithoutResultsInput>
  }

  export type classroomsCreateWithoutResultsInput = {
    duration_plans_classrooms_duration_plansToduration_plans: duration_plansCreateNestedOneWithoutClassrooms_classrooms_duration_plansToduration_plansInput
    subjects: subjectsCreateNestedOneWithoutClassroomsInput
    teachers?: teachersCreateNestedOneWithoutClassroomsInput
  }

  export type classroomsUncheckedCreateWithoutResultsInput = {
    id?: number
    duration_plans: number
    subject_id: number
    teacher_id?: number | null
  }

  export type classroomsCreateOrConnectWithoutResultsInput = {
    where: classroomsWhereUniqueInput
    create: XOR<classroomsCreateWithoutResultsInput, classroomsUncheckedCreateWithoutResultsInput>
  }

  export type studentsUpsertWithoutResultsInput = {
    update: XOR<studentsUpdateWithoutResultsInput, studentsUncheckedUpdateWithoutResultsInput>
    create: XOR<studentsCreateWithoutResultsInput, studentsUncheckedCreateWithoutResultsInput>
    where?: studentsWhereInput
  }

  export type studentsUpdateToOneWithWhereWithoutResultsInput = {
    where?: studentsWhereInput
    data: XOR<studentsUpdateWithoutResultsInput, studentsUncheckedUpdateWithoutResultsInput>
  }

  export type studentsUpdateWithoutResultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    teachers?: teachersUpdateOneWithoutStudentsNestedInput
    specialization?: specializationUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
    specialization_id?: IntFieldUpdateOperationsInput | number
  }

  export type classroomsUpsertWithoutResultsInput = {
    update: XOR<classroomsUpdateWithoutResultsInput, classroomsUncheckedUpdateWithoutResultsInput>
    create: XOR<classroomsCreateWithoutResultsInput, classroomsUncheckedCreateWithoutResultsInput>
    where?: classroomsWhereInput
  }

  export type classroomsUpdateToOneWithWhereWithoutResultsInput = {
    where?: classroomsWhereInput
    data: XOR<classroomsUpdateWithoutResultsInput, classroomsUncheckedUpdateWithoutResultsInput>
  }

  export type classroomsUpdateWithoutResultsInput = {
    duration_plans_classrooms_duration_plansToduration_plans?: duration_plansUpdateOneRequiredWithoutClassrooms_classrooms_duration_plansToduration_plansNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutClassroomsNestedInput
    teachers?: teachersUpdateOneWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateWithoutResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    duration_plans?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type departmentCreateWithoutSpecializationInput = {
    name: string
    depart_code: string
    learning_programs?: learning_programsCreateNestedManyWithoutDepartmentInput
    teachers_jobs?: teachers_jobsCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateWithoutSpecializationInput = {
    id?: number
    name: string
    depart_code: string
    learning_programs?: learning_programsUncheckedCreateNestedManyWithoutDepartmentInput
    teachers_jobs?: teachers_jobsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentCreateOrConnectWithoutSpecializationInput = {
    where: departmentWhereUniqueInput
    create: XOR<departmentCreateWithoutSpecializationInput, departmentUncheckedCreateWithoutSpecializationInput>
  }

  export type studentsCreateWithoutSpecializationInput = {
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    results?: resultsCreateNestedManyWithoutStudentsInput
    teachers?: teachersCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutSpecializationInput = {
    id?: number
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    advisor?: number | null
    results?: resultsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutSpecializationInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutSpecializationInput, studentsUncheckedCreateWithoutSpecializationInput>
  }

  export type studentsCreateManySpecializationInputEnvelope = {
    data: studentsCreateManySpecializationInput | studentsCreateManySpecializationInput[]
    skipDuplicates?: boolean
  }

  export type departmentUpsertWithoutSpecializationInput = {
    update: XOR<departmentUpdateWithoutSpecializationInput, departmentUncheckedUpdateWithoutSpecializationInput>
    create: XOR<departmentCreateWithoutSpecializationInput, departmentUncheckedCreateWithoutSpecializationInput>
    where?: departmentWhereInput
  }

  export type departmentUpdateToOneWithWhereWithoutSpecializationInput = {
    where?: departmentWhereInput
    data: XOR<departmentUpdateWithoutSpecializationInput, departmentUncheckedUpdateWithoutSpecializationInput>
  }

  export type departmentUpdateWithoutSpecializationInput = {
    name?: StringFieldUpdateOperationsInput | string
    depart_code?: StringFieldUpdateOperationsInput | string
    learning_programs?: learning_programsUpdateManyWithoutDepartmentNestedInput
    teachers_jobs?: teachers_jobsUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateWithoutSpecializationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    depart_code?: StringFieldUpdateOperationsInput | string
    learning_programs?: learning_programsUncheckedUpdateManyWithoutDepartmentNestedInput
    teachers_jobs?: teachers_jobsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type studentsUpsertWithWhereUniqueWithoutSpecializationInput = {
    where: studentsWhereUniqueInput
    update: XOR<studentsUpdateWithoutSpecializationInput, studentsUncheckedUpdateWithoutSpecializationInput>
    create: XOR<studentsCreateWithoutSpecializationInput, studentsUncheckedCreateWithoutSpecializationInput>
  }

  export type studentsUpdateWithWhereUniqueWithoutSpecializationInput = {
    where: studentsWhereUniqueInput
    data: XOR<studentsUpdateWithoutSpecializationInput, studentsUncheckedUpdateWithoutSpecializationInput>
  }

  export type studentsUpdateManyWithWhereWithoutSpecializationInput = {
    where: studentsScalarWhereInput
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyWithoutSpecializationInput>
  }

  export type studentsScalarWhereInput = {
    AND?: studentsScalarWhereInput | studentsScalarWhereInput[]
    OR?: studentsScalarWhereInput[]
    NOT?: studentsScalarWhereInput | studentsScalarWhereInput[]
    id?: IntFilter<"students"> | number
    name?: StringFilter<"students"> | string
    registered_at?: DateTimeNullableFilter<"students"> | Date | string | null
    student_code?: StringFilter<"students"> | string
    national_n?: StringNullableFilter<"students"> | string | null
    phone?: StringNullableFilter<"students"> | string | null
    nation_phone?: StringNullableFilter<"students"> | string | null
    advisor?: IntNullableFilter<"students"> | number | null
    specialization_id?: IntFilter<"students"> | number
  }

  export type resultsCreateWithoutStudentsInput = {
    st_status: $Enums.results_st_status
    classrooms: classroomsCreateNestedOneWithoutResultsInput
  }

  export type resultsUncheckedCreateWithoutStudentsInput = {
    id?: number
    classroom_id: number
    st_status: $Enums.results_st_status
  }

  export type resultsCreateOrConnectWithoutStudentsInput = {
    where: resultsWhereUniqueInput
    create: XOR<resultsCreateWithoutStudentsInput, resultsUncheckedCreateWithoutStudentsInput>
  }

  export type resultsCreateManyStudentsInputEnvelope = {
    data: resultsCreateManyStudentsInput | resultsCreateManyStudentsInput[]
    skipDuplicates?: boolean
  }

  export type teachersCreateWithoutStudentsInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    classrooms?: classroomsCreateNestedManyWithoutTeachersInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput
    teachers_jobs?: teachers_jobsCreateNestedManyWithoutTeachersInput
  }

  export type teachersUncheckedCreateWithoutStudentsInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    classrooms?: classroomsUncheckedCreateNestedManyWithoutTeachersInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput
    teachers_jobs?: teachers_jobsUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type teachersCreateOrConnectWithoutStudentsInput = {
    where: teachersWhereUniqueInput
    create: XOR<teachersCreateWithoutStudentsInput, teachersUncheckedCreateWithoutStudentsInput>
  }

  export type specializationCreateWithoutStudentsInput = {
    name: string
    department: departmentCreateNestedOneWithoutSpecializationInput
  }

  export type specializationUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    depart_id: number
  }

  export type specializationCreateOrConnectWithoutStudentsInput = {
    where: specializationWhereUniqueInput
    create: XOR<specializationCreateWithoutStudentsInput, specializationUncheckedCreateWithoutStudentsInput>
  }

  export type resultsUpsertWithWhereUniqueWithoutStudentsInput = {
    where: resultsWhereUniqueInput
    update: XOR<resultsUpdateWithoutStudentsInput, resultsUncheckedUpdateWithoutStudentsInput>
    create: XOR<resultsCreateWithoutStudentsInput, resultsUncheckedCreateWithoutStudentsInput>
  }

  export type resultsUpdateWithWhereUniqueWithoutStudentsInput = {
    where: resultsWhereUniqueInput
    data: XOR<resultsUpdateWithoutStudentsInput, resultsUncheckedUpdateWithoutStudentsInput>
  }

  export type resultsUpdateManyWithWhereWithoutStudentsInput = {
    where: resultsScalarWhereInput
    data: XOR<resultsUpdateManyMutationInput, resultsUncheckedUpdateManyWithoutStudentsInput>
  }

  export type teachersUpsertWithoutStudentsInput = {
    update: XOR<teachersUpdateWithoutStudentsInput, teachersUncheckedUpdateWithoutStudentsInput>
    create: XOR<teachersCreateWithoutStudentsInput, teachersUncheckedCreateWithoutStudentsInput>
    where?: teachersWhereInput
  }

  export type teachersUpdateToOneWithWhereWithoutStudentsInput = {
    where?: teachersWhereInput
    data: XOR<teachersUpdateWithoutStudentsInput, teachersUncheckedUpdateWithoutStudentsInput>
  }

  export type teachersUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    classrooms?: classroomsUpdateManyWithoutTeachersNestedInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput
    teachers_jobs?: teachers_jobsUpdateManyWithoutTeachersNestedInput
  }

  export type teachersUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    classrooms?: classroomsUncheckedUpdateManyWithoutTeachersNestedInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput
    teachers_jobs?: teachers_jobsUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type specializationUpsertWithoutStudentsInput = {
    update: XOR<specializationUpdateWithoutStudentsInput, specializationUncheckedUpdateWithoutStudentsInput>
    create: XOR<specializationCreateWithoutStudentsInput, specializationUncheckedCreateWithoutStudentsInput>
    where?: specializationWhereInput
  }

  export type specializationUpdateToOneWithWhereWithoutStudentsInput = {
    where?: specializationWhereInput
    data: XOR<specializationUpdateWithoutStudentsInput, specializationUncheckedUpdateWithoutStudentsInput>
  }

  export type specializationUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutSpecializationNestedInput
  }

  export type specializationUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
  }

  export type classroomsCreateWithoutSubjectsInput = {
    duration_plans_classrooms_duration_plansToduration_plans: duration_plansCreateNestedOneWithoutClassrooms_classrooms_duration_plansToduration_plansInput
    teachers?: teachersCreateNestedOneWithoutClassroomsInput
    results?: resultsCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsUncheckedCreateWithoutSubjectsInput = {
    id?: number
    duration_plans: number
    teacher_id?: number | null
    results?: resultsUncheckedCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsCreateOrConnectWithoutSubjectsInput = {
    where: classroomsWhereUniqueInput
    create: XOR<classroomsCreateWithoutSubjectsInput, classroomsUncheckedCreateWithoutSubjectsInput>
  }

  export type classroomsCreateManySubjectsInputEnvelope = {
    data: classroomsCreateManySubjectsInput | classroomsCreateManySubjectsInput[]
    skipDuplicates?: boolean
  }

  export type hour_planCreateWithoutSubjectsInput = {
    theoretical?: number
    practical?: number
    credit?: number
  }

  export type hour_planUncheckedCreateWithoutSubjectsInput = {
    id?: number
    theoretical?: number
    practical?: number
    credit?: number
  }

  export type hour_planCreateOrConnectWithoutSubjectsInput = {
    where: hour_planWhereUniqueInput
    create: XOR<hour_planCreateWithoutSubjectsInput, hour_planUncheckedCreateWithoutSubjectsInput>
  }

  export type exam_planCreateWithoutSubjectsInput = {
    theoretical: number
    practical: number
  }

  export type exam_planUncheckedCreateWithoutSubjectsInput = {
    id?: number
    theoretical: number
    practical: number
  }

  export type exam_planCreateOrConnectWithoutSubjectsInput = {
    where: exam_planWhereUniqueInput
    create: XOR<exam_planCreateWithoutSubjectsInput, exam_planUncheckedCreateWithoutSubjectsInput>
  }

  export type degree_planCreateWithoutSubjectsInput = {
    theoretical: number
    practical: number
    activity: number
  }

  export type degree_planUncheckedCreateWithoutSubjectsInput = {
    id?: number
    theoretical: number
    practical: number
    activity: number
  }

  export type degree_planCreateOrConnectWithoutSubjectsInput = {
    where: degree_planWhereUniqueInput
    create: XOR<degree_planCreateWithoutSubjectsInput, degree_planUncheckedCreateWithoutSubjectsInput>
  }

  export type program_requirementsCreateWithoutSubjectsInput = {
    name: string
    credit_hour?: number
    type: $Enums.program_requirements_type
    require_code: string
    learning_programs: learning_programsCreateNestedOneWithoutProgram_requirementsInput
  }

  export type program_requirementsUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    credit_hour?: number
    type: $Enums.program_requirements_type
    require_code: string
    program_id: number
  }

  export type program_requirementsCreateOrConnectWithoutSubjectsInput = {
    where: program_requirementsWhereUniqueInput
    create: XOR<program_requirementsCreateWithoutSubjectsInput, program_requirementsUncheckedCreateWithoutSubjectsInput>
  }

  export type classroomsUpsertWithWhereUniqueWithoutSubjectsInput = {
    where: classroomsWhereUniqueInput
    update: XOR<classroomsUpdateWithoutSubjectsInput, classroomsUncheckedUpdateWithoutSubjectsInput>
    create: XOR<classroomsCreateWithoutSubjectsInput, classroomsUncheckedCreateWithoutSubjectsInput>
  }

  export type classroomsUpdateWithWhereUniqueWithoutSubjectsInput = {
    where: classroomsWhereUniqueInput
    data: XOR<classroomsUpdateWithoutSubjectsInput, classroomsUncheckedUpdateWithoutSubjectsInput>
  }

  export type classroomsUpdateManyWithWhereWithoutSubjectsInput = {
    where: classroomsScalarWhereInput
    data: XOR<classroomsUpdateManyMutationInput, classroomsUncheckedUpdateManyWithoutSubjectsInput>
  }

  export type hour_planUpsertWithoutSubjectsInput = {
    update: XOR<hour_planUpdateWithoutSubjectsInput, hour_planUncheckedUpdateWithoutSubjectsInput>
    create: XOR<hour_planCreateWithoutSubjectsInput, hour_planUncheckedCreateWithoutSubjectsInput>
    where?: hour_planWhereInput
  }

  export type hour_planUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: hour_planWhereInput
    data: XOR<hour_planUpdateWithoutSubjectsInput, hour_planUncheckedUpdateWithoutSubjectsInput>
  }

  export type hour_planUpdateWithoutSubjectsInput = {
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    credit?: IntFieldUpdateOperationsInput | number
  }

  export type hour_planUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    credit?: IntFieldUpdateOperationsInput | number
  }

  export type exam_planUpsertWithoutSubjectsInput = {
    update: XOR<exam_planUpdateWithoutSubjectsInput, exam_planUncheckedUpdateWithoutSubjectsInput>
    create: XOR<exam_planCreateWithoutSubjectsInput, exam_planUncheckedCreateWithoutSubjectsInput>
    where?: exam_planWhereInput
  }

  export type exam_planUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: exam_planWhereInput
    data: XOR<exam_planUpdateWithoutSubjectsInput, exam_planUncheckedUpdateWithoutSubjectsInput>
  }

  export type exam_planUpdateWithoutSubjectsInput = {
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
  }

  export type exam_planUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
  }

  export type degree_planUpsertWithoutSubjectsInput = {
    update: XOR<degree_planUpdateWithoutSubjectsInput, degree_planUncheckedUpdateWithoutSubjectsInput>
    create: XOR<degree_planCreateWithoutSubjectsInput, degree_planUncheckedCreateWithoutSubjectsInput>
    where?: degree_planWhereInput
  }

  export type degree_planUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: degree_planWhereInput
    data: XOR<degree_planUpdateWithoutSubjectsInput, degree_planUncheckedUpdateWithoutSubjectsInput>
  }

  export type degree_planUpdateWithoutSubjectsInput = {
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    activity?: IntFieldUpdateOperationsInput | number
  }

  export type degree_planUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    theoretical?: IntFieldUpdateOperationsInput | number
    practical?: IntFieldUpdateOperationsInput | number
    activity?: IntFieldUpdateOperationsInput | number
  }

  export type program_requirementsUpsertWithoutSubjectsInput = {
    update: XOR<program_requirementsUpdateWithoutSubjectsInput, program_requirementsUncheckedUpdateWithoutSubjectsInput>
    create: XOR<program_requirementsCreateWithoutSubjectsInput, program_requirementsUncheckedCreateWithoutSubjectsInput>
    where?: program_requirementsWhereInput
  }

  export type program_requirementsUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: program_requirementsWhereInput
    data: XOR<program_requirementsUpdateWithoutSubjectsInput, program_requirementsUncheckedUpdateWithoutSubjectsInput>
  }

  export type program_requirementsUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    credit_hour?: IntFieldUpdateOperationsInput | number
    type?: Enumprogram_requirements_typeFieldUpdateOperationsInput | $Enums.program_requirements_type
    require_code?: StringFieldUpdateOperationsInput | string
    learning_programs?: learning_programsUpdateOneRequiredWithoutProgram_requirementsNestedInput
  }

  export type program_requirementsUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credit_hour?: IntFieldUpdateOperationsInput | number
    type?: Enumprogram_requirements_typeFieldUpdateOperationsInput | $Enums.program_requirements_type
    require_code?: StringFieldUpdateOperationsInput | string
    program_id?: IntFieldUpdateOperationsInput | number
  }

  export type classroomsCreateWithoutTeachersInput = {
    duration_plans_classrooms_duration_plansToduration_plans: duration_plansCreateNestedOneWithoutClassrooms_classrooms_duration_plansToduration_plansInput
    subjects: subjectsCreateNestedOneWithoutClassroomsInput
    results?: resultsCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsUncheckedCreateWithoutTeachersInput = {
    id?: number
    duration_plans: number
    subject_id: number
    results?: resultsUncheckedCreateNestedManyWithoutClassroomsInput
  }

  export type classroomsCreateOrConnectWithoutTeachersInput = {
    where: classroomsWhereUniqueInput
    create: XOR<classroomsCreateWithoutTeachersInput, classroomsUncheckedCreateWithoutTeachersInput>
  }

  export type classroomsCreateManyTeachersInputEnvelope = {
    data: classroomsCreateManyTeachersInput | classroomsCreateManyTeachersInput[]
    skipDuplicates?: boolean
  }

  export type learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput = {
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    department: departmentCreateNestedOneWithoutLearning_programsInput
    teachers_learning_programs_advisor_assistantToteachers?: teachersCreateNestedOneWithoutLearning_programs_learning_programs_advisor_assistantToteachersInput
    program_requirements?: program_requirementsCreateNestedManyWithoutLearning_programsInput
  }

  export type learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput = {
    id?: number
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    depart_id: number
    advisor_assistant?: number | null
    program_requirements?: program_requirementsUncheckedCreateNestedManyWithoutLearning_programsInput
  }

  export type learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisorToteachersInput = {
    where: learning_programsWhereUniqueInput
    create: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput>
  }

  export type learning_programsCreateManyTeachers_learning_programs_advisorToteachersInputEnvelope = {
    data: learning_programsCreateManyTeachers_learning_programs_advisorToteachersInput | learning_programsCreateManyTeachers_learning_programs_advisorToteachersInput[]
    skipDuplicates?: boolean
  }

  export type learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    department: departmentCreateNestedOneWithoutLearning_programsInput
    teachers_learning_programs_advisorToteachers?: teachersCreateNestedOneWithoutLearning_programs_learning_programs_advisorToteachersInput
    program_requirements?: program_requirementsCreateNestedManyWithoutLearning_programsInput
  }

  export type learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    id?: number
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    depart_id: number
    advisor?: number | null
    program_requirements?: program_requirementsUncheckedCreateNestedManyWithoutLearning_programsInput
  }

  export type learning_programsCreateOrConnectWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    where: learning_programsWhereUniqueInput
    create: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput>
  }

  export type learning_programsCreateManyTeachers_learning_programs_advisor_assistantToteachersInputEnvelope = {
    data: learning_programsCreateManyTeachers_learning_programs_advisor_assistantToteachersInput | learning_programsCreateManyTeachers_learning_programs_advisor_assistantToteachersInput[]
    skipDuplicates?: boolean
  }

  export type studentsCreateWithoutTeachersInput = {
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    results?: resultsCreateNestedManyWithoutStudentsInput
    specialization: specializationCreateNestedOneWithoutStudentsInput
  }

  export type studentsUncheckedCreateWithoutTeachersInput = {
    id?: number
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    specialization_id: number
    results?: resultsUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type studentsCreateOrConnectWithoutTeachersInput = {
    where: studentsWhereUniqueInput
    create: XOR<studentsCreateWithoutTeachersInput, studentsUncheckedCreateWithoutTeachersInput>
  }

  export type studentsCreateManyTeachersInputEnvelope = {
    data: studentsCreateManyTeachersInput | studentsCreateManyTeachersInput[]
    skipDuplicates?: boolean
  }

  export type teachers_jobsCreateWithoutTeachersInput = {
    jobs: string
    department: departmentCreateNestedOneWithoutTeachers_jobsInput
  }

  export type teachers_jobsUncheckedCreateWithoutTeachersInput = {
    id?: number
    jobs: string
    depart_id: number
  }

  export type teachers_jobsCreateOrConnectWithoutTeachersInput = {
    where: teachers_jobsWhereUniqueInput
    create: XOR<teachers_jobsCreateWithoutTeachersInput, teachers_jobsUncheckedCreateWithoutTeachersInput>
  }

  export type teachers_jobsCreateManyTeachersInputEnvelope = {
    data: teachers_jobsCreateManyTeachersInput | teachers_jobsCreateManyTeachersInput[]
    skipDuplicates?: boolean
  }

  export type classroomsUpsertWithWhereUniqueWithoutTeachersInput = {
    where: classroomsWhereUniqueInput
    update: XOR<classroomsUpdateWithoutTeachersInput, classroomsUncheckedUpdateWithoutTeachersInput>
    create: XOR<classroomsCreateWithoutTeachersInput, classroomsUncheckedCreateWithoutTeachersInput>
  }

  export type classroomsUpdateWithWhereUniqueWithoutTeachersInput = {
    where: classroomsWhereUniqueInput
    data: XOR<classroomsUpdateWithoutTeachersInput, classroomsUncheckedUpdateWithoutTeachersInput>
  }

  export type classroomsUpdateManyWithWhereWithoutTeachersInput = {
    where: classroomsScalarWhereInput
    data: XOR<classroomsUpdateManyMutationInput, classroomsUncheckedUpdateManyWithoutTeachersInput>
  }

  export type learning_programsUpsertWithWhereUniqueWithoutTeachers_learning_programs_advisorToteachersInput = {
    where: learning_programsWhereUniqueInput
    update: XOR<learning_programsUpdateWithoutTeachers_learning_programs_advisorToteachersInput, learning_programsUncheckedUpdateWithoutTeachers_learning_programs_advisorToteachersInput>
    create: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisorToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisorToteachersInput>
  }

  export type learning_programsUpdateWithWhereUniqueWithoutTeachers_learning_programs_advisorToteachersInput = {
    where: learning_programsWhereUniqueInput
    data: XOR<learning_programsUpdateWithoutTeachers_learning_programs_advisorToteachersInput, learning_programsUncheckedUpdateWithoutTeachers_learning_programs_advisorToteachersInput>
  }

  export type learning_programsUpdateManyWithWhereWithoutTeachers_learning_programs_advisorToteachersInput = {
    where: learning_programsScalarWhereInput
    data: XOR<learning_programsUpdateManyMutationInput, learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisorToteachersInput>
  }

  export type learning_programsUpsertWithWhereUniqueWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    where: learning_programsWhereUniqueInput
    update: XOR<learning_programsUpdateWithoutTeachers_learning_programs_advisor_assistantToteachersInput, learning_programsUncheckedUpdateWithoutTeachers_learning_programs_advisor_assistantToteachersInput>
    create: XOR<learning_programsCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput, learning_programsUncheckedCreateWithoutTeachers_learning_programs_advisor_assistantToteachersInput>
  }

  export type learning_programsUpdateWithWhereUniqueWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    where: learning_programsWhereUniqueInput
    data: XOR<learning_programsUpdateWithoutTeachers_learning_programs_advisor_assistantToteachersInput, learning_programsUncheckedUpdateWithoutTeachers_learning_programs_advisor_assistantToteachersInput>
  }

  export type learning_programsUpdateManyWithWhereWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    where: learning_programsScalarWhereInput
    data: XOR<learning_programsUpdateManyMutationInput, learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput>
  }

  export type studentsUpsertWithWhereUniqueWithoutTeachersInput = {
    where: studentsWhereUniqueInput
    update: XOR<studentsUpdateWithoutTeachersInput, studentsUncheckedUpdateWithoutTeachersInput>
    create: XOR<studentsCreateWithoutTeachersInput, studentsUncheckedCreateWithoutTeachersInput>
  }

  export type studentsUpdateWithWhereUniqueWithoutTeachersInput = {
    where: studentsWhereUniqueInput
    data: XOR<studentsUpdateWithoutTeachersInput, studentsUncheckedUpdateWithoutTeachersInput>
  }

  export type studentsUpdateManyWithWhereWithoutTeachersInput = {
    where: studentsScalarWhereInput
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyWithoutTeachersInput>
  }

  export type teachers_jobsUpsertWithWhereUniqueWithoutTeachersInput = {
    where: teachers_jobsWhereUniqueInput
    update: XOR<teachers_jobsUpdateWithoutTeachersInput, teachers_jobsUncheckedUpdateWithoutTeachersInput>
    create: XOR<teachers_jobsCreateWithoutTeachersInput, teachers_jobsUncheckedCreateWithoutTeachersInput>
  }

  export type teachers_jobsUpdateWithWhereUniqueWithoutTeachersInput = {
    where: teachers_jobsWhereUniqueInput
    data: XOR<teachers_jobsUpdateWithoutTeachersInput, teachers_jobsUncheckedUpdateWithoutTeachersInput>
  }

  export type teachers_jobsUpdateManyWithWhereWithoutTeachersInput = {
    where: teachers_jobsScalarWhereInput
    data: XOR<teachers_jobsUpdateManyMutationInput, teachers_jobsUncheckedUpdateManyWithoutTeachersInput>
  }

  export type teachersCreateWithoutTeachers_jobsInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    classrooms?: classroomsCreateNestedManyWithoutTeachersInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput
    students?: studentsCreateNestedManyWithoutTeachersInput
  }

  export type teachersUncheckedCreateWithoutTeachers_jobsInput = {
    id: number
    name: string
    degree: $Enums.teachers_degree
    classrooms?: classroomsUncheckedCreateNestedManyWithoutTeachersInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisorToteachersInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUncheckedCreateNestedManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput
    students?: studentsUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type teachersCreateOrConnectWithoutTeachers_jobsInput = {
    where: teachersWhereUniqueInput
    create: XOR<teachersCreateWithoutTeachers_jobsInput, teachersUncheckedCreateWithoutTeachers_jobsInput>
  }

  export type departmentCreateWithoutTeachers_jobsInput = {
    name: string
    depart_code: string
    learning_programs?: learning_programsCreateNestedManyWithoutDepartmentInput
    specialization?: specializationCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateWithoutTeachers_jobsInput = {
    id?: number
    name: string
    depart_code: string
    learning_programs?: learning_programsUncheckedCreateNestedManyWithoutDepartmentInput
    specialization?: specializationUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentCreateOrConnectWithoutTeachers_jobsInput = {
    where: departmentWhereUniqueInput
    create: XOR<departmentCreateWithoutTeachers_jobsInput, departmentUncheckedCreateWithoutTeachers_jobsInput>
  }

  export type teachersUpsertWithoutTeachers_jobsInput = {
    update: XOR<teachersUpdateWithoutTeachers_jobsInput, teachersUncheckedUpdateWithoutTeachers_jobsInput>
    create: XOR<teachersCreateWithoutTeachers_jobsInput, teachersUncheckedCreateWithoutTeachers_jobsInput>
    where?: teachersWhereInput
  }

  export type teachersUpdateToOneWithWhereWithoutTeachers_jobsInput = {
    where?: teachersWhereInput
    data: XOR<teachersUpdateWithoutTeachers_jobsInput, teachersUncheckedUpdateWithoutTeachers_jobsInput>
  }

  export type teachersUpdateWithoutTeachers_jobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    classrooms?: classroomsUpdateManyWithoutTeachersNestedInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput
    students?: studentsUpdateManyWithoutTeachersNestedInput
  }

  export type teachersUncheckedUpdateWithoutTeachers_jobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    degree?: Enumteachers_degreeFieldUpdateOperationsInput | $Enums.teachers_degree
    classrooms?: classroomsUncheckedUpdateManyWithoutTeachersNestedInput
    learning_programs_learning_programs_advisorToteachers?: learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisorToteachersNestedInput
    learning_programs_learning_programs_advisor_assistantToteachers?: learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersNestedInput
    students?: studentsUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type departmentUpsertWithoutTeachers_jobsInput = {
    update: XOR<departmentUpdateWithoutTeachers_jobsInput, departmentUncheckedUpdateWithoutTeachers_jobsInput>
    create: XOR<departmentCreateWithoutTeachers_jobsInput, departmentUncheckedCreateWithoutTeachers_jobsInput>
    where?: departmentWhereInput
  }

  export type departmentUpdateToOneWithWhereWithoutTeachers_jobsInput = {
    where?: departmentWhereInput
    data: XOR<departmentUpdateWithoutTeachers_jobsInput, departmentUncheckedUpdateWithoutTeachers_jobsInput>
  }

  export type departmentUpdateWithoutTeachers_jobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    depart_code?: StringFieldUpdateOperationsInput | string
    learning_programs?: learning_programsUpdateManyWithoutDepartmentNestedInput
    specialization?: specializationUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateWithoutTeachers_jobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    depart_code?: StringFieldUpdateOperationsInput | string
    learning_programs?: learning_programsUncheckedUpdateManyWithoutDepartmentNestedInput
    specialization?: specializationUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type resultsCreateManyClassroomsInput = {
    id?: number
    student_id: number
    st_status: $Enums.results_st_status
  }

  export type resultsUpdateWithoutClassroomsInput = {
    st_status?: Enumresults_st_statusFieldUpdateOperationsInput | $Enums.results_st_status
    students?: studentsUpdateOneRequiredWithoutResultsNestedInput
  }

  export type resultsUncheckedUpdateWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    st_status?: Enumresults_st_statusFieldUpdateOperationsInput | $Enums.results_st_status
  }

  export type resultsUncheckedUpdateManyWithoutClassroomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    st_status?: Enumresults_st_statusFieldUpdateOperationsInput | $Enums.results_st_status
  }

  export type subjectsCreateManyDegree_planInput = {
    id?: number
    name: string
    subject_code: string
    hours_id?: number | null
    exams_id?: number | null
    require_id?: number | null
  }

  export type subjectsUpdateWithoutDegree_planInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    classrooms?: classroomsUpdateManyWithoutSubjectsNestedInput
    hour_plan?: hour_planUpdateOneWithoutSubjectsNestedInput
    exam_plan?: exam_planUpdateOneWithoutSubjectsNestedInput
    program_requirements?: program_requirementsUpdateOneWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateWithoutDegree_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    hours_id?: NullableIntFieldUpdateOperationsInput | number | null
    exams_id?: NullableIntFieldUpdateOperationsInput | number | null
    require_id?: NullableIntFieldUpdateOperationsInput | number | null
    classrooms?: classroomsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateManyWithoutDegree_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    hours_id?: NullableIntFieldUpdateOperationsInput | number | null
    exams_id?: NullableIntFieldUpdateOperationsInput | number | null
    require_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type learning_programsCreateManyDepartmentInput = {
    id?: number
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    advisor?: number | null
    advisor_assistant?: number | null
  }

  export type specializationCreateManyDepartmentInput = {
    id?: number
    name: string
  }

  export type teachers_jobsCreateManyDepartmentInput = {
    id?: number
    jobs: string
    teacher_id: number
  }

  export type learning_programsUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    teachers_learning_programs_advisorToteachers?: teachersUpdateOneWithoutLearning_programs_learning_programs_advisorToteachersNestedInput
    teachers_learning_programs_advisor_assistantToteachers?: teachersUpdateOneWithoutLearning_programs_learning_programs_advisor_assistantToteachersNestedInput
    program_requirements?: program_requirementsUpdateManyWithoutLearning_programsNestedInput
  }

  export type learning_programsUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
    advisor_assistant?: NullableIntFieldUpdateOperationsInput | number | null
    program_requirements?: program_requirementsUncheckedUpdateManyWithoutLearning_programsNestedInput
  }

  export type learning_programsUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
    advisor_assistant?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type specializationUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    students?: studentsUpdateManyWithoutSpecializationNestedInput
  }

  export type specializationUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    students?: studentsUncheckedUpdateManyWithoutSpecializationNestedInput
  }

  export type specializationUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type teachers_jobsUpdateWithoutDepartmentInput = {
    jobs?: StringFieldUpdateOperationsInput | string
    teachers?: teachersUpdateOneRequiredWithoutTeachers_jobsNestedInput
  }

  export type teachers_jobsUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobs?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type teachers_jobsUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobs?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type classroomsCreateManyDuration_plans_classrooms_duration_plansToduration_plansInput = {
    id?: number
    subject_id: number
    teacher_id?: number | null
  }

  export type classroomsUpdateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    subjects?: subjectsUpdateOneRequiredWithoutClassroomsNestedInput
    teachers?: teachersUpdateOneWithoutClassroomsNestedInput
    results?: resultsUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: NullableIntFieldUpdateOperationsInput | number | null
    results?: resultsUncheckedUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateManyWithoutDuration_plans_classrooms_duration_plansToduration_plansInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type subjectsCreateManyExam_planInput = {
    id?: number
    name: string
    subject_code: string
    hours_id?: number | null
    degrees_id?: number | null
    require_id?: number | null
  }

  export type subjectsUpdateWithoutExam_planInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    classrooms?: classroomsUpdateManyWithoutSubjectsNestedInput
    hour_plan?: hour_planUpdateOneWithoutSubjectsNestedInput
    degree_plan?: degree_planUpdateOneWithoutSubjectsNestedInput
    program_requirements?: program_requirementsUpdateOneWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateWithoutExam_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    hours_id?: NullableIntFieldUpdateOperationsInput | number | null
    degrees_id?: NullableIntFieldUpdateOperationsInput | number | null
    require_id?: NullableIntFieldUpdateOperationsInput | number | null
    classrooms?: classroomsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateManyWithoutExam_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    hours_id?: NullableIntFieldUpdateOperationsInput | number | null
    degrees_id?: NullableIntFieldUpdateOperationsInput | number | null
    require_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type subjectsCreateManyHour_planInput = {
    id?: number
    name: string
    subject_code: string
    exams_id?: number | null
    degrees_id?: number | null
    require_id?: number | null
  }

  export type subjectsUpdateWithoutHour_planInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    classrooms?: classroomsUpdateManyWithoutSubjectsNestedInput
    exam_plan?: exam_planUpdateOneWithoutSubjectsNestedInput
    degree_plan?: degree_planUpdateOneWithoutSubjectsNestedInput
    program_requirements?: program_requirementsUpdateOneWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateWithoutHour_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    exams_id?: NullableIntFieldUpdateOperationsInput | number | null
    degrees_id?: NullableIntFieldUpdateOperationsInput | number | null
    require_id?: NullableIntFieldUpdateOperationsInput | number | null
    classrooms?: classroomsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateManyWithoutHour_planInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    exams_id?: NullableIntFieldUpdateOperationsInput | number | null
    degrees_id?: NullableIntFieldUpdateOperationsInput | number | null
    require_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type program_requirementsCreateManyLearning_programsInput = {
    id?: number
    name: string
    credit_hour?: number
    type: $Enums.program_requirements_type
    require_code: string
  }

  export type program_requirementsUpdateWithoutLearning_programsInput = {
    name?: StringFieldUpdateOperationsInput | string
    credit_hour?: IntFieldUpdateOperationsInput | number
    type?: Enumprogram_requirements_typeFieldUpdateOperationsInput | $Enums.program_requirements_type
    require_code?: StringFieldUpdateOperationsInput | string
    subjects?: subjectsUpdateManyWithoutProgram_requirementsNestedInput
  }

  export type program_requirementsUncheckedUpdateWithoutLearning_programsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credit_hour?: IntFieldUpdateOperationsInput | number
    type?: Enumprogram_requirements_typeFieldUpdateOperationsInput | $Enums.program_requirements_type
    require_code?: StringFieldUpdateOperationsInput | string
    subjects?: subjectsUncheckedUpdateManyWithoutProgram_requirementsNestedInput
  }

  export type program_requirementsUncheckedUpdateManyWithoutLearning_programsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    credit_hour?: IntFieldUpdateOperationsInput | number
    type?: Enumprogram_requirements_typeFieldUpdateOperationsInput | $Enums.program_requirements_type
    require_code?: StringFieldUpdateOperationsInput | string
  }

  export type subjectsCreateManyProgram_requirementsInput = {
    id?: number
    name: string
    subject_code: string
    hours_id?: number | null
    exams_id?: number | null
    degrees_id?: number | null
  }

  export type subjectsUpdateWithoutProgram_requirementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    classrooms?: classroomsUpdateManyWithoutSubjectsNestedInput
    hour_plan?: hour_planUpdateOneWithoutSubjectsNestedInput
    exam_plan?: exam_planUpdateOneWithoutSubjectsNestedInput
    degree_plan?: degree_planUpdateOneWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateWithoutProgram_requirementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    hours_id?: NullableIntFieldUpdateOperationsInput | number | null
    exams_id?: NullableIntFieldUpdateOperationsInput | number | null
    degrees_id?: NullableIntFieldUpdateOperationsInput | number | null
    classrooms?: classroomsUncheckedUpdateManyWithoutSubjectsNestedInput
  }

  export type subjectsUncheckedUpdateManyWithoutProgram_requirementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_code?: StringFieldUpdateOperationsInput | string
    hours_id?: NullableIntFieldUpdateOperationsInput | number | null
    exams_id?: NullableIntFieldUpdateOperationsInput | number | null
    degrees_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type studentsCreateManySpecializationInput = {
    id?: number
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    advisor?: number | null
  }

  export type studentsUpdateWithoutSpecializationInput = {
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    results?: resultsUpdateManyWithoutStudentsNestedInput
    teachers?: teachersUpdateOneWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutSpecializationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
    results?: resultsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateManyWithoutSpecializationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type resultsCreateManyStudentsInput = {
    id?: number
    classroom_id: number
    st_status: $Enums.results_st_status
  }

  export type resultsUpdateWithoutStudentsInput = {
    st_status?: Enumresults_st_statusFieldUpdateOperationsInput | $Enums.results_st_status
    classrooms?: classroomsUpdateOneRequiredWithoutResultsNestedInput
  }

  export type resultsUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classroom_id?: IntFieldUpdateOperationsInput | number
    st_status?: Enumresults_st_statusFieldUpdateOperationsInput | $Enums.results_st_status
  }

  export type resultsUncheckedUpdateManyWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    classroom_id?: IntFieldUpdateOperationsInput | number
    st_status?: Enumresults_st_statusFieldUpdateOperationsInput | $Enums.results_st_status
  }

  export type classroomsCreateManySubjectsInput = {
    id?: number
    duration_plans: number
    teacher_id?: number | null
  }

  export type classroomsUpdateWithoutSubjectsInput = {
    duration_plans_classrooms_duration_plansToduration_plans?: duration_plansUpdateOneRequiredWithoutClassrooms_classrooms_duration_plansToduration_plansNestedInput
    teachers?: teachersUpdateOneWithoutClassroomsNestedInput
    results?: resultsUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    duration_plans?: IntFieldUpdateOperationsInput | number
    teacher_id?: NullableIntFieldUpdateOperationsInput | number | null
    results?: resultsUncheckedUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateManyWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    duration_plans?: IntFieldUpdateOperationsInput | number
    teacher_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type classroomsCreateManyTeachersInput = {
    id?: number
    duration_plans: number
    subject_id: number
  }

  export type learning_programsCreateManyTeachers_learning_programs_advisorToteachersInput = {
    id?: number
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    depart_id: number
    advisor_assistant?: number | null
  }

  export type learning_programsCreateManyTeachers_learning_programs_advisor_assistantToteachersInput = {
    id?: number
    name: string
    subject_hours?: number
    paper_hours?: number
    program_code: string
    depart_id: number
    advisor?: number | null
  }

  export type studentsCreateManyTeachersInput = {
    id?: number
    name: string
    registered_at?: Date | string | null
    student_code: string
    national_n?: string | null
    phone?: string | null
    nation_phone?: string | null
    specialization_id: number
  }

  export type teachers_jobsCreateManyTeachersInput = {
    id?: number
    jobs: string
    depart_id: number
  }

  export type classroomsUpdateWithoutTeachersInput = {
    duration_plans_classrooms_duration_plansToduration_plans?: duration_plansUpdateOneRequiredWithoutClassrooms_classrooms_duration_plansToduration_plansNestedInput
    subjects?: subjectsUpdateOneRequiredWithoutClassroomsNestedInput
    results?: resultsUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    duration_plans?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    results?: resultsUncheckedUpdateManyWithoutClassroomsNestedInput
  }

  export type classroomsUncheckedUpdateManyWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    duration_plans?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type learning_programsUpdateWithoutTeachers_learning_programs_advisorToteachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutLearning_programsNestedInput
    teachers_learning_programs_advisor_assistantToteachers?: teachersUpdateOneWithoutLearning_programs_learning_programs_advisor_assistantToteachersNestedInput
    program_requirements?: program_requirementsUpdateManyWithoutLearning_programsNestedInput
  }

  export type learning_programsUncheckedUpdateWithoutTeachers_learning_programs_advisorToteachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
    advisor_assistant?: NullableIntFieldUpdateOperationsInput | number | null
    program_requirements?: program_requirementsUncheckedUpdateManyWithoutLearning_programsNestedInput
  }

  export type learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisorToteachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
    advisor_assistant?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type learning_programsUpdateWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutLearning_programsNestedInput
    teachers_learning_programs_advisorToteachers?: teachersUpdateOneWithoutLearning_programs_learning_programs_advisorToteachersNestedInput
    program_requirements?: program_requirementsUpdateManyWithoutLearning_programsNestedInput
  }

  export type learning_programsUncheckedUpdateWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
    program_requirements?: program_requirementsUncheckedUpdateManyWithoutLearning_programsNestedInput
  }

  export type learning_programsUncheckedUpdateManyWithoutTeachers_learning_programs_advisor_assistantToteachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject_hours?: IntFieldUpdateOperationsInput | number
    paper_hours?: IntFieldUpdateOperationsInput | number
    program_code?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
    advisor?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type studentsUpdateWithoutTeachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    results?: resultsUpdateManyWithoutStudentsNestedInput
    specialization?: specializationUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization_id?: IntFieldUpdateOperationsInput | number
    results?: resultsUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type studentsUncheckedUpdateManyWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student_code?: StringFieldUpdateOperationsInput | string
    national_n?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    nation_phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialization_id?: IntFieldUpdateOperationsInput | number
  }

  export type teachers_jobsUpdateWithoutTeachersInput = {
    jobs?: StringFieldUpdateOperationsInput | string
    department?: departmentUpdateOneRequiredWithoutTeachers_jobsNestedInput
  }

  export type teachers_jobsUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobs?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
  }

  export type teachers_jobsUncheckedUpdateManyWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobs?: StringFieldUpdateOperationsInput | string
    depart_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}