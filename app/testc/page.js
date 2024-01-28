import Button from '@/components/base/Button'
import ButtonOutline from '@/components/base/ButtonOutline'
import Skill from '@/components/base/Skill'
import Input from '@/components/base/Input'
import Nav from '@/components/module/Navbar/navBeforeLogin'
import Nav2 from '@/components/module/Navbar/navAfterLogin'
import Footer from '@/components/module/Footer'
import Section1 from '@/components/template/Landing/section1'


export default function Home() {
  return (
    <>
      <Section1 />
      {/* <Footer/> */}
      {/* <Nav2/> */}
      
      {/* <h1>Hii</h1>
      <Button className="w-20 h-8">Login</Button>
      <ButtonOutline className="w-20 h-8">Register</ButtonOutline>
      <Skill>Javascript</Skill>
      <br/>
      <div className='ms-10 w-96'>
        <Input placeholder="Masukan nama lengkap">Name</Input>
      </div>

      <br/> */}
      {/* <div className='ms-10 w-96'>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small input</label>
        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div> */}
    </>
  );
}
