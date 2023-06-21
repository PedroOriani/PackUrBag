import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage (props) {

    const {page, setPage} = props

    console.log(page)

    setPage('My Trips')

    return(
        <>
            <Header />
            <h1>HomePage</h1>
            <Footer page = {page}/>
        </>
    )
}