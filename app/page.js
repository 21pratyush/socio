"use client"
import CreatePost from "./components/CreatePost";
import Events from "./components/Events";
import FollowSuggestion from "./components/FollowSuggestion";
import Footer from "./components/Footer";
import GroupVideoCall from "./components/GroupVideoCall";
import MainHeader from "./components/MainHeader";
import OnlineContacts from "./components/OnlineContacts";
import Post from "./components/Post";
import Stories from "./components/Stories";
import { Global } from "./context/GlobalContext";


export default function Home() {
  const { opencreatepost } = Global()
  return (
    <div className="relative">
      <main className='flex  bg-neutral-100'>
        <div className="flex-[1.85]  h-[92vh]  flex flex-col py-5 items-center gap-6">
          <GroupVideoCall />
          <OnlineContacts />
        </div>
        <div className="flex-[5]  h-[92vh] flex flex-col py-5 items-center gap-6 overflow-hidden">
          <MainHeader />
          <Post />
        </div>
        <div className="flex-[2.5]  h-[92vh] flex flex-col py-5 items-center gap-6 overflow-y-hidden">
          <Stories />
          <Events />
          <FollowSuggestion />
          <Footer />
        </div>
      </main>
      {
        opencreatepost && (<div className="absolute top-0"><CreatePost /></div>)
      }
    </div>
  )
}
