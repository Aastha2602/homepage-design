import './intro.css';
import img1 from "../../asset/img1.jfif";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Welcome to </h2>
                    <h1 className="i-name">Incentive Coders</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item"> web-developer</div>
                            <div className="i-title-item"> designer</div>
                            <div className="i-title-item"> writer</div>
                            <div className="i-title-item"> content-creater</div>
                            <div className="i-title-item"> photographer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        short intro about incentive coders
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
            
            </div>
        </div>
    )
}

export default Intro
