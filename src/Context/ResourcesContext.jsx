import {useLocalStorage} from '../hooks/useLocalStorage';
import {createContext,useContext, useState, useEffect} from 'react';

const ResourcesContext = createContext();

export const useResources = () => useContext(ResourcesContext);
export const ResourcesProvider = ({children}) => {
  const [data, setData] = useLocalStorage('comments', []);
  return (
    <ResourcesContext.Provider value={{data, setData}}>
      {children}
    </ResourcesContext.Provider>
  );
};
export default ResourcesContext;