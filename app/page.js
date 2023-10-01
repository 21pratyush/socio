"use client"
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import Suggestions from "./components/Suggestions";
import { Global } from "./context/GlobalContext";


export default function Home() {
  const { opencreatepost } = Global()
  return (
    <div className="relative">
      <main className='flex'>
        <div className=''>
          <Sidebar />
        </div>
        <div className="flex-[4]  h-[100vh] flex flex-col pt-5 items-center gap-6 overflow-hidden">
          <Post />
        </div>
        <div className="flex-[2.5]  h-[92vh] flex flex-col py-5 items-center gap-6 overflow-y-hidden">
          <Suggestions />
        </div>
      </main>
      {
        opencreatepost && (<div className="absolute top-0"><CreatePost /></div>)
      }
    </div>
  )
}
