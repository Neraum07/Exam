import "./style.scss"
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";

function Nav(props){
    <nav>
        <div className="left">
            <a href="mailto:WebMaster@gmail.com">
                <AiOutlineMail />
                WebMaster@gmail.com
            </a>
            <a href="tel:+998334747477">
                <BsTelephoneOutbound />
                +99833 4747477
            </a>
        </div>
        <div className="right">
            <NavLinkDrp items={state.languages} activateFn={activateLang} />
            <NavLinkDrp items={state.currencies} activateFn={activateCurrency} />

            <Link to="login">{t("navigation.login")} <CgProfile /></Link>
            <Link to="wishlist">{t("navigation.wishlist")} <CiHeart /></Link>
            <Link to="cart"><MdOutlineShoppingCart /></Link>
        </div>
    </nav>
}