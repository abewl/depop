import Layout from './Layout'

const Home = ({ user }) => {
  return (
    <>
      <H1>Welcome</H1>
      <p>Hello {user.name}, welcome to your first Inertia app!</p>
    </>
  )
}

Home.layout = page => <Layout children={page} title="Welcome" />

export default Home
