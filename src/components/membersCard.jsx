import { motion } from 'framer-motion'

const MembersCard = ({ membersList, setSelectedContact }) => {

    return (
        <>
        {membersList?.map((mp, index)=> (
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: index/5 }}
                drag={false}
                dragElastic={1}
                dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
                className={"bg-white text-black h-auto rounded-lg shadow-md p-5"}
                key={index}
                onClick={() => setSelectedContact(mp)}
                >
                    <img alt="Member of Parliment" className = {"w-40 h-40 rounded-full mx-auto mt-7"} src={mp.value.postHolders[0].member.value.thumbnailUrl}/>
                    <figcaption className="text-center mt-5 mb-5">
                        <p className="text-gray-700 font-semibold text-xl mb-2 font-mono">
                        {mp.value.postHolders[0].member.value.nameFullTitle}
                        </p>
                        <p className="text-gray-500 font-mono">
                        {mp.value.hansardName}
                        </p>
                    </figcaption>
            </motion.button>

            
        ))

        }

        
        </>

    )
}

export default MembersCard
