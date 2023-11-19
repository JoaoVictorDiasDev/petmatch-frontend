import React , { useEffect, useState } from "react";

export function useFetch(url){
      const[data, setData] = useState([]);

      useEffect(() => {
        fetch('http://localhost:8080/findPets')
        .then(response => response.json())
        .then(data => {setData(data)})
      }, [])

      return data;
}