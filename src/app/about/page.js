import Link from "next/link"

const about = () => {
    return(
        <div>
            <h1>About Page</h1><br></br>
            <Link href="/" >Go to Home Page</Link>
            <br></br><br></br>
            <Link href="/about/aboutcollege" >Go to College Page</Link>
            <br></br><br></br>
            <Link href="/about/aboutstudent" >Go to Student Page</Link>
        </div>
    )
}
export default about