import DynamicComponent from './DynamicComponent'

const Page = ({ blok }) => {
  return (
    <main>
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  )
}

export default Page
