import Header from './Header'
import Footer from './Footer'
export default function Layout({children}){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto w-full px-4 md:px-0 flex-1">{children}</main>
      <Footer />
    </div>
  )
}