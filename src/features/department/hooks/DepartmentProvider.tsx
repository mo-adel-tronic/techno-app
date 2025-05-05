"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { Department } from '../types';
// import getDepartment from '../usecases/fetch';

const DepartmentContext = createContext<{ department: Department | null, setDepartment: Dispatch<SetStateAction<Department | null>> } | null>(null);

const DepartmentProvider = ({ children, id } : {
    children: React.ReactNode,
    id: number
  }) => {
    console.log(id)
  const [data, setData] = useState<Department|null>(null);
  //   const getDepartmentMethod = async () => {
  //       const dep = await getDepartment(id)
  //       setData(dep)
  //   }
  // useEffect(() => {
  //   getDepartmentMethod() 
  // }, [])

  return (
    <DepartmentContext.Provider value={{ department: data, setDepartment: setData }}>
      {children}
    </DepartmentContext.Provider>
  );
};
export default DepartmentProvider
export const useDepartment = () => useContext(DepartmentContext);