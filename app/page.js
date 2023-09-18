import GroupVideoCall from "./components/GroupVideoCall";
import OnlineContacts from "./components/OnlineContacts";
import Stories from "./components/Stories";


export default function Home() {
  return (
    <main className='flex  bg-neutral-100'>
      <div className="flex-[1.85]  h-[92vh]  flex flex-col py-5 items-center gap-6">
        <GroupVideoCall />
        <OnlineContacts />
      </div>
      <div className="flex-[5] bg-red-600 h-[92vh]"></div>
      <div className="flex-[2.5]  h-[92vh] flex flex-col py-5 items-center gap-6">
        <Stories />
      </div>
    </main>
  )
}
