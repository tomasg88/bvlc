import React from "react"
import BackgroundImage from "../components/backgroundImage"
import Layout from "../components/layout"
import { SRLWrapper } from "simple-react-lightbox"
export default function Galeria({}) {
  const options = {
    settings: {
      overlayColor: "rgb(255, 255, 255)",
    },
    buttons: {
      backgroundColor: "#1b5245",
      iconColor: "rgba(126, 172, 139, 0.8)",
    },
    caption: {
      captionColor: "#a6cfa5",
      captionTextTransform: "uppercase",
    },
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="relative py-64 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-light">
            Galeria fotografica
          </h1>
          <BackgroundImage image="https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/145919140_2818111668437412_458251714749266980_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=_Uh04GCrRwIAX9lA8eJ&_nc_ht=scontent.faep8-2.fna&oh=61058e52c7a6fb69343074be16bcb93f&oe=606826B9" />
        </div>
        <SRLWrapper options={options}>
          <div className="grid grid-cols-3 gap-2 mt-2 bg-white">
            <img className="cursor-pointer hover:opacity-80" src="https://cdn.sanity.io/images/3nve3m96/production/8ebbb78c2a0aa78d41360680335d8e7f16761ed3-1040x780.jpg?rect=0,52,1040,676&w=2000&h=1300&fit=max&auto=format" />
            <img className="cursor-pointer hover:opacity-80" src="https://cdn.sanity.io/images/3nve3m96/production/5eef5dc90394b91c006f2571e180f2f8281e6050-960x720.jpg?rect=0,48,960,624&w=2000&h=1300&fit=max&auto=format" />
            <img className="cursor-pointer hover:opacity-80" src="https://cdn.sanity.io/images/3nve3m96/production/bbe2cddd7797aee1b5fecc401c42e4944fa30827-960x1280.jpg?rect=0,328,960,624&w=2000&h=1300&fit=max&auto=format" />
          </div>
        </SRLWrapper>
      </div>
    </Layout>
  )
}
