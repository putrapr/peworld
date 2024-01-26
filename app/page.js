import Button from '@/components/base/Button'
import ButtonOutline from '@/components/base/ButtonOutline'
import Skill from '@/components/base/Skill'

export default function Home() {
  return (
    <>
      <h1>Hii</h1>
      <Button className="w-20 h-8">Login</Button>
      <ButtonOutline className="w-20 h-8">Register</ButtonOutline>
      <Skill>Javascript</Skill>
    </>
  );
}
