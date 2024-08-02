// mcbc-react\src\components\common\LHP_logo.jsx
import LHPLogoImage from '../../assets/LHPTransparentLogo.svg'
import '../../styles/components/LHP_logo.css'

const LHP_logo = () => {
  return (
    <div className="logo-div">
      <div className="image-container">
        <img src={LHPLogoImage} alt="Logo" className="logo" />
      </div>
      <div className="title-container">
        <h1>Lighthouse Prayer Ministry</h1>
        <p>A Beacon in the Dark</p>
      </div>
    </div>
  )
}

export default LHP_logo
