import AppFooter from './components/appFooter';
import MembersCard from './components/membersCard';
import AppHeader from './components/appHeader';
import useFetch from 'react-fetch-hook';
import { useState, useEffect } from 'react';
import React from 'react';
import ContactModal from './components/membersProfile';
import { AnimatePresence } from 'framer-motion'




const App = () => {
  const url = 'https://members-api.parliament.uk/api/Posts/GovernmentPosts'
  const { data, error } = useFetch(url)
  const [membersList, setMembersList] = useState()
  const [filterQuery, setfilterQuery] = useState()
  const [selectedContact, setSelectedContact] = useState(null)

  useEffect(() => {
    if(!filterQuery){
      setMembersList(data) 
      } else {
          const queryString = filterQuery.toLowerCase()
          const filteredData = data.filter(mp => {
            const fullName = `${mp.value.hansardName} ${mp.value.postHolders[0].member.value.nameFullTitle}`

            if (queryString.length === 1 ){
              const firstLetter = fullName.charAt(0).toLowerCase()
              return firstLetter === queryString
            }
            else {
              return fullName.toLowerCase().includes(queryString)
            }
          })
          setMembersList(filteredData)
        }
      },[data, filterQuery])

  return (
    <div>
      <AppHeader />

    <div className ={"sticky top-0"}>
      <form className={"z-50 px-4 sm:px-6 lg:px-16 shadow"}>
          <div className={"max-w-10xl mx-auto flex"}>
              <label htmlFor ="search input" className={" flex-now pr-3 flex items-center"}>
              <svg xmlns="http://www.w3.org/2000/svg" className={"h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              </label>
                <input
                    type={"text"}
                    placeholder={"Search for a Government Minister "}
                    onChange = {event => setfilterQuery(event.target.value)}
                    className={"font-mono flex-auto py-6 lg:text-3xl md:text-2xl sm:text-xl leading-6 text-gray-500 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400"}
                    />
              </div>
          </form>
    </div>
    <div className={"grid sm:grid-cols-2 md:grid-cols-3 gap-10 p-20 content-center bg-gray-200"}>
    <MembersCard membersList = {membersList} setSelectedContact={setSelectedContact}/>
    {error && <h1 className={"font-mono text-center text-gray-900"}>Error fetching data...</h1>}
        {membersList?.length < 1 && <h1 className={"font-mono text-center text-gray-900"}>Keep typing or try again...</h1>}
    </div>
    <AnimatePresence>
        {selectedContact &&
          <ContactModal
            mp = {selectedContact}
            setSelectedContact = {setSelectedContact}
          />
        }
      </AnimatePresence>

    <AppFooter />
    </div> 
  );
}

export default App;
