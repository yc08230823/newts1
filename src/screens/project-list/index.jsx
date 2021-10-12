import React, { useState, useEffect } from 'react';
import qs from 'qs';
import { SearchPanel } from './search-panel';
import { List } from './list';
import { cleanObject, useMount, useDebounce } from './../../utils';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListenScreen = () => {

  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const debouncedParam = useDebounce(param,1000)
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])

  // useDebounce = (value, delay)
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debouncedParam])

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}