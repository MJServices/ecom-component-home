import BrandDifferentiation from "./BrandDifferentiation"
import Hero from "./Hero"
import ProductOne from "./ProductOne"
import ProductTwo from "./ProductTwo"
import UserFeedback from "./UserFeedback"
const LandingPage = ()=>{
    return(
    <section>
        <Hero/>
        <BrandDifferentiation/>
        <ProductOne/>
        <ProductTwo/>
        <UserFeedback/>
    </section>
    )
}

export default LandingPage