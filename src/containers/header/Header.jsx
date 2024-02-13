import people from '../../assets/Group 81.png'
import ai from '../../assets/HD-wallpaper-thrasher-skateboarding-skating.jpg'
import './header.css'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Welcome to the Skateboarding Community explore the exciting world of skateboarding!</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header