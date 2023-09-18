import Events from "./components/Events";
import FollowSuggestion from "./components/FollowSuggestion";
import Footer from "./components/Footer";
import GroupVideoCall from "./components/GroupVideoCall";
import MainHeader from "./components/MainHeader";
import OnlineContacts from "./components/OnlineContacts";
import Stories from "./components/Stories";


export default function Home() {
  return (
    <main className='flex  bg-neutral-100'>
      <div className="flex-[1.85]  h-[92vh]  flex flex-col py-5 items-center gap-6">
        <GroupVideoCall />
        <OnlineContacts />
      </div>
      <div className="flex-[5]  h-[92vh] flex flex-col py-5 items-center gap-6">
        <MainHeader />
      </div>
      <div className="flex-[2.5]  h-[92vh] flex flex-col py-5 items-center gap-6 overflow-y-hidden">
        <Stories />
        <Events />
        <FollowSuggestion />
        <Footer />
      </div>
    </main>
  )
}
