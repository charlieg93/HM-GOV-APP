import { motion } from 'framer-motion'

const ContactModal = ({ mp, setSelectedContact }) => {
  const closeModal = event => {
    if(event.keyCode === 27 || event.currentTarget === event.target) {
      setSelectedContact(null)
    }
  }

  window.addEventListener('keydown', event => closeModal(event))

  return (
    <div className={"fixed top-0 h-screen w-screen bg-black bg-opacity-10"}>
      <div className={"flex h-screen"} onClick={event => closeModal(event)}>
        <motion.button animate={{ scale: [0.7, 1.5, 1] }} exit={{ scale: 0 }} className={"m-auto bg-white rounded-lg shadow-lg px-14 pt-5 pb-10"}>
          <p className={"text-center mb-5 text-gray-700 font-semibold text-xl"}>
            {mp.value.name}
          </p>
          <img alt="Member of Parliment" className = {"w-auto h-auto rounded-lg mx-auto m-5"} src={mp.value.postHolders[0].member.value.thumbnailUrl}/>
          <div className={"grid grid-cols-2 text-gray-600 gap-x-0 gap-y-5"}>
            <p className="font-medium">Department:</p>
            <a href= {mp.value.governmentDepartments[0].url} target="_blank" rel="noreferrer"> {mp.value.governmentDepartments[0].name}</a>
          </div>
          <div className={"grid grid-cols-2 text-gray-600 gap-x-0"}>
            <p className="font-medium">Constituency:</p>
            <p> {mp.value.postHolders[0].member.value.latestHouseMembership.membershipFrom}</p>
          </div>
        </motion.button>
      </div>
    </div>
  )
}

export default ContactModal