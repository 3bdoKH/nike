import {
  Hero,
  Footer,
  Services,
  Subscribe,
  SpecialOffer,
  SuperQuality,
  PopulerProducts,
  CustomerReviews,
} from './sections/index'
import Nav from './components/Nav'
const App = () => (
  <main className="relative">
    <Nav></Nav>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero></Hero>
    </section>
    <section className="padding">
      <PopulerProducts></PopulerProducts>
    </section>
    <section className="padding">
      <SuperQuality></SuperQuality>
    </section>
    <section className="padding-x py-10">
      <Services></Services>
    </section>
    <section className="padding">
      <SpecialOffer></SpecialOffer>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews></CustomerReviews>
    </section>
    <section className="padding-x py-16 sm:py-32 w-full">
      <Subscribe></Subscribe>
    </section>
    <section className="padding-t bg-black padding-x pb-8">
      <Footer></Footer>
    </section>
  </main>
)
export default App