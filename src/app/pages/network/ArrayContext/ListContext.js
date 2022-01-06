import React, {useState, createContext} from 'react'

export const ListContext = createContext()

export const ListProvider = (props) => {
  const [lists, setLists] = useState({
    name: 'bamzz',
    id: 1,
    rank: 'manager',
    status: 'active',
    children: [
      {
        name: 'josuu',
        id: 3,
        rank: 'manager',
        status: 'active',
        children: [
          {
            name: 'bamzz',
            id: 4,
            rank: 'manager',
            status: 'active',
            children: [],
          },
          {
            name: 'bamzz',
            id: 5,
            rank: 'manager',
            status: 'active',
            children: [
              {
                name: 'ayomzz',
                id: 6,
                rank: 'manager',
                status: 'active',
                children: [],
              },
              {
                name: 'bamzz',
                id: 7,
                rank: 'manager',
                status: 'active',
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: 'bamzz',
        id: 2,
        rank: 'manager',
        status: 'active',
        children: [
          {
            name: 'bamzz',
            id: 8,
            rank: 'manager',
            status: 'active',
            children: [],
          },
          {
            name: 'bamzz',
            id: 9,
            rank: 'manager',
            status: 'active',
            children: [],
          },
        ],
      },
    ],
  })
  return <ListContext.Provider value={[lists, setLists]}>{props.children}</ListContext.Provider>
}
