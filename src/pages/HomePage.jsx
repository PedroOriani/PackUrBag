import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage (props) {

    const {page, setPage, name} = props

    console.log(page)

    setPage('My Trips')

    return(
        <>
            <Header name={name}/>
            <h1>HomePage</h1>
            <Footer page = {page}/>
        </>
    )
}