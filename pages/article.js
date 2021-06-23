import { Meta } from '../components/Meta'
import { Sidebar } from '../components/Sidebar'
import { Nav } from '../components/Nav'

export default function Article() {
  return (
    <>
        <Meta title="Article Reader" description="Read articles, your way" />
        <Nav />
        <Sidebar active="Article" />
    </>
  )
}
