import React, {useContext} from 'react'
import{Routes,Route,Navigate} from 'react-router-dom'
import { authRoutes, publikRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import {Context} from "../index";
const AppRouter = ()=>{
  const {user} = useContext(Context)
  console.log(user)
  return (
    <Routes>
        {user.istAuth && authRoutes.map(({path,Component})=> 
           <Route key={path} path={path} element={<Component/>} exact/>  )}
           {publikRoutes.map(({path,Component})=> 
           <Route key={path} path={path} element={<Component/>} exact/>  )}
           <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};
export default AppRouter