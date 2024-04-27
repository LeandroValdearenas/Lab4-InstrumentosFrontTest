import { useEffect, useRef, useState } from "react"

export default function MapComponent(){
        const [map, setMap] = useState<google.maps.Map>()
        const ref = useRef<HTMLDivElement>()
        useEffect(()=>{
          if(ref.current && !map){
            setMap(new window.google.maps.Map(ref.current, {
              center: {lat: -32.886279, lng:-68.838367},
              zoom: 16,
            }))
          }
        }, [map])
        return (
          <>
            <div ref={ref as any} style={{height: "100%", width: "1200px", minHeight:"700px"}} ></div>
          </>
        )
      }