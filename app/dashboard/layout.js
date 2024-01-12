import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";




export default function RootLayout({
  children
}) {
  return (
    
  
           <div className='flex bg-slate-600'>
         
      
        <SidebarContainer/>
     
       
       <div className='lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen'>
           <Navbar/>
         <main className='p-8 h-full bg-slate-900 text-slate-50 mt-16'>
                 {children}
           </main>
       </div>
    </div>
        
      
    
    
  )
}












  