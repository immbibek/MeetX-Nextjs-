"use client"

import { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
const MeetingTypeList = () => {
    const router=useRouter();

    const [meetingState,setMeetingState]=useState<'isScheduleMeeting' | 'isjoiningMeeting' | 'isInstantMeeting'| undefined>()
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
          {/* BOX 1 */}
        <HomeCard
          img="/icons/add-meeting.svg"
          title="New Meeting"
          description="Start an instant meeting"
          handleClick={()=>setMeetingState('isjoiningMeeting')}
          className="bg-orange-1"
        />
        <HomeCard
          img="/icons/schedule.svg"
          title="Schedule Meeting"
          description="Plan your meeting"
          handleClick={()=>setMeetingState('isScheduleMeeting')}
           className="bg-blue-1"
        />
        <HomeCard
          img="/icons/recordings.svg"
          title="View Recordings"
          description="Check out Your recordings"
          handleClick={()=>setMeetingState('isjoiningMeeting')}
           className="bg-purple-1"
        />
        <HomeCard
          img="/icons/join-meeting.svg"
          title="Join Meeting"
          description="Via Invitation link"
          handleClick={()=>setMeetingState('isjoiningMeeting')}
           className="bg-yellow-1"
        />
  
        

    </section>
  )
}

export default MeetingTypeList