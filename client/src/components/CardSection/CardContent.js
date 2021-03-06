import { FaPodcast, FaLaughSquint, FaPatreon, FaTshirt } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const CardContent = [
        // Home Cards
        {
            id: 0,
            Icon: <FaPodcast/>,
            Header: 'Podcast',
            Paragraph: "Besides making TikToks I've began to love going live. So lets make it regular with a podcast. I will schedule episodes and be featuring some big name TikTokers and rappers!",
            Button: 'Learn More',
            Link: 'https://anchor.fm/griffinjoshs'

        },
        {
            id: 1,
            Icon: <SiTiktok/>,
            Header: 'TikTok Promos',
            Paragraph: "Want Me to Promote Your Brand, Music, or just want A Shoutout? Click Here to apply or learn more! If you have any questions or unique needs, make sure to contact me!",
            Button: 'Learn More',
            Link: 'https://quiktok.io/influencer.php?influencer=942612495955'
        },
        {
            id: 2,
            Icon: <FaTshirt/>,
            Header: 'Shop',
            Paragraph: "I know Right! Pretty Typical A Merch Shop, but not just any merch shop! This is the Official Griff Gang Merch Shop! Every Purchase triggers a snowflake! So make sure to Find Something You Like!",
            Button: 'Learn More',
            Link: 'https://griffinjoshs.bigcartel.com/'
        }
]

export default CardContent